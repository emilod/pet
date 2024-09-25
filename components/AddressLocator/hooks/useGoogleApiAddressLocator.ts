import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'

// import { normalizePlace } from 'src/ui/components/AddressLocator/utils/normalizePlace'

import { Address } from '../declarations/AddressLocator.types'
import { useGoogleMapLoader } from './useGoogleMapLoader'

const formatLabel = (str: string) => {
  const commaIndex = str.indexOf(',')
  if (commaIndex >= 0) {
    str = str.slice(0, commaIndex) + str.slice(commaIndex + 1)
  }

  return str
}

export const useGoogleApiAddressLocator = ({ handleAddressChange, availableRegions, defaultValue }) => {
  const { isLoaded } = useGoogleMapLoader()
  const [search, setSearch] = useState('')
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const clearRef = useRef<HTMLDivElement>(null)
  const deferredSearch = useDeferredValue(search)
  const [predictions, setPredictions] = useState([])
  const [autocompleteService, setAutoCompleteService] = useState<any>()
  const [placesService, setPlacesService] = useState<any>()

  const transformFromAddressComponents = (addressComponents): Address => {
    const address: Address = {
      street: [],
      region: '',
      regionCode: '',
      regionId: '',
      postcode: '',
      city: '',
      countryCode: '',
    }

    const getAddressComponent = (type) => addressComponents?.find((item) => item.types.includes(type)) || null

    const getShortName = (type) => getAddressComponent(type)?.short_name ?? ''
    const getLongName = (type) => getAddressComponent(type)?.long_name ?? ''

    const streetNumber = getShortName('street_number')
    const subpremise = getShortName('subpremise') ? `${getShortName('subpremise')}/` : ''
    const route = getLongName('route') ? getLongName('route') : ''

    address.street = [`${subpremise}${streetNumber} ${route}`]
    address.city = getLongName('locality')
    address.region = getLongName('administrative_area_level_1')
    address.regionCode = getShortName('administrative_area_level_1')
    address.regionId = availableRegions?.find((region) => region.code === address.regionCode)?.id ?? ''
    address.postcode = getLongName('postal_code')
    address.countryCode = getShortName('country')

    return address
  }

  const getPredictions = useCallback(
    (input) => {
      if (!input || !window?.google) {
        return
      }
      autocompleteService?.getPlacePredictions(
        { input, types: ['address'], componentRestrictions: { country: 'au' } },
        (predictions, status) => {
          if (status !== window?.google?.maps?.places?.PlacesServiceStatus?.OK) {
            console.error(`Error: ${status}`)
            return
          }

          setPredictions(
            predictions
              ?.map((prediction) => {
                return {
                  value: prediction.place_id,
                  label: formatLabel(prediction.description),
                }
              })
              ?.filter((prediction) => {
                const sentenceLower = prediction.label.toLowerCase()
                const inputArr = search.split(/[\/\s]+/)

                for (const word of inputArr) {
                  if (!sentenceLower.includes(word.toLowerCase())) {
                    return false
                  }
                }

                return true
              }),
          )
        },
      )
    },
    [autocompleteService, search],
  )

  const getPlaceDetails = async (placeId: string): Promise<Address> => {
    return new Promise((resolve, reject) => {
      if (!placesService) {
        reject()
        console.error('Error: PlacesService not initialized')
      }

      const request = {
        placeId,
      }

      placesService.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(place)
        } else {
          console.error(`Error: ${status}`)
          return null
        }
      })
    })
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const handleChange = (value: string) => {
    const selectedPrediction = predictions?.find((option) => option.value === value)

    setSelectedValue(selectedPrediction)

    getPlaceDetails(value)
      .then((place: any) => {
        const normalizedPlace = { address_components: [] }

        handleAddressChange?.(transformFromAddressComponents(normalizedPlace?.address_components ?? []))
      })
      .catch((err) => {
        console.error('Error: Could not get place details', err)
      })
  }

  // Initialize AutocompleteService
  useEffect(() => {
    if (!window.google?.maps) return

    setAutoCompleteService(new window.google.maps.places.AutocompleteService())
    setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')))
  }, [isLoaded])

  useEffect(() => {
    getPredictions(deferredSearch)
  }, [deferredSearch, getPredictions])

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue({ value: defaultValue, label: defaultValue })
      setPredictions((prevPredictions) => {
        return [
          {
            value: defaultValue,
            label: defaultValue,
          },
          ...prevPredictions,
        ]
      })
    }
  }, [defaultValue])

  const normalizedPredictions = useMemo(() => {
    return [...new Map(predictions.map((prediction) => [prediction.value, prediction])).values()]
  }, [predictions])

  return {
    search,
    predictions: normalizedPredictions,
    setPredictions,
    selectedValue,
    handleSearch,
    handleChange,
    clearRef,
  }
}

import { useLoadScript, LoadScriptProps } from '@react-google-maps/api'

const libraries: LoadScriptProps['libraries'] = ['places']

export const useGoogleMapLoader = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries,
  })
  return {
    isLoaded,
  }
}

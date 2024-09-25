import { CartAddressInput } from '@overdose/types'

export type Address = Omit<CartAddressInput, 'firstname' | 'lastname' | 'telephone'>

export type AddressLocatorProps = {
  idPrefix?: string
  handleAddressChange?: (address: Address) => void
  handleEnterManually?: () => void
  availableRegions?: {
    id: number
    code: string
    name: string
  }[]
  control?: any
  isRequired?: boolean
  notFoundContent?: string
  popupVisible?: boolean
  defaultValue?: string
  showAddressLocatorError?: boolean
}

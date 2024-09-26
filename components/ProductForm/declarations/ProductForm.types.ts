import type { Money } from '@/components/Price/declarations/Price.types'

type Maybe<T> = T | null

type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

type SwatchInterface = {
  /** Label */
  title?: Maybe<Scalars['String']>
}

type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue'
  /** Swatch */
  swatch?: Maybe<SwatchInterface>
  /** Label */
  title: Scalars['String']
  /** Option value */
  value: Scalars['String']
}

type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption'
  attributeCode?: Maybe<Scalars['String']>
  /** Attribute ID */
  attributeId: Scalars['ID']
  /** Label */
  title: Scalars['String']
  /** Option values */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>
  /** Help Text */
  helpText?: string | React.ReactNode
  /** Info text */
  infoText?: string
}

type ProductDetail = {
  id: string
  title: string | React.ReactNode
  panel: string | React.ReactNode
}
export interface ProductFormProps {
  title: string
  inWishlist?: boolean
  regularPrice: Money
  finalPrice: Money
  rating?: number
  reviewCount?: number
  onChangeQuantity?: (value: number) => void
  handleAddToCart?: () => void
  /**
   * Component classes override
   */
  theme?: Record<string, string>
  isAddingToCart?: boolean
  handleSetSelectedConfigurableOptions?: (option: { attributeCode: string; value: string }) => void
  configurableOptions?: ConfigurableProductOption[]
  productDetails?: ProductDetail[]
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}

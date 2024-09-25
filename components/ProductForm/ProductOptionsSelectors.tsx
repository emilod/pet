import { Image as ImageComponent } from '@overdose/components'
import React from 'react'

import {
  ProductOptionsSelectorDropdown,
  ProductOptionsSelectorImages,
  ProductOptionsSelectorSwatches,
  ProductOptionsSelectorTitles,
} from '..'

type MediaInterface = {
  altText?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

type Image = MediaInterface & {
  __typename?: 'Image'
  /** Image description for accessibility */
  altText?: Maybe<Scalars['String']>
  /** Image intrinsic height */
  height?: Maybe<Scalars['Int']>
  /** Unique ID */
  id: Scalars['ID']
  /** Image source URL */
  url?: Maybe<Scalars['String']>
  /** Image intrinsic width */
  width?: Maybe<Scalars['Int']>
}

type Video = MediaInterface & {
  __typename?: 'Video'
  /** Video description for accessibility */
  altText?: Maybe<Scalars['String']>
  /** Video intrinsic height */
  height?: Maybe<Scalars['Int']>
  /** Unique ID */
  id: Scalars['ID']
  /** Fallback or placeholder image */
  image?: Maybe<Image>
  /** Video source URL */
  url?: Maybe<Scalars['String']>
  /** Video intrinsic width */
  width?: Maybe<Scalars['Int']>
}

type Maybe<T> = T | null
type MediaItem = Image | Video

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

type MediaSwatch = SwatchInterface & {
  __typename?: 'MediaSwatch'
  /** Image or video */
  media?: Maybe<MediaItem>
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

export enum ProductOptionsSelectorType {
  Dropdown = 'dropdown',
  Image = 'image',
  Swatch = 'swatch',
  Titles = 'titles',
}

enum AttributeCodes {
  COLOR = 'color',
  SIZE = 'size',
}

const OptionAttributeSelectorMap = {
  [AttributeCodes.COLOR]: ProductOptionsSelectorType.Swatch,
  [AttributeCodes.SIZE]: ProductOptionsSelectorType.Dropdown,
}

export const ProductOptionsSelectors = ({
  options,
  showSizeHelper,
  onOptionChange,
  theme,
  withLabels = true,
}: {
  options: ConfigurableProductOption[]
  withLabels?: boolean
  showSizeHelper?: boolean
  onOptionChange: (option: { attributeCode: string; value: string }) => void
  theme?: Partial<Record<ProductOptionsSelectorType, Record<string, string>>>
}) => {
  return (
    <div>
      {options &&
        options?.map((option, key) => {
          const attributeCode = option.attributeCode as AttributeCodes
          const selectorType = OptionAttributeSelectorMap[attributeCode] || 'dropdown'
          switch (selectorType) {
            case ProductOptionsSelectorType.Swatch:
              return (
                <ProductOptionsSelectorSwatches
                  key={key}
                  options={option?.values?.map((item) => ({
                    label: item?.title,
                    value: item?.value,
                    data: item?.swatch,
                  }))}
                  label={withLabels && option.title}
                  onChange={(value) => onOptionChange({ attributeCode, value })}
                  theme={{
                    ...theme?.[ProductOptionsSelectorType.Swatch],
                  }}
                />
              )
            case ProductOptionsSelectorType.Titles:
              return (
                <ProductOptionsSelectorTitles
                  key={key}
                  label={withLabels && option.title}
                  options={option?.values?.map((item, index) => ({ title: item.title, value: item.value, id: index }))}
                  onChange={(e) => onOptionChange({ attributeCode, value: e.currentTarget.value })}
                  name={attributeCode}
                  value={option?.values?.[0].value}
                  theme={theme?.[ProductOptionsSelectorType.Titles]}
                />
              )
            case ProductOptionsSelectorType.Image:
              return (
                <ProductOptionsSelectorImages
                  key={key}
                  label={withLabels && option.title}
                  options={option?.values?.map((item, index) => ({
                    title: item.title,
                    value: item.value,
                    id: index,
                    image: (
                      <div style={{ display: 'flex' }}>
                        <ImageComponent alt={item.title} src={(item?.swatch as MediaSwatch)?.media?.url} />
                      </div>
                    ),
                  }))}
                  onChange={(e) => onOptionChange({ attributeCode, value: e.currentTarget.value })}
                  name={attributeCode}
                  value={option?.values?.[0].value}
                  theme={theme?.[ProductOptionsSelectorType.Image]}
                />
              )
            default:
              return (
                <ProductOptionsSelectorDropdown
                  key={key}
                  label={withLabels && option.title}
                  helpText={option?.helpText}
                  infoText={option?.infoText}
                  options={option?.values?.map((item) => ({ name: item.title, value: item.value, disabled: false }))}
                  placeholder={attributeCode}
                  onChange={(value) => onOptionChange({ attributeCode, value })}
                  value={option?.values?.[0].value}
                  theme={{
                    ...theme?.[ProductOptionsSelectorType.Dropdown],
                  }}
                />
              )
          }
        })}
    </div>
  )
}

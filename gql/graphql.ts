/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents date values */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** BigInt value */
  Directus_GraphQLBigInt: { input: any; output: any; }
  /** A Float or a String */
  Directus_GraphQLStringOrFloat: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: any; output: any; }
  /** Represents empty values */
  Void: { input: any; output: any; }
  /**
   * A term used to indicate the reason for export of dutiable goods. Selected options can affect how your shipment is cleared and how much tax is imposed on your shipment during customs clearance. Example values:
   * - `Permanent`
   * - `Temporary`
   * - `Return For Repair`
   * - `Used Exhibition Goods To Origin`
   * - `Intercompany Use`
   * - `Commercial Purpose Or Sale`
   * - `Personal Belongings or Personal Use`
   * - `Sample`
   * - `Gift`
   * - `Return To Origin`
   * - `Warranty Replacement`
   * - `Diplomatic Goods`
   * - `Defence Material`
   */
  mutationInput_createOrder_input_order_customs_clearance_attributes_export_reason: { input: any; output: any; }
  /**
   * A universal term of trade that defines the responsibility and obligations with the transport of goods.  Most commonly used to indicate the responsible party for payment of duties and taxes.  Valid values include:
   * - `DDU`
   * - `DDP`
   * - `EXW`
   * - `FCA`
   * - `CPT`
   * - `CFR`
   * - `CIP`
   * - `CIF`
   * - `DAF`
   * - `DAT`
   * - `DAP`
   * - `DPU`
   * - `DES`
   * - `DEQ`
   * - `FAS`
   * - `FOB`
   */
  mutationInput_createOrder_input_order_customs_clearance_attributes_incoterm: { input: any; output: any; }
  /** A free text field to provide a identification number for a recipient. For example, a citizen identification number or passport number which is required for customs clearance for some international destinations. eg: PA1992991 */
  mutationInput_createOrder_input_order_customs_clearance_attributes_recipient_id: { input: any; output: any; }
  /** The issuing country of the tax id number in in ISO 3166 Alpha-2 format. eg. GB for Great Britain */
  mutationInput_createOrder_input_order_customs_clearance_attributes_tax_id_country_code: { input: any; output: any; }
  /** The tax id number that is declared against this order. */
  mutationInput_createOrder_input_order_customs_clearance_attributes_tax_id_number: { input: any; output: any; }
  /**
   * The Shippier's tax id type which is passed to a carrier for the purpose of customs clearance. Valid values include:
   * - `EORI`
   * - `IOSS`
   * - `LVG`
   * - `OSR`
   * - `VOEC`
   * - `VAT/GST`
   * - `FTZ`
   * - `DAN`
   * - `TAN`
   * - `DTF`
   * - `EIN`
   * - `SSN`
   * - `DUN`
   * - `FED`
   * - `STA`
   * - `CNP`
   * - `GBVAT`
   * - `NZ IRD`
   */
  mutationInput_createOrder_input_order_customs_clearance_attributes_tax_id_type: { input: any; output: any; }
  /** ```conditional``` -- number of the person receiving the order, may be different than the user who purchased the order. Mandatory for International orders. */
  mutation_createOrder_oneOf_0_response_allOf_0_receiver_contact_number: { input: any; output: any; }
  /** Merchant invoice number - the customer-facing sales order reference of the order. This would be what the recipient sees on the shipping label, packslip, customs declaration, receipt, etc. */
  mutation_createOrder_oneOf_0_response_allOf_0_retailer_invoice: { input: any; output: any; }
  queryInput_getCustomers_phone: { input: any; output: any; }
  /** Name of the allergy */
  query_getAllergies_oneOf_0_items_name: { input: any; output: any; }
  /** Name of the brand */
  query_getBrands_oneOf_0_items_name: { input: any; output: any; }
  /** Name of the breed */
  query_getBreeds_oneOf_0_items_name: { input: any; output: any; }
  /** Family name for the customer */
  query_getCustomers_oneOf_0_items_familyName: { input: any; output: any; }
  /** Given name for the customer */
  query_getCustomers_oneOf_0_items_givenName: { input: any; output: any; }
  query_getCustomers_oneOf_0_items_phone: { input: any; output: any; }
  /** The preferred name for the customer */
  query_getCustomers_oneOf_0_items_preferredName: { input: any; output: any; }
  /** Name of the health condition */
  query_getHealthConditions_oneOf_0_items_name: { input: any; output: any; }
};

/** Access Denied */
export type AccessDenied_Response = {
  __typename?: 'AccessDenied_response';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type Action = {
  __typename?: 'Action';
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ActivateVoucherRequest_Input = {
  EngagementTypeCode?: InputMaybe<Scalars['String']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  Uid?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input'];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines an item to add to the gift registry. */
export type AddGiftRegistryItemInput = {
  /** An array of options the customer has entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** A brief note about the item. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The quantity of the product to add. */
  quantity: Scalars['Float']['input'];
  /** An array of strings corresponding to options the customer has selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The SKU of the product to add to the gift registry. */
  sku: Scalars['String']['input'];
};

/** Defines a new registrant. */
export type AddGiftRegistryRegistrantInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The email address of the registrant. */
  email: Scalars['String']['input'];
  /** The first name of the registrant. */
  firstname: Scalars['String']['input'];
  /** The last name of the registrant. */
  lastname: Scalars['String']['input'];
};

/** Contains the results of a request to add registrants. */
export type AddGiftRegistryRegistrantsOutput = {
  __typename?: 'AddGiftRegistryRegistrantsOutput';
  /** The gift registry after adding registrants. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added. */
  cart: Cart;
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

/** Defines a return comment. */
export type AddReturnCommentInput = {
  /** The text added to the return request. */
  comment_text: Scalars['String']['input'];
  /** The unique ID for a `Return` object. */
  return_uid: Scalars['ID']['input'];
};

/** Contains details about the return request. */
export type AddReturnCommentOutput = {
  __typename?: 'AddReturnCommentOutput';
  /** The modified return. */
  return?: Maybe<Return>;
};

/** Defines tracking information to be added to the return. */
export type AddReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingCarrier` object. */
  carrier_uid: Scalars['ID']['input'];
  /** The unique ID for a `Returns` object. */
  return_uid: Scalars['ID']['input'];
  /** The shipping tracking number for this return request. */
  tracking_number: Scalars['String']['input'];
};

/** Contains the response after adding tracking information. */
export type AddReturnTrackingOutput = {
  __typename?: 'AddReturnTrackingOutput';
  /** Details about the modified return. */
  return?: Maybe<Return>;
  /** Details about shipping for a return. */
  return_shipping_tracking?: Maybe<ReturnShippingTracking>;
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  /** The cart after adding products. */
  cart: Cart;
};

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']['output'];
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist;
};

export type AfterpayInput = {
  /** Afterpay checkout token returned by the createAfterpayCheckout mutation */
  afterpay_token: Scalars['String']['input'];
};

/** A set of relative URLs that Afterpay will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. */
export type AfterpayRedirectPathInput = {
  /** The relative URL of the page that Afterpay will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/afterpay/payment/cancel, the relative URL is afterpay/payment/cancel. */
  cancel_path: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that Afterpay will redirect to upon payment success. If the full URL to this page is https://www.example.com/afterpay/payment/success, the relative URL is afterpay/payment/success. */
  confirm_path: Scalars['String']['input'];
};

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']['output'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']['output']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
};

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The display label for an aggregation option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output'];
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

/** Allergy */
export type Allergy = {
  __typename?: 'Allergy';
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['output'];
  /** A automatically assigned unique ID for this allergy */
  id: Scalars['UUID']['output'];
  /** Name of the allergy */
  name: Scalars['query_getAllergies_oneOf_0_items_name']['output'];
  petProfileCategory?: Maybe<Query_GetAllergies_OneOf_0_Items_PetProfileCategory>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type Answer = {
  __typename?: 'Answer';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Answers_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']['output'];
};

/** Contains an applied gift card with applied and remaining balance. */
export type AppliedGiftCard = {
  __typename?: 'AppliedGiftCard';
  /** The amount applied to the current cart. */
  applied_balance?: Maybe<Money>;
  /** The gift card account code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The remaining balance on the gift card. */
  current_balance?: Maybe<Money>;
  /** The expiration date of the gift card. */
  expiration_date?: Maybe<Scalars['String']['output']>;
};

/** Contains the applied and current balances. */
export type AppliedStoreCredit = {
  __typename?: 'AppliedStoreCredit';
  /** The applied store credit balance to the current cart. */
  applied_balance?: Maybe<Money>;
  /** The current balance remaining on store credit. */
  current_balance?: Maybe<Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponMessageOutput = {
  __typename?: 'ApplyCouponMessageOutput';
  /** Message after applying a coupon. */
  text: Scalars['String']['output'];
  /** Message type */
  type: Scalars['String']['output'];
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** A valid coupon code. */
  coupon_code: Scalars['String']['input'];
};

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  /** The cart after applying a coupon. */
  cart: Cart;
  /** Message after applying a coupon. */
  message?: Maybe<ApplyCouponMessageOutput>;
};

/** Defines the input required to run the `applyGiftCardToCart` mutation. */
export type ApplyGiftCardToCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The gift card code to be applied to the cart. */
  gift_card_code: Scalars['String']['input'];
};

/** Defines the possible output for the `applyGiftCardToCart` mutation. */
export type ApplyGiftCardToCartOutput = {
  __typename?: 'ApplyGiftCardToCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the customer cart. */
export type ApplyRewardPointsToCartOutput = {
  __typename?: 'ApplyRewardPointsToCartOutput';
  /** The customer cart after reward points are applied. */
  cart: Cart;
};

/** Defines the input required to run the `applyStoreCreditToCart` mutation. */
export type ApplyStoreCreditToCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Defines the possible output for the `applyStoreCreditToCart` mutation. */
export type ApplyStoreCreditToCartOutput = {
  __typename?: 'ApplyStoreCreditToCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']['output'];
};

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute. */
  attribute_type?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  input_type?: Maybe<Scalars['String']['output']>;
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties?: Maybe<StorefrontProperties>;
};

export type AttributeCodeFilterInput = {
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** List of all entity types. Populated by the modules introducing EAV entities. */
export enum AttributeEntityTypeEnum {
  /** @deprecated  */
  CatalogCategory = 'CATALOG_CATEGORY',
  /** @deprecated  */
  CatalogProduct = 'CATALOG_PRODUCT'
}

/** An input object that specifies the filters used for attributes. */
export type AttributeFilterInput = {
  /** Filter attributes by their codes. */
  attribute_code?: InputMaybe<AttributeCodeFilterInput>;
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be searched or not. */
  is_searchable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing?: InputMaybe<Scalars['Boolean']['input']>;
};

/** EAV attribute frontend input types. */
export enum AttributeFrontendInputEnum {
  /** @deprecated  */
  Boolean = 'BOOLEAN',
  /** @deprecated  */
  Date = 'DATE',
  /** @deprecated  */
  Datetime = 'DATETIME',
  /** @deprecated  */
  File = 'FILE',
  /** @deprecated  */
  Gallery = 'GALLERY',
  /** @deprecated  */
  Hidden = 'HIDDEN',
  /** @deprecated  */
  Image = 'IMAGE',
  /** @deprecated  */
  MediaImage = 'MEDIA_IMAGE',
  /** @deprecated  */
  Multiline = 'MULTILINE',
  /** @deprecated  */
  Multiselect = 'MULTISELECT',
  /** @deprecated  */
  Price = 'PRICE',
  /** @deprecated  */
  Select = 'SELECT',
  /** @deprecated  */
  Text = 'TEXT',
  /** @deprecated  */
  Textarea = 'TEXTAREA',
  /** @deprecated  */
  Undefined = 'UNDEFINED',
  /** @deprecated  */
  Weight = 'WEIGHT'
}

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']['input']>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies selected option for a select or multiselect attribute value. */
export type AttributeInputSelectedOption = {
  /** The attribute option value. */
  value: Scalars['String']['input'];
};

/** Base EAV implementation of CustomAttributeMetadataInterface. */
export type AttributeMetadata = CustomAttributeMetadataInterface & {
  __typename?: 'AttributeMetadata';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
  /** The relative position of the attribute in a layered navigation block. */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

/** Attribute metadata retrieval error. */
export type AttributeMetadataError = {
  __typename?: 'AttributeMetadataError';
  /** Attribute metadata retrieval error message. */
  message: Scalars['String']['output'];
  /** Attribute metadata retrieval error type. */
  type: AttributeMetadataErrorType;
};

/** Attribute metadata retrieval error types. */
export enum AttributeMetadataErrorType {
  /**
   * The requested attribute was not found.
   * @deprecated
   */
  AttributeNotFound = 'ATTRIBUTE_NOT_FOUND',
  /**
   * The requested entity was not found.
   * @deprecated
   */
  EntityNotFound = 'ENTITY_NOT_FOUND',
  /**
   * The filter cannot be applied as it does not belong to the entity
   * @deprecated
   */
  FilterNotFound = 'FILTER_NOT_FOUND',
  /**
   * Not categorized error, see the error message.
   * @deprecated
   */
  Undefined = 'UNDEFINED'
}

/** Defines an attribute option. */
export type AttributeOption = {
  __typename?: 'AttributeOption';
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute option value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Base EAV implementation of CustomAttributeOptionInterface. */
export type AttributeOptionMetadata = CustomAttributeOptionInterface & {
  __typename?: 'AttributeOptionMetadata';
  /** Is the option value default. */
  is_default: Scalars['Boolean']['output'];
  /** The label assigned to the attribute option. */
  label: Scalars['String']['output'];
  /** The attribute option value. */
  value: Scalars['String']['output'];
};

export type AttributeSelectedOption = AttributeSelectedOptionInterface & {
  __typename?: 'AttributeSelectedOption';
  /** The attribute selected option label. */
  label: Scalars['String']['output'];
  /** The attribute selected option value. */
  value: Scalars['String']['output'];
};

export type AttributeSelectedOptionInterface = {
  /** The attribute selected option label. */
  label: Scalars['String']['output'];
  /** The attribute selected option value. */
  value: Scalars['String']['output'];
};

export type AttributeSelectedOptions = AttributeValueInterface & {
  __typename?: 'AttributeSelectedOptions';
  /** The attribute code. */
  code: Scalars['ID']['output'];
  selected_options: Array<Maybe<AttributeSelectedOptionInterface>>;
};

export type AttributeValue = AttributeValueInterface & {
  __typename?: 'AttributeValue';
  /** The attribute code. */
  code: Scalars['ID']['output'];
  /** The attribute value. */
  value: Scalars['String']['output'];
};

/** Specifies the value for attribute. */
export type AttributeValueInput = {
  /** The code of the attribute. */
  attribute_code: Scalars['String']['input'];
  /** An array containing selected options for a select or multiselect attribute. */
  selected_options?: InputMaybe<Array<InputMaybe<AttributeInputSelectedOption>>>;
  /** The value assigned to the attribute. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueInterface = {
  /** The attribute code. */
  code: Scalars['ID']['output'];
};

/** Metadata of EAV attributes associated to form */
export type AttributesFormOutput = {
  __typename?: 'AttributesFormOutput';
  /** Errors of retrieving certain attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>;
  /** Requested attributes metadata. */
  items: Array<Maybe<CustomAttributeMetadataInterface>>;
};

/** Metadata of EAV attributes. */
export type AttributesMetadataOutput = {
  __typename?: 'AttributesMetadataOutput';
  /** Errors of retrieving certain attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>;
  /** Requested attributes metadata. */
  items: Array<Maybe<CustomAttributeMetadataInterface>>;
};

export type Author = {
  __typename?: 'Author';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Authors_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

export type AvailableCoupons = {
  __typename?: 'AvailableCoupons';
  context_key?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<Query_AvailableCoupons_Data_Items>>>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AvailableDiscount = {
  __typename?: 'AvailableDiscount';
  /** The discount price amount. */
  amount?: Maybe<Money>;
  /** The discount label. */
  label?: Maybe<Scalars['String']['output']>;
};

export type AvailableDiscountItems = {
  __typename?: 'AvailableDiscountItems';
  /** The discount price amount. */
  amount?: Maybe<Money>;
  /** The discount id. */
  id?: Maybe<Scalars['String']['output']>;
  /** The discount label. */
  label?: Maybe<Scalars['String']['output']>;
};

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** If the payment method is an online integration */
  is_deferred: Scalars['Boolean']['output'];
  /** The payment method title. */
  title: Scalars['String']['output'];
};

export type AvailableRepeatDeliveryOption = {
  __typename?: 'AvailableRepeatDeliveryOption';
  /** The label of the option. */
  label: Scalars['String']['output'];
  /** The repeat delivery order. */
  repeat_delivery_order?: Maybe<RepeatDeliveryReservedOrder>;
  /** The unique ID reference for the option. */
  value: Scalars['Int']['output'];
};

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']['output'];
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** Describes an error condition. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code?: Maybe<Scalars['String']['output']>;
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title?: Maybe<Scalars['String']['output']>;
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

export type AwardedCouponsResponse = {
  __typename?: 'AwardedCouponsResponse';
  code?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<Query_AwardedCoupons_Data_Items>>>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Bad Request */
export type BadRequestErrorResponseSchema = {
  __typename?: 'BadRequestErrorResponseSchema';
  Errors?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_1_Errors_Items>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Bad Request */
export type BadRequest_Response = {
  __typename?: 'BadRequest_response';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type Badges = {
  __typename?: 'Badges';
  /** Hierarchy of the badge */
  hierarchy?: Maybe<Scalars['String']['output']>;
  /** Identifier of the badge */
  id?: Maybe<Scalars['String']['output']>;
  /** Name of the badge */
  name?: Maybe<Scalars['String']['output']>;
  /** Special badge attribute such as: image, discount, message, price */
  special_attribute?: Maybe<Scalars['String']['output']>;
  /** Type code of the badge */
  type_code?: Maybe<Scalars['String']['output']>;
};

export enum BatchMutationStatus {
  /** @deprecated  */
  Failure = 'FAILURE',
  /** @deprecated  */
  MixedResults = 'MIXED_RESULTS',
  /** @deprecated  */
  Success = 'SUCCESS'
}

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type BloyalVoucherActivateResponse = {
  __typename?: 'BloyalVoucherActivateResponse';
  code?: Maybe<Scalars['String']['output']>;
  context_key?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Mutation_VoucherActivate_Data>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Represents a response to the Book API, which returns the status of booking the order at each courier. */
export type BookResponse = {
  __typename?: 'BookResponse';
  /** Number of items in the response */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * Error code returned by Shippit
   *
   * For the book response, there can be errors at the top-level request or for individual orders booked.
   *
   * If the error occurs at the top-level request (order format, authorization), then this error code applies. Otherwise, the response will be successful and there will be individual errors applied in the body of each booked item.
   */
  error?: Maybe<Scalars['String']['output']>;
  /** Human-readable description of the top-level error encountered. */
  error_description?: Maybe<Scalars['String']['output']>;
  /** Array of booking statuses at each courier */
  response?: Maybe<Array<Maybe<Root_Type_For_BookingStatus>>>;
};

/** Contains customer data. */
export type BoomiCustomer = {
  __typename?: 'BoomiCustomer';
  /** Pass the customer id. */
  id?: Maybe<Scalars['String']['output']>;
};

export type BraintreeCard = {
  __typename?: 'BraintreeCard';
  cardType: Scalars['String']['output'];
  customer_id: Scalars['String']['output'];
  details: Scalars['String']['output'];
  expires_at: Scalars['String']['output'];
  gateway_token: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  is_active: Scalars['Boolean']['output'];
  last4: Scalars['String']['output'];
  maskedNumber: Scalars['String']['output'];
  payment_method_code: Scalars['String']['output'];
  public_hash: Scalars['String']['output'];
  three_d_secure: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']['input']>;
  public_hash: Scalars['String']['input'];
};

/** Contains information about a Braintree configuration. */
export type BraintreeConfig = {
  __typename?: 'BraintreeConfig';
  /** Selected Recaptcha config. */
  recaptcha?: Maybe<Scalars['String']['output']>;
  /** Is 3DS enabled for Braintree payment. */
  three_d_secure?: Maybe<Scalars['Int']['output']>;
  /** Always request 3DS for Braintree payment. */
  three_d_secure_always_request?: Maybe<Scalars['Int']['output']>;
  /** Cart total threshold for 3DS init. */
  three_d_secure_threshold?: Maybe<Scalars['Int']['output']>;
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: InputMaybe<Scalars['String']['input']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean']['input'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String']['input'];
};

/** Brand */
export type Brand = {
  __typename?: 'Brand';
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['output'];
  /** A automatically assigned unique ID for this brand */
  id: Scalars['UUID']['output'];
  /** True if this is a flea, tick and worm brand */
  isFTWBrand?: Maybe<Scalars['Boolean']['output']>;
  /** True is this is a food brand */
  isFoodBrand?: Maybe<Scalars['Boolean']['output']>;
  /** True if this is a heartworm brand */
  isHeartwormBrand?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the brand */
  name: Scalars['query_getBrands_oneOf_0_items_name']['output'];
  petProfileCategory: Query_GetBrands_OneOf_0_Items_PetProfileCategory;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['output'];
};

/** Brand */
export type Brand_Input = {
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['input'];
  /** A automatically assigned unique ID for this brand */
  id: Scalars['UUID']['input'];
  /** True if this is a flea, tick and worm brand */
  isFTWBrand?: InputMaybe<Scalars['Boolean']['input']>;
  /** True is this is a food brand */
  isFoodBrand?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if this is a heartworm brand */
  isHeartwormBrand?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the brand */
  name: Scalars['query_getBrands_oneOf_0_items_name']['input'];
  petProfileCategory: Query_GetBrands_OneOf_0_Items_PetProfileCategory;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['input'];
};

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** The category level. */
  category_level?: Maybe<Scalars['Int']['output']>;
  /** The display name of the category. */
  category_name?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']['output'];
  /** The URL key of the category. */
  category_url_key?: Maybe<Scalars['String']['output']>;
  /** The URL path of the category. */
  category_url_path?: Maybe<Scalars['String']['output']>;
};

/** Breed */
export type Breed = {
  __typename?: 'Breed';
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['output'];
  /** A automatically assigned unique ID for this breed */
  id: Scalars['UUID']['output'];
  /** Name of the breed */
  name: Scalars['query_getBreeds_oneOf_0_items_name']['output'];
  petProfileCategory?: Maybe<Query_GetBreeds_OneOf_0_Items_PetProfileCategory>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['output'];
};

/** An implementation for bundle product cart items. */
export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']['output']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']['output']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /** The quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']['output'];
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']['input'];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']['input'];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']['output']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Order pickup location. */
  pickup_location?: Maybe<Storelocation>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
  /** Subtotal order item. */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** Thumbnail for the product specified in the order. */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  bundle_options?: Maybe<Array<Maybe<BundleItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** Bundle Multi Buy product swatch options. If the product has no Multi Buy options, use the Price Per Unit instead. */
  multibuy?: Maybe<Array<Maybe<MultiBuy>>>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  visible_in_app?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** An array containing information about the selected bundle items. */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  __typename?: 'Cart';
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** An array of gift card items applied to the cart. */
  applied_gift_cards?: Maybe<Array<Maybe<AppliedGiftCard>>>;
  /** The amount of reward points applied to the cart. */
  applied_reward_points?: Maybe<RewardPointsAmount>;
  /** Store credit information applied to the cart. */
  applied_store_credit?: Maybe<AppliedStoreCredit>;
  available_click_and_collect?: Maybe<ClickAndCollectStoreOutput>;
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscount>>>;
  /** The list of available gift wrapping options for the cart. */
  available_gift_wrappings: Array<Maybe<GiftWrapping>>;
  /** An array of available payment methods. */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  available_shipping_methods?: Maybe<ShippingOptionOutput>;
  /** The billing address assigned to the cart. */
  billing_address?: Maybe<BillingCartAddress>;
  /** The unique ID for a bloyal `Cart` object. */
  bloyal_cart_uid: Scalars['ID']['output'];
  /** If bloyal service is unavailable an error message is returned. */
  bloyal_message_status?: Maybe<Scalars['String']['output']>;
  /** Click and Collect data to display. */
  click_and_collect_message?: Maybe<ClickCollectMessageOutput>;
  /** The email address of the guest or customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** Free shipping threshold data to display. */
  free_shipping_threshold?: Maybe<FreeShippingThresholdOutput>;
  gift_card_balance?: Maybe<GiftCardBalanceOutput>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** Indicates whether the shopper requested gift receipt for the cart. */
  gift_receipt_included: Scalars['Boolean']['output'];
  /** The selected gift wrapping for the cart. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** Home Delivery data to display. */
  home_delivery_message?: Maybe<HomeDeliveryMessageOutput>;
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']['output'];
  /** Is coupon filed enabled. */
  is_coupons_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Is Cart recurring with existed frequency. */
  is_recurring?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']['output'];
  /** An array of products that have been added to the cart. */
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** Pricing details for the quote. */
  prices?: Maybe<CartPrices>;
  /** Indicates whether the shopper requested a printed card for the cart. */
  printed_card_included: Scalars['Boolean']['output'];
  repeat_delivery_summary?: Maybe<Array<Maybe<RepeatDeliveryOrder>>>;
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  /** The selected shipping method info. */
  selected_shipping_method_info?: Maybe<SelectedShippingMethodInfo>;
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  /** The shipping methods mapping. */
  shipping_methods_mapping?: Maybe<Array<Maybe<ShippingMethodsMapping>>>;
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']['output'];
};


/** Contains the contents and other details about a guest or customer cart. */
export type CartAvailable_Click_And_CollectArgs = {
  input?: InputMaybe<ShippingRequestInput>;
};


/** Contains the contents and other details about a guest or customer cart. */
export type CartAvailable_Shipping_MethodsArgs = {
  input?: InputMaybe<ShippingRequestInput>;
};

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  /** The country code. */
  code: Scalars['String']['output'];
  /** The display label for the country. */
  label: Scalars['String']['output'];
};

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['input'];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']['input'];
  /** The first name of the customer or guest. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The last name of the customer or guest. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars['String']['input']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  /** The state or province code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The display label for the region. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  __typename?: 'CartDiscount';
  /** The amount of the discount applied to the item. */
  amount: Money;
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']['output']>>;
};

export type CartItemError = {
  __typename?: 'CartItemError';
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String']['output'];
};

export enum CartItemErrorType {
  /** @deprecated  */
  ItemIncrements = 'ITEM_INCREMENTS',
  /** @deprecated  */
  ItemQty = 'ITEM_QTY',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of an item to add. */
  quantity: Scalars['Float']['input'];
  /** Repeat Delivery Frequency. Use to create Repeat Delivery orders. */
  rd_frequency?: InputMaybe<Scalars['ID']['input']>;
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product. */
  sku: Scalars['String']['input'];
};

/** An interface for products in a cart. */
export type CartItemInterface = {
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money;
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money;
  /** The regular price of the item when member price is applied. */
  regular_price_including_tax: Money;
  /** The regular row total when member price is applied. */
  regular_row_total_including_tax: Money;
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money;
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item. */
  total_item_discount?: Maybe<Money>;
};

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']['output'];
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']['output'];
};

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum;
  /** A string that describes the unit of the value. */
  units: Scalars['String']['output'];
  /** A price value. */
  value: Scalars['Float']['output'];
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The unique ID for a `GiftWrapping` object to be used for the cart item. */
  gift_wrapping_id?: InputMaybe<Scalars['ID']['input']>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  __typename?: 'CartPrices';
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead. */
  discount?: Maybe<CartDiscount>;
  /** An array containing cart rule discounts, store credit and gift cards applied to the cart. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Contains details about the free gift total. */
  free_gift_price?: Maybe<Money>;
  /** The list of prices for the selected gift options. */
  gift_options?: Maybe<GiftOptionsPrices>;
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total?: Maybe<Money>;
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax?: Maybe<Money>;
  /** The subtotal including any applied taxes. */
  subtotal_including_tax?: Maybe<Money>;
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The description of the tax. */
  label: Scalars['String']['output'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** A cart-specific error code. */
  code: CartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

export enum CartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  PermissionDenied = 'PERMISSION_DENIED',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

export enum CatalogAttributeApplyToEnum {
  /** @deprecated  */
  Bundle = 'BUNDLE',
  /** @deprecated  */
  Category = 'CATEGORY',
  /** @deprecated  */
  Configurable = 'CONFIGURABLE',
  /** @deprecated  */
  Downloadable = 'DOWNLOADABLE',
  /** @deprecated  */
  Grouped = 'GROUPED',
  /** @deprecated  */
  Simple = 'SIMPLE',
  /** @deprecated  */
  Virtual = 'VIRTUAL'
}

/** Catalog attribute metadata. */
export type CatalogAttributeMetadata = CustomAttributeMetadataInterface & {
  __typename?: 'CatalogAttributeMetadata';
  /** To which catalog types an attribute can be applied. */
  apply_to?: Maybe<Array<Maybe<CatalogAttributeApplyToEnum>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether a product or category attribute can be searched or not. */
  is_searchable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
  /** The relative position of the attribute in a layered navigation block. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing?: Maybe<Scalars['Boolean']['output']>;
};

export type Category = {
  __typename?: 'Category';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Categories_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree';
  /** The full category path. */
  path?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Defines the check availability request. Please enter correct postcode or latitude and longitude */
export type CheckAvailabilityRequestInput = {
  /** The country code. Default "AU" */
  country_code?: InputMaybe<Scalars['String']['input']>;
  /** The destination latitude */
  latitude?: InputMaybe<Scalars['String']['input']>;
  /** The destination longitude */
  longitude?: InputMaybe<Scalars['String']['input']>;
  /** The destination postcode */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** The quantity of item check */
  qty: Scalars['Int']['input'];
  /** Option ID. Use this for checking option of configurable product */
  selectedOption?: InputMaybe<Scalars['String']['input']>;
  /** The SKU of the item to check */
  sku: Scalars['String']['input'];
};

export type CheckAvailabilityRequestOutput = {
  __typename?: 'CheckAvailabilityRequestOutput';
  /** List of delivered methods found for provided address */
  homeDelivery?: Maybe<Array<Maybe<HomeDeliveryService>>>;
  /** List of pickup locations found for provided address */
  storeLocations?: Maybe<Array<Maybe<Storelocation>>>;
};

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']['output'];
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']['output'];
  /** Required. The text of the agreement. */
  content: Scalars['String']['output'];
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']['output'];
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode;
  /** The name given to the condition. */
  name: Scalars['String']['output'];
};

/** Indicates how agreements are accepted. */
export enum CheckoutAgreementMode {
  /**
   * Conditions are automatically accepted upon checkout.
   * @deprecated
   */
  Auto = 'AUTO',
  /**
   * Shoppers must manually accept the conditions to place an order.
   * @deprecated
   */
  Manual = 'MANUAL'
}

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']['output']>>;
};

export enum CheckoutUserInputErrorCodes {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

export type ClickAndCollectMessages = {
  __typename?: 'ClickAndCollectMessages';
  /** Click and Collection Fulfilment Title */
  fulfilment_title?: Maybe<Scalars['String']['output']>;
  /** Click and Collection Fulfilment Title Long */
  fulfilment_title_long?: Maybe<Scalars['String']['output']>;
  /** Click and Collection Order Ready Message */
  order_message?: Maybe<Scalars['String']['output']>;
};

export type ClickAndCollectStore = {
  __typename?: 'ClickAndCollectStore';
  /** Defines if collection store is available. */
  availability?: Maybe<Scalars['Boolean']['output']>;
  /** The city address of the store. */
  city?: Maybe<Scalars['String']['output']>;
  /** The country code address of the store */
  country_code?: Maybe<Scalars['String']['output']>;
  /** The distance in km of the store from postcode coordinates. */
  distance?: Maybe<Scalars['Float']['output']>;
  /** The latitude address of the store */
  latitude?: Maybe<Scalars['String']['output']>;
  /** The unique ID of a `ClickAndCollectStore` object. */
  location_id?: Maybe<Scalars['String']['output']>;
  /** The name of the store. */
  location_name?: Maybe<Scalars['String']['output']>;
  /** The longitude address of the store */
  longitude?: Maybe<Scalars['String']['output']>;
  /** The opening hours of the store */
  opening_hours?: Maybe<Scalars['String']['output']>;
  /** The phone number of the store. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postcode address of the store. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** The state address of the store. */
  state?: Maybe<Scalars['String']['output']>;
  /** The street address lines of the store */
  street_address?: Maybe<Scalars['String']['output']>;
  /** An array of a `UnavailableItem` object. */
  unavailable_items?: Maybe<Array<Maybe<UnavailableItem>>>;
};

export type ClickAndCollectStoreOutput = {
  __typename?: 'ClickAndCollectStoreOutput';
  /** ClickAndCollect messages info */
  click_and_collect_messages?: Maybe<ClickAndCollectMessages>;
  /** ClickAndCollect stores info */
  click_and_collect_stores?: Maybe<Array<Maybe<ClickAndCollectStore>>>;
  /** ClickAndCollect Store message */
  error_message?: Maybe<Scalars['String']['output']>;
  /** ClickAndCollect enabled flag */
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Defines the output of the delivery message. */
export type ClickCollectMessageOutput = {
  __typename?: 'ClickCollectMessageOutput';
  /** Background color. */
  background_color?: Maybe<Scalars['String']['output']>;
  /** Is message enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Font color. */
  font_color?: Maybe<Scalars['String']['output']>;
  /** The message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Postcodes list. */
  postcodes?: Maybe<Scalars['String']['output']>;
  /** States list. */
  states?: Maybe<Scalars['String']['output']>;
};

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** The content of the CMS block in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The CMS block identifier. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The title assigned to the CMS block. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Contains an array CMS block items. */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks. */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage';
  /** The content of the CMS page in raw HTML. */
  content?: Maybe<Scalars['String']['output']>;
  /** The heading that displays at the top of the CMS page. */
  content_heading?: Maybe<Scalars['String']['output']>;
  /** The ID of a CMS page. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A brief description of the page for search results listings. */
  meta_keywords?: Maybe<Scalars['String']['output']>;
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout?: Maybe<Scalars['String']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key?: Maybe<Scalars['String']['output']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Reviewcomments_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']['output'];
  /** The label of the attribute code. */
  label: Scalars['String']['output'];
};

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Details about a product in a compare list. */
  product: ProductInterface;
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']['output'];
};

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products. */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list. */
  item_count: Scalars['Int']['output'];
  /** An array of products to compare. */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']['output'];
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** Text that can contain HTML tags. */
  html: Scalars['String']['output'];
};

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute. */
  code?: Maybe<Scalars['String']['output']>;
  /** A string that describes the configurable attribute option. */
  label?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']['output'];
  /** A unique index number assigned to the configurable product option. */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** An implementation for configurable product cart items. */
export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item. */
  configured_variant: ProductInterface;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']['output']>>;
};

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** An array of options for the configurable product. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** An array of simple product variants. */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output'];
  /** The display name of the option. */
  label: Scalars['String']['output'];
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']['output'];
  /** An array of values that are applicable for this option. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']['output'];
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']['output'];
  /** The display name of the value. */
  label: Scalars['String']['output'];
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch?: Maybe<SwatchDataInterface>;
  /** The unique ID of the value. */
  uid: Scalars['ID']['output'];
};

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']['output'];
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** A displayed string that describes the configurable product option. */
  label?: Maybe<Scalars['String']['output']>;
  /** A number that indicates the order in which the attribute is displayed. */
  position?: Maybe<Scalars['Int']['output']>;
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']['output'];
  /** Indicates whether the option is the default. */
  use_default?: Maybe<Scalars['Boolean']['output']>;
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** An array of all possible configurable options. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
};

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store. */
  default_label?: Maybe<Scalars['String']['output']>;
  /** The label of the product. */
  label?: Maybe<Scalars['String']['output']>;
  /** The label of the product on the current store. */
  store_label?: Maybe<Scalars['String']['output']>;
  /** Swatch data for a configurable product option. */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid?: Maybe<Scalars['ID']['output']>;
  /** Indicates whether to use the default_label. */
  use_default_value?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index?: Maybe<Scalars['Int']['output']>;
};

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  /** An array of configurable attribute options. */
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  /** An array of linked simple products. */
  product?: Maybe<SimpleProduct>;
};

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']['output'];
  /** An array of selected configurable options. */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant?: Maybe<ProductInterface>;
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains the source and target wish lists after copying products. */
export type CopyProductsBetweenWishlistsOutput = {
  __typename?: 'CopyProductsBetweenWishlistsOutput';
  /** The destination wish list containing the copied products. */
  destination_wishlist: Wishlist;
  /** The wish list that the products were copied from. */
  source_wishlist: Wishlist;
  /** An array of errors encountered while copying products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
};

export type Country = {
  __typename?: 'Country';
  /** An array of regions within a particular country. */
  available_regions?: Maybe<Array<Maybe<Region>>>;
  /** The name of the country in English. */
  full_name_english?: Maybe<Scalars['String']['output']>;
  /** The name of the country in the current locale. */
  full_name_locale?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']['output']>;
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation?: Maybe<Scalars['String']['output']>;
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation?: Maybe<Scalars['String']['output']>;
};

/** The list of country codes. */
export enum CountryCodeEnum {
  /**
   * Andorra
   * @deprecated
   */
  Ad = 'AD',
  /**
   * United Arab Emirates
   * @deprecated
   */
  Ae = 'AE',
  /**
   * Afghanistan
   * @deprecated
   */
  Af = 'AF',
  /**
   * Antigua & Barbuda
   * @deprecated
   */
  Ag = 'AG',
  /**
   * Anguilla
   * @deprecated
   */
  Ai = 'AI',
  /**
   * Albania
   * @deprecated
   */
  Al = 'AL',
  /**
   * Armenia
   * @deprecated
   */
  Am = 'AM',
  /**
   * Netherlands Antilles
   * @deprecated
   */
  An = 'AN',
  /**
   * Angola
   * @deprecated
   */
  Ao = 'AO',
  /**
   * Antarctica
   * @deprecated
   */
  Aq = 'AQ',
  /**
   * Argentina
   * @deprecated
   */
  Ar = 'AR',
  /**
   * American Samoa
   * @deprecated
   */
  As = 'AS',
  /**
   * Austria
   * @deprecated
   */
  At = 'AT',
  /**
   * Australia
   * @deprecated
   */
  Au = 'AU',
  /**
   * Aruba
   * @deprecated
   */
  Aw = 'AW',
  /**
   * Åland Islands
   * @deprecated
   */
  Ax = 'AX',
  /**
   * Azerbaijan
   * @deprecated
   */
  Az = 'AZ',
  /**
   * Bosnia & Herzegovina
   * @deprecated
   */
  Ba = 'BA',
  /**
   * Barbados
   * @deprecated
   */
  Bb = 'BB',
  /**
   * Bangladesh
   * @deprecated
   */
  Bd = 'BD',
  /**
   * Belgium
   * @deprecated
   */
  Be = 'BE',
  /**
   * Burkina Faso
   * @deprecated
   */
  Bf = 'BF',
  /**
   * Bulgaria
   * @deprecated
   */
  Bg = 'BG',
  /**
   * Bahrain
   * @deprecated
   */
  Bh = 'BH',
  /**
   * Burundi
   * @deprecated
   */
  Bi = 'BI',
  /**
   * Benin
   * @deprecated
   */
  Bj = 'BJ',
  /**
   * St. Barthélemy
   * @deprecated
   */
  Bl = 'BL',
  /**
   * Bermuda
   * @deprecated
   */
  Bm = 'BM',
  /**
   * Brunei
   * @deprecated
   */
  Bn = 'BN',
  /**
   * Bolivia
   * @deprecated
   */
  Bo = 'BO',
  /**
   * Brazil
   * @deprecated
   */
  Br = 'BR',
  /**
   * Bahamas
   * @deprecated
   */
  Bs = 'BS',
  /**
   * Bhutan
   * @deprecated
   */
  Bt = 'BT',
  /**
   * Bouvet Island
   * @deprecated
   */
  Bv = 'BV',
  /**
   * Botswana
   * @deprecated
   */
  Bw = 'BW',
  /**
   * Belarus
   * @deprecated
   */
  By = 'BY',
  /**
   * Belize
   * @deprecated
   */
  Bz = 'BZ',
  /**
   * Canada
   * @deprecated
   */
  Ca = 'CA',
  /**
   * Cocos (Keeling) Islands
   * @deprecated
   */
  Cc = 'CC',
  /**
   * Congo-Kinshasa
   * @deprecated
   */
  Cd = 'CD',
  /**
   * Central African Republic
   * @deprecated
   */
  Cf = 'CF',
  /**
   * Congo-Brazzaville
   * @deprecated
   */
  Cg = 'CG',
  /**
   * Switzerland
   * @deprecated
   */
  Ch = 'CH',
  /**
   * Côte d’Ivoire
   * @deprecated
   */
  Ci = 'CI',
  /**
   * Cook Islands
   * @deprecated
   */
  Ck = 'CK',
  /**
   * Chile
   * @deprecated
   */
  Cl = 'CL',
  /**
   * Cameroon
   * @deprecated
   */
  Cm = 'CM',
  /**
   * China
   * @deprecated
   */
  Cn = 'CN',
  /**
   * Colombia
   * @deprecated
   */
  Co = 'CO',
  /**
   * Costa Rica
   * @deprecated
   */
  Cr = 'CR',
  /**
   * Cuba
   * @deprecated
   */
  Cu = 'CU',
  /**
   * Cape Verde
   * @deprecated
   */
  Cv = 'CV',
  /**
   * Christmas Island
   * @deprecated
   */
  Cx = 'CX',
  /**
   * Cyprus
   * @deprecated
   */
  Cy = 'CY',
  /**
   * Czech Republic
   * @deprecated
   */
  Cz = 'CZ',
  /**
   * Germany
   * @deprecated
   */
  De = 'DE',
  /**
   * Djibouti
   * @deprecated
   */
  Dj = 'DJ',
  /**
   * Denmark
   * @deprecated
   */
  Dk = 'DK',
  /**
   * Dominica
   * @deprecated
   */
  Dm = 'DM',
  /**
   * Dominican Republic
   * @deprecated
   */
  Do = 'DO',
  /**
   * Algeria
   * @deprecated
   */
  Dz = 'DZ',
  /**
   * Ecuador
   * @deprecated
   */
  Ec = 'EC',
  /**
   * Estonia
   * @deprecated
   */
  Ee = 'EE',
  /**
   * Egypt
   * @deprecated
   */
  Eg = 'EG',
  /**
   * Western Sahara
   * @deprecated
   */
  Eh = 'EH',
  /**
   * Eritrea
   * @deprecated
   */
  Er = 'ER',
  /**
   * Spain
   * @deprecated
   */
  Es = 'ES',
  /**
   * Ethiopia
   * @deprecated
   */
  Et = 'ET',
  /**
   * Finland
   * @deprecated
   */
  Fi = 'FI',
  /**
   * Fiji
   * @deprecated
   */
  Fj = 'FJ',
  /**
   * Falkland Islands
   * @deprecated
   */
  Fk = 'FK',
  /**
   * Micronesia
   * @deprecated
   */
  Fm = 'FM',
  /**
   * Faroe Islands
   * @deprecated
   */
  Fo = 'FO',
  /**
   * France
   * @deprecated
   */
  Fr = 'FR',
  /**
   * Gabon
   * @deprecated
   */
  Ga = 'GA',
  /**
   * United Kingdom
   * @deprecated
   */
  Gb = 'GB',
  /**
   * Grenada
   * @deprecated
   */
  Gd = 'GD',
  /**
   * Georgia
   * @deprecated
   */
  Ge = 'GE',
  /**
   * French Guiana
   * @deprecated
   */
  Gf = 'GF',
  /**
   * Guernsey
   * @deprecated
   */
  Gg = 'GG',
  /**
   * Ghana
   * @deprecated
   */
  Gh = 'GH',
  /**
   * Gibraltar
   * @deprecated
   */
  Gi = 'GI',
  /**
   * Greenland
   * @deprecated
   */
  Gl = 'GL',
  /**
   * Gambia
   * @deprecated
   */
  Gm = 'GM',
  /**
   * Guinea
   * @deprecated
   */
  Gn = 'GN',
  /**
   * Guadeloupe
   * @deprecated
   */
  Gp = 'GP',
  /**
   * Equatorial Guinea
   * @deprecated
   */
  Gq = 'GQ',
  /**
   * Greece
   * @deprecated
   */
  Gr = 'GR',
  /**
   * South Georgia & South Sandwich Islands
   * @deprecated
   */
  Gs = 'GS',
  /**
   * Guatemala
   * @deprecated
   */
  Gt = 'GT',
  /**
   * Guam
   * @deprecated
   */
  Gu = 'GU',
  /**
   * Guinea-Bissau
   * @deprecated
   */
  Gw = 'GW',
  /**
   * Guyana
   * @deprecated
   */
  Gy = 'GY',
  /**
   * Hong Kong SAR China
   * @deprecated
   */
  Hk = 'HK',
  /**
   * Heard &amp; McDonald Islands
   * @deprecated
   */
  Hm = 'HM',
  /**
   * Honduras
   * @deprecated
   */
  Hn = 'HN',
  /**
   * Croatia
   * @deprecated
   */
  Hr = 'HR',
  /**
   * Haiti
   * @deprecated
   */
  Ht = 'HT',
  /**
   * Hungary
   * @deprecated
   */
  Hu = 'HU',
  /**
   * Indonesia
   * @deprecated
   */
  Id = 'ID',
  /**
   * Ireland
   * @deprecated
   */
  Ie = 'IE',
  /**
   * Israel
   * @deprecated
   */
  Il = 'IL',
  /**
   * Isle of Man
   * @deprecated
   */
  Im = 'IM',
  /**
   * India
   * @deprecated
   */
  In = 'IN',
  /**
   * British Indian Ocean Territory
   * @deprecated
   */
  Io = 'IO',
  /**
   * Iraq
   * @deprecated
   */
  Iq = 'IQ',
  /**
   * Iran
   * @deprecated
   */
  Ir = 'IR',
  /**
   * Iceland
   * @deprecated
   */
  Is = 'IS',
  /**
   * Italy
   * @deprecated
   */
  It = 'IT',
  /**
   * Jersey
   * @deprecated
   */
  Je = 'JE',
  /**
   * Jamaica
   * @deprecated
   */
  Jm = 'JM',
  /**
   * Jordan
   * @deprecated
   */
  Jo = 'JO',
  /**
   * Japan
   * @deprecated
   */
  Jp = 'JP',
  /**
   * Kenya
   * @deprecated
   */
  Ke = 'KE',
  /**
   * Kyrgyzstan
   * @deprecated
   */
  Kg = 'KG',
  /**
   * Cambodia
   * @deprecated
   */
  Kh = 'KH',
  /**
   * Kiribati
   * @deprecated
   */
  Ki = 'KI',
  /**
   * Comoros
   * @deprecated
   */
  Km = 'KM',
  /**
   * St. Kitts & Nevis
   * @deprecated
   */
  Kn = 'KN',
  /**
   * North Korea
   * @deprecated
   */
  Kp = 'KP',
  /**
   * South Korea
   * @deprecated
   */
  Kr = 'KR',
  /**
   * Kuwait
   * @deprecated
   */
  Kw = 'KW',
  /**
   * Cayman Islands
   * @deprecated
   */
  Ky = 'KY',
  /**
   * Kazakhstan
   * @deprecated
   */
  Kz = 'KZ',
  /**
   * Laos
   * @deprecated
   */
  La = 'LA',
  /**
   * Lebanon
   * @deprecated
   */
  Lb = 'LB',
  /**
   * St. Lucia
   * @deprecated
   */
  Lc = 'LC',
  /**
   * Liechtenstein
   * @deprecated
   */
  Li = 'LI',
  /**
   * Sri Lanka
   * @deprecated
   */
  Lk = 'LK',
  /**
   * Liberia
   * @deprecated
   */
  Lr = 'LR',
  /**
   * Lesotho
   * @deprecated
   */
  Ls = 'LS',
  /**
   * Lithuania
   * @deprecated
   */
  Lt = 'LT',
  /**
   * Luxembourg
   * @deprecated
   */
  Lu = 'LU',
  /**
   * Latvia
   * @deprecated
   */
  Lv = 'LV',
  /**
   * Libya
   * @deprecated
   */
  Ly = 'LY',
  /**
   * Morocco
   * @deprecated
   */
  Ma = 'MA',
  /**
   * Monaco
   * @deprecated
   */
  Mc = 'MC',
  /**
   * Moldova
   * @deprecated
   */
  Md = 'MD',
  /**
   * Montenegro
   * @deprecated
   */
  Me = 'ME',
  /**
   * St. Martin
   * @deprecated
   */
  Mf = 'MF',
  /**
   * Madagascar
   * @deprecated
   */
  Mg = 'MG',
  /**
   * Marshall Islands
   * @deprecated
   */
  Mh = 'MH',
  /**
   * Macedonia
   * @deprecated
   */
  Mk = 'MK',
  /**
   * Mali
   * @deprecated
   */
  Ml = 'ML',
  /**
   * Myanmar (Burma)
   * @deprecated
   */
  Mm = 'MM',
  /**
   * Mongolia
   * @deprecated
   */
  Mn = 'MN',
  /**
   * Macau SAR China
   * @deprecated
   */
  Mo = 'MO',
  /**
   * Northern Mariana Islands
   * @deprecated
   */
  Mp = 'MP',
  /**
   * Martinique
   * @deprecated
   */
  Mq = 'MQ',
  /**
   * Mauritania
   * @deprecated
   */
  Mr = 'MR',
  /**
   * Montserrat
   * @deprecated
   */
  Ms = 'MS',
  /**
   * Malta
   * @deprecated
   */
  Mt = 'MT',
  /**
   * Mauritius
   * @deprecated
   */
  Mu = 'MU',
  /**
   * Maldives
   * @deprecated
   */
  Mv = 'MV',
  /**
   * Malawi
   * @deprecated
   */
  Mw = 'MW',
  /**
   * Mexico
   * @deprecated
   */
  Mx = 'MX',
  /**
   * Malaysia
   * @deprecated
   */
  My = 'MY',
  /**
   * Mozambique
   * @deprecated
   */
  Mz = 'MZ',
  /**
   * Namibia
   * @deprecated
   */
  Na = 'NA',
  /**
   * New Caledonia
   * @deprecated
   */
  Nc = 'NC',
  /**
   * Niger
   * @deprecated
   */
  Ne = 'NE',
  /**
   * Norfolk Island
   * @deprecated
   */
  Nf = 'NF',
  /**
   * Nigeria
   * @deprecated
   */
  Ng = 'NG',
  /**
   * Nicaragua
   * @deprecated
   */
  Ni = 'NI',
  /**
   * Netherlands
   * @deprecated
   */
  Nl = 'NL',
  /**
   * Norway
   * @deprecated
   */
  No = 'NO',
  /**
   * Nepal
   * @deprecated
   */
  Np = 'NP',
  /**
   * Nauru
   * @deprecated
   */
  Nr = 'NR',
  /**
   * Niue
   * @deprecated
   */
  Nu = 'NU',
  /**
   * New Zealand
   * @deprecated
   */
  Nz = 'NZ',
  /**
   * Oman
   * @deprecated
   */
  Om = 'OM',
  /**
   * Panama
   * @deprecated
   */
  Pa = 'PA',
  /**
   * Peru
   * @deprecated
   */
  Pe = 'PE',
  /**
   * French Polynesia
   * @deprecated
   */
  Pf = 'PF',
  /**
   * Papua New Guinea
   * @deprecated
   */
  Pg = 'PG',
  /**
   * Philippines
   * @deprecated
   */
  Ph = 'PH',
  /**
   * Pakistan
   * @deprecated
   */
  Pk = 'PK',
  /**
   * Poland
   * @deprecated
   */
  Pl = 'PL',
  /**
   * St. Pierre & Miquelon
   * @deprecated
   */
  Pm = 'PM',
  /**
   * Pitcairn Islands
   * @deprecated
   */
  Pn = 'PN',
  /**
   * Palestinian Territories
   * @deprecated
   */
  Ps = 'PS',
  /**
   * Portugal
   * @deprecated
   */
  Pt = 'PT',
  /**
   * Palau
   * @deprecated
   */
  Pw = 'PW',
  /**
   * Paraguay
   * @deprecated
   */
  Py = 'PY',
  /**
   * Qatar
   * @deprecated
   */
  Qa = 'QA',
  /**
   * Réunion
   * @deprecated
   */
  Re = 'RE',
  /**
   * Romania
   * @deprecated
   */
  Ro = 'RO',
  /**
   * Serbia
   * @deprecated
   */
  Rs = 'RS',
  /**
   * Russia
   * @deprecated
   */
  Ru = 'RU',
  /**
   * Rwanda
   * @deprecated
   */
  Rw = 'RW',
  /**
   * Saudi Arabia
   * @deprecated
   */
  Sa = 'SA',
  /**
   * Solomon Islands
   * @deprecated
   */
  Sb = 'SB',
  /**
   * Seychelles
   * @deprecated
   */
  Sc = 'SC',
  /**
   * Sudan
   * @deprecated
   */
  Sd = 'SD',
  /**
   * Sweden
   * @deprecated
   */
  Se = 'SE',
  /**
   * Singapore
   * @deprecated
   */
  Sg = 'SG',
  /**
   * St. Helena
   * @deprecated
   */
  Sh = 'SH',
  /**
   * Slovenia
   * @deprecated
   */
  Si = 'SI',
  /**
   * Svalbard & Jan Mayen
   * @deprecated
   */
  Sj = 'SJ',
  /**
   * Slovakia
   * @deprecated
   */
  Sk = 'SK',
  /**
   * Sierra Leone
   * @deprecated
   */
  Sl = 'SL',
  /**
   * San Marino
   * @deprecated
   */
  Sm = 'SM',
  /**
   * Senegal
   * @deprecated
   */
  Sn = 'SN',
  /**
   * Somalia
   * @deprecated
   */
  So = 'SO',
  /**
   * Suriname
   * @deprecated
   */
  Sr = 'SR',
  /**
   * São Tomé & Príncipe
   * @deprecated
   */
  St = 'ST',
  /**
   * El Salvador
   * @deprecated
   */
  Sv = 'SV',
  /**
   * Syria
   * @deprecated
   */
  Sy = 'SY',
  /**
   * Swaziland
   * @deprecated
   */
  Sz = 'SZ',
  /**
   * Turks & Caicos Islands
   * @deprecated
   */
  Tc = 'TC',
  /**
   * Chad
   * @deprecated
   */
  Td = 'TD',
  /**
   * French Southern Territories
   * @deprecated
   */
  Tf = 'TF',
  /**
   * Togo
   * @deprecated
   */
  Tg = 'TG',
  /**
   * Thailand
   * @deprecated
   */
  Th = 'TH',
  /**
   * Tajikistan
   * @deprecated
   */
  Tj = 'TJ',
  /**
   * Tokelau
   * @deprecated
   */
  Tk = 'TK',
  /**
   * Timor-Leste
   * @deprecated
   */
  Tl = 'TL',
  /**
   * Turkmenistan
   * @deprecated
   */
  Tm = 'TM',
  /**
   * Tunisia
   * @deprecated
   */
  Tn = 'TN',
  /**
   * Tonga
   * @deprecated
   */
  To = 'TO',
  /**
   * Turkey
   * @deprecated
   */
  Tr = 'TR',
  /**
   * Trinidad & Tobago
   * @deprecated
   */
  Tt = 'TT',
  /**
   * Tuvalu
   * @deprecated
   */
  Tv = 'TV',
  /**
   * Taiwan
   * @deprecated
   */
  Tw = 'TW',
  /**
   * Tanzania
   * @deprecated
   */
  Tz = 'TZ',
  /**
   * Ukraine
   * @deprecated
   */
  Ua = 'UA',
  /**
   * Uganda
   * @deprecated
   */
  Ug = 'UG',
  /**
   * U.S. Outlying Islands
   * @deprecated
   */
  Um = 'UM',
  /**
   * United States
   * @deprecated
   */
  Us = 'US',
  /**
   * Uruguay
   * @deprecated
   */
  Uy = 'UY',
  /**
   * Uzbekistan
   * @deprecated
   */
  Uz = 'UZ',
  /**
   * Vatican City
   * @deprecated
   */
  Va = 'VA',
  /**
   * St. Vincent & Grenadines
   * @deprecated
   */
  Vc = 'VC',
  /**
   * Venezuela
   * @deprecated
   */
  Ve = 'VE',
  /**
   * British Virgin Islands
   * @deprecated
   */
  Vg = 'VG',
  /**
   * U.S. Virgin Islands
   * @deprecated
   */
  Vi = 'VI',
  /**
   * Vietnam
   * @deprecated
   */
  Vn = 'VN',
  /**
   * Vanuatu
   * @deprecated
   */
  Vu = 'VU',
  /**
   * Wallis & Futuna
   * @deprecated
   */
  Wf = 'WF',
  /**
   * Samoa
   * @deprecated
   */
  Ws = 'WS',
  /**
   * Yemen
   * @deprecated
   */
  Ye = 'YE',
  /**
   * Mayotte
   * @deprecated
   */
  Yt = 'YT',
  /**
   * South Africa
   * @deprecated
   */
  Za = 'ZA',
  /**
   * Zambia
   * @deprecated
   */
  Zm = 'ZM',
  /**
   * Zimbabwe
   * @deprecated
   */
  Zw = 'ZW'
}

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Defines a new gift registry. */
export type CreateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The name of the event. */
  event_name: Scalars['String']['input'];
  /** The ID of the selected event type. */
  gift_registry_type_uid: Scalars['ID']['input'];
  /** A message describing the event. */
  message: Scalars['String']['input'];
  /** Indicates whether the registry is PRIVATE or PUBLIC. */
  privacy_settings: GiftRegistryPrivacySettings;
  /** The list of people who receive notifications about the registry. */
  registrants: Array<InputMaybe<AddGiftRegistryRegistrantInput>>;
  /** The shipping address for all gift registry items. */
  shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
  /** Indicates whether the registry is ACTIVE or INACTIVE. */
  status: GiftRegistryStatus;
};

/** Contains the results of a request to create a gift registry. */
export type CreateGiftRegistryOutput = {
  __typename?: 'CreateGiftRegistryOutput';
  /** The newly-created gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

export type CreateNonceByPublicHash = {
  publicHash: Scalars['String']['input'];
};

export type CreateNonceByPublicHashOutput = {
  __typename?: 'CreateNonceByPublicHashOutput';
  bin: Scalars['String']['output'];
  nonce: Scalars['String']['output'];
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['input'];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars['String']['input'];
  /** The summary (title) of the review. */
  summary: Scalars['String']['input'];
  /** The review text. */
  text: Scalars['String']['input'];
};

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Product review details. */
  review: ProductReview;
};

/** Defines the name and visibility of a new wish list. */
export type CreateWishlistInput = {
  /** The name of the new wish list. */
  name: Scalars['String']['input'];
  /** Indicates whether the wish list is public or private. */
  visibility: WishlistVisibilityEnum;
};

/** Contains the wish list. */
export type CreateWishlistOutput = {
  __typename?: 'CreateWishlistOutput';
  /** The newly-created wish list */
  wishlist: Wishlist;
};

export type CreateZippayCheckoutOutput = {
  __typename?: 'CreateZippayCheckoutOutput';
  /** A URL that can be used to redirect the consumer to the Zippay screenflow. */
  RedirectCheckoutUrl: Scalars['String']['output'];
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int']['input'];
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int']['input'];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int']['input'];
  /** The credit card type. */
  cc_type: Scalars['String']['input'];
};

/** Contains credit memo details. */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']['output'];
  /** An array containing details about refunded items. */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number. */
  number: Scalars['String']['output'];
  /** Details about the total refunded amount. */
  total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order. */
  adjustment: Money;
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the credit memo. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The credit memo tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo. */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo. */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The base currency set for the store, such as USD. */
  base_currency_code?: Maybe<Scalars['String']['output']>;
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']['output']>;
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code?: Maybe<Scalars['String']['output']>;
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol?: Maybe<Scalars['String']['output']>;
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** The list of available currency codes. */
export enum CurrencyEnum {
  /** @deprecated  */
  Aed = 'AED',
  /** @deprecated  */
  Afn = 'AFN',
  /** @deprecated  */
  All = 'ALL',
  /** @deprecated  */
  Amd = 'AMD',
  /** @deprecated  */
  Ang = 'ANG',
  /** @deprecated  */
  Aoa = 'AOA',
  /** @deprecated  */
  Ars = 'ARS',
  /** @deprecated  */
  Aud = 'AUD',
  /** @deprecated  */
  Awg = 'AWG',
  /** @deprecated  */
  Azm = 'AZM',
  /** @deprecated  */
  Azn = 'AZN',
  /** @deprecated  */
  Bam = 'BAM',
  /** @deprecated  */
  Bbd = 'BBD',
  /** @deprecated  */
  Bdt = 'BDT',
  /** @deprecated  */
  Bgn = 'BGN',
  /** @deprecated  */
  Bhd = 'BHD',
  /** @deprecated  */
  Bif = 'BIF',
  /** @deprecated  */
  Bmd = 'BMD',
  /** @deprecated  */
  Bnd = 'BND',
  /** @deprecated  */
  Bob = 'BOB',
  /** @deprecated  */
  Brl = 'BRL',
  /** @deprecated  */
  Bsd = 'BSD',
  /** @deprecated  */
  Btn = 'BTN',
  /** @deprecated  */
  Buk = 'BUK',
  /** @deprecated  */
  Bwp = 'BWP',
  /** @deprecated  */
  Byn = 'BYN',
  /** @deprecated  */
  Bzd = 'BZD',
  /** @deprecated  */
  Cad = 'CAD',
  /** @deprecated  */
  Cdf = 'CDF',
  /** @deprecated  */
  Che = 'CHE',
  /** @deprecated  */
  Chf = 'CHF',
  /** @deprecated  */
  Chw = 'CHW',
  /** @deprecated  */
  Clp = 'CLP',
  /** @deprecated  */
  Cny = 'CNY',
  /** @deprecated  */
  Cop = 'COP',
  /** @deprecated  */
  Crc = 'CRC',
  /** @deprecated  */
  Cup = 'CUP',
  /** @deprecated  */
  Cve = 'CVE',
  /** @deprecated  */
  Czk = 'CZK',
  /** @deprecated  */
  Djf = 'DJF',
  /** @deprecated  */
  Dkk = 'DKK',
  /** @deprecated  */
  Dop = 'DOP',
  /** @deprecated  */
  Dzd = 'DZD',
  /** @deprecated  */
  Eek = 'EEK',
  /** @deprecated  */
  Egp = 'EGP',
  /** @deprecated  */
  Ern = 'ERN',
  /** @deprecated  */
  Etb = 'ETB',
  /** @deprecated  */
  Eur = 'EUR',
  /** @deprecated  */
  Fjd = 'FJD',
  /** @deprecated  */
  Fkp = 'FKP',
  /** @deprecated  */
  Gbp = 'GBP',
  /** @deprecated  */
  Gek = 'GEK',
  /** @deprecated  */
  Gel = 'GEL',
  /** @deprecated  */
  Ghs = 'GHS',
  /** @deprecated  */
  Gip = 'GIP',
  /** @deprecated  */
  Gmd = 'GMD',
  /** @deprecated  */
  Gnf = 'GNF',
  /** @deprecated  */
  Gqe = 'GQE',
  /** @deprecated  */
  Gtq = 'GTQ',
  /** @deprecated  */
  Gyd = 'GYD',
  /** @deprecated  */
  Hkd = 'HKD',
  /** @deprecated  */
  Hnl = 'HNL',
  /** @deprecated  */
  Hrk = 'HRK',
  /** @deprecated  */
  Htg = 'HTG',
  /** @deprecated  */
  Huf = 'HUF',
  /** @deprecated  */
  Idr = 'IDR',
  /** @deprecated  */
  Ils = 'ILS',
  /** @deprecated  */
  Inr = 'INR',
  /** @deprecated  */
  Iqd = 'IQD',
  /** @deprecated  */
  Irr = 'IRR',
  /** @deprecated  */
  Isk = 'ISK',
  /** @deprecated  */
  Jmd = 'JMD',
  /** @deprecated  */
  Jod = 'JOD',
  /** @deprecated  */
  Jpy = 'JPY',
  /** @deprecated  */
  Kes = 'KES',
  /** @deprecated  */
  Kgs = 'KGS',
  /** @deprecated  */
  Khr = 'KHR',
  /** @deprecated  */
  Kmf = 'KMF',
  /** @deprecated  */
  Kpw = 'KPW',
  /** @deprecated  */
  Krw = 'KRW',
  /** @deprecated  */
  Kwd = 'KWD',
  /** @deprecated  */
  Kyd = 'KYD',
  /** @deprecated  */
  Kzt = 'KZT',
  /** @deprecated  */
  Lak = 'LAK',
  /** @deprecated  */
  Lbp = 'LBP',
  /** @deprecated  */
  Lkr = 'LKR',
  /** @deprecated  */
  Lrd = 'LRD',
  /** @deprecated  */
  Lsl = 'LSL',
  /** @deprecated  */
  Lsm = 'LSM',
  /** @deprecated  */
  Ltl = 'LTL',
  /** @deprecated  */
  Lvl = 'LVL',
  /** @deprecated  */
  Lyd = 'LYD',
  /** @deprecated  */
  Mad = 'MAD',
  /** @deprecated  */
  Mdl = 'MDL',
  /** @deprecated  */
  Mga = 'MGA',
  /** @deprecated  */
  Mkd = 'MKD',
  /** @deprecated  */
  Mmk = 'MMK',
  /** @deprecated  */
  Mnt = 'MNT',
  /** @deprecated  */
  Mop = 'MOP',
  /** @deprecated  */
  Mro = 'MRO',
  /** @deprecated  */
  Mur = 'MUR',
  /** @deprecated  */
  Mvr = 'MVR',
  /** @deprecated  */
  Mwk = 'MWK',
  /** @deprecated  */
  Mxn = 'MXN',
  /** @deprecated  */
  Myr = 'MYR',
  /** @deprecated  */
  Mzn = 'MZN',
  /** @deprecated  */
  Nad = 'NAD',
  /** @deprecated  */
  Ngn = 'NGN',
  /** @deprecated  */
  Nic = 'NIC',
  /** @deprecated  */
  Nok = 'NOK',
  /** @deprecated  */
  Npr = 'NPR',
  /** @deprecated  */
  Nzd = 'NZD',
  /** @deprecated  */
  Omr = 'OMR',
  /** @deprecated  */
  Pab = 'PAB',
  /** @deprecated  */
  Pen = 'PEN',
  /** @deprecated  */
  Pgk = 'PGK',
  /** @deprecated  */
  Php = 'PHP',
  /** @deprecated  */
  Pkr = 'PKR',
  /** @deprecated  */
  Pln = 'PLN',
  /** @deprecated  */
  Pyg = 'PYG',
  /** @deprecated  */
  Qar = 'QAR',
  /** @deprecated  */
  Rhd = 'RHD',
  /** @deprecated  */
  Rol = 'ROL',
  /** @deprecated  */
  Ron = 'RON',
  /** @deprecated  */
  Rsd = 'RSD',
  /** @deprecated  */
  Rub = 'RUB',
  /** @deprecated  */
  Rwf = 'RWF',
  /** @deprecated  */
  Sar = 'SAR',
  /** @deprecated  */
  Sbd = 'SBD',
  /** @deprecated  */
  Scr = 'SCR',
  /** @deprecated  */
  Sdg = 'SDG',
  /** @deprecated  */
  Sek = 'SEK',
  /** @deprecated  */
  Sgd = 'SGD',
  /** @deprecated  */
  Shp = 'SHP',
  /** @deprecated  */
  Skk = 'SKK',
  /** @deprecated  */
  Sll = 'SLL',
  /** @deprecated  */
  Sos = 'SOS',
  /** @deprecated  */
  Srd = 'SRD',
  /** @deprecated  */
  Std = 'STD',
  /** @deprecated  */
  Svc = 'SVC',
  /** @deprecated  */
  Syp = 'SYP',
  /** @deprecated  */
  Szl = 'SZL',
  /** @deprecated  */
  Thb = 'THB',
  /** @deprecated  */
  Tjs = 'TJS',
  /** @deprecated  */
  Tmm = 'TMM',
  /** @deprecated  */
  Tnd = 'TND',
  /** @deprecated  */
  Top = 'TOP',
  /** @deprecated  */
  Trl = 'TRL',
  /** @deprecated  */
  Try = 'TRY',
  /** @deprecated  */
  Ttd = 'TTD',
  /** @deprecated  */
  Twd = 'TWD',
  /** @deprecated  */
  Tzs = 'TZS',
  /** @deprecated  */
  Uah = 'UAH',
  /** @deprecated  */
  Ugx = 'UGX',
  /** @deprecated  */
  Usd = 'USD',
  /** @deprecated  */
  Uyu = 'UYU',
  /** @deprecated  */
  Uzs = 'UZS',
  /** @deprecated  */
  Veb = 'VEB',
  /** @deprecated  */
  Vef = 'VEF',
  /** @deprecated  */
  Vnd = 'VND',
  /** @deprecated  */
  Vuv = 'VUV',
  /** @deprecated  */
  Wst = 'WST',
  /** @deprecated  */
  Xcd = 'XCD',
  /** @deprecated  */
  Xof = 'XOF',
  /** @deprecated  */
  Xpf = 'XPF',
  /** @deprecated  */
  Yer = 'YER',
  /** @deprecated  */
  Ytl = 'YTL',
  /** @deprecated  */
  Zar = 'ZAR',
  /** @deprecated  */
  Zmk = 'ZMK',
  /** @deprecated  */
  Zwd = 'ZWD'
}

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

/** An interface containing fields that define the EAV attribute. */
export type CustomAttributeMetadataInterface = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output'];
  /** Default attribute value. */
  default_value?: Maybe<Scalars['String']['output']>;
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum;
  /** The frontend class of the attribute. */
  frontend_class?: Maybe<Scalars['String']['output']>;
  /** The frontend input type of the attribute. */
  frontend_input?: Maybe<AttributeFrontendInputEnum>;
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output'];
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output'];
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']['output']>;
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>;
  /** The relative position of the attribute in a layered navigation block. */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

export type CustomAttributeOptionInterface = {
  /** Is the option value default. */
  is_default: Scalars['Boolean']['output'];
  /** The label assigned to the attribute option. */
  label: Scalars['String']['output'];
  /** The attribute option value. */
  value: Scalars['String']['output'];
};

/** Customer */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses. */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']['output'];
  /** The customers bLoyal ID */
  bLoyalId?: Maybe<Scalars['String']['output']>;
  /** The contents of the customer's compare list. */
  compare_list?: Maybe<CompareList>;
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['output'];
  /** Timestamp indicating when the account was created. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** The customer's date of birth. */
  date_of_birth?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the billing address. */
  default_billing?: Maybe<Scalars['String']['output']>;
  /** The ID assigned to the shipping address. */
  default_shipping?: Maybe<Scalars['String']['output']>;
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob?: Maybe<Scalars['String']['output']>;
  /** Email address for the customer. Must be unique. */
  email: Scalars['EmailAddress']['output'];
  /** Family name for the customer */
  familyName: Scalars['query_getCustomers_oneOf_0_items_familyName']['output'];
  /** The customer's first name. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: Maybe<Scalars['Int']['output']>;
  /** Details about all of the customer's gift registries. */
  gift_registries?: Maybe<Array<Maybe<GiftRegistry>>>;
  /** Details about a specific gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
  /** Given name for the customer */
  givenName?: Maybe<Scalars['query_getCustomers_oneOf_0_items_givenName']['output']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id?: Maybe<Scalars['Int']['output']>;
  /** A automatically assigned unique ID for this customer */
  id: Scalars['UUID']['output'];
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The customer's family name. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The customers Magento ID */
  magentoId?: Maybe<Scalars['String']['output']>;
  /** The customer's middle name. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** Offline orders from Bloyal. */
  offlineOrders?: Maybe<CustomerOrders>;
  orders?: Maybe<CustomerOrders>;
  /** List of saved paypal agreements. */
  paypal_saved_methods?: Maybe<Array<Maybe<PaypalSavedMethod>>>;
  phone?: Maybe<Scalars['query_getCustomers_oneOf_0_items_phone']['output']>;
  /** The preferred name for the customer */
  preferredName?: Maybe<Scalars['query_getCustomers_oneOf_0_items_preferredName']['output']>;
  /** Customers preferred payment method */
  preferred_payment_method: PreferredPaymentMethod;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Previously Purchased products */
  previously_purchased?: Maybe<PreviouslyPurchasedProducts>;
  /** RD Addresses ids. */
  rd_addresses: RdAddresses;
  /** Retrieves the list of Repeat Delivery Orders associated with the customer. */
  repeatOrders?: Maybe<Array<Maybe<RepeatOrder>>>;
  /** Details about the specified return request from the unique ID for a `Return` object. */
  return?: Maybe<Return>;
  /** Information about the customer's return requests. */
  returns?: Maybe<Returns>;
  /** Contains the customer's product reviews. */
  reviews: ProductReviews;
  /** Customer reward points details. */
  reward_points?: Maybe<RewardPoints>;
  /** Store credit information applied for the logged in customer. */
  store_credit?: Maybe<CustomerStoreCredit>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat?: Maybe<Scalars['String']['output']>;
  /** The telephone number */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist;
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Customer */
export type CustomerGift_RegistryArgs = {
  giftRegistryUid: Scalars['ID']['input'];
};


/** Customer */
export type CustomerOfflineOrdersArgs = {
  channelCode?: InputMaybe<Scalars['String']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Customer */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<ScopeTypeEnum>;
  sort?: InputMaybe<CustomerOrderSortInput>;
};


/** Customer */
export type CustomerPreviously_PurchasedArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Customer */
export type CustomerReturnArgs = {
  uid: Scalars['ID']['input'];
};


/** Customer */
export type CustomerReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Customer */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Customer */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID']['input'];
};


/** Customer */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The customer's city or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']['output']>;
  /** @deprecated Custom attributes should not be put into a container. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the address is the customer's default billing address. */
  default_billing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping?: Maybe<Scalars['Boolean']['output']>;
  /** Contains any extension attributes for the address. */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The customer's fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of a `CustomerAddress` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The family name of the person associated with the shipping/billing address. */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** An object containing the region name, region code, and region ID. */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
  /** An array of strings that define the street number and name. */
  street?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The customer's telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** The name assigned to the customer address attribute. */
  attribute_code?: Maybe<Scalars['String']['output']>;
  /** The valuue assigned to the customer address attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']['input'];
  /** The value assigned to the attribute. */
  value: Scalars['String']['input'];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The customer's company. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether the address is the default for repeat delivery orders. */
  is_default_repeat_delivery?: InputMaybe<Scalars['Boolean']['input']>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** Indicates whether the address type. shipping/billing */
  repeat_delivery_type?: InputMaybe<Scalars['String']['input']>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The address region code. */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a pre-defined region. */
  region_id?: Maybe<Scalars['Int']['output']>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains the generated customer token. */
export type CustomerAuthToken = {
  __typename?: 'CustomerAuthToken';
  /** Pass the customer token. */
  customerToken?: Maybe<Scalars['String']['output']>;
  /** Pass the customer session Id. */
  sessionId?: Maybe<Scalars['String']['output']>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. Required for customer creation */
  email: Scalars['String']['input'];
  /** The customer's first name */
  firstname: Scalars['String']['input'];
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name */
  lastname: Scalars['String']['input'];
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']['input']>;
  /** The telephone number */
  telephone?: InputMaybe<Scalars['String']['input']>;
};

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  /** The date and time the purchase was made. */
  date?: Maybe<Scalars['String']['output']>;
  /** The fully qualified URL to the download file. */
  download_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID assigned to the item. */
  order_increment_id?: Maybe<Scalars['String']['output']>;
  /** The remaining number of times the customer can download the product. */
  remaining_downloads?: Maybe<Scalars['String']['output']>;
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status?: Maybe<Scalars['String']['output']>;
};

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** An array of purchased downloadable items. */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. Required for customer creation */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']['input']>;
  /** The telephone number */
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerLoyaltyVouchersOutput = {
  __typename?: 'CustomerLoyaltyVouchersOutput';
  /** Vouchers balance */
  vouchersBalance: Scalars['String']['output'];
  /** Vouchers count */
  vouchersCount: Scalars['String']['output'];
  /** Vouchers used amount */
  vouchersUsedAmount?: Maybe<Scalars['String']['output']>;
};

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order. */
  billing_address?: Maybe<OrderAddress>;
  /** Bundle and save discount. */
  bs_discount?: Maybe<Scalars['Float']['output']>;
  /** The shipping carrier for the order delivery. */
  carrier?: Maybe<Scalars['String']['output']>;
  /** Comments about the order. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the `order_date` field instead. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** A list of credit memos. */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** Indicates whether the customer requested a gift receipt for the order. */
  gift_receipt_included: Scalars['Boolean']['output'];
  /** The selected gift wrapping for the order. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total?: Maybe<Scalars['Float']['output']>;
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']['output'];
  /** @deprecated Use the `id` field instead. */
  increment_id?: Maybe<Scalars['String']['output']>;
  /** A list of invoices for the order. */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order. */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** A list of order items eligible to be in a return request. */
  items_eligible_for_return?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The loyalty and discounts information for order. */
  loyalty_and_discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Member price total. */
  member_price_total?: Maybe<Scalars['Float']['output']>;
  /** The order number. */
  number: Scalars['String']['output'];
  /** The date the order was placed. */
  order_date: Scalars['String']['output'];
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']['output'];
  /** Payment details for the order. */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** Order pickup location. */
  pickup_location?: Maybe<Storelocation>;
  /** Indicates whether the customer requested a printed card for the order. */
  printed_card_included: Scalars['Boolean']['output'];
  /** Repeat delivery total. */
  repeat_delivery_total?: Maybe<Scalars['Float']['output']>;
  /** Return requests associated with this order. */
  returns?: Maybe<Returns>;
  /** A list of shipments for the order. */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order. */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order. */
  shipping_method?: Maybe<Scalars['String']['output']>;
  /** The current Shippit status of the order, represented by one of the statuses in ShippitStatusEnum. */
  shippitStatus?: Maybe<Scalars['String']['output']>;
  /** The current status of the order. */
  status: Scalars['String']['output'];
  /** Subtotal including tax. */
  subtotal_incl_tax?: Maybe<Scalars['Float']['output']>;
  /** Details about the calculated totals for this order. */
  total?: Maybe<OrderTotal>;
};


/** Contains details about each of the customer's orders. */
export type CustomerOrderReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export enum CustomerOrderSortableField {
  /**
   * Sorts customer orders by created_at field
   * @deprecated
   */
  CreatedAt = 'CREATED_AT',
  /**
   * Sorts customer orders by number
   * @deprecated
   */
  Number = 'NUMBER'
}

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
  order_date?: InputMaybe<OrderDateFilterInput>;
  /** Filter customer orders by their Shippit status. */
  shippitStatus?: InputMaybe<OrderShippitStatusFilterInput>;
  status?: InputMaybe<OrderStatusFilterInput>;
};

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  /** Customer details after creating or updating a customer. */
  customer: Customer;
};

/** Contains details about a newly-created or updated customer with generated a token for specified customer */
export type CustomerOutputWithToken = {
  __typename?: 'CustomerOutputWithToken';
  /** Customer details after creating or updating a customer. */
  customer: Customer;
  /** The customer authorization token. */
  token: Scalars['String']['output'];
};

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>;
};

/** Contains store credit information with balance and history. */
export type CustomerStoreCredit = {
  __typename?: 'CustomerStoreCredit';
  /** Contains the customer's store credit balance history. If the history or store credit feature is disabled, then a null value will be returned. */
  balance_history?: Maybe<CustomerStoreCreditHistory>;
  /** The current balance of store credit. */
  current_balance?: Maybe<Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
};


/** Contains store credit information with balance and history. */
export type CustomerStoreCreditBalance_HistoryArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Lists changes to the amount of store credit available to the customer. */
export type CustomerStoreCreditHistory = {
  __typename?: 'CustomerStoreCreditHistory';
  /** An array containing information about changes to the store credit available to the customer. */
  items?: Maybe<Array<Maybe<CustomerStoreCreditHistoryItem>>>;
  /** Metadata for pagination rendering. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of items returned. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Contains store credit history information. */
export type CustomerStoreCreditHistoryItem = {
  __typename?: 'CustomerStoreCreditHistoryItem';
  /** The action that was made on the store credit. */
  action?: Maybe<Scalars['String']['output']>;
  /** The store credit available to the customer as a result of this action.  */
  actual_balance?: Maybe<Money>;
  /** The amount added to or subtracted from the store credit as a result of this action. */
  balance_change?: Maybe<Money>;
  /** The date and time when the store credit change was made. */
  date_time_changed?: Maybe<Scalars['String']['output']>;
};

/** Contains a customer authorization token. */
export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer authorization token. */
  token?: Maybe<Scalars['String']['output']>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']['input']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']['input']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']['input']>;
  /** The telephone number */
  telephone?: InputMaybe<Scalars['String']['input']>;
};

/** Customer */
export type Customer_Input = {
  /** The customers bLoyal ID */
  bLoyalId?: InputMaybe<Scalars['String']['input']>;
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['input'];
  /** Email address for the customer. Must be unique. */
  email: Scalars['EmailAddress']['input'];
  /** Family name for the customer */
  familyName: Scalars['query_getCustomers_oneOf_0_items_familyName']['input'];
  /** Given name for the customer */
  givenName?: InputMaybe<Scalars['query_getCustomers_oneOf_0_items_givenName']['input']>;
  /** A automatically assigned unique ID for this customer */
  id: Scalars['UUID']['input'];
  /** The customers Magento ID */
  magentoId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['query_getCustomers_oneOf_0_items_phone']['input']>;
  /** The preferred name for the customer */
  preferredName?: InputMaybe<Scalars['query_getCustomers_oneOf_0_items_preferredName']['input']>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['input'];
};

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** Defines the customizable date type. */
export enum CustomizableDateTypeEnum {
  /** @deprecated  */
  Date = 'DATE',
  /** @deprecated  */
  DateTime = 'DATE_TIME',
  /** @deprecated  */
  Time = 'TIME'
}

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']['output']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']['output']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']['output']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The string value of the option. */
  value_string: Scalars['String']['input'];
};

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']['output']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']['output']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']['output'];
};

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']['output'];
};

/** Contains the status of the request to delete a wish list and an array of the customer's remaining wish lists. */
export type DeleteWishlistOutput = {
  __typename?: 'DeleteWishlistOutput';
  /** Indicates whether the wish list was deleted. */
  status: Scalars['Boolean']['output'];
  /** A list of undeleted wish lists. */
  wishlists: Array<Maybe<Wishlist>>;
};

/** Specifies the delivery information input. */
export type DeliveryInformationInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The delivery information details input. */
  shipping_information: ShippingInformationDetailInput;
};

/** The delivery information output */
export type DeliveryInformationOutput = {
  __typename?: 'DeliveryInformationOutput';
  /** The authority to leave */
  authority_to_leave?: Maybe<Scalars['Boolean']['output']>;
  /** The delivery instructions */
  delivery_instructions?: Maybe<Scalars['String']['output']>;
};

export enum Directus_EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Directus_Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Directus_Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Directus_Category = {
  __typename?: 'Directus_category';
  category_tree_id?: Maybe<Directus_Category_Navigation>;
  children?: Maybe<Array<Maybe<Directus_Category>>>;
  children_func?: Maybe<Directus_Count_Functions>;
  children_sort?: Maybe<Scalars['Int']['output']>;
  containers?: Maybe<Array<Maybe<Directus_Category_Category>>>;
  containers_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  environment_ids?: Maybe<Scalars['JSON']['output']>;
  environment_ids_func?: Maybe<Directus_Count_Functions>;
  filters?: Maybe<Scalars['JSON']['output']>;
  filters_func?: Maybe<Directus_Count_Functions>;
  icon?: Maybe<Directus_Directus_Files>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Directus_Category>;
  pet_wellness_articles?: Maybe<Array<Maybe<Directus_Pet_Wellness_Articles_Category>>>;
  pet_wellness_articles_func?: Maybe<Directus_Count_Functions>;
  resource_articles?: Maybe<Scalars['String']['output']>;
  resource_articles_func?: Maybe<Directus_Count_Functions>;
  shop_articles?: Maybe<Scalars['String']['output']>;
  shop_articles_func?: Maybe<Directus_Count_Functions>;
  shop_category_page_articles?: Maybe<Scalars['String']['output']>;
  shop_category_page_articles_func?: Maybe<Directus_Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tag_value?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Directus_CategoryCategory_Tree_IdArgs = {
  filter?: InputMaybe<Directus_Category_Navigation_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CategoryChildrenArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CategoryContainersArgs = {
  filter?: InputMaybe<Directus_Category_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CategoryIconArgs = {
  filter?: InputMaybe<Directus_Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CategoryParent_IdArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CategoryPet_Wellness_ArticlesArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Category_Aggregated = {
  __typename?: 'Directus_category_aggregated';
  avg?: Maybe<Directus_Category_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Category_Aggregated_Fields>;
  count?: Maybe<Directus_Category_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Category_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Category_Aggregated_Fields>;
  min?: Maybe<Directus_Category_Aggregated_Fields>;
  sum?: Maybe<Directus_Category_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Category_Aggregated_Fields>;
};

export type Directus_Category_Aggregated_Count = {
  __typename?: 'Directus_category_aggregated_count';
  category_tree_id?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Scalars['Int']['output']>;
  children_sort?: Maybe<Scalars['Int']['output']>;
  /** This category will be available as a sub-category of all container categories */
  containers?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  environment_ids?: Maybe<Scalars['Int']['output']>;
  filters?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  pet_wellness_articles?: Maybe<Scalars['Int']['output']>;
  resource_articles?: Maybe<Scalars['Int']['output']>;
  shop_articles?: Maybe<Scalars['Int']['output']>;
  shop_category_page_articles?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tag_value?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Category_Aggregated_Fields = {
  __typename?: 'Directus_category_aggregated_fields';
  category_tree_id?: Maybe<Scalars['Float']['output']>;
  children_sort?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Category_Category = {
  __typename?: 'Directus_category_category';
  category_id?: Maybe<Directus_Category>;
  id: Scalars['ID']['output'];
  related_category_id?: Maybe<Directus_Category>;
};


export type Directus_Category_CategoryCategory_IdArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_Category_CategoryRelated_Category_IdArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Category_Category_Aggregated = {
  __typename?: 'Directus_category_category_aggregated';
  avg?: Maybe<Directus_Category_Category_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Category_Category_Aggregated_Fields>;
  count?: Maybe<Directus_Category_Category_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Category_Category_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Category_Category_Aggregated_Fields>;
  min?: Maybe<Directus_Category_Category_Aggregated_Fields>;
  sum?: Maybe<Directus_Category_Category_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Category_Category_Aggregated_Fields>;
};

export type Directus_Category_Category_Aggregated_Count = {
  __typename?: 'Directus_category_category_aggregated_count';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  related_category_id?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Category_Category_Aggregated_Fields = {
  __typename?: 'Directus_category_category_aggregated_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  related_category_id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Category_Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Category_Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Category_Category_Filter>>>;
  category_id?: InputMaybe<Directus_Category_Filter>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  related_category_id?: InputMaybe<Directus_Category_Filter>;
};

export type Directus_Category_Category_Mutated = {
  __typename?: 'Directus_category_category_mutated';
  data?: Maybe<Directus_Category_Category>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Category_Filter>>>;
  category_tree_id?: InputMaybe<Directus_Category_Navigation_Filter>;
  children?: InputMaybe<Directus_Category_Filter>;
  children_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  children_sort?: InputMaybe<Directus_Number_Filter_Operators>;
  containers?: InputMaybe<Directus_Category_Category_Filter>;
  containers_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Directus_Date_Filter_Operators>;
  date_created_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Directus_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  environment_ids?: InputMaybe<Directus_String_Filter_Operators>;
  environment_ids_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  filters?: InputMaybe<Directus_String_Filter_Operators>;
  filters_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  icon?: InputMaybe<Directus_Directus_Files_Filter>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  name?: InputMaybe<Directus_String_Filter_Operators>;
  parent_id?: InputMaybe<Directus_Category_Filter>;
  pet_wellness_articles?: InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>;
  pet_wellness_articles_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  resource_articles?: InputMaybe<Directus_String_Filter_Operators>;
  resource_articles_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  shop_articles?: InputMaybe<Directus_String_Filter_Operators>;
  shop_articles_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  shop_category_page_articles?: InputMaybe<Directus_String_Filter_Operators>;
  shop_category_page_articles_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  sort?: InputMaybe<Directus_Number_Filter_Operators>;
  status?: InputMaybe<Directus_String_Filter_Operators>;
  tag_value?: InputMaybe<Directus_String_Filter_Operators>;
  type?: InputMaybe<Directus_String_Filter_Operators>;
  user_created?: InputMaybe<Directus_String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_String_Filter_Operators>;
};

export type Directus_Category_Mutated = {
  __typename?: 'Directus_category_mutated';
  data?: Maybe<Directus_Category>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Category_Navigation = {
  __typename?: 'Directus_category_navigation';
  category_tree?: Maybe<Array<Maybe<Directus_Category>>>;
  category_tree_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Directus_Category_NavigationCategory_TreeArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Category_Navigation_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Category_Navigation_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Category_Navigation_Filter>>>;
  category_tree?: InputMaybe<Directus_Category_Filter>;
  category_tree_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Directus_Date_Filter_Operators>;
  date_created_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Directus_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  sort?: InputMaybe<Directus_Number_Filter_Operators>;
  status?: InputMaybe<Directus_String_Filter_Operators>;
  user_created?: InputMaybe<Directus_String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_String_Filter_Operators>;
};

export type Directus_Category_Navigation_Mutated = {
  __typename?: 'Directus_category_navigation_mutated';
  data?: Maybe<Directus_Category_Navigation>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Count_Function_Filter_Operators = {
  count?: InputMaybe<Directus_Number_Filter_Operators>;
};

export type Directus_Count_Functions = {
  __typename?: 'Directus_count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Directus_Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Directus_Number_Filter_Operators>;
  hour?: InputMaybe<Directus_Number_Filter_Operators>;
  minute?: InputMaybe<Directus_Number_Filter_Operators>;
  month?: InputMaybe<Directus_Number_Filter_Operators>;
  second?: InputMaybe<Directus_Number_Filter_Operators>;
  week?: InputMaybe<Directus_Number_Filter_Operators>;
  weekday?: InputMaybe<Directus_Number_Filter_Operators>;
  year?: InputMaybe<Directus_Number_Filter_Operators>;
};

export type Directus_Datetime_Functions = {
  __typename?: 'Directus_datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Directus_Files = {
  __typename?: 'Directus_directus_files';
  allow_public_access?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<Array<Maybe<Directus_Category>>>;
  category_func?: Maybe<Directus_Count_Functions>;
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Directus_Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Directus_GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Directus_Count_Functions>;
  modified_by?: Maybe<Scalars['String']['output']>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Directus_Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Directus_Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Directus_Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['String']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Directus_Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_Directus_FilesCategoryArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Directus_Files_Filter>>>;
  allow_public_access?: InputMaybe<Directus_Boolean_Filter_Operators>;
  category?: InputMaybe<Directus_Category_Filter>;
  category_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  charset?: InputMaybe<Directus_String_Filter_Operators>;
  created_on?: InputMaybe<Directus_Date_Filter_Operators>;
  created_on_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  description?: InputMaybe<Directus_String_Filter_Operators>;
  duration?: InputMaybe<Directus_Number_Filter_Operators>;
  embed?: InputMaybe<Directus_String_Filter_Operators>;
  filename_disk?: InputMaybe<Directus_String_Filter_Operators>;
  filename_download?: InputMaybe<Directus_String_Filter_Operators>;
  filesize?: InputMaybe<Directus_Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Directus_Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Directus_Number_Filter_Operators>;
  folder?: InputMaybe<Directus_String_Filter_Operators>;
  height?: InputMaybe<Directus_Number_Filter_Operators>;
  id?: InputMaybe<Directus_String_Filter_Operators>;
  location?: InputMaybe<Directus_String_Filter_Operators>;
  metadata?: InputMaybe<Directus_String_Filter_Operators>;
  metadata_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_String_Filter_Operators>;
  modified_on?: InputMaybe<Directus_Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<Directus_String_Filter_Operators>;
  tags?: InputMaybe<Directus_String_Filter_Operators>;
  tags_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  title?: InputMaybe<Directus_String_Filter_Operators>;
  tus_data?: InputMaybe<Directus_String_Filter_Operators>;
  tus_data_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<Directus_String_Filter_Operators>;
  type?: InputMaybe<Directus_String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_String_Filter_Operators>;
  uploaded_on?: InputMaybe<Directus_Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Directus_Number_Filter_Operators>;
};

export type Directus_Directus_Files_Mutated = {
  __typename?: 'Directus_directus_files_mutated';
  data?: Maybe<Directus_Directus_Files>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Feature_Toggles = {
  __typename?: 'Directus_feature_toggles';
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  loyalty_vouchers?: Maybe<Scalars['Boolean']['output']>;
  loyalty_vouchers_updated?: Maybe<Scalars['Date']['output']>;
  loyalty_vouchers_updated_func?: Maybe<Directus_Datetime_Functions>;
  minimum_mobile_app_build_number: Scalars['Int']['output'];
  pet_ai?: Maybe<Scalars['Boolean']['output']>;
  pet_ai_updated?: Maybe<Scalars['Date']['output']>;
  pet_ai_updated_func?: Maybe<Directus_Datetime_Functions>;
  petbarn_card_progress_bar?: Maybe<Scalars['Boolean']['output']>;
  petbarn_card_progress_bar_updated?: Maybe<Scalars['Date']['output']>;
  petbarn_card_progress_bar_updated_func?: Maybe<Directus_Datetime_Functions>;
  rewards_vouchers?: Maybe<Scalars['Boolean']['output']>;
  rewards_vouchers_updated?: Maybe<Scalars['Date']['output']>;
  rewards_vouchers_updated_func?: Maybe<Directus_Datetime_Functions>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Directus_Feature_Toggles_Mutated = {
  __typename?: 'Directus_feature_toggles_mutated';
  data?: Maybe<Directus_Feature_Toggles>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Membership_Benefits = {
  __typename?: 'Directus_membership_benefits';
  categories?: Maybe<Array<Maybe<Directus_Membership_Benefits_Category>>>;
  categories_func?: Maybe<Directus_Count_Functions>;
  code?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Directus_Membership_BenefitsCategoriesArgs = {
  filter?: InputMaybe<Directus_Membership_Benefits_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Membership_Benefits_Aggregated = {
  __typename?: 'Directus_membership_benefits_aggregated';
  avg?: Maybe<Directus_Membership_Benefits_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Membership_Benefits_Aggregated_Fields>;
  count?: Maybe<Directus_Membership_Benefits_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Membership_Benefits_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Membership_Benefits_Aggregated_Fields>;
  min?: Maybe<Directus_Membership_Benefits_Aggregated_Fields>;
  sum?: Maybe<Directus_Membership_Benefits_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Membership_Benefits_Aggregated_Fields>;
};

export type Directus_Membership_Benefits_Aggregated_Count = {
  __typename?: 'Directus_membership_benefits_aggregated_count';
  categories?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Membership_Benefits_Aggregated_Fields = {
  __typename?: 'Directus_membership_benefits_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Membership_Benefits_Category = {
  __typename?: 'Directus_membership_benefits_category';
  category_id?: Maybe<Directus_Category>;
  id: Scalars['ID']['output'];
  membership_benefits_id?: Maybe<Directus_Membership_Benefits>;
};


export type Directus_Membership_Benefits_CategoryCategory_IdArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_Membership_Benefits_CategoryMembership_Benefits_IdArgs = {
  filter?: InputMaybe<Directus_Membership_Benefits_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Membership_Benefits_Category_Aggregated = {
  __typename?: 'Directus_membership_benefits_category_aggregated';
  avg?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Fields>;
  count?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Fields>;
  min?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Fields>;
  sum?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Membership_Benefits_Category_Aggregated_Fields>;
};

export type Directus_Membership_Benefits_Category_Aggregated_Count = {
  __typename?: 'Directus_membership_benefits_category_aggregated_count';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  membership_benefits_id?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Membership_Benefits_Category_Aggregated_Fields = {
  __typename?: 'Directus_membership_benefits_category_aggregated_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  membership_benefits_id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Membership_Benefits_Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Membership_Benefits_Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Membership_Benefits_Category_Filter>>>;
  category_id?: InputMaybe<Directus_Category_Filter>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  membership_benefits_id?: InputMaybe<Directus_Membership_Benefits_Filter>;
};

export type Directus_Membership_Benefits_Category_Mutated = {
  __typename?: 'Directus_membership_benefits_category_mutated';
  data?: Maybe<Directus_Membership_Benefits_Category>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Membership_Benefits_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Membership_Benefits_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Membership_Benefits_Filter>>>;
  categories?: InputMaybe<Directus_Membership_Benefits_Category_Filter>;
  categories_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  code?: InputMaybe<Directus_String_Filter_Operators>;
  date_created?: InputMaybe<Directus_Date_Filter_Operators>;
  date_created_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Directus_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  description?: InputMaybe<Directus_String_Filter_Operators>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  name?: InputMaybe<Directus_String_Filter_Operators>;
  sort?: InputMaybe<Directus_Number_Filter_Operators>;
  status?: InputMaybe<Directus_String_Filter_Operators>;
  tags?: InputMaybe<Directus_String_Filter_Operators>;
  user_created?: InputMaybe<Directus_String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_String_Filter_Operators>;
};

export type Directus_Membership_Benefits_Mutated = {
  __typename?: 'Directus_membership_benefits_mutated';
  data?: Maybe<Directus_Membership_Benefits>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Directus_GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Directus_Pet_Ai_Prompts = {
  __typename?: 'Directus_pet_ai_prompts';
  categories?: Maybe<Array<Maybe<Directus_Pet_Ai_Prompts_Category>>>;
  categories_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Directus_Pet_Ai_PromptsCategoriesArgs = {
  filter?: InputMaybe<Directus_Pet_Ai_Prompts_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Pet_Ai_Prompts_Aggregated = {
  __typename?: 'Directus_pet_ai_prompts_aggregated';
  avg?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Fields>;
  count?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Fields>;
  min?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Fields>;
  sum?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Pet_Ai_Prompts_Aggregated_Fields>;
};

export type Directus_Pet_Ai_Prompts_Aggregated_Count = {
  __typename?: 'Directus_pet_ai_prompts_aggregated_count';
  categories?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Pet_Ai_Prompts_Aggregated_Fields = {
  __typename?: 'Directus_pet_ai_prompts_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Pet_Ai_Prompts_Category = {
  __typename?: 'Directus_pet_ai_prompts_category';
  category_id?: Maybe<Directus_Category>;
  id: Scalars['ID']['output'];
  pet_ai_prompts_id?: Maybe<Directus_Pet_Ai_Prompts>;
};


export type Directus_Pet_Ai_Prompts_CategoryCategory_IdArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_Pet_Ai_Prompts_CategoryPet_Ai_Prompts_IdArgs = {
  filter?: InputMaybe<Directus_Pet_Ai_Prompts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Pet_Ai_Prompts_Category_Aggregated = {
  __typename?: 'Directus_pet_ai_prompts_category_aggregated';
  avg?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Fields>;
  count?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Fields>;
  min?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Fields>;
  sum?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Pet_Ai_Prompts_Category_Aggregated_Fields>;
};

export type Directus_Pet_Ai_Prompts_Category_Aggregated_Count = {
  __typename?: 'Directus_pet_ai_prompts_category_aggregated_count';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pet_ai_prompts_id?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Pet_Ai_Prompts_Category_Aggregated_Fields = {
  __typename?: 'Directus_pet_ai_prompts_category_aggregated_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pet_ai_prompts_id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Pet_Ai_Prompts_Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Pet_Ai_Prompts_Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Pet_Ai_Prompts_Category_Filter>>>;
  category_id?: InputMaybe<Directus_Category_Filter>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  pet_ai_prompts_id?: InputMaybe<Directus_Pet_Ai_Prompts_Filter>;
};

export type Directus_Pet_Ai_Prompts_Category_Mutated = {
  __typename?: 'Directus_pet_ai_prompts_category_mutated';
  data?: Maybe<Directus_Pet_Ai_Prompts_Category>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Pet_Ai_Prompts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Pet_Ai_Prompts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Pet_Ai_Prompts_Filter>>>;
  categories?: InputMaybe<Directus_Pet_Ai_Prompts_Category_Filter>;
  categories_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Directus_Date_Filter_Operators>;
  date_created_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Directus_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  priority?: InputMaybe<Directus_String_Filter_Operators>;
  sort?: InputMaybe<Directus_Number_Filter_Operators>;
  status?: InputMaybe<Directus_String_Filter_Operators>;
  tags?: InputMaybe<Directus_String_Filter_Operators>;
  title?: InputMaybe<Directus_String_Filter_Operators>;
  user_created?: InputMaybe<Directus_String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_String_Filter_Operators>;
};

export type Directus_Pet_Ai_Prompts_Mutated = {
  __typename?: 'Directus_pet_ai_prompts_mutated';
  data?: Maybe<Directus_Pet_Ai_Prompts>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Pet_Wellness_Articles = {
  __typename?: 'Directus_pet_wellness_articles';
  body_text?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<Directus_Pet_Wellness_Articles_Category>>>;
  categories_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  expiry_date?: Maybe<Scalars['Date']['output']>;
  expiry_date_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Directus_Files>;
  publish_date?: Maybe<Scalars['Date']['output']>;
  publish_date_func?: Maybe<Directus_Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  utm_parameters?: Maybe<Scalars['JSON']['output']>;
  utm_parameters_func?: Maybe<Directus_Count_Functions>;
};


export type Directus_Pet_Wellness_ArticlesCategoriesArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_Pet_Wellness_ArticlesImageArgs = {
  filter?: InputMaybe<Directus_Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Pet_Wellness_Articles_Aggregated = {
  __typename?: 'Directus_pet_wellness_articles_aggregated';
  avg?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Fields>;
  count?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Fields>;
  min?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Fields>;
  sum?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Pet_Wellness_Articles_Aggregated_Fields>;
};

export type Directus_Pet_Wellness_Articles_Aggregated_Count = {
  __typename?: 'Directus_pet_wellness_articles_aggregated_count';
  body_text?: Maybe<Scalars['Int']['output']>;
  categories?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  expiry_date?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  publish_date?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  utm_parameters?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Pet_Wellness_Articles_Aggregated_Fields = {
  __typename?: 'Directus_pet_wellness_articles_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Pet_Wellness_Articles_Category = {
  __typename?: 'Directus_pet_wellness_articles_category';
  category_id?: Maybe<Directus_Category>;
  id: Scalars['ID']['output'];
  pet_wellness_articles_id?: Maybe<Directus_Pet_Wellness_Articles>;
};


export type Directus_Pet_Wellness_Articles_CategoryCategory_IdArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_Pet_Wellness_Articles_CategoryPet_Wellness_Articles_IdArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Pet_Wellness_Articles_Category_Aggregated = {
  __typename?: 'Directus_pet_wellness_articles_category_aggregated';
  avg?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Fields>;
  count?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Fields>;
  min?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Fields>;
  sum?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Pet_Wellness_Articles_Category_Aggregated_Fields>;
};

export type Directus_Pet_Wellness_Articles_Category_Aggregated_Count = {
  __typename?: 'Directus_pet_wellness_articles_category_aggregated_count';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pet_wellness_articles_id?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Pet_Wellness_Articles_Category_Aggregated_Fields = {
  __typename?: 'Directus_pet_wellness_articles_category_aggregated_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pet_wellness_articles_id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Pet_Wellness_Articles_Category_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>>>;
  category_id?: InputMaybe<Directus_Category_Filter>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  pet_wellness_articles_id?: InputMaybe<Directus_Pet_Wellness_Articles_Filter>;
};

export type Directus_Pet_Wellness_Articles_Category_Mutated = {
  __typename?: 'Directus_pet_wellness_articles_category_mutated';
  data?: Maybe<Directus_Pet_Wellness_Articles_Category>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Pet_Wellness_Articles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Pet_Wellness_Articles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Pet_Wellness_Articles_Filter>>>;
  body_text?: InputMaybe<Directus_String_Filter_Operators>;
  categories?: InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>;
  categories_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Directus_Date_Filter_Operators>;
  date_created_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Directus_Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  expiry_date?: InputMaybe<Directus_Date_Filter_Operators>;
  expiry_date_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Directus_Number_Filter_Operators>;
  image?: InputMaybe<Directus_Directus_Files_Filter>;
  publish_date?: InputMaybe<Directus_Date_Filter_Operators>;
  publish_date_func?: InputMaybe<Directus_Datetime_Function_Filter_Operators>;
  status?: InputMaybe<Directus_String_Filter_Operators>;
  subtitle?: InputMaybe<Directus_String_Filter_Operators>;
  tags?: InputMaybe<Directus_String_Filter_Operators>;
  title?: InputMaybe<Directus_String_Filter_Operators>;
  url?: InputMaybe<Directus_String_Filter_Operators>;
  user_created?: InputMaybe<Directus_String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_String_Filter_Operators>;
  utm_parameters?: InputMaybe<Directus_String_Filter_Operators>;
  utm_parameters_func?: InputMaybe<Directus_Count_Function_Filter_Operators>;
};

export type Directus_Pet_Wellness_Articles_Mutated = {
  __typename?: 'Directus_pet_wellness_articles_mutated';
  data?: Maybe<Directus_Pet_Wellness_Articles>;
  event?: Maybe<Directus_EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Directus_Version_Category = {
  __typename?: 'Directus_version_category';
  category_tree_id?: Maybe<Scalars['JSON']['output']>;
  children?: Maybe<Scalars['JSON']['output']>;
  children_func?: Maybe<Directus_Count_Functions>;
  children_sort?: Maybe<Scalars['Int']['output']>;
  containers?: Maybe<Scalars['JSON']['output']>;
  containers_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  environment_ids?: Maybe<Scalars['JSON']['output']>;
  environment_ids_func?: Maybe<Directus_Count_Functions>;
  filters?: Maybe<Scalars['JSON']['output']>;
  filters_func?: Maybe<Directus_Count_Functions>;
  icon?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['JSON']['output']>;
  pet_wellness_articles?: Maybe<Scalars['JSON']['output']>;
  pet_wellness_articles_func?: Maybe<Directus_Count_Functions>;
  resource_articles?: Maybe<Scalars['String']['output']>;
  resource_articles_func?: Maybe<Directus_Count_Functions>;
  shop_articles?: Maybe<Scalars['String']['output']>;
  shop_articles_func?: Maybe<Directus_Count_Functions>;
  shop_category_page_articles?: Maybe<Scalars['String']['output']>;
  shop_category_page_articles_func?: Maybe<Directus_Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tag_value?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Directus_Version_Category_Category = {
  __typename?: 'Directus_version_category_category';
  category_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  related_category_id?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Version_Category_Navigation = {
  __typename?: 'Directus_version_category_navigation';
  category_tree?: Maybe<Scalars['JSON']['output']>;
  category_tree_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Directus_Version_Feature_Toggles = {
  __typename?: 'Directus_version_feature_toggles';
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  loyalty_vouchers?: Maybe<Scalars['Boolean']['output']>;
  loyalty_vouchers_updated?: Maybe<Scalars['Date']['output']>;
  loyalty_vouchers_updated_func?: Maybe<Directus_Datetime_Functions>;
  minimum_mobile_app_build_number: Scalars['Int']['output'];
  pet_ai?: Maybe<Scalars['Boolean']['output']>;
  pet_ai_updated?: Maybe<Scalars['Date']['output']>;
  pet_ai_updated_func?: Maybe<Directus_Datetime_Functions>;
  petbarn_card_progress_bar?: Maybe<Scalars['Boolean']['output']>;
  petbarn_card_progress_bar_updated?: Maybe<Scalars['Date']['output']>;
  petbarn_card_progress_bar_updated_func?: Maybe<Directus_Datetime_Functions>;
  rewards_vouchers?: Maybe<Scalars['Boolean']['output']>;
  rewards_vouchers_updated?: Maybe<Scalars['Date']['output']>;
  rewards_vouchers_updated_func?: Maybe<Directus_Datetime_Functions>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Directus_Version_Membership_Benefits = {
  __typename?: 'Directus_version_membership_benefits';
  categories?: Maybe<Scalars['JSON']['output']>;
  categories_func?: Maybe<Directus_Count_Functions>;
  code?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Directus_Version_Membership_Benefits_Category = {
  __typename?: 'Directus_version_membership_benefits_category';
  category_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  membership_benefits_id?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Version_Pet_Ai_Prompts = {
  __typename?: 'Directus_version_pet_ai_prompts';
  categories?: Maybe<Scalars['JSON']['output']>;
  categories_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Directus_Version_Pet_Ai_Prompts_Category = {
  __typename?: 'Directus_version_pet_ai_prompts_category';
  category_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  pet_ai_prompts_id?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Version_Pet_Wellness_Articles = {
  __typename?: 'Directus_version_pet_wellness_articles';
  body_text?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Scalars['JSON']['output']>;
  categories_func?: Maybe<Directus_Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Directus_Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Directus_Datetime_Functions>;
  expiry_date?: Maybe<Scalars['Date']['output']>;
  expiry_date_func?: Maybe<Directus_Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  publish_date?: Maybe<Scalars['Date']['output']>;
  publish_date_func?: Maybe<Directus_Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  utm_parameters?: Maybe<Scalars['JSON']['output']>;
  utm_parameters_func?: Maybe<Directus_Count_Functions>;
};

export type Directus_Version_Pet_Wellness_Articles_Category = {
  __typename?: 'Directus_version_pet_wellness_articles_category';
  category_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  pet_wellness_articles_id?: Maybe<Scalars['JSON']['output']>;
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount. */
  amount: Money;
  /** A description of the discount. */
  label: Scalars['String']['output'];
};

export type DonationsBlock = {
  __typename?: 'DonationsBlock';
  description: Scalars['String']['output'];
  enable: Scalars['Boolean']['output'];
  items?: Maybe<Array<Maybe<DonationsProduct>>>;
  logo: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type DonationsProduct = {
  __typename?: 'DonationsProduct';
  amount: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
};

/** An implementation for downloadable product cart items. */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** An array containing information about the links for the downloadable product added to the cart. */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** An array containing information about samples of the selected downloadable product. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  File = 'FILE',
  /** @deprecated `sample_url` serves to get the downloadable sample */
  Url = 'URL'
}

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']['output']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Order pickup location. */
  pickup_location?: Maybe<Storelocation>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
  /** Subtotal order item. */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** Thumbnail for the product specified in the order. */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately?: Maybe<Scalars['Int']['output']>;
  /** The heading above the list of downloadable products. */
  links_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a product that the shopper downloads. */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads?: Maybe<Scalars['Int']['output']>;
  /** The price of the downloadable product. */
  price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']['output'];
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']['input'];
};

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend. */
  id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']['output']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** The full URL to the downloadable sample. */
  sample_url?: Maybe<Scalars['String']['output']>;
  /** A number indicating the sort order. */
  sort_order?: Maybe<Scalars['Int']['output']>;
  /** The display name of the sample. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** An array containing information about the selected links. */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
  /** An array containing information about the selected samples. */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** Contains a single dynamic block. */
export type DynamicBlock = {
  __typename?: 'DynamicBlock';
  /** The renderable HTML code of the dynamic block. */
  content: ComplexTextValue;
  /** The unique ID of a `DynamicBlock` object. */
  uid: Scalars['ID']['output'];
};

/** Indicates the locations the dynamic block can be placed. If this field is not specified, the query returns all locations. */
export enum DynamicBlockLocationEnum {
  /** @deprecated  */
  Content = 'CONTENT',
  /** @deprecated  */
  Footer = 'FOOTER',
  /** @deprecated  */
  Header = 'HEADER',
  /** @deprecated  */
  Left = 'LEFT',
  /** @deprecated  */
  Right = 'RIGHT'
}

/** Indicates the selected Dynamic Blocks Rotator inline widget. */
export enum DynamicBlockTypeEnum {
  /** @deprecated  */
  CartPriceRuleRelated = 'CART_PRICE_RULE_RELATED',
  /** @deprecated  */
  CatalogPriceRuleRelated = 'CATALOG_PRICE_RULE_RELATED',
  /** @deprecated  */
  Specified = 'SPECIFIED'
}

/** Contains an array of dynamic blocks. */
export type DynamicBlocks = {
  __typename?: 'DynamicBlocks';
  /** An array containing individual dynamic blocks. */
  items: Array<Maybe<DynamicBlock>>;
  /** Metadata for pagination rendering. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of returned dynamic blocks. */
  total_count: Scalars['Int']['output'];
};

/** Defines the dynamic block filter. The filter can identify the block type, location and IDs to return. */
export type DynamicBlocksFilterInput = {
  /** An array of dynamic block UIDs to filter on. */
  dynamic_block_uids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** An array indicating the locations the dynamic block can be placed. */
  locations?: InputMaybe<Array<InputMaybe<DynamicBlockLocationEnum>>>;
  /** A value indicating the type of dynamic block to filter on. */
  type: DynamicBlockTypeEnum;
};

/** Contains details about a custom text attribute that the buyer entered. */
export type EnteredCustomAttributeInput = {
  /** A string that identifies the entered custom attribute. */
  attribute_code: Scalars['String']['input'];
  /** The text or other entered value. */
  value: Scalars['String']['input'];
};

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']['input'];
  /** Text the customer entered. */
  value: Scalars['String']['input'];
};

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated Use `relative_url` instead. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid?: Maybe<Scalars['ID']['output']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode?: Maybe<Scalars['Int']['output']>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Lists the exchange rate. */
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** Specifies the store’s default currency to exchange to. */
  currency_to?: Maybe<Scalars['String']['output']>;
  /** The exchange rate for the store’s default currency. */
  rate?: Maybe<Scalars['Float']['output']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']['input']>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars['String']['input']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars['String']['input']>;
  /** Is null. */
  null?: InputMaybe<Scalars['String']['input']>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars['String']['input']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** The amount of the Fixed Product Tax. */
  amount?: Maybe<Money>;
  /** The display label assigned to the Fixed Product Tax. */
  label?: Maybe<Scalars['String']['output']>;
};

/** Lists display settings for the Fixed Product Tax. */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.'
   * @deprecated
   */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /**
   * The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'.
   * @deprecated
   */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query.
   * @deprecated
   */
  FptDisabled = 'FPT_DISABLED',
  /**
   * The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'.
   * @deprecated
   */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'.
   * @deprecated
   */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

/** Represents an attribute of an item. */
export type FredHopperAttribute = {
  __typename?: 'FredHopperAttribute';
  basetype?: Maybe<Scalars['String']['output']>;
  best_matched?: Maybe<Scalars['Boolean']['output']>;
  isnull?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Array<Maybe<FredHopperAttributeValue>>>;
};

/** Represents a type of attribute. */
export type FredHopperAttributeType = {
  __typename?: 'FredHopperAttributeType';
  basetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents the types of attributes in the search result. */
export type FredHopperAttributeTypes = {
  __typename?: 'FredHopperAttributeTypes';
  attribute_type?: Maybe<Array<Maybe<FredHopperAttributeType>>>;
};

/** Represents the value of an attribute. */
export type FredHopperAttributeValue = {
  __typename?: 'FredHopperAttributeValue';
  non_ml?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents an individual breadcrumb. */
export type FredHopperBreadcrumb = {
  __typename?: 'FredHopperBreadcrumb';
  link?: Maybe<Array<Maybe<FredHopperLink>>>;
  name?: Maybe<FredHopperBreadcrumbName>;
  range?: Maybe<FredHopperBreadcrumbRange>;
  url_params?: Maybe<Scalars['String']['output']>;
};

/** Represents the name of a breadcrumb. */
export type FredHopperBreadcrumbName = {
  __typename?: 'FredHopperBreadcrumbName';
  non_ml?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents the range of a breadcrumb. */
export type FredHopperBreadcrumbRange = {
  __typename?: 'FredHopperBreadcrumbRange';
  invert?: Maybe<Scalars['Boolean']['output']>;
  value_set?: Maybe<Array<Maybe<FredHopperRangeValueSet>>>;
};

/** Represents the breadcrumb trail in the search result. */
export type FredHopperBreadcrumbs = {
  __typename?: 'FredHopperBreadcrumbs';
  crumb?: Maybe<Array<Maybe<FredHopperBreadcrumb>>>;
};

/** Represents custom fields in a theme. */
export type FredHopperCustomField = {
  __typename?: 'FredHopperCustomField';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents a display field in the search result. */
export type FredHopperDisplayField = {
  __typename?: 'FredHopperDisplayField';
  basetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reverse?: Maybe<Scalars['Boolean']['output']>;
  skey?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Represents the display fields in the search result. */
export type FredHopperDisplayFields = {
  __typename?: 'FredHopperDisplayFields';
  field?: Maybe<Array<Maybe<FredHopperDisplayField>>>;
};

/** Represents a facet map in the search result. */
export type FredHopperFacetMap = {
  __typename?: 'FredHopperFacetMap';
  filter?: Maybe<Array<Maybe<FredHopperFilter>>>;
  universe?: Maybe<Scalars['String']['output']>;
};

/** Represents a filter in the facet map. */
export type FredHopperFilter = {
  __typename?: 'FredHopperFilter';
  display_hint?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filtersection?: Maybe<Array<Maybe<FredHopperFilterSection>>>;
  on?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Represents a filter section in a filter. */
export type FredHopperFilterSection = {
  __typename?: 'FredHopperFilterSection';
  link?: Maybe<FredHopperLink>;
  nr?: Maybe<Scalars['Int']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<FredHopperFilterValue>;
};

/** Represents the value of a filter. */
export type FredHopperFilterValue = {
  __typename?: 'FredHopperFilterValue';
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents the footer of the search result, including processing time. */
export type FredHopperFooter = {
  __typename?: 'FredHopperFooter';
  log_args?: Maybe<Scalars['String']['output']>;
  process_time?: Maybe<FredHopperProcessTime>;
};

/** Represents the heading of the items section. */
export type FredHopperHeading = {
  __typename?: 'FredHopperHeading';
  link?: Maybe<Array<Maybe<FredHopperLink>>>;
};

/** Represents implicit ranges in the query. */
export type FredHopperImplicitRanges = {
  __typename?: 'FredHopperImplicitRanges';
  range?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Contains session, user, server, and other contextual information. */
export type FredHopperInfo = {
  __typename?: 'FredHopperInfo';
  country?: Maybe<Scalars['String']['output']>;
  current_universe?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  /** Represents the locale settings. */
  locale?: Maybe<FredHopperLocale>;
  mode?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  query_string_httpencoded?: Maybe<Scalars['String']['output']>;
  /** Represents the query and implicit ranges. */
  ranges?: Maybe<FredHopperRanges>;
  /** Contains server-specific information. */
  server?: Maybe<FredHopperServer>;
  session?: Maybe<Scalars['String']['output']>;
  source_xml?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_type?: Maybe<Scalars['String']['output']>;
  view?: Maybe<Scalars['String']['output']>;
};

/** Represents an item in the items section. */
export type FredHopperItem = {
  __typename?: 'FredHopperItem';
  item?: Maybe<Array<Maybe<FredHopperItemData>>>;
};

/** Represents an item data in the items section. */
export type FredHopperItemData = {
  __typename?: 'FredHopperItemData';
  attribute?: Maybe<Array<Maybe<FredHopperAttribute>>>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Array<Maybe<FredHopperLink>>>;
};

/** Represents the items associated with a theme. */
export type FredHopperItems = {
  __typename?: 'FredHopperItems';
  item?: Maybe<Array<Maybe<FredHopperItem>>>;
};

/** Contains the items section of the search result. */
export type FredHopperItemsSection = {
  __typename?: 'FredHopperItemsSection';
  heading?: Maybe<FredHopperHeading>;
  items?: Maybe<Array<Maybe<FredHopperItem>>>;
  results?: Maybe<FredHopperResults>;
};

/** Represents a link in the search result. */
export type FredHopperLink = {
  __typename?: 'FredHopperLink';
  name?: Maybe<Scalars['String']['output']>;
  url_params?: Maybe<Scalars['String']['output']>;
};

/** Represents the locale settings. */
export type FredHopperLocale = {
  __typename?: 'FredHopperLocale';
  mlvalue?: Maybe<Scalars['String']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents the locales available on the server. */
export type FredHopperLocales = {
  __typename?: 'FredHopperLocales';
  locale?: Maybe<Array<Maybe<FredHopperLocale>>>;
};

/** Represents the processing time in the footer. */
export type FredHopperProcessTime = {
  __typename?: 'FredHopperProcessTime';
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents the ranges in the query. */
export type FredHopperQueryRanges = {
  __typename?: 'FredHopperQueryRanges';
  range?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Represents an entry within a range value set. */
export type FredHopperRangeEntry = {
  __typename?: 'FredHopperRangeEntry';
  link?: Maybe<Array<Maybe<FredHopperLink>>>;
  value?: Maybe<FredHopperRangeEntryValue>;
};

/** Represents the value of a range entry. */
export type FredHopperRangeEntryValue = {
  __typename?: 'FredHopperRangeEntryValue';
  non_ml?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents a value set within a breadcrumb range. */
export type FredHopperRangeValueSet = {
  __typename?: 'FredHopperRangeValueSet';
  aggregation?: Maybe<Scalars['String']['output']>;
  constraint?: Maybe<Scalars['String']['output']>;
  entry?: Maybe<Array<Maybe<FredHopperRangeEntry>>>;
};

/** Represents the ranges used in the query. */
export type FredHopperRanges = {
  __typename?: 'FredHopperRanges';
  implicit_ranges?: Maybe<FredHopperImplicitRanges>;
  query_ranges?: Maybe<FredHopperQueryRanges>;
};

/** Represents the ranking information for the results. */
export type FredHopperRanking = {
  __typename?: 'FredHopperRanking';
  id?: Maybe<Scalars['String']['output']>;
  sort_fields?: Maybe<FredHopperSortFields>;
};

/** Represents a single result modification. */
export type FredHopperResultModification = {
  __typename?: 'FredHopperResultModification';
  id?: Maybe<Scalars['String']['output']>;
};

/** Represents result modifications applied to the universe. */
export type FredHopperResultModifications = {
  __typename?: 'FredHopperResultModifications';
  result_modification?: Maybe<Array<Maybe<FredHopperResultModification>>>;
};

/** Contains information about the results in the items section. */
export type FredHopperResults = {
  __typename?: 'FredHopperResults';
  current_set?: Maybe<Scalars['Int']['output']>;
  ranking?: Maybe<FredHopperRanking>;
  start_index?: Maybe<Scalars['Int']['output']>;
  start_index_param?: Maybe<Scalars['String']['output']>;
  total_items?: Maybe<Scalars['Int']['output']>;
  url_params?: Maybe<Scalars['String']['output']>;
  view_set_size?: Maybe<Scalars['String']['output']>;
  view_size?: Maybe<Scalars['Int']['output']>;
  view_size_param?: Maybe<Scalars['String']['output']>;
};

/** Represents the search result from the FredHopper API. */
export type FredHopperSearchResult = {
  __typename?: 'FredHopperSearchResult';
  /** Represents the types of attributes associated with the result. */
  attribute_types?: Maybe<FredHopperAttributeTypes>;
  /** Represents the display fields used in the result. */
  display_fields?: Maybe<FredHopperDisplayFields>;
  /** Contains footer information, such as processing time. */
  footer?: Maybe<FredHopperFooter>;
  /** Contains information about the session, user, and server. */
  info?: Maybe<FredHopperInfo>;
  /** Contains the items section of the search result. */
  items_section?: Maybe<FredHopperItemsSection>;
  /** Represents the query ID. */
  qid?: Maybe<Scalars['String']['output']>;
  /** Represents the request ID. */
  rid?: Maybe<Scalars['String']['output']>;
  /** Represents the pass status of the search. */
  searchpass?: Maybe<Scalars['String']['output']>;
  /** Contains search terms used in the query. */
  searchterms?: Maybe<FredHopperSearchTerms>;
  /** Represents any themes associated with the result. */
  themes?: Maybe<Array<Maybe<FredHopperTheme>>>;
  /** Contains information about the universes available in the result. */
  universes?: Maybe<FredHopperUniverses>;
};

/** Contains the search terms used in the query. */
export type FredHopperSearchTerms = {
  __typename?: 'FredHopperSearchTerms';
  term?: Maybe<FredHopperTerm>;
};

/** Contains information about the server processing the request. */
export type FredHopperServer = {
  __typename?: 'FredHopperServer';
  config_dir?: Maybe<Scalars['String']['output']>;
  context_root?: Maybe<Scalars['String']['output']>;
  default_universe?: Maybe<Scalars['String']['output']>;
  encoding_detect_string?: Maybe<Scalars['String']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  /** Represents the locales available on the server. */
  locales?: Maybe<FredHopperLocales>;
  port?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** Represents a sort field in the sort fields. */
export type FredHopperSortField = {
  __typename?: 'FredHopperSortField';
  sort_attribute?: Maybe<Scalars['String']['output']>;
  sort_direction?: Maybe<Scalars['String']['output']>;
};

/** Represents the sort fields used in the ranking. */
export type FredHopperSortFields = {
  __typename?: 'FredHopperSortFields';
  sort_field?: Maybe<Array<Maybe<FredHopperSortField>>>;
};

/** Represents a search term. */
export type FredHopperTerm = {
  __typename?: 'FredHopperTerm';
  profile?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents a theme in the search result. */
export type FredHopperTheme = {
  __typename?: 'FredHopperTheme';
  custom_fields?: Maybe<Array<Maybe<FredHopperCustomField>>>;
  id?: Maybe<Scalars['String']['output']>;
  items?: Maybe<FredHopperItems>;
  link?: Maybe<Array<Maybe<FredHopperLink>>>;
  name?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Represents a universe in the search result. */
export type FredHopperUniverse = {
  __typename?: 'FredHopperUniverse';
  /** Represents the types of attributes available in the universe. */
  attribute_types?: Maybe<FredHopperAttributeTypes>;
  /** Represents the breadcrumb trail for the universe. */
  breadcrumbs?: Maybe<FredHopperBreadcrumbs>;
  /** Represents the display fields available in the universe. */
  display_fields?: Maybe<FredHopperDisplayFields>;
  facetmap?: Maybe<Array<Maybe<FredHopperFacetMap>>>;
  /** Contains the items section within the universe. */
  items_section?: Maybe<FredHopperItemsSection>;
  link?: Maybe<FredHopperLink>;
  name?: Maybe<Scalars['String']['output']>;
  /** Represents result modifications applied to the universe. */
  result_modifications?: Maybe<FredHopperResultModifications>;
  themes?: Maybe<Array<Maybe<FredHopperTheme>>>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Contains information about the universes in the search result. */
export type FredHopperUniverses = {
  __typename?: 'FredHopperUniverses';
  universe?: Maybe<Array<Maybe<FredHopperUniverse>>>;
};

/** Defines the output of the postcode search. */
export type FreeShippingThresholdOutput = {
  __typename?: 'FreeShippingThresholdOutput';
  /** The message to display below the progress bar. */
  bottom_message?: Maybe<Scalars['String']['output']>;
  /** Is free shipping bar enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The percentage of progress. */
  progress?: Maybe<Scalars['Int']['output']>;
  /** The message to display above the progress bar. */
  top_message?: Maybe<Scalars['String']['output']>;
};

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']['input'];
};

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token. */
  customer_token: Scalars['String']['output'];
};

/** Response message containing an error. */
export type GenericErrorResponse = {
  __typename?: 'GenericErrorResponse';
  /** Error code returned by Shippit */
  error: Scalars['JSON']['output'];
  /** Human-readable response */
  error_description?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the gift card account. */
export type GiftCardAccount = {
  __typename?: 'GiftCardAccount';
  /** The balance remaining on the gift card. */
  balance?: Maybe<Money>;
  /** The gift card account code. */
  code?: Maybe<Scalars['String']['output']>;
  /** The expiration date of the gift card. */
  expiration_date?: Maybe<Scalars['String']['output']>;
};

/** Contains the gift card code. */
export type GiftCardAccountInput = {
  /** The applied gift card code. */
  gift_card_code: Scalars['String']['input'];
};

/** Contains the value of a gift card, the website that generated the card, and related information. */
export type GiftCardAmounts = {
  __typename?: 'GiftCardAmounts';
  /** An internal attribute ID. */
  attribute_id?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `GiftCardAmounts` object. */
  uid: Scalars['ID']['output'];
  /** The value of the gift card. */
  value?: Maybe<Scalars['Float']['output']>;
  /**
   * An ID that is assigned to each unique gift card amount.
   * @deprecated Use `uid` instead
   */
  value_id?: Maybe<Scalars['Int']['output']>;
  /** The ID of the website that generated the gift card. */
  website_id?: Maybe<Scalars['Int']['output']>;
  /** The value of the gift card. */
  website_value?: Maybe<Scalars['Float']['output']>;
};

export type GiftCardBalanceOutput = {
  __typename?: 'GiftCardBalanceOutput';
  /** The applied amount to cart. */
  applied?: Maybe<Scalars['Float']['output']>;
  /** The gift card functionality is enabled/disabled. */
  enabled: Scalars['Boolean']['output'];
  /** The applied gift card to cart. */
  gift_card_code?: Maybe<Scalars['String']['output']>;
  /** The remaining gift card amount. */
  remaining?: Maybe<Scalars['Float']['output']>;
};

/** Contains details about a gift card that has been added to a cart. */
export type GiftCardCartItem = CartItemInterface & {
  __typename?: 'GiftCardCartItem';
  /** The amount and currency of the gift card. */
  amount: Money;
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array of customizations applied to the gift card. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']['output']>;
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** The email address of the person receiving the gift card. */
  recipient_email?: Maybe<Scalars['String']['output']>;
  /** The name of the person receiving the gift card. */
  recipient_name: Scalars['String']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The email address of the sender. */
  sender_email?: Maybe<Scalars['String']['output']>;
  /** The name of the sender. */
  sender_name: Scalars['String']['output'];
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** A single item to be updated. */
export type GiftCardCartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
};

export type GiftCardCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'GiftCardCreditMemoItem';
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Selected gift card properties for a credit memo item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item the credit memo is applied to. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
};

export type GiftCardInvoiceItem = InvoiceItemInterface & {
  __typename?: 'GiftCardInvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Selected gift card properties for an invoice item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains details about a gift card. */
export type GiftCardItem = {
  __typename?: 'GiftCardItem';
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']['output']>;
  /** The email address of the receiver of a virtual gift card. */
  recipient_email?: Maybe<Scalars['String']['output']>;
  /** The name of the receiver of a physical or virtual gift card. */
  recipient_name?: Maybe<Scalars['String']['output']>;
  /** The email address of the sender of a virtual gift card. */
  sender_email?: Maybe<Scalars['String']['output']>;
  /** The name of the sender of a physical or virtual gift card. */
  sender_name?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the sender, recipient, and amount of a gift card. */
export type GiftCardOptions = {
  __typename?: 'GiftCardOptions';
  /** The amount and currency of the gift card. */
  amount?: Maybe<Money>;
  /** The custom amount and currency of the gift card. */
  custom_giftcard_amount?: Maybe<Money>;
  /** The message from the sender to the recipient. */
  message?: Maybe<Scalars['String']['output']>;
  /** The email address of the person receiving the gift card. */
  recipient_email?: Maybe<Scalars['String']['output']>;
  /** The name of the person receiving the gift card. */
  recipient_name?: Maybe<Scalars['String']['output']>;
  /** The email address of the sender. */
  sender_email?: Maybe<Scalars['String']['output']>;
  /** The name of the sender. */
  sender_name?: Maybe<Scalars['String']['output']>;
};

export type GiftCardOrderItem = OrderItemInterface & {
  __typename?: 'GiftCardOrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']['output']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** Selected gift card properties for an order item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Order pickup location. */
  pickup_location?: Maybe<Storelocation>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
  /** Subtotal order item. */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** Thumbnail for the product specified in the order. */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Defines properties of a gift card. */
export type GiftCardProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GiftCardProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the customer can provide a message to accompany the gift card. */
  allow_message?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether shoppers have the ability to set the value of the gift card. */
  allow_open_amount?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** An array of customizable gift card options. */
  gift_card_options: Array<Maybe<CustomizableOptionInterface>>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** An array that contains information about the values and ID of a gift card. */
  giftcard_amounts?: Maybe<Array<Maybe<GiftCardAmounts>>>;
  /** An enumeration that specifies the type of gift card. */
  giftcard_type?: Maybe<GiftCardTypeEnum>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the customer can redeem the value on the card for cash. */
  is_redeemable?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** The number of days after purchase until the gift card expires. A null value means there is no limit. */
  lifetime?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** The maximum number of characters the gift message can contain. */
  message_max_length?: Maybe<Scalars['Int']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** The maximum acceptable value of an open amount gift card. */
  open_amount_max?: Maybe<Scalars['Float']['output']>;
  /** The minimum acceptable value of an open amount gift card. */
  open_amount_min?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines properties of a gift card. */
export type GiftCardProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines properties of a gift card. */
export type GiftCardProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type GiftCardShipmentItem = ShipmentItemInterface & {
  __typename?: 'GiftCardShipmentItem';
  /** Selected gift card properties for a shipment item. */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

export type GiftCardSnippetConfig = {
  __typename?: 'GiftCardSnippetConfig';
  /** Gift Card Snippet Device Code */
  device_code: Scalars['String']['output'];
  /** Gift Card Snippet Domain Name */
  domain_name: Scalars['String']['output'];
  /** Gift Card Snippet Product SKU */
  gift_card_product_sku: Scalars['String']['output'];
  /** Gift Card Snippet Code */
  snippet_code: Scalars['String']['output'];
  /** Gift Card Snippet Url */
  snippet_url: Scalars['String']['output'];
};

/** Specifies the gift card type. */
export enum GiftCardTypeEnum {
  /** @deprecated  */
  Combined = 'COMBINED',
  /** @deprecated  */
  Physical = 'PHYSICAL',
  /** @deprecated  */
  Virtual = 'VIRTUAL'
}

/** A single gift card added to a wish list. */
export type GiftCardWishlistItem = WishlistItemInterface & {
  __typename?: 'GiftCardWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** Details about a gift card. */
  gift_card_options: GiftCardOptions;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String']['output'];
  /** Gift message text */
  message: Scalars['String']['output'];
  /** Recipient name */
  to: Scalars['String']['output'];
};

/** Defines a gift message. */
export type GiftMessageInput = {
  /** The name of the sender. */
  from: Scalars['String']['input'];
  /** The text of the gift message. */
  message: Scalars['String']['input'];
  /** The name of the recepient. */
  to: Scalars['String']['input'];
};

/** Contains prices for gift wrapping options. */
export type GiftOptionsPrices = {
  __typename?: 'GiftOptionsPrices';
  /** Price of the gift wrapping for all individual order items. */
  gift_wrapping_for_items?: Maybe<Money>;
  /** Price of the gift wrapping for the whole order. */
  gift_wrapping_for_order?: Maybe<Money>;
  /** Price for the printed card. */
  printed_card?: Maybe<Money>;
};

export type GiftProductInfo = {
  __typename?: 'GiftProductInfo';
  /** Indicates whether the item is free gift. */
  is_free_gift?: Maybe<Scalars['Boolean']['output']>;
  /** Product price. */
  price?: Maybe<Money>;
};

/** Contains details about a gift registry. */
export type GiftRegistry = {
  __typename?: 'GiftRegistry';
  /** The date on which the gift registry was created. Only the registry owner can access this attribute. */
  created_at: Scalars['String']['output'];
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. */
  dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryDynamicAttribute>>>;
  /** The name of the event. */
  event_name: Scalars['String']['output'];
  /** An array of products added to the gift registry. */
  items?: Maybe<Array<Maybe<GiftRegistryItemInterface>>>;
  /** The message text the customer entered to describe the event. */
  message: Scalars['String']['output'];
  /** The customer who created the gift registry. */
  owner_name: Scalars['String']['output'];
  /** An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute. */
  privacy_settings: GiftRegistryPrivacySettings;
  /** Contains details about each registrant for the event. */
  registrants?: Maybe<Array<Maybe<GiftRegistryRegistrant>>>;
  /** Contains the customer's shipping address. Only the registry owner can access this attribute. */
  shipping_address?: Maybe<CustomerAddress>;
  /** An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute. */
  status: GiftRegistryStatus;
  /** The type of gift registry. */
  type?: Maybe<GiftRegistryType>;
  /** The unique ID assigned to the gift registry. */
  uid: Scalars['ID']['output'];
};

export type GiftRegistryDynamicAttribute = GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryDynamicAttribute';
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']['output'];
  /** Indicates which group the dynamic attribute is a member of. */
  group: GiftRegistryDynamicAttributeGroup;
  /** The display name of the dynamic attribute. */
  label: Scalars['String']['output'];
  /** A corresponding value for the code. */
  value: Scalars['String']['output'];
};

/** Defines the group type of a gift registry dynamic attribute. */
export enum GiftRegistryDynamicAttributeGroup {
  /** @deprecated  */
  DetailedInformation = 'DETAILED_INFORMATION',
  /** @deprecated  */
  EventInformation = 'EVENT_INFORMATION',
  /** @deprecated  */
  GeneralInformation = 'GENERAL_INFORMATION',
  /** @deprecated  */
  PrivacySettings = 'PRIVACY_SETTINGS',
  /** @deprecated  */
  Registrant = 'REGISTRANT',
  /** @deprecated  */
  ShippingAddress = 'SHIPPING_ADDRESS'
}

/** Defines a dynamic attribute. */
export type GiftRegistryDynamicAttributeInput = {
  /** A unique key for an additional attribute of the event. */
  code: Scalars['ID']['input'];
  /** A string that describes a dynamic attribute. */
  value: Scalars['String']['input'];
};

export type GiftRegistryDynamicAttributeInterface = {
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']['output'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String']['output'];
  /** A corresponding value for the code. */
  value: Scalars['String']['output'];
};

export type GiftRegistryDynamicAttributeMetadata = GiftRegistryDynamicAttributeMetadataInterface & {
  __typename?: 'GiftRegistryDynamicAttributeMetadata';
  /** Indicates which group the dynamic attribute a member of. */
  attribute_group: Scalars['String']['output'];
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']['output'];
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types. */
  input_type: Scalars['String']['output'];
  /** Indicates whether the dynamic attribute is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String']['output'];
  /** The order in which to display the dynamic attribute. */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

export type GiftRegistryDynamicAttributeMetadataInterface = {
  /** Indicates which group the dynamic attribute a member of. */
  attribute_group: Scalars['String']['output'];
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']['output'];
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types. */
  input_type: Scalars['String']['output'];
  /** Indicates whether the dynamic attribute is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String']['output'];
  /** The order in which to display the dynamic attribute. */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

export type GiftRegistryItem = GiftRegistryItemInterface & {
  __typename?: 'GiftRegistryItem';
  /** The date the product was added to the gift registry. */
  created_at: Scalars['String']['output'];
  /** A brief message about the gift registry item. */
  note?: Maybe<Scalars['String']['output']>;
  /** Details about the gift registry item. */
  product?: Maybe<ProductInterface>;
  /** The requested quantity of the product. */
  quantity: Scalars['Float']['output'];
  /** The fulfilled quantity of the product. */
  quantity_fulfilled: Scalars['Float']['output'];
  /** The unique ID of a gift registry item. */
  uid: Scalars['ID']['output'];
};

export type GiftRegistryItemInterface = {
  /** The date the product was added to the gift registry. */
  created_at: Scalars['String']['output'];
  /** A brief message about the gift registry item. */
  note?: Maybe<Scalars['String']['output']>;
  /** Details about the gift registry item. */
  product?: Maybe<ProductInterface>;
  /** The requested quantity of the product. */
  quantity: Scalars['Float']['output'];
  /** The fulfilled quantity of the product. */
  quantity_fulfilled: Scalars['Float']['output'];
  /** The unique ID of a gift registry item. */
  uid: Scalars['ID']['output'];
};

/** Contains the status and any errors that encountered with the customer's gift register item. */
export type GiftRegistryItemUserErrorInterface = {
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean']['output'];
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

/** Contains error information. */
export type GiftRegistryItemUserErrors = GiftRegistryItemUserErrorInterface & {
  __typename?: 'GiftRegistryItemUserErrors';
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean']['output'];
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

/** Contains details about an error that occurred when processing a gift registry item. */
export type GiftRegistryItemsUserError = {
  __typename?: 'GiftRegistryItemsUserError';
  /** An error code that describes the error encountered. */
  code: GiftRegistryItemsUserErrorType;
  /** The unique ID of the gift registry item containing an error. */
  gift_registry_item_uid?: Maybe<Scalars['ID']['output']>;
  /** The unique ID of the `GiftRegistry` object containing an error. */
  gift_registry_uid?: Maybe<Scalars['ID']['output']>;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The unique ID of the product containing an error. */
  product_uid?: Maybe<Scalars['ID']['output']>;
};

/** Defines the error type. */
export enum GiftRegistryItemsUserErrorType {
  /**
   * Used for exceptions like EntityNotFound.
   * @deprecated
   */
  NotFound = 'NOT_FOUND',
  /**
   * Used for handling out of stock products.
   * @deprecated
   */
  OutOfStock = 'OUT_OF_STOCK',
  /**
   * Used for other exceptions, such as database connection failures.
   * @deprecated
   */
  Undefined = 'UNDEFINED'
}

/** Contains details about the gift registry. */
export type GiftRegistryOutput = GiftRegistryOutputInterface & {
  __typename?: 'GiftRegistryOutput';
  /** The gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the customer's gift registry. */
export type GiftRegistryOutputInterface = {
  /** The gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Defines the privacy setting of the gift registry. */
export enum GiftRegistryPrivacySettings {
  /** @deprecated  */
  Private = 'PRIVATE',
  /** @deprecated  */
  Public = 'PUBLIC'
}

/** Contains details about a registrant. */
export type GiftRegistryRegistrant = {
  __typename?: 'GiftRegistryRegistrant';
  /** An array of dynamic attributes assigned to the registrant. */
  dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryRegistrantDynamicAttribute>>>;
  /** The email address of the registrant. Only the registry owner can access this attribute. */
  email: Scalars['String']['output'];
  /** The first name of the registrant. */
  firstname: Scalars['String']['output'];
  /** The last name of the registrant. */
  lastname: Scalars['String']['output'];
  /** The unique ID assigned to the registrant. */
  uid: Scalars['ID']['output'];
};

export type GiftRegistryRegistrantDynamicAttribute = GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryRegistrantDynamicAttribute';
  /** The internal ID of the dynamic attribute. */
  code: Scalars['ID']['output'];
  /** The display name of the dynamic attribute. */
  label: Scalars['String']['output'];
  /** A corresponding value for the code. */
  value: Scalars['String']['output'];
};

/** Contains the results of a gift registry search. */
export type GiftRegistrySearchResult = {
  __typename?: 'GiftRegistrySearchResult';
  /** The date of the event. */
  event_date?: Maybe<Scalars['String']['output']>;
  /** The title given to the event. */
  event_title: Scalars['String']['output'];
  /** The URL key of the gift registry. */
  gift_registry_uid: Scalars['ID']['output'];
  /** The location of the event. */
  location?: Maybe<Scalars['String']['output']>;
  /** The name of the gift registry owner. */
  name: Scalars['String']['output'];
  /** The type of event being held. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Defines a shipping address for a gift registry. Specify either `address_data` or the `address_id`. If both are provided, validation will fail. */
export type GiftRegistryShippingAddressInput = {
  /** Defines the shipping address for this gift registry. */
  address_data?: InputMaybe<CustomerAddressInput>;
  /** The ID assigned to this customer address. */
  address_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Defines the status of the gift registry. */
export enum GiftRegistryStatus {
  /** @deprecated  */
  Active = 'ACTIVE',
  /** @deprecated  */
  Inactive = 'INACTIVE'
}

/** Contains details about a gift registry type. */
export type GiftRegistryType = {
  __typename?: 'GiftRegistryType';
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair. */
  dynamic_attributes_metadata?: Maybe<Array<Maybe<GiftRegistryDynamicAttributeMetadataInterface>>>;
  /** The label assigned to the gift registry type on the Admin. */
  label: Scalars['String']['output'];
  /** The unique ID assigned to the gift registry type. */
  uid: Scalars['ID']['output'];
};

/** Contains details about the selected or available gift wrapping options. */
export type GiftWrapping = {
  __typename?: 'GiftWrapping';
  /** The name of the gift wrapping design. */
  design: Scalars['String']['output'];
  /**
   * The unique ID for a `GiftWrapping` object.
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID']['output'];
  /** The preview image for a gift wrapping option. */
  image?: Maybe<GiftWrappingImage>;
  /** The gift wrapping price. */
  price: Money;
  /** The unique ID for a `GiftWrapping` object. */
  uid: Scalars['ID']['output'];
};

/** Points to an image associated with a gift wrapping option. */
export type GiftWrappingImage = {
  __typename?: 'GiftWrappingImage';
  /** The gift wrapping preview image label. */
  label: Scalars['String']['output'];
  /** The gift wrapping preview image URL. */
  url: Scalars['String']['output'];
};

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** An array containing grouped product items. */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Details about this product option. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item. */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export enum HttpMethod {
  Connect = 'CONNECT',
  Delete = 'DELETE',
  Get = 'GET',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
  Trace = 'TRACE'
}

/** Health Condition */
export type HealthCondition = {
  __typename?: 'HealthCondition';
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['output'];
  /** A automatically assigned unique ID for this health condition */
  id: Scalars['UUID']['output'];
  /** Name of the health condition */
  name: Scalars['query_getHealthConditions_oneOf_0_items_name']['output'];
  petProfileCategory?: Maybe<Query_GetHealthConditions_OneOf_0_Items_PetProfileCategory>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['output'];
};

/** Defines the output of the delivery message. */
export type HomeDeliveryMessageOutput = {
  __typename?: 'HomeDeliveryMessageOutput';
  /** Background color. */
  background_color?: Maybe<Scalars['String']['output']>;
  /** Is message enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Font color. */
  font_color?: Maybe<Scalars['String']['output']>;
  /** The message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Postcodes list. */
  postcodes?: Maybe<Scalars['String']['output']>;
  /** States list. */
  states?: Maybe<Scalars['String']['output']>;
};

export type HomeDeliveryService = {
  __typename?: 'HomeDeliveryService';
  /** Delivery service system code */
  code?: Maybe<Scalars['String']['output']>;
  /** Delivery service description */
  description?: Maybe<Scalars['String']['output']>;
  /** Determines if this method is disabled in system configuration. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Estimated delivery cost */
  estimated_cost?: Maybe<Scalars['Float']['output']>;
  /** Expected fulfilment location */
  expected_fulfilment_location?: Maybe<Scalars['Int']['output']>;
  /** Determines if delivery method is available for this SKU */
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** Delivery service title */
  title?: Maybe<Scalars['String']['output']>;
  /** List of SKUs that can't be delivered with this method */
  unavailable_items?: Maybe<Array<Maybe<UnavailableItem>>>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** The secure URL generated by PayPal. */
  secure_form_url?: Maybe<Scalars['String']['output']>;
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains target path parameters. */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** A parameter name. */
  name?: Maybe<Scalars['String']['output']>;
  /** A parameter value. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  __typename?: 'InternalError';
  /** The returned error message. */
  message: Scalars['String']['output'];
};

/** Internal Error */
export type InternalError_Response = {
  __typename?: 'InternalError_response';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Contains invoice details. */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']['output'];
  /** Invoiced product details. */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number. */
  number: Scalars['String']['output'];
  /** Invoice total amount details. */
  total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Details about an individual order item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
};

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the invoice. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The invoice tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice. */
  total_shipping: Money;
  /** The amount of tax applied to the invoice. */
  total_tax: Money;
};

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available?: Maybe<Scalars['Boolean']['output']>;
};

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The label of the option. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']['output'];
  /** A list of products that represent the values of the parent option. */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output'];
  /** The price of the child bundle product. */
  price: Money;
  /** The name of the child bundle product. */
  product_name: Scalars['String']['output'];
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']['output'];
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']['output'];
};

/** Contains a key-value pair. */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the key/value pair. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value part of the key/value pair. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents a response to the Label API, which provides an Order and related label information */
export type LabelResponse = {
  __typename?: 'LabelResponse';
  JSON?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Root_Type_For_Label>;
};

/** Represents an Order that is returned in Label response */
export type LabelResponseOrder = {
  __typename?: 'LabelResponseOrder';
  /** Delivery instructions as sent to the courier. In most cases, this is the same as the `delivery_instructions` passed into the request. Some couriers, however, have a specific format expected when sending delivery instructions through their API. This will contain the actual delivery instructions that get sent through the courier API when booked. */
  courier_delivery_instructions?: Maybe<Scalars['String']['output']>;
  /** The ID assigned by some carriers to the shipment/consignment. */
  courier_job_id?: Maybe<Scalars['String']['output']>;
  /** The courier allocated to the order. See the ORDER CREATE `courier_allocation` API for available keywords. */
  courier_type?: Maybe<Scalars['String']['output']>;
  /** Whether or not customs documents, such as declarations, invoices, etc for the Order that should be printed and included with the shipment. By default this is `true` for International orders. */
  customs_documents_require_printing?: Maybe<Scalars['Boolean']['output']>;
  documents: OrderResponseOrderDocumentsHash;
  /** Shippit internal numerical ID */
  id?: Maybe<Scalars['Int']['output']>;
  /** Internal link between an order and a Shippit invoice - will almost always be null on order creation. */
  invoice_number?: Maybe<Scalars['JSON']['output']>;
  parcel_attributes?: Maybe<Order_Response_Parcel_Specification>;
  /**
   * The price that will be charged for the allocated order.
   *
   * If you're creating orders by passing in `courier_type`, the courier will usually not be yet be assigned at order creation and you will get `0`. Courier allocation will be run as a background process depending on the merchant preferences, available couriers, and quotes returned by the couriers, which may take a few seconds to complete after order creation.
   *
   * Note that the Shippit web user can also update the courier in between API calls. The final courier and quoted price can be determined from the LABEL call.
   *
   * If the quoted price is still `0` during the LABEL call, something likely went wrong with the courier selection and the order may need to be amended.
   */
  price?: Maybe<Scalars['JSON']['output']>;
  /** Internal order status set and progressed by Shippit upon creation. */
  processing_state?: Maybe<Scalars['String']['output']>;
  /**
   * An array of product items specified in the order.
   *
   * If product information was not provided, this array will be blank.
   */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Whether or not the order is a return order. */
  return?: Maybe<Scalars['Boolean']['output']>;
  /** `tracking_number` in lowercase. */
  slug: Scalars['String']['output'];
  /** The state of the order as progressed by the merchant. */
  state?: Maybe<Scalars['String']['output']>;
  /** An array of Tracking History statuses that are are shown to the recipient as part of the order's history on the tracking page. */
  tracking_histories?: Maybe<Array<Maybe<OrderResponseTrackingHistory>>>;
  /** Unique random ID assigned by Shippit to an order. This can be used as a reference for future API calls or support tickets. */
  tracking_number: Scalars['String']['output'];
  /** The URL of the order's customer tracking page. */
  tracking_url?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Root_Type_For_UserAttributes>;
};

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type LoyaltyDetails = {
  __typename?: 'LoyaltyDetails';
  context_key?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Query_LoyaltyDetails_Data>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Details about the content of the media gallery item. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']['output']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The alt text displayed on the storefront when the user points to the image. */
  label?: Maybe<Scalars['String']['output']>;
  /** Either `image` or `video`. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']['output'];
  /** Details about the content of a video item. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  categoryId: Scalars['String']['output'];
  children?: Maybe<Array<Maybe<MenuItem>>>;
  filters?: Maybe<Array<Maybe<MenuItemFilter>>>;
  icon?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type MenuItemFilter = {
  __typename?: 'MenuItemFilter';
  attribute_code: Scalars['String']['output'];
  attribute_value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MenuStructure = {
  __typename?: 'MenuStructure';
  items?: Maybe<Array<Maybe<MenuItem>>>;
};

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR. */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value. */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Contains the customer's gift registry and any errors encountered. */
export type MoveCartItemsToGiftRegistryOutput = GiftRegistryItemUserErrorInterface & GiftRegistryOutputInterface & {
  __typename?: 'MoveCartItemsToGiftRegistryOutput';
  /** The gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
  /** Indicates whether the attempt to move the cart items to the gift registry was successful. */
  status: Scalars['Boolean']['output'];
  /** An array of errors encountered while moving items from the cart to the gift registry. */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

/** Contains the source and target wish lists after moving products. */
export type MoveProductsBetweenWishlistsOutput = {
  __typename?: 'MoveProductsBetweenWishlistsOutput';
  /** The destination wish list after receiving products moved from the source wish list. */
  destination_wishlist: Wishlist;
  /** The source wish list after moving products from it. */
  source_wishlist: Wishlist;
  /** An array of errors encountered while moving products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
};

export type MultiBuy = {
  __typename?: 'MultiBuy';
  /** Parent related SKU if related product configurable type. */
  parent_sku?: Maybe<Scalars['String']['output']>;
  /** Additional labels for PDP. The member price is used. */
  pdp_additional_labels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Additional labels for PLP. The minimum price is used. */
  plp_additional_labels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Is selected current option by default. */
  selected?: Maybe<Scalars['Boolean']['output']>;
  /** Related product SKU for button. */
  sku: Scalars['String']['output'];
  /** Swatch display text. */
  swatch_display_text?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add any type of product to the cart. */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/book`
   * Given an array of Orders, this will initiate a booking with their respective couriers.
   *
   * For Orders to be booked, they must first be labelled.
   *
   */
  bookOrder?: Maybe<BookOrder_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/orders/{args.tracking_number}`
   * Cancels an Order in Shippit using the tracking number.
   *
   * The API first checks if the Order can be cancelled, ie., if its current state allows it, then returns an immediate response. If the Order is successfully cancelled, the API will answer with the Order with its state updated as `cancelled`. If it cannot be cancelled, it will throw a `422` error.
   *
   */
  cancelOrder?: Maybe<CancelOrder_Response>;
  /** Crete boomi customer. */
  createBoomiCustomer?: Maybe<BoomiCustomer>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/brands`
   * Create a brand
   *
   * SP: usp_CreateBrands
   *
   */
  createBrand?: Maybe<CreateBrand_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/customers`
   * Create a customer
   *
   * SP: Missing
   *
   */
  createCustomer?: Maybe<CreateCustomer_Response>;
  /** Create an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']['output']>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/orders`
   * Submits an Order to be created on Shippit.
   * 
   * At minimum, an Order requires a delivery location, user details, and parcel details. Shippit will then generate the order, allocate the courier, and fill in the origin location based on the provided info and merchant configuration on Shippit.
   * 
   * Note that the required fields for an Order can vary depending on the type of order, the requested courier, whether it is local or international, etcetera.
   * 
   * There is a maximum of 1000 parcels per quote request.
   * 
   * 
   * ---
   * 
   * ### Order Lifecycle
   * #### Standard and Express Lifecycle
   * | Web UI action | API call     | State on completion         | Where seen in UI   |
   * |---------------|--------------|-----------------------------|--------------------|
   * | Add order     | POST order   | New Order                   | New Orders page    |
   * | Confirm order | GET label    | Ready to Ship               | Ready to Ship page |
   * | Cancel order  | DELETE order | Cancelled                   | Not visible        |
   * | Book order    | POST book    | Booked                      | Track page         |
   * 
   * #### Click and Collect Lifecycle
   * | Web UI action | API call     | State on completion         | Where seen in UI   |
   * |---------------|--------------|-----------------------------|--------------------|
   * | N/A           | POST order   | Packing order               | New Orders page    |
   * | Label         | GET label    | Packing order               | New Orders page    |
   * | Cancel order  | DELETE order | Cancelled                   | Not visible        |
   * | Book order    | POST book    | Booked                      | Track page         |
   * 
   * Unlike standard / express orders, click and collect orders do not proceed to the Ready to Ship page. They remain in the New Orders page until you call either the Book API or click the Label button.
   * 
   * #### Priority and Ondemand Order Lifecycle
   * | Web UI action | API call     | State on completion         | Where seen in UI   |
   * |---------------|--------------|-----------------------------|--------------------|
   * | N/A           | POST order   | Packing order               | New Orders page    |
   * | Label         | GET label    | Booked                      | Track page         |
   * | Cancel order  | DELETE order | Cancelled                   | Not visible        |
   * 
   * Unlike standard / express orders, priority and ondemand orders do not need the book call. They are automatically booked by Shippit on the delivery date.
   * 
   * Ondemand orders are automatically booked by Shippit for an ASAP pickup, respecting store pick-and-pack time.
   * Priority and Ondemand orders will remain on the New Orders page until dismissed by clicking the Label button or the GET label API call is made.
   * 
   * #### Return Order Lifecycle
   * | Web UI action | API call     | State on completion                    | Where seen in UI   |
   * |---------------|--------------|----------------------------------------|--------------------|
   * | N/A           | POST order   | New Order                              | New Orders page    |
   * | Confirm order | GET label    | Awaiting drop off / Return requested   | Track page         |
   * | Cancel order  | DELETE order | Cancelled                              | Not visible        |
   * 
   * Unlike outbound orders, return orders do not proceed to Ready to Ship page. They move directly to the Track page and change their status to Awaiting drop off, for AusPost drop offs or Return requested, for carrier pickups. 
   * * Carrier pickup - A courier will attend the recipient’s address and collect the product
   *     * Note: Recipient must initiate the return by opening the new tracking page and pressing a button to schedule the pickup. Right now there is no ability for the recipient to choose a date or time slot for the pickup, as this is not offered by the carriers.
   * * AusPost drop off - Your recipient must return the product to an AusPost location
   * 
   * 
   * ### Order validation
   * If the `validate` field is passed and set to `true`, then the order is not saved unless Shippit can validate the destination suburb and postcode to be a valid combination. If a valid combination is not found, Shippit will return a suggested address.
   * 
   * ### Manual or Automatic Courier selection
   * You can allocate a courier to an order in one of two ways: you can manually specify the courier as part of the order, or you can allow Shippit to automatically allocate a courier for you.
   * 
   * To manually specify a courier, pass the `courier_allocation` field with the identifier of the courier (see below).
   * 
   * To have Shippit allocate the courier for you, pass the `courier_type` field to specify the type of couriers that Shippit can choose from to allocate for you. This is used to stand for a service level such as `standard`, `express`, `priority`, `click_and_collect`.
   * 
   * 
   * ### Specifying Parcels and Products
   * Shippit needs to know the specifications of the products you want shipped and what parcels to use in shipping them. There is a maximum of 1000 parcels per quote request.
   * 
   * In the simplest case, this can be specified by a `parcel_attributes` field, which contains a list of Parcel specifications. Each item specifies the number, dimensions, and other information about the products being shipped, and the associated parcel. In this case, each parcel contains one type of product.
   * 
   * For more complex shipping arrangements, you can additionally specify a `product_attributes` field, which contains a list of Product specifications. In this case, the `parcel_attributes` will no longer contain product information such as `qty`. Each item under `product_attributes` would specify the number, dimensions, and other information about the products; while each item under `parcel_attributes` would separately specify the dimensions of the parcels. By mixing parcel and product specifications, you can define arbitrary groupings of products into parcels.
   * 
   * The number of parcels is further determined by the `Allocate each item in an order to a separate carton` setting in the Shippit administration page. If this is enabled, then each item will be assigned a separate parcel according to its dimensions. If this is disabled, then Shippit may combine multiple product or parcel specifications into one.
   * 
   * 
   * ### Standard orders vs tracking orders
   * In a standard order, Shippit will book the courier given the provided information and provide tracking information and notifications for the merchant and recipient on the status of the order.
   * 
   * If you've already booked and allocated a courier to your consignment outside of Shippit, however, you can still use Shippit to provide tracking and notifications for the order. This is called a **tracking order**. In this case, you're only using Shippit for the tracking and notifications, and not for carrier booking.
   * 
   * Creating a tracking order is the same as creating a standard order, only that you have to provide additional attributes so that Shippit can match the the courier's internal info to shippit. Note the following attributes:
   * 
   * - `tracking_only` _required_ -- true - this makes this order a tracking order.
   * - `courier_allocation` _required_ -- the name of the courier in charge of the item.
   * - `courier_job_id` -- the ID assigned by some carriers to the shipment / consignment.
   * - `parcel_attributes` -> `label_number` _required_ -- the label assigned by the carrier system to a parcel, used by Shippit to match the parcel number against the carrier's parcel number
   * - `tracking_histories` -- one or two optional status events that will be added to the tracking page for the benefit of the recipient.
   * 
   * #### Passing tracking histories
   * In a tracking order, you can choose to pass tracking histories for the benefit of the recipient. These are shown to the recipient in the tracking page to inform them of the status of when the order has been processed.
   * 
   * These items have just two fields, a `status` field and a `timestamp` in UTC format, to indicate to the recipient events  such as `order_placement` and `ready_for_pickup`. The `status` informs the user of the Order's state at that point in time and can be either `order_placed` or `ready_for_pickup`. The `timestamp` indicates when that change happened. The following tracking history entries are recommended to be placed:
   * 
   * - `order_placed` - set to the time when you received the order on your system.
   * - `ready_for_pickup` - set to the time when you book the order on Shippit.
   * 
   * If no `tracking_histories` entries are passed, Shippit will generate an initial tracking history for the order, set to `ready_for_pickup` at the point when Shippit received the API request.
   * 
   * ### Authority to leave
   * * When using 500g satchels,
   *   * When specifying ```No```, you must have ```Satchel 500g (A5)``` enabled in your settings (Settings > Pick & Pack > Automatic Package Sorting > Carrier Default Presets). 
   *   * When specifying ```Yes```, you must have ```Satchel 500g ATL (A5)``` enabled in your settings (Settings > Pick & Pack > Automatic Package Sorting > Carrier Default Presets).
   *   * If nothing is specified, we assume ATL = ```No```
   * 
   * * Note that the final ATL value also depends on how couriers are allocated and if users manually override the ATL option in the UI. It is important when confirming quotes that the ATL is set as desired.
   * 
   * ### Ondemand orders
   * Our "On-Demand Service Level" contains a range of ondemand carriers and services. On-demand carriers offer local delivery services with various delivery options. These options include 2-hour delivery, same-day delivery, and next-day delivery. Additionally, some carriers provide a service where one driver picks up all orders at a fixed time.
   * 
   * ### Return orders
   * You can see an example request for a return order on the right hand side under: *Request samples > Example > Return Order*.
   * 
   * The following 5 params are essential and `return` must be true:
   * * `pickup_postcode`
   * * `pickup_address`
   * * `pickup_suburb`
   * * `pickup_state`
   * * `return`
   * 
   * This will create a new order in the background, with the pickup/recipient data as the origin and the default merchant address as the destination and also set the order to the state `awaiting_drop_off` or `return_requested`, depending on the carrier allocation. We can also get a label for this order via the default label API.
   * 
   * Receivers will receive an email with their return label. This email provides the customer instructions on how to return their package/s. It is automatically triggered by Shippit, once a return order is confirmed by the merchant. 
   * 
   * #### Limitations
   * Despite the existing order API limitations, the only addition for return orders is the selection of the carrier. Only certain carriers allow return orders. 
   * 
   * In most cases, the merchant chooses only AusPost drop off as a valid return option.
   * 
   * A Shippit admin can, on behalf of a merchant, turn on or off carriers who would instead pick up the parcel for returns.
   * 
   * As this functionality is using the default order API, we can also create return orders for parcels that were not shipped originally via Shippit. As long as we supply the necessary pickup data in the request.
   * 
   * ### Apple Pay Wallet Order Tracking (coming soon)
   * After Apple Pay Wallet Order Tracking is successfully activated on your account, it can be used by providing an additional value `wallet_order_tracking` to the POST /orders request.
   * 
   * If the property `wallet_order_tracking: true` is attached to the order creation request, the response will include an additional object `wallet_order_tracking_attributes`, which contains the necessary data for the [Apple Pay integration](https://applepaydemo.apple.com/order-tracking#createOrder):
   * 
   * ```json
   * {
   *   "response": {
   *     "id": number,
   *     "tracking_number": string,
   *     [...]
   *     "wallet_order_tracking_attributes": {
   *       "order_type_identifier": string,
   *       "order_identifier": string,
   *       "web_service_url": string,
   *       "authentication_token": string
   *     }
   *   }
   * }
   * ```
   * 
   * 
   * ---
   * 
   * ### Service Level Mappings
   * | Standard                | Express                   | Priority           | Ondemand       |
   * |-------------------------|---------------------------|--------------------|----------------|
   *  |AlliedExpressOvernight         |CapitalTransport               |AlliedExpressSameday   |DoorDashOndemand|
   *  |AramexAuNz                     |CouriersPleaseExpress          |Bonds                  |GrabExpress     |
   *  |AramexExpress                  |DirectCouriers                 |DoorDash               |LalamoveOndemand|
   *  |AramexInternational            |EparcelExpress                 |EparcelOndemand        |PandagoOndemand |
   *  |CityLink                       |EparcelInternationalExpress    |QxpressSameday         |UberOndemand    |
   *  |CouriersPlease                 |FedExInternationalPriority     |YelloOndemand          |                |
   *  |DhlEcommerce                   |KerryExpress                   |                       |                |
   *  |DhlEcommerceAsia               |NewZealandPostExpress          |                       |                |
   *  |DhlExpress                     |NinjaVanExpress                |                       |                |
   *  |DhlExpressInternational        |PbtCourierExpress              |                       |                |
   *  |DirectFreightExpress           |SekoExpress                    |                       |                |
   *  |Eparcel                        |SingPostExpress                |                       |                |
   *  |EparcelInternational           |StarTrackPremium               |                       |                |
   *  |Fastway                        |TntOvernightExpress            |                       |                |
   *  |FedExInternationalEconomy      |TollPriority                   |                       |                |
   *  |FlashExpress                   |                               |                       |                |
   *  |FourPXStandard                 |                               |                       |                |
   *  |Gdex                           |                               |                       |                |
   *  |HunterExpress                  |                               |                       |                |
   *  |Janio                          |                               |                       |                |
   *  |JanioInternational             |                               |                       |                |
   *  |Jnt                            |                               |                       |                |
   *  |KerryStandard                  |                               |                       |                |
   *  |LyneConnect                    |                               |                       |                |
   *  |LynePlus                       |                               |                       |                |
   *  |Neway                          |                               |                       |                |
   *  |NewZealandCouriers             |                               |                       |                |
   *  |NewZealandPost                 |                               |                       |                |
   *  |NinjaVanStandard               |                               |                       |                |
   *  |PbtCourier                     |                               |                       |                |
   *  |Pgeon                          |                               |                       |                |
   *  |Pickupp                        |                               |                       |                |
   *  |PosMalaysia                    |                               |                       |                |
   *  |Qxpress                        |                               |                       |                |
   *  |SekoStandard                   |                               |                       |                |
   *  |SingPost                       |                               |                       |                |
   *  |Skybox                         |                               |                       |                |
   *  |SmartRoutingInternational      |                               |                       |                |
   *  |StarTrack                      |                               |                       |                |
   *  |Teleport                       |                               |                       |                |
   *  |TeleportInternational          |                               |                       |                |
   *  |Tnt                            |                               |                       |                |
   *  |Toll                           |                               |                       |                |
   *
   *
   */
  createOrder?: Maybe<CreateOrder_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/pets/{args.id}/profileImage`
   * Returns a signed URL that can be used to upload the pet profile image for a pet and sets the download URL for the image in the pets profile.
   *
   */
  createPetProfileImage?: Maybe<CreatePetProfileImage_Response>;
  createPetV1?: Maybe<PetResponse>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/reminders`
   * Creates a reminder
   *
   * SP: Missing
   *
   */
  createReminder?: Maybe<CreateReminder_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/brands/{args.id}`
   * Delete a brand
   *
   * SP: usp_DeleteBrand
   *
   */
  deleteBrand?: Maybe<DeleteBrand_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/customers/{args.id}`
   * Delete a customer
   *
   * SP: Missing
   *
   */
  deleteCustomer?: Maybe<DeleteCustomer_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/pets/{args.id}/profileImage`
   * Remove the profile image for a pet
   *
   */
  deletePetProfileImage?: Maybe<DeletePetProfileImage_Response>;
  deletePetV1?: Maybe<DeletePet_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/reminders/{args.id}`
   * Delete a Reminder
   *
   * SP: Missing
   *
   */
  deleteReminder?: Maybe<DeleteReminder_Response>;
  /** Generate a token for specified customer. */
  generateAuthCustomerToken?: Maybe<CustomerAuthToken>;
  /** Generate a token for specified customer. */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/quotes`
   * Submits a request for Quotes from different couriers on Shippit.
   *
   * At minimum, a Quote requires a delivery location and information on the parcels being delivered. However, different couriers and delivery methods can require additional fields to satisfy their requirements. There is a maximum of 1000 parcels per quote request.
   *
   * ### Listing all quotes vs listing a single quote
   * By default, Shippit will return a quote from the fastest / cheapest courier. However, for the purposes of showing different options, such as in a courier selection page, you may want to have Shippit display all quotes. To do this, pass the `return_all_quotes` field as true.
   *
   * Note that the quotes returned are filtered based on the requirements given by different couriers. Depending on the info submitted in the order and the carrier settings in the Shippit admin page, you may not see quotes from all configured carriers.
   *
   */
  getQuote?: Maybe<GetQuote_Response>;
  petAiSendFeedback: Scalars['String']['output'];
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.MAGENTO_REST_ENDPOINT}`
   * >**Path**: `/V1/recurring/cancel/order`
   * Cancel Recurring Order
   *
   */
  postRecurringCancelOrder?: Maybe<PostV1RecurringCancelOrder_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.MAGENTO_REST_ENDPOINT}`
   * >**Path**: `/V1/recurring/pause/order`
   * Pause Recurring Order
   *
   */
  postRecurringPauseOrder?: Maybe<PostV1RecurringPauseOrder_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.MAGENTO_REST_ENDPOINT}`
   * >**Path**: `/V1/recurring/reactivate/order`
   * Reactivate Recurring Order
   *
   */
  postRecurringReactivateOrder?: Maybe<PostV1RecurringReactivateOrder_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.MAGENTO_REST_ENDPOINT}`
   * >**Path**: `/V1/recurring/SkipOnceOrder`
   * Skip Recurring Order Once
   *
   */
  postRecurringSkipOnceOrder?: Maybe<PostV1RecurringSkipOnceOrder_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/returns/order`
   * A Return Order is created when a Returns Request is approved and the shipment has been confirmed.
   *
   * Shippit will send a notification when a the Return Order is created to a URL you have configured in your Returns Portal settings in Shippit Admin.
   *
   */
  returnsOrder?: Maybe<Scalars['JSON']['output']>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/returns/request`
   * A Return Request provides a mechanism to query the merchant's platform for details about an order and it's contents.
   *
   * A Request Request will trigger Shippit to query the Merchant's platform to retrieve all applicable details required to be provided as part of the Return Request response.
   *
   * Upon a successful Return Request response, the return details are presented to the customer in the Returns Portal, allowing them to make a selection of the goods to be returned for the order.
   *
   */
  returnsRequest?: Maybe<ReturnRequestResponse>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/webhook`
   * Shippit will send status updates on orders to a URL you have configured in the Shippit admin page.
   *
   * This can be configured at `Settings` -> `Integrations` -> `Webhook URL` at the Shippit admin.
   *
   * If configured, Shippit will send POST requests to the URL set here with updates on an Order's status as it progresses.
   *
   * ---
   * ### Best practices for using webhooks
   *
   * **Event types**
   *
   * Your webhook implementation should be configured to action only the types of events required by your integration. Actioning for extra events (or all events) is not recommended as we may add new events at anytime.
   *
   * **Handle duplicate events**
   *
   * Webhook endpoints might occasionally receive the same event more than once. We advise you to guard against duplicated event receipts by making your event processing idempotent. One way of doing this is logging the events you’ve processed, and then not processing already-logged events.
   *
   * **Order of events**
   *
   * Shippit does not guarantee delivery of events in the order in which they are generated.
   *
   * **IP allow list**
   *
   * The webhook will originate from one of the following IP addresses:
   * - 13.210.185.17
   * - 54.153.239.182 [New]
   * - 54.66.78.172 [New]
   * - 13.237.179.89
   * - 13.239.82.79
   * - 54.66.178.150
   *
   * It is recommended to only allow requests from these IP addresses as part of your firewall configuration.
   *
   */
  trackOrderHook?: Maybe<Scalars['JSON']['output']>;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/brands/{args.id}`
   * Replace a brand
   *
   * SP: Missing
   *
   */
  updateBrand?: Maybe<UpdateBrand_Response>;
  /** Modify items in the cart. */
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/customers/{args.id}`
   * Replace a customer
   *
   * SP: Missing
   *
   */
  updateCustomer?: Maybe<UpdateCustomer_Response>;
  /**
   *
   * >**Method**: `PATCH`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/merchant`
   * Given an object with the desired settings to update, will update the Merchant settings on Shippit
   *
   */
  updateMerchant?: Maybe<UpdateMerchant_Response>;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.MAGENTO_REST_ENDPOINT}`
   * >**Path**: `/V1/pet/{args.id}/image`
   * Updates image for pet
   *
   */
  updatePetImageV1?: Maybe<PutV1PetIdImage_Response>;
  updatePetV1?: Maybe<PetResponse>;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/reminders/{args.id}`
   * Replace a reminder
   *
   * SP: Missing
   *
   */
  updateReminder?: Maybe<UpdateReminder_Response>;
  /** Modify repeat delivery items in the cart. */
  updateRepeatDeliveryCartItem?: Maybe<UpdateCartItemsOutput>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.BLOYAL_BASE_URL}`
   * >**Path**: `{env.BLOYAL_ACCESS_KEY}/engagements/commands/record`
   *
   *
   */
  voucherActivate?: Maybe<BloyalVoucherActivateResponse>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String']['input'];
  cartItems: Array<CartItemInput>;
};


export type MutationBookOrderArgs = {
  input?: InputMaybe<Root_Type_For_BookRequest_Input>;
};


export type MutationCancelOrderArgs = {
  tracking_number: Scalars['String']['input'];
};


export type MutationCreateBrandArgs = {
  input?: InputMaybe<Brand_Input>;
};


export type MutationCreateCustomerArgs = {
  input?: InputMaybe<Customer_Input>;
};


export type MutationCreateEmptyCartArgs = {
  input?: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<Root_Type_For_OrderRequest_Input>;
};


export type MutationCreatePetProfileImageArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<CreatePetProfileImage_Request_Input>;
};


export type MutationCreatePetV1Args = {
  input?: InputMaybe<PetInputV1>;
};


export type MutationCreateReminderArgs = {
  input?: InputMaybe<Reminder_Input>;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePetProfileImageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePetV1Args = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteReminderArgs = {
  id: Scalars['String']['input'];
};


export type MutationGenerateAuthCustomerTokenArgs = {
  firstLogin?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationGetQuoteArgs = {
  input?: InputMaybe<Root_Type_For_QuoteRequest_Input>;
};


export type MutationPetAiSendFeedbackArgs = {
  input: PetAiSendFeedbackInput;
};


export type MutationPostRecurringCancelOrderArgs = {
  input?: InputMaybe<PostV1RecurringCancelOrder_Request_Input>;
};


export type MutationPostRecurringPauseOrderArgs = {
  input?: InputMaybe<PostV1RecurringPauseOrder_Request_Input>;
};


export type MutationPostRecurringReactivateOrderArgs = {
  input?: InputMaybe<PostV1RecurringReactivateOrder_Request_Input>;
};


export type MutationPostRecurringSkipOnceOrderArgs = {
  input?: InputMaybe<PostV1RecurringSkipOnceOrder_Request_Input>;
};


export type MutationReturnsOrderArgs = {
  input?: InputMaybe<ReturnOrderRequest_Input>;
};


export type MutationReturnsRequestArgs = {
  input?: InputMaybe<Root_Type_For_ReturnRequestPost_Input>;
};


export type MutationTrackOrderHookArgs = {
  input?: InputMaybe<Root_Type_For_WebhookRequest_Input>;
};


export type MutationUpdateBrandArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<Customer_Input>;
};


export type MutationUpdateMerchantArgs = {
  input?: InputMaybe<Root_Type_For_MerchantRequest_Input>;
};


export type MutationUpdatePetImageV1Args = {
  id: Scalars['String']['input'];
  input?: InputMaybe<PutV1PetIdImage_Request_Input>;
};


export type MutationUpdatePetV1Args = {
  id: Scalars['UUID']['input'];
  input?: InputMaybe<PetInputV1>;
};


export type MutationUpdateReminderArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<Reminder_Input>;
};


export type MutationUpdateRepeatDeliveryCartItemArgs = {
  input?: InputMaybe<UpdateRepeatDeliveryItemInput>;
};


export type MutationVoucherActivateArgs = {
  input?: InputMaybe<ActivateVoucherRequest_Input>;
};

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  __typename?: 'NoSuchEntityUidError';
  /** The returned error message. */
  message: Scalars['String']['output'];
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']['output'];
};

/** Not Found */
export type NotFound_Response = {
  __typename?: 'NotFound_response';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Contains the order ID. */
export type Order = {
  __typename?: 'Order';
  /** @deprecated Use `order_number` instead. */
  order_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']['output'];
};

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town. */
  city: Scalars['String']['output'];
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number. */
  fax?: Maybe<Scalars['String']['output']>;
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']['output'];
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']['output'];
  /** The middle name of the person associated with the shipping/billing address. */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The customer's ZIP or postal code. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The state or province name. */
  region?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id?: Maybe<Scalars['ID']['output']>;
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** The telephone number. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id?: Maybe<Scalars['String']['output']>;
};

export type OrderDateFilterInput = {
  gt?: InputMaybe<Scalars['String']['input']>;
};

export type OrderDeleteErrorResponse = {
  __typename?: 'OrderDeleteErrorResponse';
  /** Error code returned by Shippit */
  error: Scalars['JSON']['output'];
  /** Human-readable response */
  error_description?: Maybe<Scalars['String']['output']>;
  /** The current state of the order should a DELETE request fail */
  order_state: Scalars['String']['output'];
};

/** A response to an Order DELETE request */
export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  JSON?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<OrderResponseOrder>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']['output']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Order pickup location. */
  pickup_location?: Maybe<Storelocation>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
  /** Subtotal order item. */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** Thumbnail for the product specified in the order. */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible to be in a return request. */
  eligible_for_return?: Maybe<Scalars['Boolean']['output']>;
  /** The entered option for the base product, such as a logo or image. */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the order item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Order pickup location. */
  pickup_location?: Maybe<Storelocation>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** URL key of the base product. */
  product_url_key?: Maybe<Scalars['String']['output']>;
  /** The number of canceled items. */
  quantity_canceled?: Maybe<Scalars['Float']['output']>;
  /** The number of invoiced items. */
  quantity_invoiced?: Maybe<Scalars['Float']['output']>;
  /** The number of units ordered for this item. */
  quantity_ordered?: Maybe<Scalars['Float']['output']>;
  /** The number of refunded items. */
  quantity_refunded?: Maybe<Scalars['Float']['output']>;
  /** The number of returned items. */
  quantity_returned?: Maybe<Scalars['Float']['output']>;
  /** The number of shipped items. */
  quantity_shipped?: Maybe<Scalars['Float']['output']>;
  /** The selected options for the base product, such as color or size. */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item. */
  status?: Maybe<Scalars['String']['output']>;
  /** Subtotal order item. */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** Thumbnail for the product specified in the order. */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option. */
  label: Scalars['String']['output'];
  /** The value of the option. */
  value: Scalars['String']['output'];
};

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type. */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method. */
  name: Scalars['String']['output'];
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']['output'];
};

/** Represents parameters that can be used to create an order in Shippit */
export type OrderRequestOrder_Input = {
  /** whether or not the order can be left unattended at the delivery address, options are ```Yes``` or ```No``` */
  authority_to_leave?: InputMaybe<Scalars['String']['input']>;
  /** Used by some carriers (e.g. `NinjaVan`) to indicate amount to be received on delivery for cash on delivery orders. */
  cash_on_delivery_amount?: InputMaybe<Scalars['Float']['input']>;
  /**
   * For ```courier_allocation```, the list of valid options are outlined below.
   *
   * - `AlliedExpressOvernight`
   * - `AlliedExpressSameday`
   * - `AramexAuNz`
   * - `AramexExpress`
   * - `AramexInternational`
   * - `Bonds`
   * - `CapitalTransport`
   * - `CityLink`
   * - `ClickAndCollect`
   * - `CouriersPlease`
   * - `CouriersPleaseExpress`
   * - `DhlEcommerce`
   * - `DhlExpress`
   * - `DhlEcommerceAsia`
   * - `DhlExpressInternational`
   * - `DirectCouriers`
   * - `DirectFreightExpress`
   * - `DoorDash`
   * - `DoorDashOndemand`
   * - `Eparcel`
   * - `EparcelExpress`
   * - `EparcelInternational`
   * - `EparcelInternationalExpress`
   * - `EparcelOndemand`
   * - `Fastway`
   * - `FedExInternationalEconomy`
   * - `FedExInternationalPriority`
   * - `FlashExpress`
   * - `FourPXStandard`
   * - `Gdex`
   * - `HunterExpress`
   * - `Janio`
   * - `JanioInternational`
   * - `Jnt`
   * - `KerryExpress`
   * - `KerryStandard`
   * - `LyneConnect`
   * - `LynePlus`
   * - `Neway`
   * - `NewZealandCouriers`
   * - `NewZealandPost`
   * - `NewZealandPostExpress`
   * - `NinjaVanExpress`
   * - `NinjaVanStandard`
   * - `PbtCourier`
   * - `PbtCourierExpress`
   * - `Pgeon`
   * - `Pickupp`
   * - `PlainLabel`
   * - `PlainLabelInternational`
   * - `PosMalaysia`
   *  - `Qxpress`
   * - `QxpressSameday`
   * - `SekoExpress`
   * - `SekoStandard`
   * - `SingPost`
   * - `SingPostExpress`
   * - `Skybox`
   * - `SmartRoutingInternational`
   * - `StarTrack`
   * - `StarTrackPremium`
   * - `Teleport`
   * - `TeleportInternational`
   * - `Tnt`
   * - `TntOvernightExpress`
   * - `Toll`
   * - `TollPriority`
   * - `UberOndemand`
   * - `YelloOndemand`
   *
   * One of `courier_allocation` or `courier_type` is required.
   *
   * If omitted or invalid option is provided in the request, we will allocate an enabled courier that matches the default service level. The default service level is `standard` and can be configured by Shippit on request for a merchant. The available service level options are ```standard```, ```express``` and ```priority```.
   *
   * `courier_allocaiton` is required when `tracking_only` is set to `true`
   */
  courier_allocation?: InputMaybe<Scalars['String']['input']>;
  /** Used in **tracking_order**'s, the ID assigned by some carriers to the shipment / consignment. */
  courier_job_id?: InputMaybe<Scalars['String']['input']>;
  /**
   * The service level for the order, valid options are `standard`, `express`, `priority`, `click_and_collect`. If you use `courier_type` in your request, then Shippit will allocate the courier for the job at that service level. If you want to specify the courier in the request please use `courier_allocation` attribute instead.
   *
   * One of `courier_allocation` or `courier_type` is required. If omitted or invalid option is provided in the request, we will allocate an enabled courier that matches the default service level. The default service level is `standard` and can be configured by Shippit on request for a merchant. The available service level options are ```standard```, ```express``` and ```priority```.
   */
  courier_type?: InputMaybe<Scalars['String']['input']>;
  /**
   * Shipping fee paid by the customer.
   * This is displayed on the commercial invoice for international orders to support accurate duties and tax calculation by customs. This fee is not related to the Shippit quote. When not provided, no shipping fee will be displayed on the commercial invoice.
   */
  customer_shipping_fee_paid?: InputMaybe<Scalars['String']['input']>;
  customs_clearance_attributes?: InputMaybe<Root_Type_For_OrderRequestOrderCustomsClearanceAttribute_Input>;
  /** delivery address for the order */
  delivery_address: Scalars['String']['input'];
  /** The destination country code for the order in `ISO 3166 Alpha-2` format. If unassigned, defaults to the country code of the merchant's primary location, or otherwise 'AU'. */
  delivery_country_code?: InputMaybe<Scalars['String']['input']>;
  /**
   * The date of the order for priority orders.
   *
   * The recommended format is in ISO-8601 `YYYY-MM-DD`, although the Shippit is flexible enough to parse `YYYY/MM/DD`.
   *
   * ```conditional``` -- specifies the date of the order for priority orders
   *
   * ```delivery_date``` must be in the future.
   */
  delivery_date?: InputMaybe<Scalars['Date']['input']>;
  /** Used in some countries to add additional district city information in addition to the `delivery_suburb` and `delivery_state`. Most of this time this is determined using the `delivery_suburb` and `delivery_postcode`. */
  delivery_district_city?: InputMaybe<Scalars['String']['input']>;
  /** special delivery instructions for the order, limited to 55 characters */
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  /** delivery postcode for the order */
  delivery_postcode: Scalars['String']['input'];
  /**
   * delivery state for the order
   * Australian States valid options are ```NSW```, ```QLD```, ```ACT```, ```WA```, ```NT```, ```SA```, ```VIC```, ```TAS```
   */
  delivery_state: Scalars['String']['input'];
  /** delivery suburb for the order */
  delivery_suburb: Scalars['String']['input'];
  /**
   * expected format: ```00:00-00:00```
   *
   * ```conditional``` -- specifies the time window of the order, to be used when sending a priority order
   *
   * ```delivery_window``` must be in the future.
   */
  delivery_window?: InputMaybe<Scalars['String']['input']>;
  /** Goods description for the order. May appear in labels for international orders. If not provided, defaults to the `type of goods` setting of the merchant account. Description is mandatory for international orders when `validate` is set to `true`. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The start of the dropoff window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm` */
  dropoff_at?: InputMaybe<Scalars['String']['input']>;
  /** The end of the dropoff window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm` */
  dropoff_deadline_at?: InputMaybe<Scalars['String']['input']>;
  /** The duty amount for an order. This is displayed on the commercial invoice for international orders to calculate the invoice total. Duties are not returned by Shippit. When not provided, no duties amount will be displayed on the commercial invoice. eg: 12.90 */
  duties?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Some carriers provide add-on services (features) which can be indicated in the order. These services are identified by a unique string and will depend on the carrier. To request these services, add a string to these field.
   * Services supported at the moment:
   * - `white_glove` (`Neway`, `DesignerTransport`):
   *       A delivery service that offers more personalised and tailored services for shipping high value, large or fragile goods.
   * - `calculate_ddp` (`SmartRoutingInternational`):
   *       When requested, the returned quote prices are inclusive of import taxes, duties and fees.
   */
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * An array of parcel specifications to be included in the order.
   *
   * There is a maximum of 1000 parcels per request.
   *
   * Each item can be used to specify the qty, dimensions, and other information about the products being shipped, and the parcel used to ship it. If the `Allocate ech item in an order to a separate carton` setting is enabled in the Shippit administration page, then each item will be assigned a separate parcel according to the dimensions given. Otherwise, Shippit may combine multiple items into a single parcel.
   *
   * If the `product_attributes` field is present, then product information will be specified in entries there, separate from the parcel information. In which case each parcel entry represents a single parcel.
   */
  parcel_attributes: Array<InputMaybe<Root_Type_For_ParcelAttributes_Input>>;
  /**
   * Pickup address for the return order
   *
   * \* **required** for return orders
   */
  pickup_address?: InputMaybe<Scalars['String']['input']>;
  /**
   * In order to fulfill the delivery commitment made to the customer, the carrier needs to know the pickup and delivery times for the parcel(s). Below, you will find all the fields that the carrier may require. The specific fields that are mandatory will depend on the carrier and the requested service.
   *
   * The start of the pickup window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm`
   */
  pickup_at?: InputMaybe<Scalars['String']['input']>;
  /** The end of the pickup window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm` */
  pickup_deadline_at?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pickup postcode for the return order
   *
   * \* **required** for return orders
   */
  pickup_postcode?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pickup state for the return order
   *
   * Australian states valid options are:
   * ```NSW```, ```QLD```, ```ACT```, ```WA```, ```NT```, ```SA```, ```VIC```, ```TAS```
   *
   * \* **required** for return orders
   */
  pickup_state?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pickup suburb for the return order
   *
   * \* **required** for return orders
   */
  pickup_suburb?: InputMaybe<Scalars['String']['input']>;
  /**
   * an array of product details. If this is present, each item in ```parcel_attributes``` represents a separate parcel, while each line in ```product_attributes``` represents a product line item.
   *
   * There is a maximum of 1000 parcels per request.
   */
  product_attributes?: InputMaybe<Array<InputMaybe<Product_Input>>>;
  /** Three letter ISO 4217 currency code that applies to the order, which will be sent to the carrier and presented on the customs invoice. Defaults to ```AUD``` */
  product_currency?: InputMaybe<Scalars['String']['input']>;
  /** ```conditional``` -- number of the person receiving the order, may be different than the user who purchased the order. Mandatory for International orders. */
  receiver_contact_number?: InputMaybe<Scalars['String']['input']>;
  /** Two-letter ISO 639-1 language code of the recipient. Used to determine the language of tracking notifications and other communications. Defaults to ```EN``` */
  receiver_language_code?: InputMaybe<Scalars['String']['input']>;
  /** name of the person receiving the order if different than the user who purchased the order */
  receiver_name?: InputMaybe<Scalars['String']['input']>;
  /** Merchant invoice number - the customer-facing sales order reference of the order. This would be what the recipient sees on the shipping label, packslip, customs declaration, receipt, etc. */
  retailer_invoice?: InputMaybe<Scalars['String']['input']>;
  /** Merchant reference id - if the merchant uses a separate internal reference id for the order, it can be placed here. */
  retailer_reference?: InputMaybe<Scalars['String']['input']>;
  /** Whether the order being passed is a return order or not */
  return?: InputMaybe<Scalars['Boolean']['input']>;
  /** if true, all notifications will be suppressed for this specific order */
  suppress_communications?: InputMaybe<Scalars['Boolean']['input']>;
  /** The tax amount for an order. This is displayed on the commercial invoice for international orders to calculate the invoice total. When not provided, no tax amount will be displayed separately on the commercial invoice. eg: 2.39 */
  tax_amount?: InputMaybe<Scalars['Float']['input']>;
  /** An array of Tracking History statuses that are are shown to the recipient as part of the order's history on the tracking page. */
  tracking_histories?: InputMaybe<Array<InputMaybe<Order_Request_TrackingHistory_Input>>>;
  /**
   * Whether the Order being passed is a **tracking order** or not.
   *
   * A **tracking order** is an order where the courier was allocated outside of Shippit, but was loaded into Shippit to take advantage of tracking and notifications. If this is present and set to `true`, this order is a tracking order.
   *
   * If it is set to ```true```, ```courier_allocation``` must be present.
   */
  tracking_only?: InputMaybe<Scalars['Boolean']['input']>;
  user_attributes?: InputMaybe<Root_Type_For_UserAttributes_Input>;
  /**
   * when true, run validations against the submitted order and only save the order if the supplied parameters are valid.
   * Validations run
   *  - destination suburb and postcode checked against a list of known postcodes / suburbs.
   *  - If a valid combination is not found, a suggested address will be returned.
   */
  validate?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents a response to an OrderRequest, which shows either the generated order object or an error code with a description of the error. */
export type OrderResponse = {
  __typename?: 'OrderResponse';
  JSON?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<OrderResponseOrder>;
};

/** Represents an Order that was created in Shippit */
export type OrderResponseOrder = {
  __typename?: 'OrderResponseOrder';
  /** Delivery instructions as sent to the courier. In most cases, this is the same as the `delivery_instructions` passed into the request. Some couriers, however, have a specific format expected when sending delivery instructions through their API. This will contain the actual delivery instructions that get sent through the courier API when booked. */
  courier_delivery_instructions?: Maybe<Scalars['String']['output']>;
  /** Used in **tracking_order**'s, the ID assigned by some carriers to the shipment / consignment. */
  courier_job_id?: Maybe<Scalars['String']['output']>;
  /**
   * Human-readable name of the courier that has been allocated to the order, or `null` if the order hasn't been allocated yet.
   *
   * If you're creating orders by passing in `courier_type`, the courier will usually not be yet be assigned at order creation and you will get `null`. Courier allocation will be run as a background process depending on the merchant preferences, available couriers, and quotes returned by the couriers, which may take a few seconds to complete after order creation.
   *
   * If you're passing in a specific courier keyword in `courier_allocation`, this will reflect the courier that is specified.
   *
   * Note that the Shippit web user can also update the courier in between API calls. The final courier that has been assigned can be determined from the LABEL call.
   */
  courier_name?: Maybe<Scalars['String']['output']>;
  /** The courier allocated to the order. See the ORDER CREATE `courier_allocation` API for available keywords. */
  courier_type?: Maybe<Scalars['String']['output']>;
  /** Whether or not customs documents, such as declarations, invoices, etc for the Order that should be printed and included with the shipment. By default this is `true` for International orders. */
  customs_documents_require_printing?: Maybe<Scalars['Boolean']['output']>;
  /** delivery address for the order */
  delivery_address: Scalars['String']['output'];
  /** The destination country code for the order in `ISO 3166 Alpha-2` format. If unassigned, defaults to the country code of the merchant's primary location, or otherwise 'AU'. */
  delivery_country_code?: Maybe<Scalars['String']['output']>;
  /**
   * The date of the order for priority orders.
   *
   * The recommended format is in ISO-8601 `YYYY-MM-DD`, although the Shippit is flexible enough to parse `YYYY/MM/DD`.
   *
   * ```conditional``` -- specifies the date of the order for priority orders
   *
   * ```delivery_date``` must be in the future.
   */
  delivery_date?: Maybe<Scalars['Date']['output']>;
  /** Used in some countries to add additional district city information in addition to the `delivery_suburb` and `delivery_state`. Most of this time this is determined using the `delivery_suburb` and `delivery_postcode`. */
  delivery_district_city?: Maybe<Scalars['String']['output']>;
  /** special delivery instructions for the order, limited to 55 characters */
  delivery_instructions?: Maybe<Scalars['String']['output']>;
  /** delivery postcode for the order */
  delivery_postcode: Scalars['String']['output'];
  /**
   * delivery state for the order
   * Australian States valid options are ```NSW```, ```QLD```, ```ACT```, ```WA```, ```NT```, ```SA```, ```VIC```, ```TAS```
   */
  delivery_state: Scalars['String']['output'];
  /** delivery suburb for the order */
  delivery_suburb: Scalars['String']['output'];
  /**
   * expected format: ```00:00-00:00```
   *
   * ```conditional``` -- specifies the time window of the order, to be used when sending a priority order
   *
   * ```delivery_window``` must be in the future.
   */
  delivery_window?: Maybe<Scalars['String']['output']>;
  documents: OrderResponseOrderDocumentsHash;
  /** Shippit internal numerical ID */
  id?: Maybe<Scalars['Int']['output']>;
  /** Internal link between an order and a Shippit invoice - will almost always be null on order creation. */
  invoice_number?: Maybe<Scalars['JSON']['output']>;
  parcel_attributes?: Maybe<Order_Response_Parcel_Specification>;
  /**
   * The price that will be charged for the allocated order.
   *
   * If you're creating orders by passing in `courier_type`, the courier will usually not be yet be assigned at order creation and you will get `0`. Courier allocation will be run as a background process depending on the merchant preferences, available couriers, and quotes returned by the couriers, which may take a few seconds to complete after order creation.
   *
   * Note that the Shippit web user can also update the courier in between API calls. The final courier and quoted price can be determined from the LABEL call.
   *
   * If the quoted price is still `0` during the LABEL call, something likely went wrong with the courier selection and the order may need to be amended.
   */
  price?: Maybe<Scalars['JSON']['output']>;
  /** Internal order status set and progressed by Shippit upon creation. */
  processing_state?: Maybe<Scalars['String']['output']>;
  /**
   * An array of product items specified in the order.
   *
   * If product information was not provided, this array will be blank.
   */
  products?: Maybe<Array<Maybe<Product>>>;
  /** ```conditional``` -- number of the person receiving the order, may be different than the user who purchased the order. Mandatory for International orders. */
  receiver_contact_number?: Maybe<Scalars['mutation_createOrder_oneOf_0_response_allOf_0_receiver_contact_number']['output']>;
  /** Two-letter ISO 639-1 language code of the recipient. Used to determine the language of tracking notifications and other communications. Defaults to ```EN``` */
  receiver_language_code?: Maybe<Scalars['String']['output']>;
  /** name of the person receiving the order if different than the user who purchased the order */
  receiver_name?: Maybe<Scalars['String']['output']>;
  /** Merchant invoice number - the customer-facing sales order reference of the order. This would be what the recipient sees on the shipping label, packslip, customs declaration, receipt, etc. */
  retailer_invoice?: Maybe<Scalars['mutation_createOrder_oneOf_0_response_allOf_0_retailer_invoice']['output']>;
  /** Whether or not the order is a return order. */
  return?: Maybe<Scalars['Boolean']['output']>;
  /** `tracking_number` in lowercase. */
  slug: Scalars['String']['output'];
  /** The state of the order as progressed by the merchant. */
  state?: Maybe<Scalars['String']['output']>;
  /** An array of Tracking History statuses that are are shown to the recipient as part of the order's history on the tracking page. */
  tracking_histories?: Maybe<Array<Maybe<OrderResponseTrackingHistory>>>;
  /** Unique random ID assigned by Shippit to an order. This can be used as a reference for future API calls or support tickets. */
  tracking_number: Scalars['String']['output'];
  /** The URL of the order's customer tracking page. */
  tracking_url?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Root_Type_For_UserAttributes>;
};

/** A keyword hash of documents generated for an order. Usually populated during the LABEL call. */
export type OrderResponseOrderDocumentsHash = {
  __typename?: 'OrderResponseOrderDocumentsHash';
  archive_awb?: Maybe<Root_Type_For_LabelDocument>;
  customs_invoice?: Maybe<Root_Type_For_LabelDocument>;
  dangerous_goods_declaration?: Maybe<Root_Type_For_LabelDocument>;
  packing_slip?: Maybe<Root_Type_For_LabelDocument>;
  shipping_label?: Maybe<Root_Type_For_LabelDocument>;
};

/**
 * For `tracking-only` orders, an object representing the tracking events provided in order creation.
 *
 * The object returned is in the following format:
 *
 * `{ "status_name": "ISO-8601-TIMESTAMP" }`.
 */
export type OrderResponseTrackingHistory = {
  __typename?: 'OrderResponseTrackingHistory';
  despatch_in_progress?: Maybe<Scalars['DateTime']['output']>;
};

/** Contains order shipment details. */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment. */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']['output'];
  /** An array of items included in the shipment. */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number. */
  number: Scalars['String']['output'];
  /** Shipping method code. */
  shipping_method?: Maybe<Scalars['String']['output']>;
  /** The timestamp of the shipment when created. */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** An array of shipment tracking details. */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Input for filtering by Shippit status. */
export type OrderShippitStatusFilterInput = {
  /** The status to filter customer orders by. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderStatusFilterInput = {
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money;
  /** The applied discounts to the order. */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money;
  /** Details about the shipping and handling costs for the order. */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes. */
  subtotal: Money;
  /** The order tax details. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The gift card balance applied to the order. */
  total_giftcard?: Maybe<Money>;
  /** The shipping amount for the order. */
  total_shipping: Money;
  /** The amount of tax applied to the order. */
  total_tax: Money;
};

/**
 * An event that tracks a change in `status` of a parcel's journey to fulfillment, with a `timestamp` of when the event happened.
 *
 * This can be either be provided by the merchant as part of a **tracking order** request, or returned by a **track** request.
 */
export type Order_Request_TrackingHistory_Input = {
  /** The status of the order */
  status: Scalars['String']['input'];
  /**
   * expected format: `ISO-8601` datetime, such as `YYYY-MM-DDThh:mm` or `YYYY-MM-DDThh:mm:ss+TZ`.
   *
   * The date-time when the status change occurred.
   */
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Represents a parcel attached to an order. */
export type Order_Response_Parcel_Specification = {
  __typename?: 'Order_Response_Parcel_specification';
  JSON?: Maybe<Scalars['JSON']['output']>;
  /** Depth of the parcel in metres */
  depth?: Maybe<Scalars['Float']['output']>;
  /**
   * Parcel number in the carrier system.
   *
   * This is used when the order is a tracking order, to match the parcel number in a carrier against the parcel recorded in shippit.
   */
  label_number?: Maybe<Scalars['String']['output']>;
  /** Length of the parcel in metres */
  length?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of parcels specified by the entry.
   *
   * Depending on how the merchant account is configured, the number of parcels generated may not match the number of parcel attributes passed in. By default, Shippit will try to combine all parcel attributes into a single parcel with the sum of the weights.
   *
   * However, if `Allocate each item in an order to a separate carton` is enabled, then Shippit will generate one parcel entry for each parcel entry sent in.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /** Weight of the parcel in kilos. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** Width of the parcel in metres. */
  width?: Maybe<Scalars['Float']['output']>;
};

/**
 * Represents a parcel attached to an order.
 *
 * ## parcels vs products
 * How parcels relate to products is controlled by whether or not a **`product_attributes`** key is also defined. If a **`product_attributes`** is not defined, then the number of cartons is determined by the `Settings -> Pick & Pack -> Allocate each item in an order to a separate carton` option in Shippit, and the **`qty`** field will now specify either the number of parcels or products.
 *
 * If a **`product_attributes`** key is specified in the request, then the products can be specified separately from the parcels. In which case, the **`qty`** field should not be present: each parcel attributes object represents a separate parcel, and the number of products is specified in the **`product_attributes`** key. There is a maximum of 1000 parcels per request.
 */
export type Parcel_Input = {
  /** Depth of the parcel in metres */
  depth?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Parcel number in the carrier system.
   *
   * This is used when the order is a tracking order, to match the parcel number in a carrier against the parcel recorded in shippit.
   */
  label_number?: InputMaybe<Scalars['String']['input']>;
  /** Length of the parcel in metres */
  length?: InputMaybe<Scalars['Float']['input']>;
  /**
   * ```conditional``` -- The number of products specified by the entry.
   *
   * There is a maximum of 1000 parcels per quote request.
   *
   * Should not be present if a `product_attributes` key is present in the request.
   *
   * If `Allocate each item in an order to a separate carton` is enabled in Shippit, a separate parcel is generated for each product listed.
   */
  qty?: InputMaybe<Scalars['Float']['input']>;
  /** Weight of the parcel in kilos. */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** Width of the parcel in metres. */
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String']['input'];
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  /** @deprecated  */
  Live = 'LIVE',
  /** @deprecated  */
  Test = 'TEST'
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** The mode for the Payflow transaction. */
  mode?: Maybe<PayflowLinkMode>;
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url?: Maybe<Scalars['String']['output']>;
  /** The secure token generated by PayPal. */
  secure_token?: Maybe<Scalars['String']['output']>;
  /** The secure token ID generated by PayPal. */
  secure_token_id?: Maybe<Scalars['String']['output']>;
};

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']['input'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  /** The cart with the updated selected payment method. */
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output'];
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output'];
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output'];
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output'];
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output'];
};

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
};

/** Defines the payment method. */
export type PaymentMethodInput = {
  /** Required input for Afterpay payment */
  afterpay?: InputMaybe<AfterpayInput>;
  braintree?: InputMaybe<BraintreeInput>;
  braintree_applepay?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  braintree_googlepay?: InputMaybe<BraintreeInput>;
  /** The internal name for the payment method. */
  code: Scalars['String']['input'];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Paypal Billing Agreement */
  paypal_billing_agreement?: InputMaybe<PaypalBillingAgreementInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
};

/** The stored payment method available to the customer. */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** A description of the stored account details. */
  details?: Maybe<Scalars['String']['output']>;
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']['output'];
  /** The public hash of the token. */
  public_hash: Scalars['String']['output'];
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types. */
export enum PaymentTokenTypeEnum {
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Account = 'account',
  /**
   * phpcs:ignore Magento2.GraphQL.ValidArgumentName
   * @deprecated
   */
  Card = 'card'
}

/** Contains required input for Paypal Billing Agreement. */
export type PaypalBillingAgreementInput = {
  /** The unique ID of the Paypal Billing Agreement. */
  ba_agreement_id: Scalars['String']['input'];
};

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input'];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']['input'];
};

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token?: Maybe<Scalars['String']['output']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The payment method code. */
  code: Scalars['String']['input'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars['Boolean']['input']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit?: Maybe<Scalars['String']['output']>;
  /** The URL to the PayPal login page. */
  start?: Maybe<Scalars['String']['output']>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input'];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars['String']['input']>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input'];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']['input']>;
};

/** List of saved paypal agreements. */
export type PaypalSavedMethod = {
  __typename?: 'PaypalSavedMethod';
  /** Reference */
  agreement_id?: Maybe<Scalars['String']['output']>;
  /** Label */
  label?: Maybe<Scalars['String']['output']>;
};

/** Pet */
export type Pet = {
  __typename?: 'Pet';
  acquariumEnvironment?: Maybe<Query_GetPets_OneOf_0_Items_AcquariumEnvironment>;
  /** The size of the acquarium where the pet lives in L */
  acquariumSize?: Maybe<Scalars['NonNegativeFloat']['output']>;
  /** Array of allergy ID's */
  allergyIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** An array of allergy names */
  allergyNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The known or approximate birthday of the pet. */
  birthday?: Maybe<Scalars['Date']['output']>;
  bodyShape?: Maybe<Query_GetPets_OneOf_0_Items_BodyShape>;
  /** The ID for the breed from the Species API */
  breedId?: Maybe<Scalars['UUID']['output']>;
  /** The name of the breed */
  breedName?: Maybe<Scalars['String']['output']>;
  /** The date/time this record was created at */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID for the customer who owns the pet */
  customerId: Scalars['UUID']['output'];
  /** Uses the dog wash service */
  dogWashService?: Maybe<Scalars['Boolean']['output']>;
  /** The types of food the pet eats. */
  eats?: Maybe<Scalars['String']['output']>;
  /** The energy level for the pet */
  energyLevel?: Maybe<Scalars['String']['output']>;
  /** Array of food brands ID's */
  foodBrandIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** An array of food brand names */
  foodBrandNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Array of flea, tick and worm brand ID's */
  ftwBrandIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** An array of flea, tick and worm brand names */
  ftwBrandNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Uses the grooming service */
  groomingService?: Maybe<Scalars['Boolean']['output']>;
  habitat?: Maybe<Query_GetPets_OneOf_0_Items_Habitat>;
  /** An array of health issue ID's */
  healthIssueIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** An array of health issue names */
  healthIssueNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Array of heartworm brand ID's */
  heartwormBrandIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** An array of heartworm brand names */
  heartwormBrandNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A automatically assigned unique ID for this pet */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Name of the pet */
  name: Scalars['String']['output'];
  /** Sometimes the customer will create one pet profile representing multiple pets. This is most likely to happen with fish where the customer could create one record for "Goldie the Goldfish" but they want to indicate this actually for 6 goldfish. */
  numberOfPets?: Maybe<Scalars['NonNegativeInt']['output']>;
  /** The alias for the RX Works instance */
  patientAlias?: Maybe<Scalars['String']['output']>;
  /** The patient ID from RX Works */
  patientId?: Maybe<Scalars['String']['output']>;
  petProfileCategory: Query_GetPets_OneOf_0_Items_PetProfileCategory;
  /** A URL linking to the public profile picture for the pet. */
  profilePhotoUrl?: Maybe<Scalars['URL']['output']>;
  profile_complete?: Maybe<Scalars['Int']['output']>;
  sex?: Maybe<Query_GetPets_OneOf_0_Items_Sex>;
  /** The source of the pet profile */
  source?: Maybe<Scalars['String']['output']>;
  /** Set to true to enable treatment reminders or false to disable them for this pet */
  treamentReminders?: Maybe<Scalars['Boolean']['output']>;
  /** Has been treated for fleas, tickets and worms */
  treatedFleaTickWorm?: Maybe<Scalars['Boolean']['output']>;
  /** Had been treated for heartworm */
  treatedHeartworm?: Maybe<Scalars['Boolean']['output']>;
  /** The date/time this record was updated at */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Uses the vet service */
  vetService?: Maybe<Scalars['Boolean']['output']>;
  /** Uses the Webvet service */
  webvetService?: Maybe<Scalars['Boolean']['output']>;
  /** The weight of the pet in grams. Example: 1000 = 1kg */
  weight?: Maybe<Scalars['NonNegativeInt']['output']>;
};

export type PetAiSendFeedbackInput = {
  feedback?: InputMaybe<Scalars['Boolean']['input']>;
  messageId: Scalars['String']['input'];
  threadId: Scalars['String']['input'];
};

export type PetAiQuery = {
  thread_id?: InputMaybe<Scalars['String']['input']>;
  user_prompt: Scalars['String']['input'];
};

export type PetAiResponse = {
  __typename?: 'PetAiResponse';
  actions?: Maybe<Array<Maybe<Action>>>;
  agent_response: Scalars['String']['output'];
  followup_questions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  has_products?: Maybe<Scalars['Boolean']['output']>;
  max_token_count?: Maybe<Scalars['Int']['output']>;
  message_id: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<ProductDetails>>>;
  thread_id: Scalars['String']['output'];
  token_count?: Maybe<Scalars['Int']['output']>;
};

export type PetAiStaticDataResponse = {
  __typename?: 'PetAiStaticDataResponse';
  icon?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PetAiStaticDataResponseWrapper = {
  __typename?: 'PetAiStaticDataResponseWrapper';
  splashScreenLogo?: Maybe<Scalars['String']['output']>;
  splashScreenLogoType?: Maybe<Scalars['String']['output']>;
  splashScreenTitle?: Maybe<Scalars['String']['output']>;
  staticQuestions?: Maybe<Array<Maybe<PetAiStaticDataResponse>>>;
};

export type PetAiStaticDisclaimerResponse = {
  __typename?: 'PetAiStaticDisclaimerResponse';
  html?: Maybe<Scalars['String']['output']>;
};

export type PetBadResponse = {
  __typename?: 'PetBadResponse';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type PetInputV1 = {
  acquariumEnvironment?: InputMaybe<Query_GetPets_OneOf_0_Items_AcquariumEnvironment>;
  acquariumSize?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
  allergyIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  bodyShape?: InputMaybe<Query_GetPets_OneOf_0_Items_BodyShape>;
  breedId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dogWashService?: InputMaybe<Scalars['Boolean']['input']>;
  eats?: InputMaybe<Scalars['String']['input']>;
  energyLevel?: InputMaybe<String>;
  foodBrandIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  ftwBrandIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  groomingService?: InputMaybe<Scalars['Boolean']['input']>;
  habitat?: InputMaybe<Query_GetPets_OneOf_0_Items_Habitat>;
  healthIssueIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  heartwormBrandIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  numberOfPets?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  patientAlias?: InputMaybe<Scalars['String']['input']>;
  patientId?: InputMaybe<Scalars['String']['input']>;
  petProfileCategory: Query_GetPets_OneOf_0_Items_PetProfileCategory;
  profilePhotoUrl?: InputMaybe<Scalars['URL']['input']>;
  sex?: InputMaybe<Query_GetPets_OneOf_0_Items_Sex>;
  source?: InputMaybe<Scalars['String']['input']>;
  treamentReminders?: InputMaybe<Scalars['Boolean']['input']>;
  treatedFleaTickWorm?: InputMaybe<Scalars['Boolean']['input']>;
  treatedHeartworm?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vetService?: InputMaybe<Scalars['Boolean']['input']>;
  webvetService?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type PetProfileDataInterface = {
  __typename?: 'PetProfileDataInterface';
  /** The ?array of allergy IDs. */
  allergy_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type of the aquarium environment. */
  aquarium_environment?: Maybe<Scalars['String']['output']>;
  /** The size of the aquarium where the pet lives in liters. */
  aquarium_size?: Maybe<Scalars['Float']['output']>;
  /** The birthday of the pet. */
  birthday?: Maybe<Scalars['String']['output']>;
  /** The body shape of the pet. */
  body_shape?: Maybe<Scalars['String']['output']>;
  /** The ID for the breed from the Species API. */
  breed_id?: Maybe<Scalars['String']['output']>;
  /** The creation date/time of the pet record. */
  created_at?: Maybe<Scalars['String']['output']>;
  /** The ID for the customer who owns the pet. */
  customer_id: Scalars['String']['output'];
  /** If the pet uses the dog wash service. */
  dog_wash_service?: Maybe<Scalars['Boolean']['output']>;
  /** The types of food the pet eats, comma separated */
  eats?: Maybe<Scalars['String']['output']>;
  energy_level?: Maybe<Scalars['String']['output']>;
  /** The ?array of food brand IDs. */
  food_brand_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ?array of flea, tick, and worm brand IDs. */
  ftw_brand_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If the pet uses the grooming service. */
  grooming_service?: Maybe<Scalars['Boolean']['output']>;
  /** The habitat where the pet lives. */
  habitat?: Maybe<Scalars['String']['output']>;
  /** The ?array of health issue IDs. */
  health_issue_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ?array of heartworm brand IDs. */
  heartworm_brand_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ID for this pet. */
  id?: Maybe<Scalars['String']['output']>;
  /** The name of the pet. */
  name: Scalars['String']['output'];
  number_of_pets?: Maybe<Scalars['Int']['output']>;
  patient_alias?: Maybe<Scalars['String']['output']>;
  patient_id?: Maybe<Scalars['String']['output']>;
  /** The pet profile category. */
  pet_profile_category: Scalars['String']['output'];
  /** The profile photo URL for the pet. */
  profile_photo_url?: Maybe<Scalars['String']['output']>;
  /** The sex of the pet. */
  sex?: Maybe<Scalars['String']['output']>;
  /** The source of the pet profile. */
  source: Scalars['String']['output'];
  /** If the pet has been treated for fleas, ticks, and worms. */
  treated_flea_tick_worm?: Maybe<Scalars['Boolean']['output']>;
  /** If the pet has been treated for heartworm. */
  treated_heartworm?: Maybe<Scalars['Boolean']['output']>;
  treatment_reminders?: Maybe<Scalars['Boolean']['output']>;
  /** The last update date/time of the pet record. */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** If the pet uses the vet service. */
  vet_service?: Maybe<Scalars['Boolean']['output']>;
  /** If the pet uses the Webvet service. */
  webvet_service?: Maybe<Scalars['Boolean']['output']>;
  /** The weight of the pet in grams. */
  weight?: Maybe<Scalars['Int']['output']>;
};

export type PetResponse = Pet | PetBadResponse;

/** Pet */
export type Pet_Input = {
  acquariumEnvironment?: InputMaybe<Query_GetPets_OneOf_0_Items_AcquariumEnvironment>;
  /** The size of the acquarium where the pet lives in L */
  acquariumSize?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
  /** Array of allergy ID's */
  allergyIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** An array of allergy names */
  allergyNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The known or approximate birthday of the pet. */
  birthday?: InputMaybe<Scalars['Date']['input']>;
  bodyShape?: InputMaybe<Query_GetPets_OneOf_0_Items_BodyShape>;
  /** The ID for the breed from the Species API */
  breedId?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the breed */
  breedName?: InputMaybe<Scalars['String']['input']>;
  /** The date/time this record was created at */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The ID for the customer who owns the pet */
  customerId: Scalars['UUID']['input'];
  /** Uses the dog wash service */
  dogWashService?: InputMaybe<Scalars['Boolean']['input']>;
  /** The types of food the pet eats. */
  eats?: InputMaybe<Scalars['String']['input']>;
  /** The energy level for the pet */
  energyLevel?: InputMaybe<Scalars['String']['input']>;
  /** Array of food brands ID's */
  foodBrandIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** An array of food brand names */
  foodBrandNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of flea, tick and worm brand ID's */
  ftwBrandIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** An array of flea, tick and worm brand names */
  ftwBrandNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Uses the grooming service */
  groomingService?: InputMaybe<Scalars['Boolean']['input']>;
  habitat?: InputMaybe<Query_GetPets_OneOf_0_Items_Habitat>;
  /** An array of health issue ID's */
  healthIssueIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** An array of health issue names */
  healthIssueNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of heartworm brand ID's */
  heartwormBrandIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** An array of heartworm brand names */
  heartwormBrandNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A automatically assigned unique ID for this pet */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Name of the pet */
  name: Scalars['String']['input'];
  /** Sometimes the customer will create one pet profile representing multiple pets. This is most likely to happen with fish where the customer could create one record for "Goldie the Goldfish" but they want to indicate this actually for 6 goldfish. */
  numberOfPets?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** The alias for the RX Works instance */
  patientAlias?: InputMaybe<Scalars['String']['input']>;
  /** The patient ID from RX Works */
  patientId?: InputMaybe<Scalars['String']['input']>;
  petProfileCategory: Query_GetPets_OneOf_0_Items_PetProfileCategory;
  /** A URL linking to the public profile picture for the pet. */
  profilePhotoUrl?: InputMaybe<Scalars['URL']['input']>;
  sex?: InputMaybe<Query_GetPets_OneOf_0_Items_Sex>;
  /** The source of the pet profile */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Set to true to enable treatment reminders or false to disable them for this pet */
  treamentReminders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Has been treated for fleas, tickets and worms */
  treatedFleaTickWorm?: InputMaybe<Scalars['Boolean']['input']>;
  /** Had been treated for heartworm */
  treatedHeartworm?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date/time this record was updated at */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Uses the vet service */
  vetService?: InputMaybe<Scalars['Boolean']['input']>;
  /** Uses the Webvet service */
  webvetService?: InputMaybe<Scalars['Boolean']['input']>;
  /** The weight of the pet in grams. Example: 1000 = 1kg */
  weight?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  /** The ID of the order. */
  order: Order;
};

export type PostV1RecurringCancelOrder_Request_Input = {
  request: Overdose_Recurring_Orders_Data_Cancel_Order_Request_Interface_Input;
};

export type PostV1RecurringCancelOrder_Response = RecurringOrdersCancelOrderResponseInterface | Error_Response;

export type PostV1RecurringPauseOrder_Request_Input = {
  request: Overdose_Recurring_Orders_Data_Pause_Order_Request_Interface_Input;
};

export type PostV1RecurringPauseOrder_Response = RecurringOrdersPauseOrderResponseInterface | Error_Response;

export type PostV1RecurringReactivateOrder_Request_Input = {
  request: Overdose_Recurring_Orders_Data_Reactivate_Order_Request_Interface_Input;
};

export type PostV1RecurringReactivateOrder_Response = RecurringOrdersReactivateOrderResponseInterface | Error_Response;

export type PostV1RecurringSkipOnceOrder_Request_Input = {
  request: Overdose_Recurring_Orders_Data_Skip_Once_Order_Request_Interface_Input;
};

export type PostV1RecurringSkipOnceOrder_Response = RecurringOrdersSkipOnceOrderResponseInterface | Error_Response;

/** Defines the input for the postcode search based on country code. */
export type PostcodeSearchInput = {
  /** The postcode country code. */
  country_code: Scalars['String']['input'];
  /** Limit the number of results. */
  limit: Scalars['Int']['input'];
  /** The query search. */
  query_search: Scalars['String']['input'];
};

/** Defines the output of the postcode search. */
export type PostcodeSearchOutput = {
  __typename?: 'PostcodeSearchOutput';
  /** Flag if postcode is in metro location. */
  is_metro?: Maybe<Scalars['Boolean']['output']>;
  /** The latitude of postcode center. */
  latitude?: Maybe<Scalars['String']['output']>;
  /** The longitude of postcode center. */
  longitude?: Maybe<Scalars['String']['output']>;
  /** The postcode. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** The string result of the search. */
  result?: Maybe<Scalars['String']['output']>;
  /** The state related to the postcode in `Magento ID`. */
  state?: Maybe<Scalars['Int']['output']>;
  /** The suburb related to the postcode. */
  suburb?: Maybe<Scalars['String']['output']>;
};

export type PreferredPaymentMethod = {
  __typename?: 'PreferredPaymentMethod';
  /** Payment method code */
  code?: Maybe<Scalars['String']['output']>;
  /** Payment method title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Contains the results of a `products` query. */
export type PreviouslyPurchasedProducts = {
  __typename?: 'PreviouslyPurchasedProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount?: Maybe<Money>;
};

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** `PriceAdjustment.code` is deprecated. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog. */
  Tax = 'TAX',
  /** @deprecated WEEE code is deprecated. Use `fixed_product_taxes.label` instead. */
  Weee = 'WEEE',
  /** @deprecated Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog. */
  WeeeTax = 'WEEE_TAX'
}

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  /** @deprecated  */
  Excluded = 'EXCLUDED',
  /** @deprecated  */
  Included = 'INCLUDED'
}

export type PriceProductInfo = {
  __typename?: 'PriceProductInfo';
  /** Member Price */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** Member Saving */
  member_saving?: Maybe<Scalars['Float']['output']>;
  /** Price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Regular Price */
  regular_price?: Maybe<Scalars['Float']['output']>;
  /** Repeat Delivery Price */
  repeat_price?: Maybe<Scalars['Float']['output']>;
};

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** Defines the price type. */
export enum PriceTypeEnum {
  /** @deprecated  */
  Dynamic = 'DYNAMIC',
  /** @deprecated  */
  Fixed = 'FIXED',
  /** @deprecated  */
  Percent = 'PERCENT'
}

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  /** @deprecated  */
  AsLowAs = 'AS_LOW_AS',
  /** @deprecated  */
  PriceRange = 'PRICE_RANGE'
}

/** Represents a single product line item in an order. */
export type Product = {
  __typename?: 'Product';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Products_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
  /** This is the DG class when making dangerous goods declarations. */
  dangerous_goods_class?: Maybe<Scalars['String']['output']>;
  /**
   * This is the DG code required when making dangerous goods declarations.
   *
   * Before you can declare orders as having dangerous goods, you must first request for dangerous goods to enabled for your account. Contact Shippit Support or your account manager to have this enabled.
   *
   * DG surcharges are often charged on the weight of the order, so it is recommended to split your order into multiple orders if your order contains either:
   * - both dangerous and non-dangerous goods, or
   * - more than one dangerous goods code
   */
  dangerous_goods_code?: Maybe<Scalars['String']['output']>;
  /** Additional information related to dangerous goods being shipped */
  dangerous_goods_text?: Maybe<Scalars['String']['output']>;
  /** Location of the product */
  location?: Maybe<Scalars['String']['output']>;
  /** Two-letter country code (ISO 3166-1 Alpha-2) for the product's origin country. This is used in customs tracking for International shipments. Defaults to the home country of the Merchant. */
  origin_country_code?: Maybe<Scalars['String']['output']>;
  /**
   * The number of products packed; used in partial orders, or otherwise when the number of products in the parcel is less than the total in the order. If not present, set to product `quantity`.
   *
   * If this is present, at least 1 item should have packed greater than `0`.
   *
   * For international orders, all items should have packed greater than `0`.
   */
  packed?: Maybe<Scalars['Int']['output']>;
  /** Unit price of each product line item. Used in the packing slip and customs declarations. */
  price?: Maybe<Scalars['Float']['output']>;
  /** Product line associated with product. Like SKU, this is also for stock keeping purposes, and can be used when SKU would not be enough (e.g. an order containing multiple lines with the same SKU) */
  product_line_id?: Maybe<Scalars['String']['output']>;
  /** The number of products ordered. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** ```conditional``` -- Stock Keeping Unit (SKU) code of the product, for stock keeping purposes. Mandatory on international orders with specific couriers. */
  sku?: Maybe<Scalars['String']['output']>;
  /** Tariff code for International orders declarations */
  tariff_code?: Maybe<Scalars['String']['output']>;
  /** ```conditional``` -- Title or description of the product. Mandatory for international orders with specific couriers. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']['output'];
  /** The display value of the attribute. */
  value: Scalars['String']['output'];
};

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Flag Background Colour */
  Flag_background_hex_colour?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Flag Font Colour */
  Flag_font_hex_colour?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Flag Text */
  Flag_text?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Accessory Type */
  accessory_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Activity Level */
  activity_level?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Application Method */
  application_method?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bed Filling */
  bed_fill?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bed Shape */
  bed_shape?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bed Type */
  bed_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Book Type */
  book_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Brand filter */
  brand_filter?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Breed */
  breed?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Bundle Quantity */
  bundle_quantity?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Cage Type */
  cage_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Care Level */
  care_level?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cat Litter Features */
  cat_litter_features?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by category URL path. */
  category_url_path?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Cleaning Type */
  cleaning_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Clothing Type */
  clothing_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Coat Type */
  coat_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Collar or lead type */
  collar_or_lead_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Colour */
  colour?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Dangerous / Hazardous */
  dangerous___hazardous?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Decor Type */
  decor_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Pet Diet */
  diet?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Digital Delivery */
  digital_delivery?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Duration */
  duration?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Eating Habit */
  eating_habit?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the product ID. */
  entity_id?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Express Shipping */
  express_shipping?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Fashion Range */
  fashion_range?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Feeding Accessory Type */
  feeding_accessory_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Filter Type */
  filter_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Fish Category */
  fish_category?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Fish Specialty */
  fish_specialty?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Fish Species */
  fish_species?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Flavour */
  flavour?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Food Type */
  food_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Grooming Needs */
  grooming_needs?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Grooming Type */
  grooming_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Health Benefits */
  health_benefits?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Hills Range */
  hills_range?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: House Type */
  house_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Is Food Wet or Dry */
  is_food_wet_or_dry?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Life Stage */
  life_stage?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Lifestyle */
  lifestyle?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Lighting Options */
  lighting_options?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Litres Per Hour */
  litres_per_hour?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Litter Features */
  litter_features?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Litter Material */
  litter_material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Litter Type */
  litter_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Maintenance Type */
  maintenance_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Max Size */
  max_size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Media Type */
  media_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Nutrition Grade */
  nutrition_grade?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Nutritional Option */
  nutritional_option?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: On Sale */
  on_sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: On Sale Filter */
  on_sale_filter?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Packaging */
  packaging?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pet */
  pet?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pet Weight */
  pet_weight?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Petbarn Stock Availability */
  petbarn_stock_availability?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Extra Tab Description */
  prod_extratab_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Extra Tab Title */
  prod_extratab_title?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Product Category */
  product_category?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Height */
  product_height?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Product Length */
  product_length?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Category */
  product_type_category?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Width */
  product_width?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Roundworm */
  roundworm?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sale Filter */
  sale_filter?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Scratcher Type */
  scratcher_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Ship in existing box */
  ship_in_existing_box?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size_filter?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Species */
  species?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Supply */
  supply?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Swatch display text */
  swatch_display_text?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Temperament */
  temperament?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Theme */
  theme?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Toy Type */
  toy_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Training Type */
  training_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Treat Type */
  treat_type?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Treatment Type */
  treatment_type?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Water PH */
  water_ph?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Water Temperature */
  water_temperature?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Watts */
  watts?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Weight Control */
  weight_control?: InputMaybe<FilterEqualTypeInput>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Sort by creation date (New). Applicable only in FredHopper queries. */
  created_at?: InputMaybe<SortEnum>;
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Sort by price from Low to High. Applicable only in FredHopper queries. */
  price?: InputMaybe<SortEnum>;
  /** Sort by price from High to Low. Applicable only in FredHopper queries. */
  price_desc?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

/** Product custom attributes */
export type ProductCustomAttributes = {
  __typename?: 'ProductCustomAttributes';
  /** Errors when retrieving custom attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>;
  /** Requested custom attributes */
  items: Array<Maybe<AttributeValueInterface>>;
};

export type ProductDetails = {
  __typename?: 'ProductDetails';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  primary_product_category?: Maybe<Scalars['String']['output']>;
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']['output']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']['output']>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product can be returned. */
  is_returnable?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
};

/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterfaceCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']['output']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']['output']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']['output']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']['output']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']['output']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']['output']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']['output']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']['output']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']['output']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']['output']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']['output']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after applying discounts. */
  final_price: Money;
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

export type ProductPricePerUnit = {
  __typename?: 'ProductPricePerUnit';
  empty?: Maybe<Scalars['String']['output']>;
  member_price?: Maybe<Scalars['String']['output']>;
  minimal?: Maybe<Scalars['String']['output']>;
  regular_price?: Maybe<Scalars['String']['output']>;
  repeat_delivery?: Maybe<Scalars['String']['output']>;
};

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice?: Maybe<Price>;
};

/** Contains details of a product review. */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']['output'];
  /** The date the review was created. */
  created_at: Scalars['String']['output'];
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['output'];
  /** The reviewed product. */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review. */
  summary: Scalars['String']['output'];
  /** The review text. */
  text: Scalars['String']['output'];
};

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']['output'];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']['input'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['input'];
};

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String']['output'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']['output'];
  /** An encoded rating value ID. */
  value_id: Scalars['String']['output'];
};

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

/** Contains an array of product reviews. */
export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** Indicates whether the product can be returned. */
  is_returnable?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  /** @deprecated  */
  InStock = 'IN_STOCK',
  /** @deprecated  */
  OutOfStock = 'OUT_OF_STOCK'
}

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty?: Maybe<Scalars['Float']['output']>;
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value?: Maybe<Scalars['Float']['output']>;
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id?: Maybe<Scalars['Float']['output']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Indicates whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']['output']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']['output']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']['output']>;
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Represents a single product line item in an order. */
export type Product_Input = {
  /** This is the DG class when making dangerous goods declarations. */
  dangerous_goods_class?: InputMaybe<Scalars['String']['input']>;
  /**
   * This is the DG code required when making dangerous goods declarations.
   *
   * Before you can declare orders as having dangerous goods, you must first request for dangerous goods to enabled for your account. Contact Shippit Support or your account manager to have this enabled.
   *
   * DG surcharges are often charged on the weight of the order, so it is recommended to split your order into multiple orders if your order contains either:
   * - both dangerous and non-dangerous goods, or
   * - more than one dangerous goods code
   */
  dangerous_goods_code?: InputMaybe<Scalars['String']['input']>;
  /** Additional information related to dangerous goods being shipped */
  dangerous_goods_text?: InputMaybe<Scalars['String']['input']>;
  /** Location of the product */
  location?: InputMaybe<Scalars['String']['input']>;
  /** Two-letter country code (ISO 3166-1 Alpha-2) for the product's origin country. This is used in customs tracking for International shipments. Defaults to the home country of the Merchant. */
  origin_country_code?: InputMaybe<Scalars['String']['input']>;
  /**
   * The number of products packed; used in partial orders, or otherwise when the number of products in the parcel is less than the total in the order. If not present, set to product `quantity`.
   *
   * If this is present, at least 1 item should have packed greater than `0`.
   *
   * For international orders, all items should have packed greater than `0`.
   */
  packed?: InputMaybe<Scalars['Int']['input']>;
  /** Unit price of each product line item. Used in the packing slip and customs declarations. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Product line associated with product. Like SKU, this is also for stock keeping purposes, and can be used when SKU would not be enough (e.g. an order containing multiple lines with the same SKU) */
  product_line_id?: InputMaybe<Scalars['String']['input']>;
  /** The number of products ordered. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** ```conditional``` -- Stock Keeping Unit (SKU) code of the product, for stock keeping purposes. Mandatory on international orders with specific couriers. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Tariff code for International orders declarations */
  tariff_code?: InputMaybe<Scalars['String']['input']>;
  /** ```conditional``` -- Title or description of the product. Mandatory for international orders with specific couriers. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the results of a `products` query. */
export type Products = {
  __typename?: 'Products';
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** An array of search suggestions for case when search query have no results. */
  suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']['output']>;
};


/** Contains the results of a `products` query. */
export type ProductsAggregationsArgs = {
  filter?: InputMaybe<AggregationsFilterInput>;
};

export type PutV1PetIdImage_Request_Input = {
  imageData: Scalars['String']['input'];
};

export type PutV1PetIdImage_Response = PetProfileDataInterface | Error_Response;

export type Query = {
  __typename?: 'Query';
  Directus_category: Array<Directus_Category>;
  Directus_category_aggregated: Array<Directus_Category_Aggregated>;
  Directus_category_by_id?: Maybe<Directus_Category>;
  Directus_category_by_version?: Maybe<Directus_Version_Category>;
  Directus_category_category: Array<Directus_Category_Category>;
  Directus_category_category_aggregated: Array<Directus_Category_Category_Aggregated>;
  Directus_category_category_by_id?: Maybe<Directus_Category_Category>;
  Directus_category_category_by_version?: Maybe<Directus_Version_Category_Category>;
  Directus_category_navigation?: Maybe<Directus_Category_Navigation>;
  Directus_category_navigation_by_version?: Maybe<Directus_Version_Category_Navigation>;
  Directus_feature_toggles?: Maybe<Directus_Feature_Toggles>;
  Directus_feature_toggles_by_version?: Maybe<Directus_Version_Feature_Toggles>;
  Directus_membership_benefits: Array<Directus_Membership_Benefits>;
  Directus_membership_benefits_aggregated: Array<Directus_Membership_Benefits_Aggregated>;
  Directus_membership_benefits_by_id?: Maybe<Directus_Membership_Benefits>;
  Directus_membership_benefits_by_version?: Maybe<Directus_Version_Membership_Benefits>;
  Directus_membership_benefits_category: Array<Directus_Membership_Benefits_Category>;
  Directus_membership_benefits_category_aggregated: Array<Directus_Membership_Benefits_Category_Aggregated>;
  Directus_membership_benefits_category_by_id?: Maybe<Directus_Membership_Benefits_Category>;
  Directus_membership_benefits_category_by_version?: Maybe<Directus_Version_Membership_Benefits_Category>;
  Directus_pet_ai_prompts: Array<Directus_Pet_Ai_Prompts>;
  Directus_pet_ai_prompts_aggregated: Array<Directus_Pet_Ai_Prompts_Aggregated>;
  Directus_pet_ai_prompts_by_id?: Maybe<Directus_Pet_Ai_Prompts>;
  Directus_pet_ai_prompts_by_version?: Maybe<Directus_Version_Pet_Ai_Prompts>;
  Directus_pet_ai_prompts_category: Array<Directus_Pet_Ai_Prompts_Category>;
  Directus_pet_ai_prompts_category_aggregated: Array<Directus_Pet_Ai_Prompts_Category_Aggregated>;
  Directus_pet_ai_prompts_category_by_id?: Maybe<Directus_Pet_Ai_Prompts_Category>;
  Directus_pet_ai_prompts_category_by_version?: Maybe<Directus_Version_Pet_Ai_Prompts_Category>;
  Directus_pet_wellness_articles: Array<Directus_Pet_Wellness_Articles>;
  Directus_pet_wellness_articles_aggregated: Array<Directus_Pet_Wellness_Articles_Aggregated>;
  Directus_pet_wellness_articles_by_id?: Maybe<Directus_Pet_Wellness_Articles>;
  Directus_pet_wellness_articles_by_version?: Maybe<Directus_Version_Pet_Wellness_Articles>;
  Directus_pet_wellness_articles_category: Array<Directus_Pet_Wellness_Articles_Category>;
  Directus_pet_wellness_articles_category_aggregated: Array<Directus_Pet_Wellness_Articles_Category_Aggregated>;
  Directus_pet_wellness_articles_category_by_id?: Maybe<Directus_Pet_Wellness_Articles_Category>;
  Directus_pet_wellness_articles_category_by_version?: Maybe<Directus_Version_Pet_Wellness_Articles_Category>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BLOYAL_BASE_URL}`
   * >**Path**: `customers/availablecoupons?uid={env.BLOYAL_DEMO_CUSTOMER}`
   *
   *
   */
  availableCoupons?: Maybe<AvailableCoupons>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BLOYAL_BASE_URL}`
   * >**Path**: `{env.BLOYAL_ACCESS_KEY}/customers/awardedcoupons?uid={args.uid}`
   *
   *
   */
  awardedCoupons?: Maybe<AwardedCouponsResponse>;
  bv_ratings?: Maybe<Data_Statistics_Json_Response>;
  bv_reviews?: Maybe<Data_Reviews_Json_Response>;
  /** Return a list of categories that match the specified filter. */
  categories?: Maybe<CategoryResult>;
  /** Return availability details for click&collect and home delivery for provided skus and address */
  checkAvailability?: Maybe<CheckAvailabilityRequestOutput>;
  /** Retrieve EAV attributes metadata. */
  customAttributeMetadataV2: AttributesMetadataOutput;
  /** Return detailed information about a customer account. */
  customer?: Maybe<Customer>;
  /** Return information about the customer's shopping cart. */
  customerCart: Cart;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/answers.json`
   * Answers Api is used to display answers posted on the questions posted for products.
   *
   */
  data_answers_json?: Maybe<Data_Answers_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/authors.json`
   * Profile/Authors Api is used to display about Author Information who have written reviews, questions and answers.
   *
   */
  data_authors_json?: Maybe<Data_Authors_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/categories.json`
   * Categories Api is responsible for displaying product related categories for a particular passkey.
   *
   */
  data_categories_json?: Maybe<Data_Categories_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/products.json`
   * Products Api is used to get details about a particular product or all the products for a particular passkey.
   *
   */
  data_products_json?: Maybe<Data_Products_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/questions.json`
   * Questions Api is used to display questions posted on Products. Questions Api can also be used to pull question based on filters mentioned below.
   *
   */
  data_questions_json?: Maybe<Data_Questions_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/reviewcomments.json`
   * Comments Api is used to display comments posted on reviews. It can be used request all comments for a particular review or particular comment on a review. It even allows advanced requests based on the filters that are defined below.
   *
   */
  data_reviewcomments_json?: Maybe<Data_Reviewcomments_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/reviews.json`
   * Reviews Api is used to display reviews for products and products related to a product family.
   *
   */
  data_reviews_json?: Maybe<Data_Reviews_Json_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BAZAARVOICE_ENDPOINT}`
   * >**Path**: `/data/statistics.json`
   * Statistics Api is responsible for pulling up all sort of statistics like review statistics for a product or multiple products or even question and answer related statistics.
   *
   */
  data_statistics_json?: Maybe<Data_Statistics_Json_Response>;
  dummy?: Maybe<Scalars['String']['output']>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `https://query.published.{env.FREDHOPPER_ENVIRONMENT}.fas.ap2.fredhopperservices.com/fredhopper/query`
   * >**Path**: `?{args.queryParams}`
   * Search products based on the specified criteria
   *
   */
  fredHopperSearch?: Maybe<FredHopperSearchResult>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/allergies`
   * List all allergies
   *
   * SP: usp_GetAllergyByPetCategory
   *
   */
  getAllergies?: Maybe<Array<Maybe<GetAllergies_Response>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/book/{args.manifest_id}/document`
   * Get Manifest Document from the courier
   *
   */
  getBookDocument?: Maybe<GetBookDocument_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/brands/{args.id}`
   * Retrieve the brand by it's ID
   *
   * SP: usp_GetBrandById
   *
   */
  getBrand?: Maybe<GetBrand_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/brands`
   * List all brands
   *
   * SP: Missing
   *
   */
  getBrands?: Maybe<Array<Maybe<GetBrands_Response>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/breeds`
   * List all breeds
   *
   * SP: usp_GetBreedByPetCategory
   *
   */
  getBreeds?: Maybe<Array<Maybe<GetBreeds_Response>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/customers/{args.id}`
   * Get a customer
   *
   * SP: Missing
   *
   */
  getCustomer?: Maybe<GetCustomer_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/customers`
   * List all customers
   *
   * One or more query parameters must be provided for the request to be valid. If the request does not include any query parameters then it should return 400 (Bad Request) to prevent the entire customer list from being downloaded.
   *
   * SP: Missing
   *
   */
  getCustomers?: Maybe<Array<Maybe<GetCustomers_Response>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/healthConditions`
   * List all health conditions
   *
   * SP: Missing
   *
   */
  getHealthConditions?: Maybe<Array<Maybe<GetHealthConditions_Response>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/merchant`
   * Get Merchant settings
   *
   */
  getMerchant?: Maybe<GetMerchant_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/orders/{args.tracking_number}/label`
   * Retrieves labelling information for an Order using the tracking number.
   *
   * The labelling information for an Order can only be retrieved once the Order has been processed and allocated a courier, which may take some time after the Order has been placed. If the Order is yet to be processed, you will get a `422` Unprocessable response.
   *
   */
  getOrderLabel?: Maybe<GetOrderLabel_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/pets/{args.id}`
   * Retrieve the profile for a single pet by it's ID
   *
   * SP: Missing
   *
   */
  getPet?: Maybe<GetPet_Response>;
  getPetsV1?: Maybe<Array<Maybe<Pet>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/reminders/{args.id}`
   * Retrieve the profile for a single reminder by it's ID
   *
   * SP: Missing
   *
   */
  getReminder?: Maybe<GetReminder_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.PET_PROFILES_ENDPOINT}`
   * >**Path**: `/reminders`
   * Retrieve a list of reminders
   *
   * SP: Missing
   *
   */
  getReminders?: Maybe<Array<Maybe<GetReminders_Response>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BLOYAL_BASE_URL}`
   * >**Path**: `resolvedcustomers`
   *
   *
   */
  loyaltyDetails?: Maybe<LoyaltyDetails>;
  menuStructure?: Maybe<MenuStructure>;
  /** Endpoints related to Pet AI Chat. Includes petAiChat, petAiChatStaticData, petAiChatStaticDisclaimer */
  petAiChat?: Maybe<PetAiResponse>;
  petAiChatStaticData?: Maybe<PetAiStaticDataResponseWrapper>;
  petAiChatStaticDisclaimer?: Maybe<PetAiStaticDisclaimerResponse>;
  postcodeSearch?: Maybe<Array<Maybe<PostcodeSearchOutput>>>;
  /**
   * Retrieves a list of recommended products based on a target filter.
   * The filter applies a "recommendations target" criterion, which limits
   * the results to products that meet specific recommendation standards,
   * such as being in stock, having valid pricing, and other criteria.
   */
  productRecommendations?: Maybe<Products>;
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products?: Maybe<Products>;
  /** Return details about the store's configuration. */
  storeConfig?: Maybe<StoreConfig>;
  storelocatorSearch?: Maybe<Storelocations>;
  /** Return suggestions for provided search term. Includes keywords, products, categories, blog posts */
  suggestions?: Maybe<SearchSuggestionResult>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.SHIPPIT_REST_ENDPOINT}`
   * >**Path**: `/orders/{args.tracking_number}/tracking`
   * This sends a tracking request to the API to retrieve the status of an Order.
   *
   * This uses a pull-based model of Order tracking, which sends tracking info on each request. If you would like to use a push-based model where you automatically receive messages on Order status changes, you can subscribe to the `Tracking Webhook` instead.
   *
   */
  trackOrder?: Maybe<TrackOrder_Response>;
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver?: Maybe<EntityUrl>;
};


export type QueryDirectus_CategoryArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Category_AggregatedArgs = {
  filter?: InputMaybe<Directus_Category_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Category_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Category_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Category_CategoryArgs = {
  filter?: InputMaybe<Directus_Category_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Category_Category_AggregatedArgs = {
  filter?: InputMaybe<Directus_Category_Category_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Category_Category_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Category_Category_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Category_NavigationArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Category_Navigation_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryDirectus_Feature_TogglesArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Feature_Toggles_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryDirectus_Membership_BenefitsArgs = {
  filter?: InputMaybe<Directus_Membership_Benefits_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Membership_Benefits_AggregatedArgs = {
  filter?: InputMaybe<Directus_Membership_Benefits_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Membership_Benefits_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Membership_Benefits_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Membership_Benefits_CategoryArgs = {
  filter?: InputMaybe<Directus_Membership_Benefits_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Membership_Benefits_Category_AggregatedArgs = {
  filter?: InputMaybe<Directus_Membership_Benefits_Category_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Membership_Benefits_Category_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Membership_Benefits_Category_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Pet_Ai_PromptsArgs = {
  filter?: InputMaybe<Directus_Pet_Ai_Prompts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Ai_Prompts_AggregatedArgs = {
  filter?: InputMaybe<Directus_Pet_Ai_Prompts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Ai_Prompts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Pet_Ai_Prompts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Pet_Ai_Prompts_CategoryArgs = {
  filter?: InputMaybe<Directus_Pet_Ai_Prompts_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Ai_Prompts_Category_AggregatedArgs = {
  filter?: InputMaybe<Directus_Pet_Ai_Prompts_Category_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Ai_Prompts_Category_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Pet_Ai_Prompts_Category_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Pet_Wellness_ArticlesArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Wellness_Articles_AggregatedArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Wellness_Articles_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Pet_Wellness_Articles_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Pet_Wellness_Articles_CategoryArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Wellness_Articles_Category_AggregatedArgs = {
  filter?: InputMaybe<Directus_Pet_Wellness_Articles_Category_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Pet_Wellness_Articles_Category_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Pet_Wellness_Articles_Category_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryAwardedCouponsArgs = {
  uid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBv_RatingsArgs = {
  skus: Scalars['String']['input'];
};


export type QueryBv_ReviewsArgs = {
  sku: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheckAvailabilityArgs = {
  input: CheckAvailabilityRequestInput;
};


export type QueryCustomAttributeMetadataV2Args = {
  attributes?: InputMaybe<Array<AttributeInput>>;
};


export type QueryData_Answers_JsonArgs = {
  Attributes?: InputMaybe<Scalars['String']['input']>;
  Callback?: InputMaybe<Scalars['String']['input']>;
  ExcludeFamily?: InputMaybe<Scalars['Boolean']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Include?: InputMaybe<Scalars['String']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Stats?: InputMaybe<Scalars['String']['input']>;
  apiversion: Scalars['Float']['input'];
  passkey: Scalars['String']['input'];
};


export type QueryData_Authors_JsonArgs = {
  Attributes?: InputMaybe<Scalars['String']['input']>;
  Callback?: InputMaybe<Scalars['String']['input']>;
  ExcludeFamily?: InputMaybe<Scalars['Boolean']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Filter__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  IncentivizedStats?: InputMaybe<Scalars['Boolean']['input']>;
  Include?: InputMaybe<Scalars['String']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Limit__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Sort__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  Stats?: InputMaybe<Scalars['String']['input']>;
  apiversion: Scalars['Float']['input'];
  passkey: Scalars['String']['input'];
};


export type QueryData_Categories_JsonArgs = {
  Callback?: InputMaybe<Scalars['String']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiversion: Scalars['Float']['input'];
  passkey: Scalars['String']['input'];
};


export type QueryData_Products_JsonArgs = {
  Attributes?: InputMaybe<Scalars['String']['input']>;
  Callback?: InputMaybe<Scalars['String']['input']>;
  ExcludeFamily?: InputMaybe<Scalars['Boolean']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Filter__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  IncentivizedStats?: InputMaybe<Scalars['Boolean']['input']>;
  Include?: InputMaybe<Scalars['String']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Limit__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Search?: InputMaybe<Scalars['String']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Sort__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  Stats?: InputMaybe<Scalars['String']['input']>;
  apiversion: Scalars['Float']['input'];
  passkey: Scalars['String']['input'];
};


export type QueryData_Questions_JsonArgs = {
  Attributes?: InputMaybe<Scalars['String']['input']>;
  Callback?: InputMaybe<Scalars['String']['input']>;
  ExcludeFamily?: InputMaybe<Scalars['Boolean']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Filter__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  Include?: InputMaybe<Scalars['String']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Limit__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Search?: InputMaybe<Scalars['String']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Sort__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  Stats?: InputMaybe<Scalars['String']['input']>;
  apiversion: Scalars['Float']['input'];
  passkey: Scalars['String']['input'];
};


export type QueryData_Reviewcomments_JsonArgs = {
  Attributes?: InputMaybe<Scalars['String']['input']>;
  Callback?: InputMaybe<Scalars['String']['input']>;
  ExcludeFamily?: InputMaybe<Scalars['Boolean']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Include?: InputMaybe<Scalars['String']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiversion: Scalars['Float']['input'];
  passkey: Scalars['String']['input'];
};


export type QueryData_Reviews_JsonArgs = {
  Attributes?: InputMaybe<Scalars['String']['input']>;
  Callback?: InputMaybe<Scalars['String']['input']>;
  ExcludeFamily?: InputMaybe<Scalars['Boolean']['input']>;
  Filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Filter__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  FilteredStats?: InputMaybe<Scalars['String']['input']>;
  IncentivizedStats?: InputMaybe<Scalars['Boolean']['input']>;
  Include?: InputMaybe<Scalars['String']['input']>;
  Limit?: InputMaybe<Scalars['Int']['input']>;
  Limit__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['Int']['input']>;
  Locale?: InputMaybe<Scalars['String']['input']>;
  Offset?: InputMaybe<Scalars['Int']['input']>;
  Search?: InputMaybe<Scalars['String']['input']>;
  Sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Sort__LEFT_SQUARE_BRACE_TYPE_RIGHT_SQUARE_BRACE_?: InputMaybe<Scalars['String']['input']>;
  Stats?: InputMaybe<Scalars['String']['input']>;
};


export type QueryData_Statistics_JsonArgs = {
  Callback?: InputMaybe<Scalars['String']['input']>;
  IncentivizedStats?: InputMaybe<Scalars['Boolean']['input']>;
  filter: Array<InputMaybe<Scalars['String']['input']>>;
  stats?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFredHopperSearchArgs = {
  queryParams?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllergiesArgs = {
  petProfileCategory?: InputMaybe<PetProfileCategory_Parameter>;
};


export type QueryGetBookDocumentArgs = {
  manifest_id: Scalars['String']['input'];
};


export type QueryGetBrandArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetBrandsArgs = {
  foodBrand?: InputMaybe<Scalars['Boolean']['input']>;
  ftwBrand?: InputMaybe<Scalars['Boolean']['input']>;
  heartwormBrand?: InputMaybe<Scalars['Boolean']['input']>;
  petProfileCategory?: InputMaybe<PetProfileCategory_Parameter>;
};


export type QueryGetBreedsArgs = {
  petProfileCategory?: InputMaybe<PetProfileCategory_Parameter>;
};


export type QueryGetCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCustomersArgs = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  magentoId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['queryInput_getCustomers_phone']['input']>;
};


export type QueryGetHealthConditionsArgs = {
  petProfileCategory?: InputMaybe<PetProfileCategory_Parameter>;
};


export type QueryGetOrderLabelArgs = {
  tracking_number: Scalars['String']['input'];
};


export type QueryGetPetArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetReminderArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRemindersArgs = {
  petId: Scalars['UUID']['input'];
};


export type QueryPetAiChatArgs = {
  input: PetAiQuery;
};


export type QueryPostcodeSearchArgs = {
  input: PostcodeSearchInput;
};


export type QueryProductRecommendationsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryStorelocatorSearchArgs = {
  input: StorelocatorSearchInput;
};


export type QuerySuggestionsArgs = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrackOrderArgs = {
  tracking_number: Scalars['String']['input'];
};


export type QueryUrlResolverArgs = {
  url: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Questions_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** A quote returned by a carrier. */
export type Quote = {
  __typename?: 'Quote';
  /** `optional` If returned inside a quote response for a service level (e.g. `standard`), the carrier returning the quote. May be omitted if a specific carrier was requested. */
  courier_type?: Maybe<Scalars['String']['output']>;
  /** Customs duty component for international orders, if applicable. This amount is `included` in the `price` if the carrier is configured to return a DDP quote. */
  customs_duty?: Maybe<Scalars['Float']['output']>;
  /** Estimated date of delivery for the order */
  delivery_date?: Maybe<Scalars['Date']['output']>;
  /** For priority orders, machine-readable estimated range of times when the delivery could take place. */
  delivery_window?: Maybe<Scalars['String']['output']>;
  /** For priority orders, human-readable estimated range of times when the delivery could take place. */
  delivery_window_desc?: Maybe<Scalars['String']['output']>;
  /** Estimated amount of time for the quote to arrive. */
  estimated_transit_time?: Maybe<Scalars['String']['output']>;
  /** Import fees component for international orders, if applicable. This amount is `included` in the `price` if the carrier is configured to return a DDP quote. */
  import_fee?: Maybe<Scalars['Float']['output']>;
  /** Import tax component for international orders, if applicable. This amount is `included` in the `price` if the carrier is configured to return a DDP quote. */
  import_tax?: Maybe<Scalars['Float']['output']>;
  /** A universal term of trade that defines the responsibility and obligations with the transport of goods. Most commonly used to indicate the responsible party for payment of duties and taxes. */
  incoterm?: Maybe<Scalars['JSON']['output']>;
  /** Amount quoted by the carrier. */
  price?: Maybe<Scalars['Float']['output']>;
};

/** Represents a Quote returned by a courier */
export type QuoteResult = {
  __typename?: 'QuoteResult';
  /** The name of the courier or service level giving the quote. */
  courier_type?: Maybe<Scalars['String']['output']>;
  /** Error response, if any, received from the carrier(s) during quoting. */
  error?: Maybe<Scalars['String']['output']>;
  /** List of quotes returned for the service level or carrier. */
  quotes?: Maybe<Array<Maybe<Quote>>>;
  /** The service level associated with this quote or group of quotes. */
  service_level?: Maybe<Scalars['String']['output']>;
  /** Whether or not this service level was able to obtain a valid quote from the carrier(s). */
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RdAddresses = {
  __typename?: 'RDAddresses';
  /** Repeat Delivery Billing Address ID */
  rd_billing_address_id?: Maybe<Scalars['Int']['output']>;
  /** Repeat Delivery Shipping Address ID */
  rd_shipping_address_id?: Maybe<Scalars['Int']['output']>;
};

/** Cancel order response */
export type RecurringOrdersCancelOrderResponseInterface = {
  __typename?: 'RecurringOrdersCancelOrderResponseInterface';
  /** For ErrorMessage. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** For IsSuccess. */
  is_success: Scalars['Boolean']['output'];
};

export type RecurringOrdersPauseOrderResponseInterface = {
  __typename?: 'RecurringOrdersPauseOrderResponseInterface';
  /** For ErrorMessage. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** For IsSuccess. */
  is_success: Scalars['Boolean']['output'];
};

/** Reactivate order response */
export type RecurringOrdersReactivateOrderResponseInterface = {
  __typename?: 'RecurringOrdersReactivateOrderResponseInterface';
  /** For Dispatch Date. */
  dispatch_date?: Maybe<Scalars['String']['output']>;
  /** For ErrorMessage. */
  error_message?: Maybe<Scalars['String']['output']>;
  /** For Frequency. */
  frequency?: Maybe<Scalars['String']['output']>;
  /** For IsSuccess. */
  is_success: Scalars['Boolean']['output'];
};

export type RecurringOrdersSkipOnceOrderResponseInterface = {
  __typename?: 'RecurringOrdersSkipOnceOrderResponseInterface';
  error_message?: Maybe<Scalars['String']['output']>;
  is_success: Scalars['Boolean']['output'];
  next_dispatch_date?: Maybe<Scalars['String']['output']>;
};

export type Region = {
  __typename?: 'Region';
  /** The two-letter code for the region, such as TX for Texas. */
  code?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The name of the region, such as Texas. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Reminders */
export type Reminder = {
  __typename?: 'Reminder';
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['output'];
  /** A automatically assigned unique ID for this reminder */
  id: Scalars['UUID']['output'];
  /** The date of the last treatment in the customers timezone. Format as YYYY-MM-DD. If we don't know the customers local timezone and need one then assume Australian Eastern Time. */
  lastTreatmentDate: Scalars['Date']['output'];
  /** The date of the next treatment in the customers timezone. Format as YYYY-MM-DD. If we don't know the customers local timezone and need one then assume Australian Eastern Time. */
  nextTreatmentDate: Scalars['Date']['output'];
  /** The ID for the pet this reminder is for. */
  petId: Scalars['UUID']['output'];
  /** The number of weeks the reminder should be sent after the lastTreatmentDate. */
  reminderFrequency: Scalars['PositiveInt']['output'];
  reminderType: Query_GetReminders_OneOf_0_Items_ReminderType;
  /** The SKU for the product if the reminderType is food. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['output'];
};

/** Reminders */
export type Reminder_Input = {
  /** The date/time this record was created at */
  createdAt: Scalars['DateTime']['input'];
  /** A automatically assigned unique ID for this reminder */
  id: Scalars['UUID']['input'];
  /** The date of the last treatment in the customers timezone. Format as YYYY-MM-DD. If we don't know the customers local timezone and need one then assume Australian Eastern Time. */
  lastTreatmentDate: Scalars['Date']['input'];
  /** The date of the next treatment in the customers timezone. Format as YYYY-MM-DD. If we don't know the customers local timezone and need one then assume Australian Eastern Time. */
  nextTreatmentDate: Scalars['Date']['input'];
  /** The ID for the pet this reminder is for. */
  petId: Scalars['UUID']['input'];
  /** The number of weeks the reminder should be sent after the lastTreatmentDate. */
  reminderFrequency: Scalars['PositiveInt']['input'];
  reminderType: Query_GetReminders_OneOf_0_Items_ReminderType;
  /** The SKU for the product if the reminderType is food. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** The date/time this record was updated at */
  updatedAt: Scalars['DateTime']['input'];
};

/** Defines the input required to run the `removeGiftCardFromCart` mutation. */
export type RemoveAppliedGiftCardFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  /** The cart after removing a coupon. */
  cart?: Maybe<Cart>;
};

/** Defines the input required to run the `removeGiftCardFromCart` mutation. */
export type RemoveGiftCardFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
  /** The gift card code to be removed to the cart. */
  gift_card_code: Scalars['String']['input'];
};

/** Defines the possible output for the `removeGiftCardFromCart` mutation. */
export type RemoveGiftCardFromCartOutput = {
  __typename?: 'RemoveGiftCardFromCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the results of a request to remove an item from a gift registry. */
export type RemoveGiftRegistryItemsOutput = {
  __typename?: 'RemoveGiftRegistryItemsOutput';
  /** The gift registry after removing items. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the results of a request to delete a gift registry. */
export type RemoveGiftRegistryOutput = {
  __typename?: 'RemoveGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully deleted. */
  success: Scalars['Boolean']['output'];
};

/** Contains the results of a request to delete a registrant. */
export type RemoveGiftRegistryRegistrantsOutput = {
  __typename?: 'RemoveGiftRegistryRegistrantsOutput';
  /** The gift registry after deleting registrants. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  /** The cart after removing an item. */
  cart: Cart;
};

export type RemoveLoyaltyVoucherOutput = {
  __typename?: 'RemoveLoyaltyVoucherOutput';
  /** Vouchers information */
  loyaltyVoucher?: Maybe<CustomerLoyaltyVouchersOutput>;
  /** Vouchers remove status message */
  message: Scalars['String']['output'];
  /** Vouchers remove status */
  status: Scalars['String']['output'];
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input'];
};

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist;
};

/** Defines the tracking information to delete. */
export type RemoveReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingTracking` object. */
  return_shipping_tracking_uid: Scalars['ID']['input'];
};

/** Contains the response after deleting tracking information. */
export type RemoveReturnTrackingOutput = {
  __typename?: 'RemoveReturnTrackingOutput';
  /** Contains details about the modified return. */
  return?: Maybe<Return>;
};

/** Contains the customer cart. */
export type RemoveRewardPointsFromCartOutput = {
  __typename?: 'RemoveRewardPointsFromCartOutput';
  /** The customer cart after reward points are removed. */
  cart: Cart;
};

/** Defines the input required to run the `removeStoreCreditFromCart` mutation. */
export type RemoveStoreCreditFromCartInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input'];
};

/** Defines the possible output for the `removeStoreCreditFromCart` mutation. */
export type RemoveStoreCreditFromCartOutput = {
  __typename?: 'RemoveStoreCreditFromCartOutput';
  /** The contents of the specified shopping cart. */
  cart: Cart;
};

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

/** A single item to be updated. */
export type RepeatDeliveryCartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars['ID']['input']>;
  /** The frequency of the repeat delivery item. */
  selected_repeat_delivery_option?: InputMaybe<Scalars['Int']['input']>;
};

export type RepeatDeliveryInfo = {
  __typename?: 'RepeatDeliveryInfo';
  frequency?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Money>;
};

export type RepeatDeliveryItem = {
  __typename?: 'RepeatDeliveryItem';
  /** An array of options for the configurable product. */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Is F&F product */
  fresh_and_frozen: Scalars['Boolean']['output'];
  /** Product details about an item in the repeat delivery order. */
  product: ProductInterface;
  /** The amount product in the order. */
  quantity: Scalars['Float']['output'];
};

export type RepeatDeliveryOrder = {
  __typename?: 'RepeatDeliveryOrder';
  /** The frequency text to display. */
  frequency?: Maybe<Scalars['String']['output']>;
  /** Is F&F product */
  fresh_and_frozen: Scalars['Boolean']['output'];
  /** The repeat delivery products within the order. */
  items: Array<Maybe<RepeatDeliveryItem>>;
  /** The order next dispatch date. */
  next_dispatch_date?: Maybe<Scalars['String']['output']>;
  /** The order next dispatch day. */
  next_dispatch_day?: Maybe<Scalars['String']['output']>;
  /** The order status. */
  status?: Maybe<Scalars['String']['output']>;
};

export type RepeatDeliveryReservedOrder = {
  __typename?: 'RepeatDeliveryReservedOrder';
  /** Is the sku already in the RD order. */
  is_sku_in_order: Scalars['Boolean']['output'];
  /** Is item on hold in particular RD Order. */
  item_on_hold?: Maybe<Scalars['Boolean']['output']>;
  /** The order next dispatch date. */
  next_dispatch_date?: Maybe<Scalars['String']['output']>;
  /** The order status. */
  status?: Maybe<Scalars['String']['output']>;
};

export type RepeatOrder = {
  __typename?: 'RepeatOrder';
  /** The billing address associated with the repeat order. */
  billingAddress?: Maybe<CustomerAddress>;
  /** The estimated amount saved on this repeat order. */
  estimatedSavings: Scalars['String']['output'];
  /** The frequency with which the order is repeated (e.g., weekly, monthly). */
  frequency: Scalars['String']['output'];
  /** A list of items in the repeat order. */
  items: Array<Maybe<RepeatOrderItem>>;
  /** The date and time of the next scheduled dispatch for the repeat order. */
  nextDispatch: Scalars['String']['output'];
  /** The total amount of the repeat order. */
  orderTotal: Scalars['String']['output'];
  /** The payment method used for the repeat order. */
  paymentMethod?: Maybe<OrderPaymentMethod>;
  /** The shipping address associated with the repeat order. */
  shippingAddress?: Maybe<CustomerAddress>;
  /** The current status of the repeat order (e.g., ACTIVE, PAUSED). */
  status: RepeatOrderStatus;
};

export type RepeatOrderItem = {
  __typename?: 'RepeatOrderItem';
  /** Price details for the repeat order item, including tax and discounts. */
  prices: RepeatOrderItemPrices;
  /** Product details for the repeat order item. */
  product: ProductInterface;
  /** The quantity of the product ordered in the repeat order. */
  quantity: Scalars['Float']['output'];
};

export type RepeatOrderItemPrices = {
  __typename?: 'RepeatOrderItemPrices';
  /** The total price of the item including tax. */
  row_total_including_tax: Money;
  /** The total discount applied to the item. */
  total_item_discount: Money;
};

export enum RepeatOrderStatus {
  /** @deprecated  */
  Active = 'ACTIVE',
  /** @deprecated  */
  Error = 'ERROR',
  /** @deprecated  */
  Paused = 'PAUSED',
  /** @deprecated  */
  Pending = 'PENDING',
  /** @deprecated  */
  Skipped = 'SKIPPED'
}

/** Contains information needed to start a return request. */
export type RequestReturnInput = {
  /** Text the buyer entered that describes the reason for the refund request. */
  comment_text?: InputMaybe<Scalars['String']['input']>;
  /** The email address the buyer enters to receive notifications about the status of the return. */
  contact_email?: InputMaybe<Scalars['String']['input']>;
  /** An array of items to be returned. */
  items: Array<InputMaybe<RequestReturnItemInput>>;
  /** The unique ID for a `Order` object. */
  order_uid: Scalars['ID']['input'];
};

/** Contains details about an item to be returned. */
export type RequestReturnItemInput = {
  /** Details about a custom attribute that was entered. */
  entered_custom_attributes?: InputMaybe<Array<InputMaybe<EnteredCustomAttributeInput>>>;
  /** The unique ID for a `OrderItemInterface` object. */
  order_item_uid: Scalars['ID']['input'];
  /** The quantity of the item to be returned. */
  quantity_to_return: Scalars['Float']['input'];
  /** An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product. */
  selected_custom_attributes?: InputMaybe<Array<InputMaybe<SelectedCustomAttributeInput>>>;
};

/** Contains the response to a return request. */
export type RequestReturnOutput = {
  __typename?: 'RequestReturnOutput';
  /** Details about a single return request. */
  return?: Maybe<Return>;
  /** An array of return requests. */
  returns?: Maybe<Returns>;
};


/** Contains the response to a return request. */
export type RequestReturnOutputReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains details about a return. */
export type Return = {
  __typename?: 'Return';
  /** A list of shipping carriers available for returns. */
  available_shipping_carriers?: Maybe<Array<Maybe<ReturnShippingCarrier>>>;
  /** A list of comments posted for the return request. */
  comments?: Maybe<Array<Maybe<ReturnComment>>>;
  /** The date the return was requested. */
  created_at: Scalars['String']['output'];
  /** Data from the customer who created the return request. */
  customer: ReturnCustomer;
  /** A list of items being returned. */
  items?: Maybe<Array<Maybe<ReturnItem>>>;
  /** A human-readable return number. */
  number: Scalars['String']['output'];
  /** The order associated with the return. */
  order?: Maybe<CustomerOrder>;
  /** Shipping information for the return. */
  shipping?: Maybe<ReturnShipping>;
  /** The status of the return request. */
  status?: Maybe<ReturnStatus>;
  /** The unique ID for a `Return` object. */
  uid: Scalars['ID']['output'];
};

/** Contains details about a return comment. */
export type ReturnComment = {
  __typename?: 'ReturnComment';
  /** The name or author who posted the comment. */
  author_name: Scalars['String']['output'];
  /** The date and time the comment was posted. */
  created_at: Scalars['String']['output'];
  /** The contents of the comment. */
  text: Scalars['String']['output'];
  /** The unique ID for a `ReturnComment` object. */
  uid: Scalars['ID']['output'];
};

/** Contains details about a `ReturnCustomerAttribute` object. */
export type ReturnCustomAttribute = {
  __typename?: 'ReturnCustomAttribute';
  /** A description of the attribute. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ReturnCustomAttribute` object. */
  uid: Scalars['ID']['output'];
  /** A JSON-encoded value of the attribute. */
  value: Scalars['String']['output'];
};

/** The customer information for the return. */
export type ReturnCustomer = {
  __typename?: 'ReturnCustomer';
  /** The email address of the customer. */
  email: Scalars['String']['output'];
  /** The first name of the customer. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The last name of the customer. */
  lastname?: Maybe<Scalars['String']['output']>;
};

/** Contains details about a product being returned. */
export type ReturnItem = {
  __typename?: 'ReturnItem';
  /** Return item custom attributes that are visible on the storefront. */
  custom_attributes?: Maybe<Array<Maybe<ReturnCustomAttribute>>>;
  /** Provides access to the product being returned, including information about selected and entered options. */
  order_item: OrderItemInterface;
  /** The quantity of the item the merchant authorized to be returned. */
  quantity: Scalars['Float']['output'];
  /** The quantity of the item requested to be returned. */
  request_quantity: Scalars['Float']['output'];
  /** The return status of the item. */
  status: ReturnItemStatus;
  /** The unique ID for a `ReturnItem` object. */
  uid: Scalars['ID']['output'];
};

export enum ReturnItemStatus {
  /** @deprecated  */
  Approved = 'APPROVED',
  /** @deprecated  */
  Authorized = 'AUTHORIZED',
  /** @deprecated  */
  Denied = 'DENIED',
  /** @deprecated  */
  Pending = 'PENDING',
  /** @deprecated  */
  Received = 'RECEIVED',
  /** @deprecated  */
  Rejected = 'REJECTED'
}

/** Details of the returns order that has been confirmed. */
export type ReturnOrderRequest_Input = {
  return_order: ReturnOrder_Input;
};

/** The root of the ReturnRequestMerchantAddress type's schema. */
export type ReturnOrderReturnAddress_Input = {
  /** The merchant's company name */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The country name (ISO-3166 Country Name) */
  country: Scalars['String']['input'];
  /** The country code (ISO-3166-2 Alpha 2) */
  country_code: Scalars['String']['input'];
  /** The merchant's firstname */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The merchant's lastname */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The merchant's phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The postcode of the address */
  postcode: Scalars['String']['input'];
  /** The region of the address */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The region code of the address (ISO-3166-2 Subdivision) */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The street level address details */
  street: Array<InputMaybe<Scalars['String']['input']>>;
  /** The suburb of the address */
  suburb?: InputMaybe<Scalars['String']['input']>;
};

/** The root of the ReturnRequestBillingAddress type's schema. */
export type ReturnOrderShippingAddress_Input = {
  /** The country name (ISO-3166 Country Name) */
  country: Scalars['String']['input'];
  /** The country code (ISO-3166-2 Alpha 2) */
  country_code: Scalars['String']['input'];
  /** The addressee's firstname */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The addressee's lastname */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The addressee's middlename */
  middlename?: InputMaybe<Scalars['String']['input']>;
  /** The addressee's phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The postcode of the address */
  postcode: Scalars['String']['input'];
  /** The region of the address */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The region code of the address (ISO-3166-2 Subdivision) */
  region_code?: InputMaybe<Scalars['String']['input']>;
  /** The street level address details */
  street: Array<InputMaybe<Scalars['String']['input']>>;
  /** The suburb of the address */
  suburb: Scalars['String']['input'];
};

export type ReturnOrder_Input = {
  customer: Root_Type_For_ReturnRequestCustomer_Input;
  /** The date the return order was confirmed. */
  date: Scalars['DateTime']['input'];
  /** The items to be returned in the order. */
  items: Array<InputMaybe<Root_Type_For_ReturnOrderItem_Input>>;
  /** The api_reference of the order returned from the corresponding ReturnRequest. */
  order_api_reference?: InputMaybe<Scalars['String']['input']>;
  /** The reference of the order returned from the corresponding ReturnRequest. */
  order_reference?: InputMaybe<Scalars['String']['input']>;
  /** The refund method selected by the customer. The available string values are configured from the Returns settings in the Shippit Admin. */
  preferred_refund_method?: InputMaybe<Scalars['String']['input']>;
  return_address: ReturnOrderReturnAddress_Input;
  /** The id of the corresponding return request that was returned by the ReturnRequest */
  return_request_id: Scalars['String']['input'];
  shipping_address: ReturnOrderShippingAddress_Input;
  shipping_method: Root_Type_For_ReturnOrderShippingMethod_Input;
  /** Shippit's ID for the return order. */
  shippit_api_reference: Scalars['Int']['input'];
};

/** The root of the ReturnRequest type's schema. */
export type ReturnRequest = {
  __typename?: 'ReturnRequest';
  /** The API Reference of the Order, according to the Integration Platform. */
  api_reference?: Maybe<Scalars['String']['output']>;
  billing_address?: Maybe<ReturnRequestBillingAddress>;
  /** The ISO-4217 Currency Code of the Order */
  currency_code?: Maybe<Scalars['String']['output']>;
  customer: Root_Type_For_ReturnRequestCustomer;
  /**
   * Three letter ISO 4217 currency code that applies to `customer_return_charge`.
   *
   * If not provided, the merchant's currency will be used.
   */
  customer_return_charge_currency?: Maybe<Scalars['String']['output']>;
  /** The amount charged to the customer to process a return dropped off at a PUDO location. */
  customer_return_dropoff_charge?: Maybe<Scalars['Float']['output']>;
  /** The amount charged to the customer to process a return picked up from the customer's address. */
  customer_return_pickup_charge?: Maybe<Scalars['Float']['output']>;
  /** The date the order was created. The date format is a valid ISO8601 DateTime */
  date: Scalars['DateTime']['output'];
  /** The expiry date of the return order, after which returning the order is no longer valid. The date format is a valid ISO8601 DateTime. */
  expiration_date?: Maybe<Scalars['DateTime']['output']>;
  /** The grand total of the order, after any discounts, applicable taxes and shipping costs */
  grand_total?: Maybe<Scalars['Float']['output']>;
  /** The ID of the return request, this is used to correlate the Return Request with the Return Order */
  id: Scalars['Int']['output'];
  /**
   * The items contained in the order.
   *
   * Note: All items from the original order will be included in the response, including items that do not have a qty available for return.
   */
  items: Array<Maybe<Root_Type_For_ReturnRequestItem>>;
  /**
   * The Shippit Merchant accounts involved.
   *
   * Note: This field is optional and only provided in some integrations.
   *
   * It's purpose is to provide a list of the Shippit merchant accounts that are to be considered for the return, based on a merchant's details in relation to the order that has been queried.
   */
  merchants?: Maybe<Array<Maybe<Root_Type_For_ReturnRequestMerchant>>>;
  /** The order reference number. This is the friendly order reference communicated to end-customers in relation to their order. */
  reference: Scalars['String']['output'];
  shipping_address: Root_Type_For_ReturnRequestShippingAddress;
  /** The shipping costs applicable to the order. */
  shipping_amount?: Maybe<Scalars['Float']['output']>;
  /** The subtotal of the order. */
  subtotal?: Maybe<Scalars['Float']['output']>;
  /** The tax amount applicable to the order. */
  tax_amount?: Maybe<Scalars['Float']['output']>;
  /** The date the return request was last updated at. The date format is a valid ISO8601 DateTime */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

/** The root of the ReturnRequestBillingAddress type's schema. */
export type ReturnRequestBillingAddress = {
  __typename?: 'ReturnRequestBillingAddress';
  /** The API Reference provided by the Intergration Platform */
  api_reference?: Maybe<Scalars['String']['output']>;
  /** The addressee company name */
  company?: Maybe<Scalars['String']['output']>;
  /** The country name (ISO-3166 Country Name) */
  country: Scalars['String']['output'];
  /** The country code (ISO-3166-2 Alpha 2) */
  country_code: Scalars['String']['output'];
  /** The addressee's firstname */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of the record within the integrated order platform. */
  id?: Maybe<Scalars['Int']['output']>;
  /** The addressee's lastname */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The addressee's middlename */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The addressee's phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postcode of the address */
  postcode: Scalars['String']['output'];
  /** The region of the address */
  region?: Maybe<Scalars['String']['output']>;
  /** The region code of the address (ISO-3166-2 Subdivision) */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The street level address details */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The suburb of the address */
  suburb: Scalars['String']['output'];
};

/** The root of the ReturnRequestMerchantAddress type's schema. */
export type ReturnRequestMerchantAddress = {
  __typename?: 'ReturnRequestMerchantAddress';
  /** The API Reference provided by the Intergration Platform */
  api_reference?: Maybe<Scalars['String']['output']>;
  /** The merchant's company name */
  company?: Maybe<Scalars['String']['output']>;
  /** The country name (ISO-3166 Country Name) */
  country: Scalars['String']['output'];
  /** The country code (ISO-3166-2 Alpha 2) */
  country_code: Scalars['String']['output'];
  /** The merchant's firstname */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of the record within the order platform */
  id?: Maybe<Scalars['Int']['output']>;
  /** The merchant's lastname */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The merchant's middlename */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The merchant's phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postcode of the address */
  postcode: Scalars['String']['output'];
  /** The region of the address */
  region?: Maybe<Scalars['String']['output']>;
  /** The region code of the address (ISO-3166-2 Subdivision) */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The street level address details */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The suburb of the address */
  suburb: Scalars['String']['output'];
};

/** The root of the ReturnRequest type's schema. */
export type ReturnRequestResponse = {
  __typename?: 'ReturnRequestResponse';
  return_request: ReturnRequest;
};

/** Contains details about the return shipping address. */
export type ReturnShipping = {
  __typename?: 'ReturnShipping';
  /** The merchant-defined return shipping address. */
  address?: Maybe<ReturnShippingAddress>;
  /** The unique ID for a `ReturnShippingTracking` object. If a single UID is specified, the array contains a single tracking record. Otherwise, array contains all tracking information. */
  tracking?: Maybe<Array<Maybe<ReturnShippingTracking>>>;
};


/** Contains details about the return shipping address. */
export type ReturnShippingTrackingArgs = {
  uid?: InputMaybe<Scalars['ID']['input']>;
};

/** Contains details about the shipping address used for receiving returned items. */
export type ReturnShippingAddress = {
  __typename?: 'ReturnShippingAddress';
  /** The city for product returns. */
  city: Scalars['String']['output'];
  /** The merchant's contact person. */
  contact_name?: Maybe<Scalars['String']['output']>;
  /** An object that defines the country for product returns. */
  country: Country;
  /** The postal code for product returns. */
  postcode: Scalars['String']['output'];
  /** An object that defines the state or province for product returns. */
  region: Region;
  /** The street address for product returns. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for product returns. */
  telephone?: Maybe<Scalars['String']['output']>;
};

/** Contains details about the carrier on a return. */
export type ReturnShippingCarrier = {
  __typename?: 'ReturnShippingCarrier';
  /** A description of the shipping carrier. */
  label: Scalars['String']['output'];
  /** The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier. */
  uid: Scalars['ID']['output'];
};

/** Contains shipping and tracking details. */
export type ReturnShippingTracking = {
  __typename?: 'ReturnShippingTracking';
  /** Contains details of a shipping carrier. */
  carrier: ReturnShippingCarrier;
  /** Details about the status of a shipment. */
  status?: Maybe<ReturnShippingTrackingStatus>;
  /** A tracking number assigned by the carrier. */
  tracking_number: Scalars['String']['output'];
  /** The unique ID for a `ReturnShippingTracking` object assigned to the tracking item. */
  uid: Scalars['ID']['output'];
};

/** Contains the status of a shipment. */
export type ReturnShippingTrackingStatus = {
  __typename?: 'ReturnShippingTrackingStatus';
  /** Text that describes the status. */
  text: Scalars['String']['output'];
  /** Indicates whether the status type is informational or an error. */
  type: ReturnShippingTrackingStatusType;
};

export enum ReturnShippingTrackingStatusType {
  /** @deprecated  */
  Error = 'ERROR',
  /** @deprecated  */
  Information = 'INFORMATION'
}

export enum ReturnStatus {
  /** @deprecated  */
  Approved = 'APPROVED',
  /** @deprecated  */
  Authorized = 'AUTHORIZED',
  /** @deprecated  */
  Closed = 'CLOSED',
  /** @deprecated  */
  Denied = 'DENIED',
  /** @deprecated  */
  PartiallyApproved = 'PARTIALLY_APPROVED',
  /** @deprecated  */
  PartiallyAuthorized = 'PARTIALLY_AUTHORIZED',
  /** @deprecated  */
  PartiallyReceived = 'PARTIALLY_RECEIVED',
  /** @deprecated  */
  PartiallyRejected = 'PARTIALLY_REJECTED',
  /** @deprecated  */
  Pending = 'PENDING',
  /** @deprecated  */
  ProcessedAndClosed = 'PROCESSED_AND_CLOSED',
  /** @deprecated  */
  Received = 'RECEIVED',
  /** @deprecated  */
  Rejected = 'REJECTED'
}

/** Contains a list of customer return requests. */
export type Returns = {
  __typename?: 'Returns';
  /** A list of return requests. */
  items?: Maybe<Array<Maybe<Return>>>;
  /** Pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of return requests. */
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type Review = {
  __typename?: 'Review';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']['output'];
};

/** Contains details about a customer's reward points. */
export type RewardPoints = {
  __typename?: 'RewardPoints';
  /** The current balance of reward points. */
  balance?: Maybe<RewardPointsAmount>;
  /** The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null. */
  balance_history?: Maybe<Array<Maybe<RewardPointsBalanceHistoryItem>>>;
  /** The current exchange rates for reward points. */
  exchange_rates?: Maybe<RewardPointsExchangeRates>;
  /** The subscription status of emails related to reward points. */
  subscription_status?: Maybe<RewardPointsSubscriptionStatus>;
};

export type RewardPointsAmount = {
  __typename?: 'RewardPointsAmount';
  /** The reward points amount in store currency. */
  money: Money;
  /** The reward points amount in points. */
  points: Scalars['Float']['output'];
};

/** Contain details about the reward points transaction. */
export type RewardPointsBalanceHistoryItem = {
  __typename?: 'RewardPointsBalanceHistoryItem';
  /** The award points balance after the completion of the transaction. */
  balance?: Maybe<RewardPointsAmount>;
  /** The reason the balance changed. */
  change_reason: Scalars['String']['output'];
  /** The date of the transaction. */
  date: Scalars['String']['output'];
  /** The number of points added or deducted in the transaction. */
  points_change: Scalars['Float']['output'];
};

/** Lists the reward points exchange rates. The values depend on the customer group. */
export type RewardPointsExchangeRates = {
  __typename?: 'RewardPointsExchangeRates';
  /** How many points are earned for a given amount spent. */
  earning?: Maybe<RewardPointsRate>;
  /** How many points must be redeemed to get a given amount of currency discount at the checkout. */
  redemption?: Maybe<RewardPointsRate>;
};

/** Contains details about customer's reward points rate. */
export type RewardPointsRate = {
  __typename?: 'RewardPointsRate';
  /** The money value for the exchange rate. For earnings, this is the amount spent to earn the specified points. For redemption, this is the amount of money the number of points represents. */
  currency_amount: Scalars['Float']['output'];
  /** The number of points for an exchange rate. For earnings, this is the number of points earned. For redemption, this is the number of points needed for redemption. */
  points: Scalars['Float']['output'];
};

/** Indicates whether the customer subscribes to reward points emails. */
export type RewardPointsSubscriptionStatus = {
  __typename?: 'RewardPointsSubscriptionStatus';
  /** Indicates whether the customer subscribes to 'Reward points balance updates' emails. */
  balance_updates: RewardPointsSubscriptionStatusesEnum;
  /** Indicates whether the customer subscribes to 'Reward points expiration notifications' emails. */
  points_expiration_notifications: RewardPointsSubscriptionStatusesEnum;
};

export enum RewardPointsSubscriptionStatusesEnum {
  /** @deprecated  */
  NotSubscribed = 'NOT_SUBSCRIBED',
  /** @deprecated  */
  Subscribed = 'SUBSCRIBED'
}

export type Root_Type_For_BookDocumentSuccess = {
  __typename?: 'Root_Type_for_BookDocumentSuccess';
  response?: Maybe<Query_GetBookDocument_OneOf_0_Response>;
};

/** The book API accepts an array of orders to book, this will initiate a booking with the respective carriers of the orders sent in. */
export type Root_Type_For_BookRequest_Input = {
  /** an array of Shippit tracking numbers, corresponding to the orders which you would like to book. */
  orders: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Root_Type_For_BookingInProgress = {
  __typename?: 'Root_Type_for_BookingInProgress';
  error?: Maybe<Scalars['String']['output']>;
  error_description?: Maybe<Scalars['String']['output']>;
};

/** Describes the status of booking an order at a courier */
export type Root_Type_For_BookingStatus = {
  __typename?: 'Root_Type_for_BookingStatus';
  /** The courier where the booking was made */
  courier?: Maybe<Scalars['String']['output']>;
  /** Error code that applies to the individual bookings / orders referenced. */
  error?: Maybe<Scalars['String']['output']>;
  /** Human-readable error message applied to the individual bookings / orders referenced. */
  error_description?: Maybe<Scalars['String']['output']>;
  /** The Manifest ID of the booking */
  manifest?: Maybe<Scalars['String']['output']>;
  /** A URL to a printable copy of the shipping manifest. This is a [pre-signed URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html), generated by the Shippit platform to provide access to a secured document. The pre-signed URL remains valid for 7 days. If you need to access this document after expiration, please make another request for a new URL to be issued. */
  manifest_pdf?: Maybe<Scalars['String']['output']>;
  /** How many orders were included in this manifest. */
  order_count?: Maybe<Scalars['Int']['output']>;
  /** An array of order tracking numbers included in this status. Used to indicate which orders failed to manifest in the case where `success` = `false`. */
  orders?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Whether or not the booking succeeded */
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Represents an Order and related labelling information */
export type Root_Type_For_Label = {
  __typename?: 'Root_Type_for_Label';
  data?: Maybe<Scalars['JSON']['output']>;
  /** Shippit internal ID of the generated label. */
  id?: Maybe<Scalars['Int']['output']>;
  order: LabelResponseOrder;
  /**
   * URL to a printable label for the Order.
   * This is a [pre-signed URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html), generated by the Shippit platform to provide access to a secured label. The pre-signed URL remains valid for 7 days. If you need to access this label after expiration, please make another request for a new URL to be issued.
   */
  qualified_url: Scalars['String']['output'];
};

/** A Label or document in the Labels API, representing a printable document available on a public URL. */
export type Root_Type_For_LabelDocument = {
  __typename?: 'Root_Type_for_LabelDocument';
  /** If you have ZPL for your account, printable ZPL data for the document. */
  encoded_label?: Maybe<Scalars['String']['output']>;
  /** File type of the label */
  file_type?: Maybe<Scalars['String']['output']>;
  page_size?: Maybe<Scalars['String']['output']>;
  /**
   * URL to a printable PDF document.
   * This is a [pre-signed URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html), generated by the Shippit platform to provide access to a secured document. The pre-signed URL remains valid for 7 days. If you need to access this document after expiration, please make another request for a new URL to be issued.
   */
  url?: Maybe<Scalars['String']['output']>;
};

/** Represents a merchant account */
export type Root_Type_For_Merchant = {
  __typename?: 'Root_Type_for_Merchant';
  address_1?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  preparation_time?: Maybe<Scalars['Int']['output']>;
  shipping_cart_method_name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  store_name?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  website_url?: Maybe<Scalars['String']['output']>;
};

/** Represents a request to update a merchant */
export type Root_Type_For_MerchantRequest_Input = {
  merchant: Root_Type_For_Merchant_Input;
};

/** Represents a response to the Merchant request API, which shows either the generated Merchant object, or an error code with a description of the error. */
export type Root_Type_For_MerchantResponse = {
  __typename?: 'Root_Type_for_MerchantResponse';
  JSON?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Root_Type_For_Merchant>;
};

/** Represents a merchant account */
export type Root_Type_For_Merchant_Input = {
  address_1?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  preparation_time?: InputMaybe<Scalars['Int']['input']>;
  shipping_cart_method_name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  store_name?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  website_url?: InputMaybe<Scalars['String']['input']>;
};

/** Represents customs clearance parameters for international orders. */
export type Root_Type_For_OrderRequestOrderCustomsClearanceAttribute_Input = {
  /**
   * A term used to indicate the reason for export of dutiable goods. Selected options can affect how your shipment is cleared and how much tax is imposed on your shipment during customs clearance. Example values:
   * - `Permanent`
   * - `Temporary`
   * - `Return For Repair`
   * - `Used Exhibition Goods To Origin`
   * - `Intercompany Use`
   * - `Commercial Purpose Or Sale`
   * - `Personal Belongings or Personal Use`
   * - `Sample`
   * - `Gift`
   * - `Return To Origin`
   * - `Warranty Replacement`
   * - `Diplomatic Goods`
   * - `Defence Material`
   */
  export_reason?: InputMaybe<Scalars['mutationInput_createOrder_input_order_customs_clearance_attributes_export_reason']['input']>;
  /**
   * A universal term of trade that defines the responsibility and obligations with the transport of goods.  Most commonly used to indicate the responsible party for payment of duties and taxes.  Valid values include:
   * - `DDU`
   * - `DDP`
   * - `EXW`
   * - `FCA`
   * - `CPT`
   * - `CFR`
   * - `CIP`
   * - `CIF`
   * - `DAF`
   * - `DAT`
   * - `DAP`
   * - `DPU`
   * - `DES`
   * - `DEQ`
   * - `FAS`
   * - `FOB`
   */
  incoterm?: InputMaybe<Scalars['mutationInput_createOrder_input_order_customs_clearance_attributes_incoterm']['input']>;
  /** The amount charged to the receiver for freight services. This represents the cost that the receiver is responsible for paying as part of the freight or shipping charges. */
  receiver_freight_charge_amount?: InputMaybe<Scalars['Float']['input']>;
  /** A free text field to provide a identification number for a recipient. For example, a citizen identification number or passport number which is required for customs clearance for some international destinations. eg: PA1992991 */
  recipient_id?: InputMaybe<Scalars['mutationInput_createOrder_input_order_customs_clearance_attributes_recipient_id']['input']>;
  /** The issuing country of the tax id number in in ISO 3166 Alpha-2 format. eg. GB for Great Britain */
  tax_id_country_code?: InputMaybe<Scalars['mutationInput_createOrder_input_order_customs_clearance_attributes_tax_id_country_code']['input']>;
  /** The tax id number that is declared against this order. */
  tax_id_number?: InputMaybe<Scalars['mutationInput_createOrder_input_order_customs_clearance_attributes_tax_id_number']['input']>;
  /**
   * The Shippier's tax id type which is passed to a carrier for the purpose of customs clearance. Valid values include:
   * - `EORI`
   * - `IOSS`
   * - `LVG`
   * - `OSR`
   * - `VOEC`
   * - `VAT/GST`
   * - `FTZ`
   * - `DAN`
   * - `TAN`
   * - `DTF`
   * - `EIN`
   * - `SSN`
   * - `DUN`
   * - `FED`
   * - `STA`
   * - `CNP`
   * - `GBVAT`
   * - `NZ IRD`
   */
  tax_id_type?: InputMaybe<Scalars['mutationInput_createOrder_input_order_customs_clearance_attributes_tax_id_type']['input']>;
};

/** Represents a request to submit an order to shippit. */
export type Root_Type_For_OrderRequest_Input = {
  order: OrderRequestOrder_Input;
};

/** Response message for order create requests with `validate` flag set to true. */
export type Root_Type_For_OrderValidationErrorResponse = {
  __typename?: 'Root_Type_for_OrderValidationErrorResponse';
  /** List of error messages related to the country code. */
  delivery_country_code?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of error messages related to the postcode. */
  delivery_postcode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of error messages related to the state. */
  delivery_state?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of error messages related to the suburb. */
  delivery_suburb?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Error code returned by Shippit */
  error: Scalars['JSON']['output'];
  /** Human-readable response */
  error_description?: Maybe<Scalars['String']['output']>;
  /** List of error messages related to the provided product information. Typically appears in international orders. */
  products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  suggested_address?: Maybe<Mutation_CreateOrder_OneOf_3_AllOf_0_Suggested_Address>;
};

/**
 * Represents a parcel attached to an order.
 *
 * ## parcels vs products
 * How parcels relate to products is controlled by whether or not a **`product_attributes`** key is also defined. If a **`product_attributes`** is not defined, then the number of cartons is determined by the `Settings -> Pick & Pack -> Allocate each item in an order to a separate carton` option in Shippit, and the **`qty`** field will now specify either the number of parcels or products.
 *
 * If a **`product_attributes`** key is specified in the request, then the products can be specified separately from the parcels. In which case, the **`qty`** field should not be present: each parcel attributes object represents a separate parcel, and the number of products is specified in the **`product_attributes`** key. There is a maximum of 1000 parcels per request.
 */
export type Root_Type_For_ParcelAttributes_Input = {
  /** This is the DG class when making dangerous goods declarations. */
  dangerous_goods_class?: InputMaybe<Scalars['String']['input']>;
  /**
   * This is the DG code required when making dangerous goods declarations.
   *
   * Before you can declare orders as having dangerous goods, you must first request for dangerous goods to enabled for your account. Contact Shippit Support or your account manager to have this enabled.
   *
   * DG surcharges are often charged on the weight of the order, so it is recommended to split your order into multiple orders if your order contains either:
   * - both dangerous and non-dangerous goods, or
   * - more than one dangerous goods code
   */
  dangerous_goods_code?: InputMaybe<Scalars['String']['input']>;
  /** Additional information related to dangerous goods being shipped */
  dangerous_goods_text?: InputMaybe<Scalars['String']['input']>;
  /** Depth of the parcel in metres */
  depth?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Parcel number in the carrier system.
   *
   * This is used when the order is a tracking order, to match the parcel number in a carrier against the parcel recorded in shippit.
   */
  label_number?: InputMaybe<Scalars['String']['input']>;
  /** Length of the parcel in metres */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Location of the product */
  location?: InputMaybe<Scalars['String']['input']>;
  /** Two-letter country code (ISO 3166-1 Alpha-2) for the product's origin country. This is used in customs tracking for International shipments. Defaults to the home country of the Merchant. */
  origin_country_code?: InputMaybe<Scalars['String']['input']>;
  /**
   * The number of products packed; used in partial orders, or otherwise when the number of products in the parcel is less than the total in the order. If not present, set to product `quantity`.
   *
   * If this is present, at least 1 item should have packed greater than `0`.
   *
   * For international orders, all items should have packed greater than `0`.
   */
  packed?: InputMaybe<Scalars['Int']['input']>;
  /** Unit price of each product line item. Used in the packing slip and customs declarations. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Product line associated with product. Like SKU, this is also for stock keeping purposes, and can be used when SKU would not be enough (e.g. an order containing multiple lines with the same SKU) */
  product_line_id?: InputMaybe<Scalars['String']['input']>;
  /**
   * ```conditional``` -- The number of products specified by the entry.
   *
   * There is a maximum of 1000 parcels per quote request.
   *
   * Should not be present if a `product_attributes` key is present in the request.
   *
   * If `Allocate each item in an order to a separate carton` is enabled in Shippit, a separate parcel is generated for each product listed.
   */
  qty?: InputMaybe<Scalars['Float']['input']>;
  /** ```conditional``` -- Stock Keeping Unit (SKU) code of the product, for stock keeping purposes. Mandatory on international orders with specific couriers. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** ```conditional``` -- Title or description of the product. Mandatory for international orders with specific couriers. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the parcel in kilos. */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** Width of the parcel in metres. */
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Request-level error response for the Quote API. */
export type Root_Type_For_QuoteErrorResponse = {
  __typename?: 'Root_Type_for_QuoteErrorResponse';
  /** Error code returned by Shippit */
  error: Scalars['JSON']['output'];
  /** Human-readable response */
  error_description?: Maybe<Scalars['String']['output']>;
  /** Returns `false`. */
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Represents a request for carrier Quotes from Shippit. */
export type Root_Type_For_QuoteRequest_Input = {
  quote: Root_Type_For_Quote_Input;
};

/** Represents a response to an QuoteRequest, which shows either the generated Quote object or an error code with a description of the error. */
export type Root_Type_For_QuoteResponse = {
  __typename?: 'Root_Type_for_QuoteResponse';
  JSON?: Maybe<Scalars['JSON']['output']>;
  /** Number of quote results returned. */
  count?: Maybe<Scalars['Float']['output']>;
  /** The Quote returned by the carrier */
  response?: Maybe<Array<Maybe<QuoteResult>>>;
};

export type Root_Type_For_ReturnOrderItem_Input = {
  api_reference?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type Root_Type_For_ReturnOrderShippingMethod_Input = {
  /** The carrier used to deliver the return. */
  carrier: Scalars['String']['input'];
  /** The service level of the shipment, can be 'standard' or 'express'. */
  code: Scalars['String']['input'];
  /** The ID assigned by some carriers to the shipment / consignment. Depending on the shipment, the field may not be available. */
  courier_job_id?: InputMaybe<Scalars['JSON']['input']>;
  /** The human readable name of the carrier used to deliver the return. */
  label: Scalars['String']['input'];
  return_method?: InputMaybe<MutationInput_ReturnsOrder_Input_Return_Order_Shipping_Method_Return_Method>;
  /** Always 'shippit'. */
  source: Scalars['String']['input'];
  /** The tracking number for the return shipment. This is used to receive status updates for the shipment. */
  tracking_number: Scalars['String']['input'];
};

/** The root of the ReturnRequestCustomer type's schema. */
export type Root_Type_For_ReturnRequestCustomer = {
  __typename?: 'Root_Type_for_ReturnRequestCustomer';
  /** The API Reference provided by the Intergration Platform */
  api_reference?: Maybe<Scalars['String']['output']>;
  /** The email of the customer. */
  email: Scalars['String']['output'];
  /** The addressee's firstname */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of the record within Shippit Connect */
  id?: Maybe<Scalars['Int']['output']>;
  /** The addressee's lastname */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The addressee's middlename */
  middlename?: Maybe<Scalars['String']['output']>;
};

/** The root of the ReturnRequestCustomer type's schema. */
export type Root_Type_For_ReturnRequestCustomer_Input = {
  /** The API Reference provided by the Intergration Platform */
  api_reference?: InputMaybe<Scalars['String']['input']>;
  /** The email of the customer. */
  email: Scalars['String']['input'];
  /** The addressee's firstname */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the record within Shippit Connect */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The addressee's lastname */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** The addressee's middlename */
  middlename?: InputMaybe<Scalars['String']['input']>;
};

/** The root of the ReturnRequestItem type's schema. */
export type Root_Type_For_ReturnRequestItem = {
  __typename?: 'Root_Type_for_ReturnRequestItem';
  /** The ID of the item, each item ID must be unique to the order. */
  api_reference: Scalars['String']['output'];
  /** The item's depth measurement, in centimeteres */
  depth?: Maybe<Scalars['Float']['output']>;
  /** The discount amount applicable to the item. Note: Only item level discounts are considered here. Subtotal & Order level discounts are not considered in this response value. */
  discount_amount?: Maybe<Scalars['Float']['output']>;
  /** The ID of the item record in Shippit Connect */
  id: Scalars['Int']['output'];
  /** The URL of the product image */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the price fields (`original_price`, `price`) includes tax as part of it's value. */
  is_price_incl_tax?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Indicates whether the item is considered as a "virtual" item.
   *
   * Virtual items are considered non-phyiscal items that do not equire shipping. ie: Virtual Gift Cards and Downloadable Content.
   */
  is_virtual?: Maybe<Scalars['Boolean']['output']>;
  /** The item's length measurement, in centimeteres */
  length?: Maybe<Scalars['Float']['output']>;
  /** The item's name */
  name?: Maybe<Scalars['String']['output']>;
  /** The reason why the item cannot be returned. */
  non_return_reason?: Maybe<Scalars['String']['output']>;
  /** An array of options applicable to the item (ie: colour or size) */
  options?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /**
   * The original price of the item, before any discounts.
   *
   * Note: Some integration platforms do not support providing data relating to the original price of the item at the time the order was placed. In these instances, a `NULL` value is returned.
   */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** The item's price, after any item-level discounts applied */
  price: Scalars['Float']['output'];
  /**
   * The qty of the item that could be returned by the customer.
   *
   * This value takes into consideration all avaiable data from the Integration Platform as to the "returnable amount".
   *
   * In all instances, Connect will attempt to determine a suitable amount that is available for return, considering both the qty that was originally ordered, qty shipped to the customer, along with taking into consideration any existing returns, refunds or cancellations.
   */
  qty: Scalars['Int']['output'];
  /**
   * The qty of the item that has been cancelled, according to the Integration Platform.
   *
   * A cancelled item is considered as an item that was ordered, but not yet paid for by the customer.
   *
   * Note: Not all platforms support the cancellation of an item. In cases where this data is not available, a value of `NULL` will be returned.
   */
  qty_cancelled?: Maybe<Scalars['Int']['output']>;
  /** The qty of the item that has been invoiced, according to the Integration Platform */
  qty_invoiced?: Maybe<Scalars['Int']['output']>;
  /** The qty of the item that was originally ordered, according to the Integration Platform */
  qty_ordered: Scalars['Int']['output'];
  /**
   * The qty of the item that has been refunded, according to the Integration Platform.
   *
   * A refunded item is considered as an item that was ordered and invoiced to the customer.
   *
   * Note: Not all platforms support the refund of an item. In cases where this data is not available, a value of `NULL` will be returned.
   */
  qty_refunded?: Maybe<Scalars['Int']['output']>;
  /**
   * The qty of the item returned, according to the integration platform.
   *
   * A return item is considered as an item that was shipped to the customer and returned baack to the merchant.
   *
   * Note: Not all platforms support the return of an item. In cases where this data is not available, a value of `NULL` will be returned.
   */
  qty_returned?: Maybe<Scalars['Int']['output']>;
  /** The qty of the item that has been marked as shipped according to the Integration Platform */
  qty_shipped?: Maybe<Scalars['Int']['output']>;
  /** The item's stock keeping unit (Item SKU) */
  sku?: Maybe<Scalars['String']['output']>;
  /** The tax amount applicable to the item */
  tax?: Maybe<Scalars['Float']['output']>;
  /** The item's weight measurement, in kilograms */
  weight?: Maybe<Scalars['Float']['output']>;
  /** The item's width measurement, in centimeteres */
  width?: Maybe<Scalars['Float']['output']>;
};

/** The root of the ReturnRequestMerchant type's schema. */
export type Root_Type_For_ReturnRequestMerchant = {
  __typename?: 'Root_Type_for_ReturnRequestMerchant';
  address?: Maybe<ReturnRequestMerchantAddress>;
  /** The items that the Merchant is to be considered for */
  items?: Maybe<Array<Maybe<Root_Type_For_ReturnRequestMerchantItem>>>;
  /** The Shippit Merchant ID */
  merchant_id: Scalars['Int']['output'];
};

/** The root of the ReturnRequestMerchantItem type's schema. */
export type Root_Type_For_ReturnRequestMerchantItem = {
  __typename?: 'Root_Type_for_ReturnRequestMerchantItem';
  /** The API Reference of the Item, according to the Integration Platform. */
  api_reference: Scalars['String']['output'];
  /** The ID of the item record in Shippit Connect */
  id: Scalars['Int']['output'];
  /** The item's name */
  name: Scalars['String']['output'];
  /** The qty of the item that should be considered for this merchant. */
  qty?: Maybe<Scalars['Int']['output']>;
  /** The item's stock keeping unit (Item SKU) */
  sku: Scalars['String']['output'];
};

/** Post request body for a ReturnRequest */
export type Root_Type_For_ReturnRequestPost_Input = {
  email_address?: InputMaybe<Scalars['String']['input']>;
  order_reference?: InputMaybe<Scalars['String']['input']>;
};

/** The root of the ReturnRequestShippingAddress type's schema. */
export type Root_Type_For_ReturnRequestShippingAddress = {
  __typename?: 'Root_Type_for_ReturnRequestShippingAddress';
  /** The API Reference provided by the Intergration Platform */
  api_reference?: Maybe<Scalars['String']['output']>;
  /** The addressee company name */
  company?: Maybe<Scalars['String']['output']>;
  /** The country name (ISO-3166 Country Name) */
  country: Scalars['String']['output'];
  /** The country code (ISO-3166-2 Alpha 2) */
  country_code: Scalars['String']['output'];
  /** The addressee's firstname */
  firstname?: Maybe<Scalars['String']['output']>;
  /** The ID of the record within the integrated order platform. */
  id: Scalars['Int']['output'];
  /** The addressee's lastname */
  lastname?: Maybe<Scalars['String']['output']>;
  /** The addressee's middlename */
  middlename?: Maybe<Scalars['String']['output']>;
  /** The addressee's phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postcode of the address */
  postcode: Scalars['String']['output'];
  /** The region of the address */
  region?: Maybe<Scalars['String']['output']>;
  /** The region code of the address (ISO-3166-2 Subdivision) */
  region_code?: Maybe<Scalars['String']['output']>;
  /** The street level address details */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The suburb of the address */
  suburb: Scalars['String']['output'];
};

/** Error response returned in tracking requests */
export type Root_Type_For_TrackingErrorResponse = {
  __typename?: 'Root_Type_for_TrackingErrorResponse';
  /** Error code returned by Shippit */
  error: Scalars['JSON']['output'];
  /** Human-readable response */
  error_description?: Maybe<Scalars['String']['output']>;
  /** Returns `false` */
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Order details returned by a tracking request */
export type Root_Type_For_TrackingResponseOrder = {
  __typename?: 'Root_Type_for_TrackingResponseOrder';
  /** Errors associated with the tracking request - should always be `null` as tracking errors will be returned at the top-level response. */
  error?: Maybe<Scalars['String']['output']>;
  /** Whether or not this tracking request was successful - should always be `true` as tracking errors will be returned at the top-level response. */
  success?: Maybe<Scalars['Boolean']['output']>;
  /** A list of historical tracking statuses for the Order. This will at minimum list the order status, along with the date and time when it changed, and who was responsible for the status change. */
  track?: Maybe<Array<Maybe<TrackingResponseTrackingHistory>>>;
  /** Tracking number of the Order */
  tracking_number?: Maybe<Scalars['String']['output']>;
  /** URL presenting tracking info for the Order. This can be shown to the recipient to give them status updates on the Order. */
  tracking_url?: Maybe<Scalars['String']['output']>;
};

/** Represents the customers details attached to the order. */
export type Root_Type_For_UserAttributes = {
  __typename?: 'Root_Type_for_UserAttributes';
  /** the customer's email address. Must match regular expression as defined in https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address */
  email: Scalars['String']['output'];
  /** the customer's first name. If ```last_name``` is not provided, then it is used as the customer's full name. */
  first_name: Scalars['String']['output'];
  /** customer's last name */
  last_name?: Maybe<Scalars['String']['output']>;
  /** Mobile number of the user / receiver. */
  mobile?: Maybe<Scalars['String']['output']>;
};

/** Represents the customers details attached to the order. */
export type Root_Type_For_UserAttributes_Input = {
  /** the customer's email address. Must match regular expression as defined in https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address */
  email: Scalars['String']['input'];
  /** the customer's first name. If ```last_name``` is not provided, then it is used as the customer's full name. */
  first_name: Scalars['String']['input'];
  /** customer's last name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Mobile number of the user / receiver. */
  mobile?: InputMaybe<Scalars['String']['input']>;
};

export type Root_Type_For_WebhookRequest_Input = {
  courier_job_id?: InputMaybe<Scalars['String']['input']>;
  courier_name?: InputMaybe<Scalars['String']['input']>;
  /** Possible enumerations are `await_collection`, `awaiting_collection`, `awaiting_drop_off`, `cancelled`, `completed`, `parcel_completed`, `partially_completed`, `customs_awaiting_paym`, `customs_failed`, `customs_on_hold`, `damaged`, `delivery_attempted`, `delivery_failed`, `in_transit`, `insufficient_address`, `invalidated`, `lost`, `pickup_failed`, `processing`, `ready_for_pickup`, `return_booked`, `return_booking_failed`, `return_requested`, `returned_to_sender`, `untrackable`, `with_customs`, `with_driver` */
  current_state?: InputMaybe<Scalars['String']['input']>;
  delivery_address?: InputMaybe<Scalars['String']['input']>;
  delivery_country_code?: InputMaybe<Scalars['String']['input']>;
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  delivery_latitude?: InputMaybe<Scalars['Int']['input']>;
  delivery_longitude?: InputMaybe<Scalars['Int']['input']>;
  delivery_postcode?: InputMaybe<Scalars['String']['input']>;
  delivery_state?: InputMaybe<Scalars['String']['input']>;
  delivery_suburb?: InputMaybe<Scalars['String']['input']>;
  expected_delivery_date?: InputMaybe<Scalars['String']['input']>;
  merchant_url?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<MutationInput_TrackOrderHook_Input_Products_Items_Input>>>;
  retailer_order_number?: InputMaybe<Scalars['String']['input']>;
  retailer_reference?: InputMaybe<Scalars['String']['input']>;
  source_platform?: InputMaybe<Scalars['String']['input']>;
  status_history?: InputMaybe<Array<InputMaybe<WebhookTrackingHistory_Input>>>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  tracking_url?: InputMaybe<Scalars['String']['input']>;
};

/** A specification of the queries to include in the quote. */
export type Root_Type_For_Quote_Input = {
  /** If set to "Yes", the system returns all quotes where Authority to Leave is enabled. */
  authority_to_leave?: InputMaybe<Scalars['String']['input']>;
  /** The dropoff address for the quote. Mandatory for `OnDemand` orders. */
  dropoff_address?: InputMaybe<Scalars['String']['input']>;
  /** The start of the dropoff window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm` */
  dropoff_at?: InputMaybe<Scalars['String']['input']>;
  /** The destination country code for the quote in `ISO 3166 Alpha-2` format. If unassigned, defaults to the country code of the merchant's primary location, or otherwise 'AU' */
  dropoff_country_code?: InputMaybe<Scalars['String']['input']>;
  /** The end of the dropoff window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm` */
  dropoff_deadline_at?: InputMaybe<Scalars['String']['input']>;
  /** destination postcode for the quote */
  dropoff_postcode: Scalars['String']['input'];
  /** destination state for the quote. **Required** when `dropoff_postcode` is unassigned or set to `AU` */
  dropoff_state?: InputMaybe<Scalars['String']['input']>;
  /** The dropoff suburb */
  dropoff_suburb: Scalars['String']['input'];
  /**
   * ```conditional``` Declared value for customs when shipping international.
   *
   * Mandatory for International orders.
   */
  dutiable_amount?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Some carriers provide add-on services (features) which can be indicated when requesting a quote. These services are identified by a unique string and will depend on the carrier. To request these services, add a string to these field.
   * Services supported at the moment:
   * - `white_glove` (`Neway`, `DesignerTransport`):
   *       A delivery service that offers more personalised and tailored services for shipping high value, large or fragile goods.
   * - `calculate_ddp` (`SmartRoutingInternational`):
   *       When requested, the returned quote prices are inclusive of import taxes, duties and fees.
   */
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** delivery date for the order, required for `priority` orders */
  order_date?: InputMaybe<Scalars['Date']['input']>;
  /**
   * An array of parcel specifications to be included in the quote.
   *
   * Each item can be used to specify the qty, dimensions, and other information about the products to be shipped, and the parcel used to ship it.
   *
   * At minimum, only the `qty` and `weight` fields are required. There is a maximum of 1000 parcels per quote request.
   */
  parcel_attributes: Array<InputMaybe<Parcel_Input>>;
  /**
   * In order to fulfill the delivery commitment made to the customer, the carrier needs to know the pickup and delivery times for the parcel(s). Below, you will find all the fields that the carrier may require. The specific fields that are mandatory will depend on the carrier and the requested service.
   *
   * The start of the pickup window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm`
   */
  pickup_at?: InputMaybe<Scalars['String']['input']>;
  /** The end of the pickup window for `OnDemand` orders in the format `YYYY-MM-DDTHH:mm:ss+HH:mm` */
  pickup_deadline_at?: InputMaybe<Scalars['String']['input']>;
  /** An array of product details to be included in the quote */
  product_attributes?: InputMaybe<Array<InputMaybe<MutationInput_GetQuote_Input_Quote_Product_Attributes_Items_Input>>>;
  /** Three letter ISO 4217 currency code that applies to the products which will be used for customs. */
  product_currency?: InputMaybe<Scalars['String']['input']>;
  /** If set to `true`, the system returns all quotes instead of cheapest/fastest quote. Defaults to false. */
  return_all_quotes?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * An array of service leves to return quotes for. Valid values include:
   * - `standard`
   * - `express`
   * - `priorty`
   * - `on_demand`
   */
  service_levels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Contains details about a comment. */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message. */
  message: Scalars['String']['output'];
  /** The timestamp of the comment. */
  timestamp: Scalars['String']['output'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** This enumeration defines the scope type for customer orders. */
export enum ScopeTypeEnum {
  /** @deprecated  */
  Global = 'GLOBAL',
  /** @deprecated  */
  Store = 'STORE',
  /** @deprecated  */
  Website = 'WEBSITE'
}

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** The specific page to return. */
  current_page?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of items to return per page of results. */
  page_size?: Maybe<Scalars['Int']['output']>;
  /** The total number of pages in the response. */
  total_pages?: Maybe<Scalars['Int']['output']>;
};

/** A string that contains search suggestion */
export type SearchSuggestion = {
  __typename?: 'SearchSuggestion';
  /** The search suggestion of existing product. */
  search: Scalars['String']['output'];
};

/** Represents a search suggestion item */
export type SearchSuggestionItem = {
  __typename?: 'SearchSuggestionItem';
  /** Represents number of results for current term */
  nrResults?: Maybe<Scalars['Int']['output']>;
  /** Represents suggested term */
  searchterm?: Maybe<Scalars['String']['output']>;
};

/** Represents suggested blog posts */
export type SearchSuggestionItemBlog = {
  __typename?: 'SearchSuggestionItemBlog';
  /** Represents blog thumbnail url */
  _thumburl?: Maybe<Scalars['String']['output']>;
  /** Represents blog ontent_type */
  content_type?: Maybe<Scalars['String']['output']>;
  /** Represents blog item_content_type */
  item_content_type?: Maybe<Scalars['String']['output']>;
  /** Represents blog name */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents blog ID */
  secondId?: Maybe<Scalars['String']['output']>;
  /** Represents blog url_key */
  url_key?: Maybe<Scalars['String']['output']>;
};

/** Represents suggested categories */
export type SearchSuggestionItemCategory = {
  __typename?: 'SearchSuggestionItemCategory';
  /** Represents FH category id */
  catId?: Maybe<Scalars['String']['output']>;
  /** Represents category taxonomy */
  mlValue?: Maybe<Scalars['String']['output']>;
  /** Represents number of results for current term */
  nrResults?: Maybe<Scalars['Int']['output']>;
  /** Represents suggested term */
  searchterm?: Maybe<Scalars['String']['output']>;
};

/** Represents suggested products */
export type SearchSuggestionItemProduct = {
  __typename?: 'SearchSuggestionItemProduct';
  /** Represents product thumbnail url */
  _thumburl?: Maybe<Scalars['String']['output']>;
  /** Represents product barcode */
  barcode?: Maybe<Scalars['String']['output']>;
  /** Represents product name */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents product ID */
  secondId?: Maybe<Scalars['String']['output']>;
  /** Represents product URL-key */
  url_key?: Maybe<Scalars['String']['output']>;
  /** Represents website IDs */
  website_ids?: Maybe<Scalars['String']['output']>;
};

/** Represents a search suggestion results */
export type SearchSuggestionResult = {
  __typename?: 'SearchSuggestionResult';
  /** Represents a search suggestion blogs */
  blog?: Maybe<Array<Maybe<SearchSuggestionItemBlog>>>;
  /** Represents a search suggestion categories */
  categories?: Maybe<Array<Maybe<SearchSuggestionItemCategory>>>;
  /** Represents a search suggestion keywords */
  keywords?: Maybe<Array<Maybe<SearchSuggestionItem>>>;
  /** Represents a search suggestion products */
  products?: Maybe<Array<Maybe<SearchSuggestionItemProduct>>>;
  skus?: Maybe<Array<Maybe<SearchSuggestionItem>>>;
  stores?: Maybe<Array<Maybe<SearchSuggestionItem>>>;
};

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The type of selected bundle product option. */
  type: Scalars['String']['output'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']['output'];
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int']['output'];
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']['output'];
  /** The price of the value for the selected bundle product option. */
  price: Scalars['Float']['output'];
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']['output'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']['output'];
};

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']['output'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display text for the option. */
  option_label: Scalars['String']['output'];
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']['output'];
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']['output'];
};

/** Contains details about an attribute the buyer selected. */
export type SelectedCustomAttributeInput = {
  /** A string that identifies the selected attribute. */
  attribute_code: Scalars['String']['input'];
  /** The unique ID for a `CustomAttribute` object of a selected custom attribute. */
  value: Scalars['ID']['input'];
};

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']['output'];
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']['output'];
  /** The display name of the selected customizable option. */
  label: Scalars['String']['output'];
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']['output'];
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']['output'];
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']['output'];
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']['output'];
  /** The display name of the selected value. */
  label: Scalars['String']['output'];
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice;
  /** The text identifying the selected value. */
  value: Scalars['String']['output'];
};

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code. */
  code: Scalars['String']['output'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  /** The payment method title. */
  title: Scalars['String']['output'];
};

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  /** The cost of shipping using this shipping method. */
  amount: Money;
  /** @deprecated The field should not be used on the storefront. */
  base_amount?: Maybe<Money>;
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output'];
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output'];
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']['output'];
  /** The label for the method code. */
  method_title: Scalars['String']['output'];
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money;
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money;
};

export type SelectedShippingMethodInfo = {
  __typename?: 'SelectedShippingMethodInfo';
  /** C&C postcode */
  selected_postcode_cnc?: Maybe<Scalars['String']['output']>;
  /** Home delivery postcode */
  selected_postcode_hd?: Maybe<Scalars['String']['output']>;
  /** Home delivery region */
  selected_region_hd?: Maybe<Scalars['String']['output']>;
  /** The selected shipping method code. */
  selected_shipping_method_code?: Maybe<Scalars['String']['output']>;
  /** Home delivery suburb */
  selected_suburb_hd?: Maybe<Scalars['String']['output']>;
  /** The selected store code(location_id only for C&C). */
  store_code_id?: Maybe<Scalars['Int']['output']>;
};

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']['input'];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  /** An array containing information about each recipient. */
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  /** Information about the customer and the content of the message. */
  sender?: Maybe<SendEmailToFriendSender>;
};

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  /** The email address of the recipient. */
  email: Scalars['String']['output'];
  /** The name of the recipient. */
  name: Scalars['String']['output'];
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']['input'];
  /** The name of the recipient. */
  name: Scalars['String']['input'];
};

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  /** The email address of the sender. */
  email: Scalars['String']['output'];
  /** The text of the message to be sent. */
  message: Scalars['String']['output'];
  /** The name of the sender. */
  name: Scalars['String']['output'];
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']['input'];
  /** The text of the message to be sent. */
  message: Scalars['String']['input'];
  /** The name of the sender. */
  name: Scalars['String']['input'];
};

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']['output'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']['output'];
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
};

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  /** The cart after setting the billing address. */
  cart: Cart;
};

/** Defines the gift options applied to the cart. */
export type SetGiftOptionsOnCartInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input'];
  /** Gift message details for the cart. */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** Whether customer requested gift receipt for the cart. */
  gift_receipt_included: Scalars['Boolean']['input'];
  /** The unique ID for a `GiftWrapping` object to be used for the cart. */
  gift_wrapping_id?: InputMaybe<Scalars['ID']['input']>;
  /** Whether customer requested printed card for the cart. */
  printed_card_included: Scalars['Boolean']['input'];
};

/** Contains the cart after gift options have been applied. */
export type SetGiftOptionsOnCartOutput = {
  __typename?: 'SetGiftOptionsOnCartOutput';
  /** The modified cart object. */
  cart: Cart;
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The email address of the guest. */
  email: Scalars['String']['input'];
};

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  /** The cart after setting the guest email. */
  cart: Cart;
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  /** The cart after setting the payment method. */
  cart: Cart;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  /** The cart after setting the shipping addresses. */
  cart: Cart;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  /** The cart after setting the shipping methods. */
  cart: Cart;
};

/** Defines a gift registry invitee. */
export type ShareGiftRegistryInviteeInput = {
  /** The email address of the gift registry invitee. */
  email: Scalars['String']['input'];
  /** The name of the gift registry invitee. */
  name: Scalars['String']['input'];
};

/** Contains the results of a request to share a gift registry. */
export type ShareGiftRegistryOutput = {
  __typename?: 'ShareGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully shared. */
  is_shared: Scalars['Boolean']['output'];
};

/** Defines the sender of an invitation to view a gift registry. */
export type ShareGiftRegistrySenderInput = {
  /** A brief message from the sender. */
  message: Scalars['String']['input'];
  /** The sender of the gift registry invitation. */
  name: Scalars['String']['input'];
};

/** Defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  /** @deprecated  */
  Separately = 'SEPARATELY',
  /** @deprecated  */
  Together = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output'];
  /** The order item associated with the shipment item. */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product. */
  product_name?: Maybe<Scalars['String']['output']>;
  /** The sale price for the base product. */
  product_sale_price: Money;
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output'];
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output'];
};

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']['output'];
  /** The tracking number of the order shipment. */
  number?: Maybe<Scalars['String']['output']>;
  /** The current status of the shipment. */
  status?: Maybe<Scalars['String']['output']>;
  /** The shipment tracking title. */
  title: Scalars['String']['output'];
};

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars['Int']['input']>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether the address is the default for repeat delivery orders. */
  is_default_repeat_delivery?: InputMaybe<Scalars['Boolean']['input']>;
  /** OMS Store id. */
  oms_collection_location?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_billing?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  /** An array that lists the items in the cart. */
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output'];
  /** The company specified for the billing or shipping address. */
  company?: Maybe<Scalars['String']['output']>;
  /** An object containing the country label and code. */
  country: CartAddressCountry;
  /** Text provided by the shopper. */
  customer_notes?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output'];
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight?: Maybe<Scalars['Float']['output']>;
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output'];
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** An object containing the region label and code. */
  region?: Maybe<CartAddressRegion>;
  /** An object that describes the selected shipping method. */
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>;
  /** The telephone number for the billing or shipping address. */
  telephone?: Maybe<Scalars['String']['output']>;
  /** The unique id of the customer address. */
  uid: Scalars['String']['output'];
  /** The VAT company number for billing or shipping address. */
  vat_id?: Maybe<Scalars['String']['output']>;
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount. */
  amount: Money;
};

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax. */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax. */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping. */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Details about taxes applied for shipping. */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping. */
  total_amount: Money;
};

/** The delivery information detail input */
export type ShippingInformationDetailInput = {
  /** The authority to leave */
  authority_to_leave?: InputMaybe<Scalars['Boolean']['input']>;
  /** The delivery instructions */
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
};

/** Applies one or shipping methods to the cart. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']['input'];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']['input'];
  /** OMS Store id. */
  oms_collection_location?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingMethodsMapping = {
  __typename?: 'ShippingMethodsMapping';
  /** A code of shipping method(C&C or Home delivery). */
  code?: Maybe<Scalars['String']['output']>;
  /** An array of strings that define the shipping options. */
  shipping_options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Defines the shipping option information. */
export type ShippingOption = {
  __typename?: 'ShippingOption';
  /** Defines if shipping option is available. */
  available?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the delivery service. */
  delivery_service?: Maybe<Scalars['String']['output']>;
  /** The title of the delivery service. */
  delivery_service_title?: Maybe<Scalars['String']['output']>;
  /** The cost of the delivery service. */
  estimated_cost?: Maybe<Scalars['Float']['output']>;
  /** Defines if shipping expected fulfilment store location. */
  expected_fulfilment_location?: Maybe<Scalars['Int']['output']>;
  /** The description of the delivery service. */
  shipping_description?: Maybe<Scalars['String']['output']>;
  /** An array of a `UnavailableItem` object. */
  unavailable_items?: Maybe<Array<Maybe<UnavailableItem>>>;
  /** Defines if shipping option is visible as option on frontend. */
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type ShippingOptionOutput = {
  __typename?: 'ShippingOptionOutput';
  /** Shipping option message */
  error_message?: Maybe<Scalars['String']['output']>;
  /** The name of the delivery service. */
  shipping_options?: Maybe<Array<Maybe<ShippingOption>>>;
};

/** Defines the shipping destination request to estimate shipping methods and click and collect. */
export type ShippingRequestInput = {
  /** The shipping destination city. */
  city: Scalars['String']['input'];
  /** The shipping destination postcode. */
  postcode: Scalars['String']['input'];
  /** The shipping destination region. */
  region: Scalars['String']['input'];
  /** Is in search mode. By default false */
  search_mode?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An implementation for simple product cart items. */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** The list of available gift wrapping options for the cart item. */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** The selected gift wrapping for the cart item. */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  review_summary?: Maybe<Data_Statistics_Json_Response>;
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Indicates whether to return results in ascending or descending order. */
export enum SortEnum {
  /** @deprecated  */
  Asc = 'ASC',
  /** @deprecated  */
  Desc = 'DESC'
}

/** Defines a possible sort field. */
export type SortField = {
  __typename?: 'SortField';
  /** The label of the sort field. */
  label?: Maybe<Scalars['String']['output']>;
  /** The attribute code of the sort field. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** The default sort field value. */
  default?: Maybe<Scalars['String']['output']>;
  /** An array of possible sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

export type Stats = {
  __typename?: 'Stats';
  Errors?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Limit?: Maybe<Scalars['Float']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Query_Data_Statistics_Json_OneOf_0_Results_Items>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Contains information about a store's configuration. */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  pet_ai_content_splash_logo?: Maybe<Scalars['String']['output']>;
  /** Splash Screen Title */
  pet_ai_content_splash_title?: Maybe<Scalars['String']['output']>;
};

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block. */
  position?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']['output']>;
};

/** Defines the fields of the Storelocation entity. */
export type Storelocation = {
  __typename?: 'Storelocation';
  /** The store location city. */
  city?: Maybe<Scalars['String']['output']>;
  /** The store location country code. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Distance to the store location. */
  distance?: Maybe<Scalars['Float']['output']>;
  /** Determines if SKU is in stock in this pickup location */
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** The store location latitude. */
  latitude?: Maybe<Scalars['String']['output']>;
  /** The store location ID. */
  locationId?: Maybe<Scalars['String']['output']>;
  /** The store location name. */
  locationName?: Maybe<Scalars['String']['output']>;
  /** The store location longitude. */
  longitude?: Maybe<Scalars['String']['output']>;
  /** The store location opening hours. */
  openingHoursHtml?: Maybe<Scalars['String']['output']>;
  /** The store location phone. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The store location postcode. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** The store location state. */
  state?: Maybe<Scalars['String']['output']>;
  /** The store location street. */
  street?: Maybe<Scalars['String']['output']>;
  /** List of SKUs that can't be collected in this location */
  unavailable_items?: Maybe<Array<Maybe<UnavailableItem>>>;
};

/** Defines the output of the Storelocation search. */
export type Storelocations = {
  __typename?: 'Storelocations';
  /** List of Storelocation entities. */
  storeLocations?: Maybe<Array<Maybe<Storelocation>>>;
};

/** Defines the input for the store locator search based on postcode, latitude, longitude, country code. */
export type StorelocatorSearchInput = {
  /** The location country code. */
  country_code: Scalars['String']['input'];
  /** The location latitude. */
  latitude?: InputMaybe<Scalars['String']['input']>;
  /** The location longitude. */
  longitude?: InputMaybe<Scalars['String']['input']>;
  /** The postcode code. */
  postcode: Scalars['String']['input'];
};

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** The status of the subscription request. */
  status?: Maybe<SubscriptionStatusesEnum>;
};

export type Subscription = {
  __typename?: 'Subscription';
  Directus_category_category_mutated?: Maybe<Directus_Category_Category_Mutated>;
  Directus_category_mutated?: Maybe<Directus_Category_Mutated>;
  Directus_category_navigation_mutated?: Maybe<Directus_Category_Navigation_Mutated>;
  Directus_directus_files_mutated?: Maybe<Directus_Directus_Files_Mutated>;
  Directus_feature_toggles_mutated?: Maybe<Directus_Feature_Toggles_Mutated>;
  Directus_membership_benefits_category_mutated?: Maybe<Directus_Membership_Benefits_Category_Mutated>;
  Directus_membership_benefits_mutated?: Maybe<Directus_Membership_Benefits_Mutated>;
  Directus_pet_ai_prompts_category_mutated?: Maybe<Directus_Pet_Ai_Prompts_Category_Mutated>;
  Directus_pet_ai_prompts_mutated?: Maybe<Directus_Pet_Ai_Prompts_Mutated>;
  Directus_pet_wellness_articles_category_mutated?: Maybe<Directus_Pet_Wellness_Articles_Category_Mutated>;
  Directus_pet_wellness_articles_mutated?: Maybe<Directus_Pet_Wellness_Articles_Mutated>;
};


export type SubscriptionDirectus_Category_Category_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Category_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Category_Navigation_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Directus_Files_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Feature_Toggles_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Membership_Benefits_Category_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Membership_Benefits_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Pet_Ai_Prompts_Category_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Pet_Ai_Prompts_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Pet_Wellness_Articles_Category_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};


export type SubscriptionDirectus_Pet_Wellness_Articles_MutatedArgs = {
  event?: InputMaybe<Directus_EventEnum>;
};

/** Indicates the status of the request. */
export enum SubscriptionStatusesEnum {
  /** @deprecated  */
  NotActive = 'NOT_ACTIVE',
  /** @deprecated  */
  Subscribed = 'SUBSCRIBED',
  /** @deprecated  */
  Unconfirmed = 'UNCONFIRMED',
  /** @deprecated  */
  Unsubscribed = 'UNSUBSCRIBED'
}

export type SuggestionsResult = {
  __typename?: 'SuggestionsResult';
  suggestionGroups?: Maybe<Array<Maybe<Query_GetSuggestions_SuggestionGroups_Items>>>;
};

/** Describes the swatch type and a value. */
export type SwatchData = {
  __typename?: 'SwatchData';
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type?: Maybe<Scalars['String']['output']>;
  /** The value for the swatch item. It could be text or an image link. */
  value?: Maybe<Scalars['String']['output']>;
};

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label?: Maybe<Scalars['String']['output']>;
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string?: Maybe<Scalars['String']['output']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data?: Maybe<SwatchData>;
};

/** Contains tax item details. */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item. */
  amount: Money;
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']['output'];
  /** A title that describes the tax. */
  title: Scalars['String']['output'];
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** The value can be represented as color (HEX code), image link, or text. */
  value?: Maybe<Scalars['String']['output']>;
};

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  /** The price of the product at this tier. */
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Too Many Request Error */
export type TooManyRequestErrorResponseSchema = {
  __typename?: 'TooManyRequestErrorResponseSchema';
  Errors?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_3_Errors_Items>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/**
 * Represents a response to the Tracking API, which provides tracking info for a specific order.
 *
 * If successful, will return a response object with tracking information. Otherwise, will return an error code at the top-level.
 */
export type TrackingResponse = {
  __typename?: 'TrackingResponse';
  JSON?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Root_Type_For_TrackingResponseOrder>;
};

/**
 * An event that tracks a change in `status` of a parcel's journey to fulfillment, with a `timestamp` of when the event happened.
 *
 * This can be either be provided by the merchant as part of a **tracking order** request, or returned by a **track** request.
 */
export type TrackingResponseTrackingHistory = {
  __typename?: 'TrackingResponseTrackingHistory';
  /** The `ISO-8601` date as `YYYY-MM-DD` when the event happened. */
  date: Scalars['Date']['output'];
  /** The status of the order */
  status: Scalars['String']['output'];
  /** The party responsible for the status change. */
  status_owner: Scalars['String']['output'];
  /** The time in `HH:MM:SS` that the tracking event happened. */
  timestamp: Scalars['String']['output'];
};

/** Unauthorized Request */
export type UnauthorizedErrorResponseSchema = {
  __typename?: 'UnauthorizedErrorResponseSchema';
  Errors?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_2_Errors_Items>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Defines the unavailable item information. */
export type UnavailableItem = {
  __typename?: 'UnavailableItem';
  /** Defines if the item has been disabled via admin. */
  disabled_via_admin?: Maybe<Scalars['Boolean']['output']>;
  /** The quantity of the item unavailable. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** The sku of the item unavailable. */
  sku?: Maybe<Scalars['String']['output']>;
};

/** Internal Server Error */
export type UnknownErrorResponseSchema = {
  __typename?: 'UnknownErrorResponseSchema';
  Errors?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_4_Errors_Items>>>;
  HasErrors?: Maybe<Scalars['Boolean']['output']>;
  Includes?: Maybe<Scalars['JSON']['output']>;
  Locale?: Maybe<Scalars['String']['output']>;
  Offset?: Maybe<Scalars['Float']['output']>;
  Results?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  TotalResults?: Maybe<Scalars['Float']['output']>;
};

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  /** The cart after updating products. */
  cart: Cart;
};

/** Update gift Card input details for the cart item. */
export type UpdateGiftCardPriceCartInput = {
  /** Bloyal card Id. */
  bloyal_cart_uid: Scalars['String']['input'];
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The unique ID reference for gift card. */
  cart_item: GiftCardCartItemUpdateInput;
};

/** Defines updates to a `GiftRegistry` object. */
export type UpdateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The updated name of the event. */
  event_name?: InputMaybe<Scalars['String']['input']>;
  /** The updated message describing the event. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether the gift registry is PRIVATE or PUBLIC. */
  privacy_settings?: InputMaybe<GiftRegistryPrivacySettings>;
  /** The updated shipping address for all gift registry items. */
  shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
  /** Indicates whether the gift registry is ACTIVE or INACTIVE. */
  status?: InputMaybe<GiftRegistryStatus>;
};

/** Defines updates to an item in a gift registry. */
export type UpdateGiftRegistryItemInput = {
  /** The unique ID of a `giftRegistryItem` object. */
  gift_registry_item_uid: Scalars['ID']['input'];
  /** The updated description of the item. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** The updated quantity of the gift registry item. */
  quantity: Scalars['Float']['input'];
};

/** Contains the results of a request to update gift registry items. */
export type UpdateGiftRegistryItemsOutput = {
  __typename?: 'UpdateGiftRegistryItemsOutput';
  /** The gift registry after updating updating items. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the results of a request to update a gift registry. */
export type UpdateGiftRegistryOutput = {
  __typename?: 'UpdateGiftRegistryOutput';
  /** The updated gift registry. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Defines updates to an existing registrant. */
export type UpdateGiftRegistryRegistrantInput = {
  /** As a result of the update, only the values of provided attributes will be affected. If the attribute is missing in the request, its value will not be changed. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The updated email address of the registrant. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The updated first name of the registrant. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of a `giftRegistryRegistrant` object. */
  gift_registry_registrant_uid: Scalars['ID']['input'];
  /** The updated last name of the registrant. */
  lastname?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the results a request to update registrants. */
export type UpdateGiftRegistryRegistrantsOutput = {
  __typename?: 'UpdateGiftRegistryRegistrantsOutput';
  /** The gift registry after updating registrants. */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist;
};

/** Repeat delivery input details for the cart item. */
export type UpdateRepeatDeliveryItemInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The unique ID reference for frequency. */
  cart_item?: InputMaybe<RepeatDeliveryCartItemUpdateInput>;
};

/** Contains the name and visibility of an updated wish list. */
export type UpdateWishlistOutput = {
  __typename?: 'UpdateWishlistOutput';
  /** The wish list name. */
  name: Scalars['String']['output'];
  /** The unique ID of a `Wishlist` object. */
  uid: Scalars['ID']['output'];
  /** Indicates whether the wish list is public or private. */
  visibility: WishlistVisibilityEnum;
};

/** Contains URL rewrite details. */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** An array of request parameters. */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** The request URL. */
  url?: Maybe<Scalars['String']['output']>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  /** @deprecated  */
  Category = 'CATEGORY',
  /** @deprecated  */
  CmsPage = 'CMS_PAGE',
  /** @deprecated  */
  Product = 'PRODUCT'
}

/** Defines whether the attribute is filterable in layered navigation. */
export enum UseInLayeredNavigationOptions {
  /** @deprecated  */
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
  /** @deprecated  */
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  /** @deprecated  */
  No = 'NO'
}

export type UseLoyaltyVoucherOutput = {
  __typename?: 'UseLoyaltyVoucherOutput';
  /** Vouchers information */
  loyaltyVoucher?: Maybe<CustomerLoyaltyVouchersOutput>;
  /** Vouchers use status message */
  message: Scalars['String']['output'];
  /** Vouchers use status */
  status: Scalars['String']['output'];
};

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']['input'];
};

/** An implementation for virtual product cart items. */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  /** An array of available discounts. */
  available_discounts?: Maybe<Array<Maybe<AvailableDiscountItems>>>;
  /** Available repeat delivery options for the cart item. */
  available_repeat_delivery_options?: Maybe<Array<Maybe<AvailableRepeatDeliveryOption>>>;
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** Contains details about the gift product. */
  gift_product?: Maybe<GiftProductInfo>;
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output'];
  /** Is the item gift card */
  is_gift_card: Scalars['Boolean']['output'];
  /** Is product fresh and frozen */
  is_product_fresh_and_frozen?: Maybe<Scalars['Boolean']['output']>;
  /** Marketing message. */
  marketing_message?: Maybe<Scalars['String']['output']>;
  /** Maximum Qty Allowed in Shopping Cart. */
  max_quantity_allowed: Scalars['Float']['output'];
  /** Contains details about the price of the item, including taxes and discounts. */
  prices?: Maybe<CartItemPrices>;
  /** Details about an item in the cart. */
  product: ProductInterface;
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output'];
  /** Repeat Delivery FTW. */
  repeat_delivery_ftw?: Maybe<Scalars['Boolean']['output']>;
  /** Selected repeat delivery options for the cart item. */
  selected_repeat_delivery_option?: Maybe<Scalars['Int']['output']>;
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output'];
};

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct';
  /** @deprecated Use the `custom_attributes` field instead. */
  accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  active_rrp?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  activity_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  advice_care?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  agent_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  application_method?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  aquarium_size?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  australia_made?: Maybe<Scalars['Int']['output']>;
  /** Product Badges data */
  badges?: Maybe<Array<Maybe<Badges>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_desktop_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_mobile_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  banner_tablet_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_fill?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_shape?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  bed_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  book_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  brand_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  breed?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cage_type?: Maybe<Scalars['String']['output']>;
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  care_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_litter_features?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cat_nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  category_manager?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  cleaning_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  clothing_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  coat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  collar_or_lead_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  colour?: Maybe<Scalars['String']['output']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  country_of_origin?: Maybe<Scalars['Int']['output']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']['output']>;
  /** An array of cross-sell products. */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Product custom attributes. */
  custom_attributesV2?: Maybe<ProductCustomAttributes>;
  /** @deprecated Use the `custom_attributes` field instead. */
  dangerous___hazardous?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  decor_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  department?: Maybe<Scalars['Int']['output']>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  diet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  digital_delivery?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  distributor_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ean?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  eating_habit?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  express_shipping?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fashion_range?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_accessory_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  feeding_guide?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  filter_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_specialty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  fish_species?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  flavour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  food_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  frequent_feeder_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gender?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_needs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  grooming_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  gtin?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  harmonisation_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_benefits?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_concern?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  health_condition_dietary?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  hills_range?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  house_type?: Maybe<Scalars['Int']['output']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  is_food_wet_or_dry?: Maybe<Scalars['Int']['output']>;
  /** Indicates whether the product can be returned. */
  is_returnable?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  isbn?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  item_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  kit_sku?: Maybe<Scalars['String']['output']>;
  /** Last Purchase Date for Customer Previously Purchased products */
  last_purchase_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  life_stage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lifestyle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  lighting_options?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  like_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litres_per_hour?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_environment?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_features?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_fragrant?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  litter_type?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_attribute_set?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  magento_product_categorisation?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  maintenance_type?: Maybe<Scalars['String']['output']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  marketing_offer_short?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  material?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  max_size?: Maybe<Scalars['String']['output']>;
  /** An array of media gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  media_type?: Maybe<Scalars['Int']['output']>;
  /**
   * Product Member Price
   * @deprecated Use the `custom_attributes` field instead.
   */
  member_price?: Maybe<Scalars['Float']['output']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']['output']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  natural_grainfree?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nav_size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  new?: Maybe<Scalars['Int']['output']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']['output']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_grade?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_level?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_tool?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutrition_wet_match?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_info_table?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  nutritional_option?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  on_sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  online_status?: Maybe<Scalars['String']['output']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']['output']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packaging?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  packed_depth?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  pet_weight?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availability?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  petbarn_stock_availablility?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** Price Per Unit */
  price_per_unit?: Maybe<ProductPricePerUnit>;
  /** Price Product Information */
  price_product_info?: Maybe<PriceProductInfo>;
  /** The range of prices for the product */
  price_range: PriceRange;
  /** An array of `TierPrice` objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** Primary product category */
  primary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  prod_extratab_title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_group_append?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_height?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_length?: Maybe<Scalars['Float']['output']>;
  /** An array of `ProductLinks` objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_range_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_type_category?: Maybe<Scalars['String']['output']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  product_width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  promo_price?: Maybe<Scalars['Float']['output']>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  rd_frequency?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  recommended_rd_frequency?: Maybe<Scalars['Int']['output']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output'];
  /** An array of related products. */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']['output']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** @deprecated Use the `custom_attributes` field instead. */
  rms_extended_description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  roundworm?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sale_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  scratcher_type?: Maybe<Scalars['String']['output']>;
  /** Secondary product category */
  secondary_product_category?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  ship_in_existing_box?: Maybe<Scalars['Int']['output']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_filter?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  size_swatches?: Maybe<Scalars['String']['output']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  sku_variant?: Maybe<Scalars['String']['output']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']['output']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']['output']>;
  /** The end date for a product with a special price. */
  special_to_date?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  species?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the product is staged for a future campaign. */
  staged: Scalars['Boolean']['output'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** @deprecated Use the `custom_attributes` field instead. */
  superseded_by?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supersession_item?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supplier_name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  supply?: Maybe<Scalars['Int']['output']>;
  /** The file name of a swatch image. */
  swatch_image?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperament?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  theme?: Maybe<Scalars['String']['output']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']['output']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  toy_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  training_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treat_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  treatment_type?: Maybe<Scalars['String']['output']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output'];
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_cost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  unit_price?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  upca?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** An array of up-sell products. */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']['output']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']['output']>;
  /** Detailed information about the product visibility. */
  visibility?: Maybe<VisibilityValue>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_ph?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_temperature?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  water_type?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  watts?: Maybe<Scalars['String']['output']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** @deprecated Use the `custom_attributes` field instead. */
  weight_control?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_embeded_code?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `custom_attributes` field instead. */
  youtube_thumbnail?: Maybe<Scalars['String']['output']>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductCustom_AttributesV2Args = {
  filters?: InputMaybe<AttributeFilterInput>;
};


/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

export type VisibilityValue = {
  __typename?: 'VisibilityValue';
  /** Product visibility attribute id */
  id: Scalars['Int']['output'];
  /** Product visibility attribute label */
  label: Scalars['String']['output'];
};

export type Void_Container = {
  __typename?: 'Void_container';
  Void?: Maybe<Scalars['Void']['output']>;
};

/** The tracking history returned by the webhook */
export type WebhookTrackingHistory_Input = {
  /** Order status */
  status: Scalars['String']['input'];
  /** Timestamp */
  time: Scalars['String']['input'];
};

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']['output']>;
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']['output']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
};

/** A list of possible error types. */
export enum WishListUserInputErrorType {
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains a customer wish list. */
export type Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object. */
  id?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the `items_v2` field instead. */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list. */
  items_count?: Maybe<Scalars['Int']['output']>;
  /** An array of items in the customer's wish list. */
  items_v2?: Maybe<WishlistItems>;
  /** The name of the wish list. */
  name?: Maybe<Scalars['String']['output']>;
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /** The time of the last modification to the wish list. */
  updated_at?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the wish list is public or private. */
  visibility: WishlistVisibilityEnum;
};


/** Contains a customer wish list. */
export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType;
  /** A localized error message. */
  message: Scalars['String']['output'];
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']['output'];
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']['output'];
};

/** A list of possible error types. */
export enum WishlistCartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** Contains details about a wish list item. */
export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list. */
  added_at?: Maybe<Scalars['String']['output']>;
  /** The customer's comment about this item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItem` object. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Details about the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']['output']>;
};

/** Specifies the IDs of items to copy and their quantities. */
export type WishlistItemCopyInput = {
  /** The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The unique ID of the `WishlistItemInterface` object to be copied. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars['String']['input']>;
  /** The amount or number of items to add. */
  quantity: Scalars['Float']['input'];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']['input'];
};

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output'];
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output'];
  /** Product details of the wish list item. */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output'];
};

/** Specifies the IDs of the items to move and their quantities. */
export type WishlistItemMoveInput = {
  /** The quantity of this item to move to the destination wish list. This value can't be greater than the quantity in the source wish list. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The unique ID of the `WishlistItemInterface` object to be moved. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']['input'];
};

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata. */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count?: Maybe<Scalars['Int']['output']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code?: Maybe<Scalars['String']['output']>;
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at?: Maybe<Scalars['String']['output']>;
};

/** Defines the wish list visibility types. */
export enum WishlistVisibilityEnum {
  /** @deprecated  */
  Private = 'PRIVATE',
  /** @deprecated  */
  Public = 'PUBLIC'
}

export type AfterpayConfigOutput = {
  __typename?: 'afterpayConfigOutput';
  allowed_currencies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  api_mode?: Maybe<Scalars['String']['output']>;
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
  is_enabled_cta_checkout?: Maybe<Scalars['Boolean']['output']>;
  is_enabled_cta_minicart?: Maybe<Scalars['Boolean']['output']>;
  is_enabled_cta_pdp?: Maybe<Scalars['Boolean']['output']>;
  max_amount?: Maybe<Scalars['String']['output']>;
  min_amount?: Maybe<Scalars['String']['output']>;
  mpid?: Maybe<Scalars['String']['output']>;
};

export type BookOrder_Response = BookResponse | GenericErrorResponse;

export type CancelOrder_Response = GenericErrorResponse | OrderDeleteErrorResponse | OrderDeleteResponse;

export type CreateAfterpayCheckoutInput = {
  cart_id: Scalars['String']['input'];
  /** A set of relative URLs that Afterpay uses in response to various actions during the authorization process */
  redirect_path: AfterpayRedirectPathInput;
};

export type CreateAfterpayCheckoutOutput = {
  __typename?: 'createAfterpayCheckoutOutput';
  /** The UTC timestamp of when the checkout token will expire, in ISO 8601 format. */
  afterpay_expires: Scalars['String']['output'];
  /** A URL that can be used to redirect the consumer to the Afterpay screenflow. */
  afterpay_redirectCheckoutUrl: Scalars['String']['output'];
  /** Afterpay checkout token to be used to complete payment. */
  afterpay_token: Scalars['String']['output'];
};

export type CreateBrand_Response = AccessDenied_Response | BadRequest_Response | Brand | InternalError_Response;

export type CreateCustomer_Response = AccessDenied_Response | BadRequest_Response | Customer | InternalError_Response;

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrder_Response = GenericErrorResponse | OrderResponse | Root_Type_For_OrderValidationErrorResponse;

export type CreatePetProfileImage_200_Response = {
  __typename?: 'createPetProfileImage_200_response';
  profilePhotoUploadUrl?: Maybe<Scalars['String']['output']>;
  profilePhotoUrl?: Maybe<Scalars['String']['output']>;
};

export type CreatePetProfileImage_Request_Input = {
  /** The name of the original file from the customer */
  filename: Scalars['String']['input'];
};

export type CreatePetProfileImage_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | CreatePetProfileImage_200_Response;

export type CreatePet_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | Pet;

export type CreateReminder_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | Reminder;

export type CreateZippayCheckoutInput = {
  /** Masked quote id */
  cartId: Scalars['String']['input'];
  /** The relative URL of the final confirmation page that Zippay will redirect to upon payment success.  */
  redirectPath: Scalars['String']['input'];
};

export type CustomerDetailsOutput = {
  __typename?: 'customerDetailsOutput';
  /** whether the user is authenticated or not */
  authenticationStatus?: Maybe<Scalars['String']['output']>;
  /** The bLoyal customer ID */
  bLoyalCustomerID?: Maybe<Scalars['String']['output']>;
  /** Petbarn customer ID */
  custID?: Maybe<Scalars['String']['output']>;
  /** Whether the customer has toggled on/off on earning rewards */
  earnRewardsSelected?: Maybe<Scalars['String']['output']>;
  /** The Adobe Experience Cloud ID */
  ecid?: Maybe<Scalars['String']['output']>;
  /** The Google Analytics ID */
  gaid?: Maybe<Scalars['String']['output']>;
  /** Whether the user has created at least one pet profile */
  hasPetProfile?: Maybe<Scalars['String']['output']>;
  /** The customer's email address */
  hashedEmail?: Maybe<Scalars['String']['output']>;
  /** The customer's phone number */
  hashedPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** The number of loyalty points of a customer */
  loyaltyPoints?: Maybe<Scalars['String']['output']>;
  /** Details of a customer's loyalty vouchers separated by a comma */
  loyaltyVoucherDetails?: Maybe<Scalars['String']['output']>;
  /** The loyalty vouchers of a customer */
  loyaltyVouchers?: Maybe<Scalars['String']['output']>;
  /** The member status of a customer */
  memberStatus?: Maybe<Scalars['String']['output']>;
  /** Return pet details */
  petDetails?: Maybe<Array<Maybe<PetDetailsOutput>>>;
};

/** Defines the output of the dataLayer. */
export type DataLayerOutput = {
  __typename?: 'dataLayerOutput';
  /** Return customer details */
  customerDetails?: Maybe<CustomerDetailsOutput>;
  /** Return Product Info */
  productInfo?: Maybe<Array<Maybe<ProductInfoOutput>>>;
  /** Return web page details */
  webPageDetails?: Maybe<WebPageDetailsOutput>;
};

export type Data_Answers_Json_Response = Answer | BadRequestErrorResponseSchema | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Authors_Json_Response = Author | BadRequestErrorResponseSchema | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Categories_Json_Response = BadRequestErrorResponseSchema | Category | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Products_Json_Response = BadRequestErrorResponseSchema | Product | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Questions_Json_Response = BadRequestErrorResponseSchema | Question | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Reviewcomments_Json_Response = BadRequestErrorResponseSchema | Comment | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Reviews_Json_Response = BadRequestErrorResponseSchema | Review | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type Data_Statistics_Json_Response = BadRequestErrorResponseSchema | Stats | TooManyRequestErrorResponseSchema | UnauthorizedErrorResponseSchema | UnknownErrorResponseSchema;

export type DeleteBrand_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Void_Container;

export type DeleteCustomer_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Void_Container;

export type DeletePetProfileImage_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Void_Container;

export type DeletePet_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Void_Container;

export type DeleteReminder_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Void_Container;

/** Error details */
export type Error_Errors_Item = {
  __typename?: 'error_errors_item';
  /** Error message */
  message?: Maybe<Scalars['String']['output']>;
  /** Error parameters list */
  parameters?: Maybe<Array<Maybe<Error_Parameters_Item>>>;
};

/** Error parameters item */
export type Error_Parameters_Item = {
  __typename?: 'error_parameters_item';
  /** Missing or invalid field name */
  fieldName?: Maybe<Scalars['String']['output']>;
  /** Incorrect field value */
  fieldValue?: Maybe<Scalars['String']['output']>;
  /** ACL resource */
  resources?: Maybe<Scalars['String']['output']>;
};

export type Error_Response = {
  __typename?: 'error_response';
  /** Error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** Errors list */
  errors?: Maybe<Array<Maybe<Error_Errors_Item>>>;
  /** Error message */
  message: Scalars['String']['output'];
  /** Error parameters list */
  parameters?: Maybe<Array<Maybe<Error_Parameters_Item>>>;
  /** Stack trace */
  trace?: Maybe<Scalars['String']['output']>;
};

export type GetAllergies_Response = AccessDenied_Response | Allergy | BadRequest_Response | InternalError_Response;

export type GetBookDocument_424_Response = {
  __typename?: 'getBookDocument_424_response';
  value?: Maybe<Query_GetBookDocument_OneOf_2_Value>;
};

export type GetBookDocument_Response = Root_Type_For_BookDocumentSuccess | Root_Type_For_BookingInProgress | GetBookDocument_424_Response;

export type GetBrand_Response = AccessDenied_Response | Brand | InternalError_Response | NotFound_Response;

export type GetBrands_Response = AccessDenied_Response | BadRequest_Response | Brand | InternalError_Response;

export type GetBreeds_Response = AccessDenied_Response | BadRequest_Response | Breed | InternalError_Response;

export type GetCustomer_Response = AccessDenied_Response | BadRequest_Response | Customer | InternalError_Response | NotFound_Response;

export type GetCustomers_Response = AccessDenied_Response | BadRequest_Response | Customer | InternalError_Response;

export type GetHealthConditions_Response = AccessDenied_Response | BadRequest_Response | HealthCondition | InternalError_Response;

export type GetMerchant_Response = GenericErrorResponse | Root_Type_For_MerchantResponse;

export type GetOrderLabel_Response = GenericErrorResponse | LabelResponse;

export type GetPet_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Pet;

export type GetPets_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | Pet;

export type GetQuote_Response = GenericErrorResponse | Root_Type_For_QuoteErrorResponse | Root_Type_For_QuoteResponse;

export type GetReminder_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Reminder;

export type GetReminders_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | Reminder;

export type LoyaltyVouchersActionInput = {
  /** Pass the cart id. */
  cartId: Scalars['String']['input'];
  /** Pass the vouchers count. */
  count?: InputMaybe<Scalars['Int']['input']>;
  /** Pass the customer token. */
  customerToken: Scalars['String']['input'];
};

export type LoyaltyVouchersInput = {
  /** Pass the cart id. */
  cartId: Scalars['String']['input'];
  /** Pass the customer token. */
  customerToken: Scalars['String']['input'];
};

/** Specifies the cart item which should be moved to wishlist. */
export type MoveCartItemToWishlistInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input'];
  /** The unique ID of the cart item to be moved to a wishlist */
  cart_item_uid: Scalars['ID']['input'];
};

export type MutationInput_GetQuote_Input_Quote_Product_Attributes_Items_Input = {
  /** Unit price of each product line item. Used to calculate duties and taxes */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The number of products */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Tariff code for international orders declarations */
  tariff_code?: InputMaybe<Scalars['String']['input']>;
  /** Title or description of the product */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** The return method for the order, if present. */
export enum MutationInput_ReturnsOrder_Input_Return_Order_Shipping_Method_Return_Method {
  Dropoff = 'dropoff',
  Pickup = 'pickup'
}

export type MutationInput_TrackOrderHook_Input_Products_Items_Input = {
  product_line_id?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Suggested address, if one is found. */
export type Mutation_CreateOrder_OneOf_3_AllOf_0_Suggested_Address = {
  __typename?: 'mutation_createOrder_oneOf_3_allOf_0_suggested_address';
  country_code?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

export type Mutation_VoucherActivate_Data = {
  __typename?: 'mutation_voucherActivate_data';
  ReceiptMessage?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Transaction?: Maybe<Mutation_VoucherActivate_Data_Transaction>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Mutation_VoucherActivate_Data_Transaction = {
  __typename?: 'mutation_voucherActivate_data_Transaction';
  Created?: Maybe<Scalars['DateTime']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

/** Cancel order request */
export type Overdose_Recurring_Orders_Data_Cancel_Order_Request_Interface_Input = {
  frequency: Scalars['String']['input'];
};

export type Overdose_Recurring_Orders_Data_Pause_Order_Request_Interface_Input = {
  frequency: Scalars['String']['input'];
};

/** Reactivate order request */
export type Overdose_Recurring_Orders_Data_Reactivate_Order_Request_Interface_Input = {
  next_dispatch_date: Scalars['String']['input'];
  /** Json encoded array [{recurring_items: 1},{}...] */
  recurring_items: Scalars['String']['input'];
};

export type Overdose_Recurring_Orders_Data_Skip_Once_Order_Request_Interface_Input = {
  frequency: Scalars['String']['input'];
};

export type PetDetailsOutput = {
  __typename?: 'petDetailsOutput';
  /** The body shape entered for the pet */
  petBodyShape?: Maybe<Scalars['String']['output']>;
  /** The food brand entered for the pet, separated by commas if multiple values */
  petBrand?: Maybe<Scalars['String']['output']>;
  /** The breed entered for the pet, separated by commas if multiple values */
  petBreed?: Maybe<Scalars['String']['output']>;
  /** The DOB entered for the pet */
  petDOB?: Maybe<Scalars['String']['output']>;
  /** The food type entered for the pet, separated by commas if multiple values */
  petFood?: Maybe<Scalars['String']['output']>;
  /** The gender of pet entered */
  petGender?: Maybe<Scalars['String']['output']>;
  /** The habitat entered for the pet */
  petHabitat?: Maybe<Scalars['String']['output']>;
  /** The pet id in the pet profile */
  petId?: Maybe<Scalars['String']['output']>;
  /** The name entered in the pet profile */
  petName?: Maybe<Scalars['String']['output']>;
  /** Whether the pet had a photo uploaded */
  petPhotoUploaded?: Maybe<Scalars['String']['output']>;
  /** The pet profile created date */
  petProfileCreatedDate?: Maybe<Scalars['String']['output']>;
  /** The species of pet entered */
  petSpecies?: Maybe<Scalars['String']['output']>;
  /** The weight entered for the pet */
  petWeight?: Maybe<Scalars['String']['output']>;
};

/** The pet profile category */
export enum PetProfileCategory_Parameter {
  Bird = 'bird',
  Cat = 'cat',
  Dog = 'dog',
  Fish = 'fish',
  Reptile = 'reptile',
  SmallAnimal = 'small_animal'
}

export type PlaceOrderZippayInput = {
  /** Masked quote id */
  cartId: Scalars['String']['input'];
  /** If customer is logged in, pass the customer token. */
  customerToken: Scalars['String']['input'];
};

export type ProductInfoOutput = {
  __typename?: 'productInfoOutput';
  /** The Magento cart ID */
  cartID?: Maybe<Scalars['String']['output']>;
  /** The item's lookup code */
  itemLookupCode?: Maybe<Scalars['String']['output']>;
  /** Life Stage' attribute from Magento */
  lifeStage?: Maybe<Scalars['String']['output']>;
  /** The number of products contained within the SKU */
  numberOfProducts?: Maybe<Scalars['String']['output']>;
  /** The primary category this product belongs to */
  primaryProductCategory?: Maybe<Scalars['String']['output']>;
  /** Brand Name */
  productBrand?: Maybe<Scalars['String']['output']>;
  /** Product SKU in Magento */
  productID?: Maybe<Scalars['String']['output']>;
  /** URL of the main product image */
  productImage?: Maybe<Scalars['String']['output']>;
  /** Unit price of item when a user is signed in */
  productMemberPrice?: Maybe<Scalars['String']['output']>;
  /** Product Title in Magento */
  productName?: Maybe<Scalars['String']['output']>;
  /** Full unit price of item */
  productOriginalPrice?: Maybe<Scalars['String']['output']>;
  /** Applicable unit price after any special prices */
  productPrice?: Maybe<Scalars['String']['output']>;
  /** Unit price of item when ordered on repeat delivery */
  productRepeatDeliveryPrice?: Maybe<Scalars['String']['output']>;
  /** The review score a user has given to a product */
  productReviewScore?: Maybe<Scalars['String']['output']>;
  /** The size of the product being viewed */
  productSize?: Maybe<Scalars['String']['output']>;
  /** The Product Species */
  productSpecies?: Maybe<Scalars['String']['output']>;
  /** The quantity of this product that has been added to the cart */
  quantityAdded?: Maybe<Scalars['String']['output']>;
  /** Whether the product has been selected for repeat delivery status */
  repeatDelivery?: Maybe<Scalars['String']['output']>;
  /** Repeat Delivery Frequency */
  repeatDeliveryFrequency?: Maybe<Scalars['String']['output']>;
  /** The secondary category this product belongs to */
  secondaryProductCategory?: Maybe<Scalars['String']['output']>;
  /** Any marketing campaign discounts applied to the product */
  specialOfferDetails?: Maybe<Scalars['String']['output']>;
};

export type Query_AvailableCoupons_Data_Items = {
  __typename?: 'query_availableCoupons_data_items';
  Code?: Maybe<Scalars['String']['output']>;
  EnableChoiceRewards?: Maybe<Scalars['Boolean']['output']>;
  ExternalId?: Maybe<Scalars['Void']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  QuantityApplied?: Maybe<Scalars['Int']['output']>;
  QuantityAvailable?: Maybe<Scalars['Int']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_AwardedCoupons_Data_Items = {
  __typename?: 'query_awardedCoupons_data_items';
  Available?: Maybe<Scalars['Int']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ExternalId?: Maybe<Scalars['Void']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Answers_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_answers_json_oneOf_0_Results_items';
  AdditionalFields?: Maybe<Scalars['JSON']['output']>;
  AdditionalFieldsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  AnswerText?: Maybe<Scalars['String']['output']>;
  AuthorId?: Maybe<Scalars['String']['output']>;
  Badges?: Maybe<Query_Data_Answers_Json_OneOf_0_Results_Items_Badges>;
  BadgesOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CID?: Maybe<Scalars['String']['output']>;
  CampaignId?: Maybe<Scalars['JSON']['output']>;
  ContentLocale?: Maybe<Scalars['String']['output']>;
  ContextDataValues?: Maybe<Scalars['JSON']['output']>;
  ContextDataValuesOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  InappropriateFeedbackList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  IsBrandAnswer?: Maybe<Scalars['Boolean']['output']>;
  IsFeatured?: Maybe<Scalars['Boolean']['output']>;
  IsSyndicated?: Maybe<Scalars['Boolean']['output']>;
  LastModeratedTime?: Maybe<Scalars['String']['output']>;
  LastModificationTime?: Maybe<Scalars['String']['output']>;
  ModerationStatus?: Maybe<Scalars['String']['output']>;
  Photos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ProductRecommendationIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  QuestionId?: Maybe<Scalars['String']['output']>;
  SourceClient?: Maybe<Scalars['String']['output']>;
  SubmissionId?: Maybe<Scalars['JSON']['output']>;
  SubmissionTime?: Maybe<Scalars['String']['output']>;
  TotalFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalInappropriateFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalNegativeFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalPositiveFeedbackCount?: Maybe<Scalars['Float']['output']>;
  UserLocation?: Maybe<Scalars['String']['output']>;
  UserNickname?: Maybe<Scalars['String']['output']>;
  Videos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Answers_Json_OneOf_0_Results_Items_Badges = {
  __typename?: 'query_data_answers_json_oneOf_0_Results_items_Badges';
  top25?: Maybe<Query_Data_Answers_Json_OneOf_0_Results_Items_Badges_Top25>;
};

export type Query_Data_Answers_Json_OneOf_0_Results_Items_Badges_Top25 = {
  __typename?: 'query_data_answers_json_oneOf_0_Results_items_Badges_top25';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Authors_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_authors_json_oneOf_0_Results_items';
  AdditionalFields?: Maybe<Scalars['JSON']['output']>;
  AdditionalFieldsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  AnswerIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Avatar?: Maybe<Scalars['JSON']['output']>;
  Badges?: Maybe<Scalars['JSON']['output']>;
  BadgesOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  CommentIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ContextDataValues?: Maybe<Scalars['JSON']['output']>;
  ContextDataValuesOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ContributorRank?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  LastModeratedTime?: Maybe<Scalars['String']['output']>;
  Location?: Maybe<Scalars['JSON']['output']>;
  ModerationStatus?: Maybe<Scalars['String']['output']>;
  Photos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ProductRecommendationIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  QuestionIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ReviewIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  SecondaryRatings?: Maybe<Scalars['JSON']['output']>;
  SecondaryRatingsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  StoryIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  SubmissionId?: Maybe<Scalars['JSON']['output']>;
  SubmissionTime?: Maybe<Scalars['String']['output']>;
  ThirdPartyIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  UserNickname?: Maybe<Scalars['String']['output']>;
  Videos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Categories_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_categories_json_oneOf_0_Results_items';
  Active?: Maybe<Scalars['Boolean']['output']>;
  Attributes?: Maybe<Scalars['JSON']['output']>;
  AttributesOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  CategoryPageUrl?: Maybe<Scalars['String']['output']>;
  Disabled?: Maybe<Scalars['Boolean']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  ImageUrl?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentId?: Maybe<Scalars['String']['output']>;
  ProductIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  QuestionIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  StoryIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Products_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_products_json_oneOf_0_Results_items';
  Active?: Maybe<Scalars['Boolean']['output']>;
  Attributes?: Maybe<Scalars['JSON']['output']>;
  AttributesOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Brand?: Maybe<Scalars['JSON']['output']>;
  BrandExternalId?: Maybe<Scalars['JSON']['output']>;
  CategoryId?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Disabled?: Maybe<Scalars['Boolean']['output']>;
  EANs?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  FamilyIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ISBNs?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  ImageUrl?: Maybe<Scalars['String']['output']>;
  ManufacturerPartNumbers?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ModelNumbers?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Name?: Maybe<Scalars['String']['output']>;
  ProductPageUrl?: Maybe<Scalars['JSON']['output']>;
  QuestionIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ReviewIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  StoryIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  UPCs?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Questions_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_questions_json_oneOf_0_Results_items';
  AdditionalFields?: Maybe<Scalars['JSON']['output']>;
  AdditionalFieldsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  AnswerIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  AuthorId?: Maybe<Scalars['String']['output']>;
  Badges?: Maybe<Query_Data_Questions_Json_OneOf_0_Results_Items_Badges>;
  BadgesOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CID?: Maybe<Scalars['String']['output']>;
  CampaignId?: Maybe<Scalars['JSON']['output']>;
  CategoryId?: Maybe<Scalars['JSON']['output']>;
  ContentLocale?: Maybe<Scalars['String']['output']>;
  ContextDataValues?: Maybe<Scalars['JSON']['output']>;
  ContextDataValuesOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  InappropriateFeedbackList?: Maybe<Array<Maybe<Query_Data_Questions_Json_OneOf_0_Results_Items_InappropriateFeedbackList_Items>>>;
  IsFeatured?: Maybe<Scalars['Boolean']['output']>;
  IsSyndicated?: Maybe<Scalars['Boolean']['output']>;
  LastModeratedTime?: Maybe<Scalars['String']['output']>;
  LastModificationTime?: Maybe<Scalars['String']['output']>;
  ModerationStatus?: Maybe<Scalars['String']['output']>;
  Photos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ProductId?: Maybe<Scalars['String']['output']>;
  ProductRecommendationIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  QuestionDetails?: Maybe<Scalars['String']['output']>;
  QuestionSummary?: Maybe<Scalars['String']['output']>;
  SourceClient?: Maybe<Scalars['String']['output']>;
  SubmissionId?: Maybe<Scalars['JSON']['output']>;
  SubmissionTime?: Maybe<Scalars['String']['output']>;
  TagDimensions?: Maybe<Scalars['JSON']['output']>;
  TagDimensionsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  TotalAnswerCount?: Maybe<Scalars['Float']['output']>;
  TotalFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalInappropriateFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalNegativeFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalPositiveFeedbackCount?: Maybe<Scalars['Float']['output']>;
  UserLocation?: Maybe<Scalars['String']['output']>;
  UserNickname?: Maybe<Scalars['String']['output']>;
  Videos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Questions_Json_OneOf_0_Results_Items_Badges = {
  __typename?: 'query_data_questions_json_oneOf_0_Results_items_Badges';
  Expert?: Maybe<Query_Data_Questions_Json_OneOf_0_Results_Items_Badges_Expert>;
  Staff?: Maybe<Query_Data_Questions_Json_OneOf_0_Results_Items_Badges_Staff>;
};

export type Query_Data_Questions_Json_OneOf_0_Results_Items_Badges_Expert = {
  __typename?: 'query_data_questions_json_oneOf_0_Results_items_Badges_Expert';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Questions_Json_OneOf_0_Results_Items_Badges_Staff = {
  __typename?: 'query_data_questions_json_oneOf_0_Results_items_Badges_Staff';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Questions_Json_OneOf_0_Results_Items_InappropriateFeedbackList_Items = {
  __typename?: 'query_data_questions_json_oneOf_0_Results_items_InappropriateFeedbackList_items';
  AuthorId?: Maybe<Scalars['String']['output']>;
  SubmissionTime?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviewcomments_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_reviewcomments_json_oneOf_0_Results_items';
  AuthorId?: Maybe<Scalars['String']['output']>;
  Badges?: Maybe<Query_Data_Reviewcomments_Json_OneOf_0_Results_Items_Badges>;
  BadgesOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CID?: Maybe<Scalars['String']['output']>;
  CampaignId?: Maybe<Scalars['JSON']['output']>;
  CommentText?: Maybe<Scalars['String']['output']>;
  ContentLocale?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  InappropriateFeedbackList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  IsFeatured?: Maybe<Scalars['Boolean']['output']>;
  IsSyndicated?: Maybe<Scalars['Boolean']['output']>;
  LastModeratedTime?: Maybe<Scalars['String']['output']>;
  LastModificationTime?: Maybe<Scalars['String']['output']>;
  ModerationStatus?: Maybe<Scalars['String']['output']>;
  Photos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ProductRecommendationIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  ReviewId?: Maybe<Scalars['String']['output']>;
  SourceClient?: Maybe<Scalars['String']['output']>;
  StoryId?: Maybe<Scalars['JSON']['output']>;
  SubmissionId?: Maybe<Scalars['JSON']['output']>;
  SubmissionTime?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  TotalFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalInappropriateFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalNegativeFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalPositiveFeedbackCount?: Maybe<Scalars['Float']['output']>;
  UserLocation?: Maybe<Scalars['String']['output']>;
  UserNickname?: Maybe<Scalars['String']['output']>;
  Videos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Reviewcomments_Json_OneOf_0_Results_Items_Badges = {
  __typename?: 'query_data_reviewcomments_json_oneOf_0_Results_items_Badges';
  top25?: Maybe<Query_Data_Reviewcomments_Json_OneOf_0_Results_Items_Badges_Top25>;
};

export type Query_Data_Reviewcomments_Json_OneOf_0_Results_Items_Badges_Top25 = {
  __typename?: 'query_data_reviewcomments_json_oneOf_0_Results_items_Badges_top25';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items';
  AdditionalFields?: Maybe<Scalars['JSON']['output']>;
  AdditionalFieldsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  AuthorId?: Maybe<Scalars['String']['output']>;
  Badges?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges>;
  BadgesOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CID?: Maybe<Scalars['String']['output']>;
  CampaignId?: Maybe<Scalars['JSON']['output']>;
  ClientResponses?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_ClientResponses_Items>>>;
  CommentIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Cons?: Maybe<Scalars['JSON']['output']>;
  ContentLocale?: Maybe<Scalars['String']['output']>;
  ContextDataValues?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_ContextDataValues>;
  ContextDataValuesOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Helpfulness?: Maybe<Scalars['Float']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  InappropriateFeedbackList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  IsFeatured?: Maybe<Scalars['Boolean']['output']>;
  IsRatingsOnly?: Maybe<Scalars['Boolean']['output']>;
  IsRecommended?: Maybe<Scalars['Boolean']['output']>;
  IsSyndicated?: Maybe<Scalars['Boolean']['output']>;
  LastModeratedTime?: Maybe<Scalars['String']['output']>;
  LastModificationTime?: Maybe<Scalars['String']['output']>;
  ModerationStatus?: Maybe<Scalars['String']['output']>;
  Photos?: Maybe<Array<Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items>>>;
  ProductId?: Maybe<Scalars['String']['output']>;
  ProductRecommendationIds?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Pros?: Maybe<Scalars['JSON']['output']>;
  Rating?: Maybe<Scalars['Float']['output']>;
  RatingRange?: Maybe<Scalars['Float']['output']>;
  ReviewText?: Maybe<Scalars['String']['output']>;
  SecondaryRatings?: Maybe<Scalars['JSON']['output']>;
  SecondaryRatingsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  SourceClient?: Maybe<Scalars['String']['output']>;
  SubmissionId?: Maybe<Scalars['JSON']['output']>;
  SubmissionTime?: Maybe<Scalars['String']['output']>;
  TagDimensions?: Maybe<Scalars['JSON']['output']>;
  TagDimensionsOrder?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Title?: Maybe<Scalars['String']['output']>;
  TotalClientResponseCount?: Maybe<Scalars['Float']['output']>;
  TotalCommentCount?: Maybe<Scalars['Float']['output']>;
  TotalFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalInappropriateFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalNegativeFeedbackCount?: Maybe<Scalars['Float']['output']>;
  TotalPositiveFeedbackCount?: Maybe<Scalars['Float']['output']>;
  UserLocation?: Maybe<Scalars['String']['output']>;
  UserNickname?: Maybe<Scalars['String']['output']>;
  Videos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Badges';
  Expert?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges_Expert>;
  Staff?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges_Staff>;
  incentivizedReview?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges_IncentivizedReview>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges_Expert = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Badges_Expert';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges_Staff = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Badges_Staff';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Badges_IncentivizedReview = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Badges_incentivizedReview';
  BadgeType?: Maybe<Scalars['String']['output']>;
  ContentType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_ClientResponses_Items = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_ClientResponses_items';
  Date?: Maybe<Scalars['String']['output']>;
  Department?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Response?: Maybe<Scalars['String']['output']>;
  ResponseSource?: Maybe<Scalars['String']['output']>;
  ResponseType?: Maybe<Scalars['String']['output']>;
  SourceClientName?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_ContextDataValues = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_ContextDataValues';
  Age?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_ContextDataValues_Age>;
  IncentivizedReview?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_ContextDataValues_IncentivizedReview>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_ContextDataValues_Age = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_ContextDataValues_Age';
  DimensionLabel?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['String']['output']>;
  ValueLabel?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_ContextDataValues_IncentivizedReview = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_ContextDataValues_IncentivizedReview';
  DimensionLabel?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['String']['output']>;
  ValueLabel?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Photos_items';
  Caption?: Maybe<Scalars['JSON']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Sizes?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes>;
  SizesOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Photos_items_Sizes';
  large?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes_Large>;
  normal?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes_Normal>;
  thumbnail?: Maybe<Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes_Thumbnail>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes_Large = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Photos_items_Sizes_large';
  Id?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes_Normal = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Photos_items_Sizes_normal';
  Id?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_0_Results_Items_Photos_Items_Sizes_Thumbnail = {
  __typename?: 'query_data_reviews_json_oneOf_0_Results_items_Photos_items_Sizes_thumbnail';
  Id?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_1_Errors_Items = {
  __typename?: 'query_data_reviews_json_oneOf_1_Errors_items';
  Code?: Maybe<Scalars['String']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_2_Errors_Items = {
  __typename?: 'query_data_reviews_json_oneOf_2_Errors_items';
  Code?: Maybe<Scalars['String']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_3_Errors_Items = {
  __typename?: 'query_data_reviews_json_oneOf_3_Errors_items';
  Code?: Maybe<Scalars['String']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Reviews_Json_OneOf_4_Errors_Items = {
  __typename?: 'query_data_reviews_json_oneOf_4_Errors_items';
  Code?: Maybe<Scalars['String']['output']>;
  Message?: Maybe<Scalars['String']['output']>;
};

export type Query_Data_Statistics_Json_OneOf_0_Results_Items = {
  __typename?: 'query_data_statistics_json_oneOf_0_Results_items';
  ProductStatistics?: Maybe<Query_Data_Statistics_Json_OneOf_0_Results_Items_ProductStatistics>;
};

export type Query_Data_Statistics_Json_OneOf_0_Results_Items_ProductStatistics = {
  __typename?: 'query_data_statistics_json_oneOf_0_Results_items_ProductStatistics';
  NativeReviewStatistics?: Maybe<Query_Data_Statistics_Json_OneOf_0_Results_Items_ProductStatistics_NativeReviewStatistics>;
  ProductId?: Maybe<Scalars['String']['output']>;
  ReviewStatistics?: Maybe<Scalars['JSON']['output']>;
};

export type Query_Data_Statistics_Json_OneOf_0_Results_Items_ProductStatistics_NativeReviewStatistics = {
  __typename?: 'query_data_statistics_json_oneOf_0_Results_items_ProductStatistics_NativeReviewStatistics';
  AverageOverallRating?: Maybe<Scalars['Float']['output']>;
  OverallRatingRange?: Maybe<Scalars['Float']['output']>;
  TotalReviewCount?: Maybe<Scalars['Float']['output']>;
};

export type Query_FredHopperSearch_Footer = {
  __typename?: 'query_fredHopperSearch_footer';
  log_args?: Maybe<Scalars['String']['output']>;
  process_time?: Maybe<Query_FredHopperSearch_Footer_Process_Time>;
};

export type Query_FredHopperSearch_Footer_Process_Time = {
  __typename?: 'query_fredHopperSearch_footer_process_time';
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Info = {
  __typename?: 'query_fredHopperSearch_info';
  country?: Maybe<Scalars['String']['output']>;
  current_universe?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Query_FredHopperSearch_Info_Locale>;
  mode?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  query_string_httpencoded?: Maybe<Scalars['String']['output']>;
  ranges?: Maybe<Query_FredHopperSearch_Info_Ranges>;
  server?: Maybe<Query_FredHopperSearch_Info_Server>;
  session?: Maybe<Scalars['String']['output']>;
  source_xml?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_type?: Maybe<Scalars['String']['output']>;
  view?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Info_Locale = {
  __typename?: 'query_fredHopperSearch_info_locale';
  mlvalue?: Maybe<Scalars['String']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Info_Ranges = {
  __typename?: 'query_fredHopperSearch_info_ranges';
  implicit_ranges?: Maybe<Query_FredHopperSearch_Info_Ranges_Implicit_Ranges>;
  query_ranges?: Maybe<Query_FredHopperSearch_Info_Ranges_Query_Ranges>;
};

export type Query_FredHopperSearch_Info_Ranges_Implicit_Ranges = {
  __typename?: 'query_fredHopperSearch_info_ranges_implicit_ranges';
  range?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type Query_FredHopperSearch_Info_Ranges_Query_Ranges = {
  __typename?: 'query_fredHopperSearch_info_ranges_query_ranges';
  range?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Query_FredHopperSearch_Info_Server = {
  __typename?: 'query_fredHopperSearch_info_server';
  config_dir?: Maybe<Scalars['String']['output']>;
  context_root?: Maybe<Scalars['String']['output']>;
  default_universe?: Maybe<Scalars['String']['output']>;
  encoding_detect_string?: Maybe<Scalars['String']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Query_FredHopperSearch_Info_Server_Locales>;
  port?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Info_Server_Locales = {
  __typename?: 'query_fredHopperSearch_info_server_locales';
  locale?: Maybe<Array<Maybe<Query_FredHopperSearch_Info_Server_Locales_Locale_Items>>>;
};

export type Query_FredHopperSearch_Info_Server_Locales_Locale_Items = {
  __typename?: 'query_fredHopperSearch_info_server_locales_locale_items';
  mlvalue?: Maybe<Scalars['String']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Searchterms = {
  __typename?: 'query_fredHopperSearch_searchterms';
  term?: Maybe<Query_FredHopperSearch_Searchterms_Term>;
};

export type Query_FredHopperSearch_Searchterms_Term = {
  __typename?: 'query_fredHopperSearch_searchterms_term';
  profile?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Universes = {
  __typename?: 'query_fredHopperSearch_universes';
  universe?: Maybe<Array<Maybe<Query_FredHopperSearch_Universes_Universe_Items>>>;
};

export type Query_FredHopperSearch_Universes_Universe_Items = {
  __typename?: 'query_fredHopperSearch_universes_universe_items';
  facetmap?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  link?: Maybe<Query_FredHopperSearch_Universes_Universe_Items_Link>;
  name?: Maybe<Scalars['String']['output']>;
  themes?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Query_FredHopperSearch_Universes_Universe_Items_Link = {
  __typename?: 'query_fredHopperSearch_universes_universe_items_link';
  name?: Maybe<Scalars['String']['output']>;
  url_params?: Maybe<Scalars['String']['output']>;
};

/** The pet profile category for this allergy */
export enum Query_GetAllergies_OneOf_0_Items_PetProfileCategory {
  Bird = 'bird',
  Cat = 'cat',
  Dog = 'dog',
  Fish = 'fish',
  Reptile = 'reptile',
  SmallAnimal = 'small_animal'
}

export type Query_GetBookDocument_OneOf_0_Response = {
  __typename?: 'query_getBookDocument_oneOf_0_response';
  courier?: Maybe<Scalars['String']['output']>;
  manifest?: Maybe<Scalars['String']['output']>;
  manifest_id?: Maybe<Scalars['Int']['output']>;
  manifest_pdf?: Maybe<Scalars['String']['output']>;
  order_count?: Maybe<Scalars['Int']['output']>;
  orders?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Query_GetBookDocument_OneOf_2_Value = {
  __typename?: 'query_getBookDocument_oneOf_2_value';
  error?: Maybe<Scalars['String']['output']>;
  error_description?: Maybe<Scalars['String']['output']>;
};

/** The pet profile category for brand */
export enum Query_GetBrands_OneOf_0_Items_PetProfileCategory {
  Bird = 'bird',
  Cat = 'cat',
  Dog = 'dog',
  Fish = 'fish',
  Reptile = 'reptile',
  SmallAnimal = 'small_animal'
}

/** The pet profile category for this breed */
export enum Query_GetBreeds_OneOf_0_Items_PetProfileCategory {
  Bird = 'bird',
  Cat = 'cat',
  Dog = 'dog',
  Fish = 'fish',
  Reptile = 'reptile',
  SmallAnimal = 'small_animal'
}

/** The pet profile category for this health condition */
export enum Query_GetHealthConditions_OneOf_0_Items_PetProfileCategory {
  Bird = 'bird',
  Cat = 'cat',
  Dog = 'dog',
  Fish = 'fish',
  Reptile = 'reptile',
  SmallAnimal = 'small_animal'
}

/** The acquarium environment type. */
export enum Query_GetPets_OneOf_0_Items_AcquariumEnvironment {
  ColdFreshwater = 'cold_freshwater',
  Marine = 'marine',
  TropicalFreshwater = 'tropical_freshwater'
}

/** The body shape for the pet. */
export enum Query_GetPets_OneOf_0_Items_BodyShape {
  IdealWeight = 'ideal_weight',
  Overweight = 'overweight',
  Underweight = 'underweight'
}

/** Which habitat the pet lives in. */
export enum Query_GetPets_OneOf_0_Items_Habitat {
  Both = 'both',
  Indoor = 'indoor',
  Outdoor = 'outdoor'
}

/** The pet profile category for this allergy */
export enum Query_GetPets_OneOf_0_Items_PetProfileCategory {
  Bird = 'bird',
  Cat = 'cat',
  Dog = 'dog',
  Fish = 'fish',
  Reptile = 'reptile',
  SmallAnimal = 'small_animal'
}

/** Sex of the pet. F for female or M for male. */
export enum Query_GetPets_OneOf_0_Items_Sex {
  F = 'F',
  M = 'M'
}

/** The reminder type */
export enum Query_GetReminders_OneOf_0_Items_ReminderType {
  FleaTick = 'fleaTick',
  Food = 'food',
  Heartworm = 'heartworm',
  IntestinalWorm = 'intestinalWorm'
}

export type Query_GetSuggestions_SuggestionGroups_Items = {
  __typename?: 'query_getSuggestions_suggestionGroups_items';
  indexName?: Maybe<Scalars['String']['output']>;
  indexTitle?: Maybe<Scalars['String']['output']>;
  suggestions?: Maybe<Array<Maybe<Query_GetSuggestions_SuggestionGroups_Items_Suggestions_Items>>>;
};

export type Query_GetSuggestions_SuggestionGroups_Items_Suggestions_Items = {
  __typename?: 'query_getSuggestions_suggestionGroups_items_suggestions_items';
  _thumburl?: Maybe<Scalars['URL']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
  catid?: Maybe<Scalars['String']['output']>;
  content_type?: Maybe<Scalars['String']['output']>;
  fhLocation?: Maybe<Scalars['String']['output']>;
  item_content_type?: Maybe<Scalars['String']['output']>;
  mlValue?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nrResults?: Maybe<Scalars['Int']['output']>;
  post_type?: Maybe<Scalars['String']['output']>;
  searchterm?: Maybe<Scalars['String']['output']>;
  secondId?: Maybe<Scalars['String']['output']>;
  secondid?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
  website_ids?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data = {
  __typename?: 'query_loyaltyDetails_data';
  AwardedCoupons?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Customer?: Maybe<Query_LoyaltyDetails_Data_Customer>;
  StandardCoupons?: Maybe<Array<Maybe<Query_LoyaltyDetails_Data_StandardCoupons_Items>>>;
};

export type Query_LoyaltyDetails_Data_Customer = {
  __typename?: 'query_loyaltyDetails_data_Customer';
  Address?: Maybe<Query_LoyaltyDetails_Data_Customer_Address>;
  AddressModified?: Maybe<Scalars['Boolean']['output']>;
  AddressValidated?: Maybe<Scalars['Boolean']['output']>;
  AlertCount?: Maybe<Scalars['Int']['output']>;
  BirthDate?: Maybe<Scalars['String']['output']>;
  ClubMemberships?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  Code?: Maybe<Scalars['String']['output']>;
  CompanyName?: Maybe<Scalars['String']['output']>;
  Created?: Maybe<Scalars['String']['output']>;
  CreatedLocal?: Maybe<Scalars['String']['output']>;
  CurrentLoyaltyCurrency?: Maybe<Scalars['Int']['output']>;
  CurrentLoyaltyPoints?: Maybe<Scalars['Int']['output']>;
  CustomFields?: Maybe<Query_LoyaltyDetails_Data_Customer_CustomFields>;
  EditAtPOS?: Maybe<Scalars['Boolean']['output']>;
  EmailAddress?: Maybe<Scalars['EmailAddress']['output']>;
  ExternalId?: Maybe<Scalars['String']['output']>;
  FacebookId?: Maybe<Scalars['String']['output']>;
  FaxNumber?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  FirstName2?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  LastName2?: Maybe<Scalars['String']['output']>;
  LoyaltyAccrualDisabled?: Maybe<Scalars['Boolean']['output']>;
  LoyaltyCardNumber?: Maybe<Scalars['String']['output']>;
  LoyaltyCurrencyAccounts?: Maybe<Array<Maybe<Query_LoyaltyDetails_Data_Customer_LoyaltyCurrencyAccounts_Items>>>;
  LoyaltyPointsAccounts?: Maybe<Array<Maybe<Query_LoyaltyDetails_Data_Customer_LoyaltyPointsAccounts_Items>>>;
  LoyaltyProgramMemberships?: Maybe<Array<Maybe<Query_LoyaltyDetails_Data_Customer_LoyaltyProgramMemberships_Items>>>;
  LoyaltyRedemptionDisabled?: Maybe<Scalars['Boolean']['output']>;
  LoyaltyTenure?: Maybe<Scalars['String']['output']>;
  MobileDeviceId?: Maybe<Scalars['String']['output']>;
  MobilePhone?: Maybe<Scalars['String']['output']>;
  NextVoucherPoints?: Maybe<Scalars['Int']['output']>;
  NoEmail?: Maybe<Scalars['String']['output']>;
  NoTextMessages?: Maybe<Scalars['String']['output']>;
  ParentCustomerCode?: Maybe<Scalars['String']['output']>;
  ParentCustomerUid?: Maybe<Scalars['String']['output']>;
  ParentExternalId?: Maybe<Scalars['String']['output']>;
  Phone1?: Maybe<Scalars['String']['output']>;
  Phone2?: Maybe<Scalars['String']['output']>;
  PriceLevel?: Maybe<Query_LoyaltyDetails_Data_Customer_PriceLevel>;
  ReferralCustomer1Code?: Maybe<Scalars['String']['output']>;
  ReferralCustomer1Uid?: Maybe<Scalars['String']['output']>;
  ReferralCustomer2Code?: Maybe<Scalars['String']['output']>;
  ReferralCustomer2Uid?: Maybe<Scalars['String']['output']>;
  Salutation?: Maybe<Scalars['String']['output']>;
  SignupChannelUid?: Maybe<Scalars['String']['output']>;
  SignupStoreCode?: Maybe<Scalars['String']['output']>;
  SignupStoreExternalId?: Maybe<Scalars['String']['output']>;
  SignupStoreUid?: Maybe<Scalars['String']['output']>;
  SubscriberGroupMemberships?: Maybe<Array<Maybe<Query_LoyaltyDetails_Data_Customer_SubscriberGroupMemberships_Items>>>;
  TaxExempt?: Maybe<Scalars['Boolean']['output']>;
  TotalSales?: Maybe<Scalars['Float']['output']>;
  TransactionCount?: Maybe<Scalars['Int']['output']>;
  TwitterId?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Query_LoyaltyDetails_Data_Customer_Type>;
  Uid?: Maybe<Scalars['String']['output']>;
  Verified?: Maybe<Scalars['Boolean']['output']>;
  WebAccount?: Maybe<Scalars['Boolean']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_Address = {
  __typename?: 'query_loyaltyDetails_data_Customer_Address';
  Address1?: Maybe<Scalars['String']['output']>;
  Address2?: Maybe<Scalars['String']['output']>;
  City?: Maybe<Scalars['String']['output']>;
  Country?: Maybe<Scalars['String']['output']>;
  CountryCode?: Maybe<Scalars['String']['output']>;
  CountryName?: Maybe<Scalars['String']['output']>;
  PostalCode?: Maybe<Scalars['String']['output']>;
  State?: Maybe<Scalars['String']['output']>;
  StateCode?: Maybe<Scalars['String']['output']>;
  StateName?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_CustomFields = {
  __typename?: 'query_loyaltyDetails_data_Customer_CustomFields';
  Employee_Number?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_LoyaltyCurrencyAccounts_Items = {
  __typename?: 'query_loyaltyDetails_data_Customer_LoyaltyCurrencyAccounts_items';
  AccountClass?: Maybe<Query_LoyaltyDetails_Data_Customer_LoyaltyCurrencyAccounts_Items_AccountClass>;
  Balance?: Maybe<Scalars['Int']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  LoyaltyAccountClassCode?: Maybe<Scalars['String']['output']>;
  LoyaltyAccountClassUid?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_LoyaltyCurrencyAccounts_Items_AccountClass = {
  __typename?: 'query_loyaltyDetails_data_Customer_LoyaltyCurrencyAccounts_items_AccountClass';
  Code?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_LoyaltyPointsAccounts_Items = {
  __typename?: 'query_loyaltyDetails_data_Customer_LoyaltyPointsAccounts_items';
  AccountClass?: Maybe<Query_LoyaltyDetails_Data_Customer_LoyaltyPointsAccounts_Items_AccountClass>;
  Balance?: Maybe<Scalars['Int']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  LoyaltyAccountClassCode?: Maybe<Scalars['String']['output']>;
  LoyaltyAccountClassUid?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_LoyaltyPointsAccounts_Items_AccountClass = {
  __typename?: 'query_loyaltyDetails_data_Customer_LoyaltyPointsAccounts_items_AccountClass';
  Code?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_LoyaltyProgramMemberships_Items = {
  __typename?: 'query_loyaltyDetails_data_Customer_LoyaltyProgramMemberships_items';
  Program?: Maybe<Query_LoyaltyDetails_Data_Customer_LoyaltyProgramMemberships_Items_Program>;
};

export type Query_LoyaltyDetails_Data_Customer_LoyaltyProgramMemberships_Items_Program = {
  __typename?: 'query_loyaltyDetails_data_Customer_LoyaltyProgramMemberships_items_Program';
  Code?: Maybe<Scalars['String']['output']>;
  Color?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExternalId?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Public?: Maybe<Scalars['Boolean']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_PriceLevel = {
  __typename?: 'query_loyaltyDetails_data_Customer_PriceLevel';
  Code?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_SubscriberGroupMemberships_Items = {
  __typename?: 'query_loyaltyDetails_data_Customer_SubscriberGroupMemberships_items';
  Group?: Maybe<Query_LoyaltyDetails_Data_Customer_SubscriberGroupMemberships_Items_Group>;
};

export type Query_LoyaltyDetails_Data_Customer_SubscriberGroupMemberships_Items_Group = {
  __typename?: 'query_loyaltyDetails_data_Customer_SubscriberGroupMemberships_items_Group';
  Code?: Maybe<Scalars['String']['output']>;
  ExternalId?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_Customer_Type = {
  __typename?: 'query_loyaltyDetails_data_Customer_Type';
  Code?: Maybe<Scalars['String']['output']>;
  ExternalId?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type Query_LoyaltyDetails_Data_StandardCoupons_Items = {
  __typename?: 'query_loyaltyDetails_data_StandardCoupons_items';
  Code?: Maybe<Scalars['String']['output']>;
  EnableChoiceRewards?: Maybe<Scalars['Boolean']['output']>;
  ExternalId?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  QuantityApplied?: Maybe<Scalars['Int']['output']>;
  QuantityAvailable?: Maybe<Scalars['Int']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Uid?: Maybe<Scalars['String']['output']>;
};

export type String = {
  _fake?: InputMaybe<Scalars['String']['input']>;
};

export type TrackOrder_Response = Root_Type_For_TrackingErrorResponse | TrackingResponse;

export type UpdateBrand_Response = AccessDenied_Response | BadRequest_Response | Brand | InternalError_Response | NotFound_Response;

export type UpdateCustomer_Response = AccessDenied_Response | BadRequest_Response | Customer | InternalError_Response | NotFound_Response;

export type UpdateMerchant_Response = GenericErrorResponse | Root_Type_For_MerchantResponse;

export type UpdatePet_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Pet;

export type UpdateReminder_Response = AccessDenied_Response | BadRequest_Response | InternalError_Response | NotFound_Response | Reminder;

export type WebPageDetailsOutput = {
  __typename?: 'webPageDetailsOutput';
  /** Which environment the page is accessed from. Possible values are DEV/STAGE/PRE_PRD/PROD */
  environment?: Maybe<Scalars['String']['output']>;
  /** The hostname */
  server?: Maybe<Scalars['String']['output']>;
};

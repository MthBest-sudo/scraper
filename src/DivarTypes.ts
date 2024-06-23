export interface Root {
  nb: Nb
  browse: Browse
  search: Search
  navBar: NavBar
  note: Note
  defaultReducer: DefaultReducer
  currentPost: CurrentPost
  carInspectionReport: CarInspectionReport
  staticPage: StaticPage
  httpError: HttpError
  captcha: Captcha
  auth: Auth
  user: User
  dealership: Dealership
  realEstate: RealEstate
  contactTerms: ContactTerms
  carPrices: CarPrices
  carPricesBrand: CarPricesBrand
  carSpecsHome: CarSpecsHome
  carSpecsAllBrands: CarSpecsAllBrands
  carSpecsModel: CarSpecsModel
  carSpecsBrand: CarSpecsBrand
  carDealersList: CarDealersList
  mobilePrices: MobilePrices
  mobileBrands: MobileBrands
  mobileBrand: MobileBrand
  mobileModel: MobileModel
  city: City
  marketplace: Marketplace
  marketplaceList: MarketplaceList
  employerProfile: EmployerProfile
  jobsApply: JobsApply
  history: History
  chat: Chat
  shared: Shared
  multiCity: MultiCity
  widgets: Widgets
  modalPage: ModalPage
  language: Language
}

export interface Nb {
  listTopWidgets: any[]
  listWidgets: any[]
  listBottomWidgets: any[]
  sidebarTopWidgets: any[]
  sidebarBottomWidgets: any[]
  firstPostDate: any
  filterChips: any[]
  seo: Seo
  actionLog: ActionLog
  searchBarConfig: SearchBarConfig
  pagination: any
  isLoading: boolean
  isLoadingMore: boolean
  isPullingToRefresh: boolean
  filtersPage: FiltersPage
  searchBar: SearchBar
}

export interface Seo {}

export interface ActionLog {}

export interface SearchBarConfig {}

export interface FiltersPage {
  widgetList: any[]
  isLoading: boolean
}

export interface SearchBar {}

export interface Browse {
  items: Item[]
  seoDetails: SeoDetails
  suggestionList: any[]
  lastPostDate: number
  logPostDate: number
  page: number
  searchSuggestions: any[]
  postListWillLoad: boolean
  requestUrl: string
  dataWillFetch: boolean
  errors: Errors
  linkedDataRequirements: LinkedDataRequirements
  internalLinkSections: any
  toolbox: Toolbox
  loadedForUrl: string
  tabs: any
  currentTabId: any
  tabsData: TabsData
  isPullingToRefresh: boolean
  serverActionLog: ServerActionLog
  smartWidgets: any[]
  stickyWidget: any
  UNSAFE_forcedInline: any
  UNSAFE_inlineTooltip: any
  location: Location
  searchBarBookmark: SearchBarBookmark
}

export interface Item {
  type: string
  data: Data
}

export interface Data {
  widgetType: string
  token: string
  title: string
  topDescription: string
  middleDescription: string
  bottomDescription: string
  redText: string
  hasChat: boolean
  padded: boolean
  image: any
  tag: Tag
  badge: Badge
  action: Action
  actionLog: ActionLog2
  KEY_PROP_NAME: string
  visibilityConditions: any[]
  loadingSrc: string
}

export interface Tag {}

export interface Badge {}

export interface Action {
  as: string
  props: Props
}

export interface Props {
  to: string
}

export interface ActionLog2 {
  server_side_info: ServerSideInfo
  enabled: boolean
}

export interface ServerSideInfo {
  info: Info
  item_type: ItemType
}

export interface Info {
  "@type": string
  post_token: string
  index: number
  post_type: string
  list_type: string
  source_page: string
  extra_data: ExtraData
}

export interface ExtraData {
  "@type": string
  jli: Jli
  last_post_sort_date: number
}

export interface Jli {
  cities: string[]
  category: Category
  usage: Usage
}

export interface Category {
  value: string
}

export interface Usage {
  max: number
  min: number
}

export interface ItemType {
  type: string
}

export interface SeoDetails {
  title: string
  description: string
  next: string
  web_url: string
  android_url: string
  headline: string
  canonical: string
  prev: string
  meta_tags: any[]
  schema: string
  content: string
  robots: Robots
  breadcrumb: Breadcrumb[]
}

export interface Robots {
  follow: boolean
  index: boolean
}

export interface Breadcrumb {
  name: string
  url: string
}

export interface Errors {
  onRetryList: any
}

export interface LinkedDataRequirements {
  urlPathname: string
  urlSearch: string
  lastPostDate: number
}

export interface Toolbox {
  widgetList: any[]
  leftToolboxWidgetList: LeftToolboxWidgetList[]
  isInline: boolean
}

export interface LeftToolboxWidgetList {
  widgetType: string
  title: string
  items: Item2[]
  KEY_PROP_NAME: string
  visibilityConditions: any[]
}

export interface Item2 {
  "@type": string
  title: string
  icon: Icon
  action: Action2
  subtitle: string
  has_indicator: boolean
  has_divider: boolean
  small: boolean
  disabled: boolean
  active?: boolean
}

export interface Icon {
  image_url_dark: string
  image_url_light: string
  icon_name: string
  icon_color: string
}

export interface Action2 {
  type: string
  payload: Payload
  fallback_link: string
  page_pop_link: boolean
}

export interface Payload {
  "@type": string
  web_url: string
  no_cat_page: boolean
  source_view: string
  tooltip: string
}

export interface TabsData {}

export interface ServerActionLog {
  tokens_info: TokensInfo[]
  list_type: string
}

export interface TokensInfo {
  token: string
  score: number
  sort_score: number
  sort_date: number
  source: string
}

export interface Location {
  pathname: string
  search: string
}

export interface SearchBarBookmark {
  toggle_action_log: ToggleActionLog
}

export interface ToggleActionLog {
  server_side_info: ServerSideInfo2
  enabled: boolean
}

export interface ServerSideInfo2 {
  item_type: ItemType2
}

export interface ItemType2 {
  type: string
}

export interface Search {
  schema: Schema
  rootCat: RootCat
  actionLogs: ActionLogs
  category: Category4
  filters: Filters
  realTimeQuery: string
  filtersChangesVersion: number
  isSchemaLoading: boolean
  schemaHasError: boolean
  categoriesHasError: boolean
  shouldSelectCategory: any
  isBottomNavCategoryActive: boolean
  shouldSendServerSideLoadPostActionLog: boolean
  searchData: SearchData
}

export interface Schema {
  json_schema: JsonSchema
  ui_schema: UiSchema
}

export interface JsonSchema {
  additionalProperties: boolean
  properties: Properties
  type: string
}

export interface Properties {
  body_status: BodyStatus
  brand_model: BrandModel
  brand_model_manufacturer_origin: BrandModelManufacturerOrigin
  "business-type": BusinessType
  category: Category2
  chassis_status: ChassisStatus
  cities: Cities
  color: Color
  divider: Divider
  exchange: Exchange
  fuel_type: FuelType
  gearbox: Gearbox
  "has-photo": HasPhoto
  installment_sale: InstallmentSale
  motor_status: MotorStatus
  price: Price
  "production-year": ProductionYear
  query: Query
  sort: Sort
  third_party_insurance_deadline: ThirdPartyInsuranceDeadline
  urgent: Urgent
  usage: Usage2
}

export interface BodyStatus {
  additionalProperties: boolean
  properties: Properties2
  title: string
  type: string
}

export interface Properties2 {
  value: Value
}

export interface Value {
  items: Items
  title: string
  type: string
}

export interface Items {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface BrandModel {
  additionalProperties: boolean
  properties: Properties3
  title: string
  type: string
}

export interface Properties3 {
  value: Value2
}

export interface Value2 {
  items: Items2
  minItems: number
  title: string
  type: string
}

export interface Items2 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface BrandModelManufacturerOrigin {
  additionalProperties: boolean
  properties: Properties4
  title: string
  type: string
}

export interface Properties4 {
  value: Value3
}

export interface Value3 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface BusinessType {
  additionalProperties: boolean
  properties: Properties5
  title: string
  type: string
}

export interface Properties5 {
  value: Value4
}

export interface Value4 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface Category2 {
  additionalProperties: boolean
  properties: Properties6
  title: string
  type: string
}

export interface Properties6 {
  value: Value5
}

export interface Value5 {
  type: string
}

export interface ChassisStatus {
  additionalProperties: boolean
  properties: Properties7
  title: string
  type: string
}

export interface Properties7 {
  value: Value6
}

export interface Value6 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface Cities {
  default: string[]
  items: Items3
  type: string
}

export interface Items3 {
  type: string
}

export interface Color {
  additionalProperties: boolean
  properties: Properties8
  title: string
  type: string
}

export interface Properties8 {
  value: Value7
}

export interface Value7 {
  items: Items4
  minItems: number
  title: string
  type: string
}

export interface Items4 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface Divider {
  title: string
  type: string
}

export interface Exchange {
  additionalProperties: boolean
  properties: Properties9
  title: string
  type: string
}

export interface Properties9 {
  value: Value8
}

export interface Value8 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface FuelType {
  additionalProperties: boolean
  properties: Properties10
  title: string
  type: string
}

export interface Properties10 {
  value: Value9
}

export interface Value9 {
  items: Items5
  title: string
  type: string
}

export interface Items5 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface Gearbox {
  additionalProperties: boolean
  properties: Properties11
  title: string
  type: string
}

export interface Properties11 {
  value: Value10
}

export interface Value10 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface HasPhoto {
  title: string
  type: string
}

export interface InstallmentSale {
  additionalProperties: boolean
  properties: Properties12
  title: string
  type: string
}

export interface Properties12 {
  value: Value11
}

export interface Value11 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface MotorStatus {
  additionalProperties: boolean
  properties: Properties13
  title: string
  type: string
}

export interface Properties13 {
  value: Value12
}

export interface Value12 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface Price {
  additionalProperties: boolean
  properties: Properties14
  title: string
  type: string
}

export interface Properties14 {
  max: Max
  min: Min
}

export interface Max {
  multipleOf: number
  type: string
}

export interface Min {
  minimum: number
  multipleOf: number
  type: string
}

export interface ProductionYear {
  additionalProperties: boolean
  properties: Properties15
  title: string
  type: string
}

export interface Properties15 {
  max: Max2
  min: Min2
}

export interface Max2 {
  multipleOf: number
  type: string
}

export interface Min2 {
  minimum: number
  multipleOf: number
  type: string
}

export interface Query {
  type: string
}

export interface Sort {
  additionalProperties: boolean
  properties: Properties16
  title: string
  type: string
}

export interface Properties16 {
  value: Value13
}

export interface Value13 {
  enum: string[]
  enumNames: string[]
  type: string
}

export interface ThirdPartyInsuranceDeadline {
  additionalProperties: boolean
  properties: Properties17
  title: string
  type: string
}

export interface Properties17 {
  max: Max3
  min: Min3
}

export interface Max3 {
  maximum: number
  multipleOf: number
  type: string
}

export interface Min3 {
  minimum: number
  multipleOf: number
  type: string
}

export interface Urgent {
  title: string
  type: string
}

export interface Usage2 {
  additionalProperties: boolean
  properties: Properties18
  title: string
  type: string
}

export interface Properties18 {
  max: Max4
  min: Min4
}

export interface Max4 {
  multipleOf: number
  type: string
}

export interface Min4 {
  minimum: number
  multipleOf: number
  type: string
}

export interface UiSchema {
  body_status: BodyStatus2
  brand_model: BrandModel2
  brand_model_manufacturer_origin: BrandModelManufacturerOrigin2
  "business-type": BusinessType2
  category: Category3
  chassis_status: ChassisStatus2
  cities: Cities2
  color: Color2
  divider: Divider2
  exchange: Exchange2
  fuel_type: FuelType2
  gearbox: Gearbox2
  "has-photo": HasPhoto2
  installment_sale: InstallmentSale2
  motor_status: MotorStatus2
  price: Price2
  "production-year": ProductionYear2
  query: Query2
  sort: Sort2
  third_party_insurance_deadline: ThirdPartyInsuranceDeadline2
  "ui:group": UiGroup
  "ui:order": string[]
  urgent: Urgent2
  usage: Usage3
}

export interface BodyStatus2 {
  "ui:field": string
  "ui:options": UiOptions
  urischema: Urischema
  value: Value14
}

export interface UiOptions {
  "display-text-format": string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema {
  display: Display
}

export interface Display {
  accidental: string[]
  "full-paint": string[]
  "half-paint": string[]
  intact: string[]
  junk: string[]
  "one-spot-paint": string[]
  "paintless-dent-removal": string[]
  "some-paint": string[]
  "some-scratches": string[]
  "two-spots-paint": string[]
}

export interface Value14 {
  items: Items6
  "ui:options": UiOptions2
  "ui:placeholder": string
  "ui:title": string
  "ui:widget": string
}

export interface Items6 {}

export interface UiOptions2 {}

export interface BrandModel2 {
  "ui:field": string
  "ui:options": UiOptions3
  urischema: Urischema2
  value: Value15
}

export interface UiOptions3 {
  data: Data2
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
  search: Search2
}

export interface Data2 {
  children: Children[]
  enum: string
  enumName: string
}

export interface Children {
  children: Children2[]
  darkIconUrl?: string
  enum: string
  enumName: string
  iconUrl?: string
}

export interface Children2 {
  children: Children3[]
  enum: string
  enumName: string
}

export interface Children3 {
  children: any[]
  enum: string
  enumName: string
}

export interface Search2 {
  enabled: boolean
  min: number
  search_key: string
}

export interface Urischema2 {
  display: Display2
  order: number
}

export interface Display2 {
  "Alfa Romeo": string[]
  "Alfa Romeo 4C": string[]
  "Alfa Romeo Giulietta": string[]
  "Alfa Romeo MiTo": string[]
  Amico: string[]
  "Amico Araz": string[]
  "Amico Araz doubledifferential": string[]
  "Amico Araz singledifferential": string[]
  "Amico Asna": string[]
  "Amico Asna Bi-fuel": string[]
  "Amico Asna petrol": string[]
  Ario: string[]
  "Ario automatic-1600cc": string[]
  "Ario manual-1500cc": string[]
  "Ario manual-1600cc": string[]
  Arisan: string[]
  "Arisan Arisan": string[]
  "Arisan Arisan Bi-fuel": string[]
  "Arisan Arisan petrol": string[]
  "Arisan Arisun 2": string[]
  Audi: string[]
  "Audi Q5": string[]
  "Audi TT": string[]
  "Audi TT convertible": string[]
  "Audi TT coupe": string[]
  BAIC: string[]
  "BAIC Beijing X55": string[]
  "BAIC Sabrina": string[]
  "BAIC Sabrina hatchback": string[]
  "BAIC Sabrina-ir": string[]
  "BAIC Sabrina-ir hatchback": string[]
  "BAIC Senova": string[]
  "BAIC U5 PLUS": string[]
  "BAIC X25": string[]
  "BAIC X25 Automatic": string[]
  "BAIC X25 Manual": string[]
  BISU: string[]
  "BISU T3": string[]
  "BISU T5": string[]
  BMW: string[]
  "BMW 1 Series Convertible": string[]
  "BMW 1 Series Convertible 120i": string[]
  "BMW 1 Series Convertible 125i": string[]
  "BMW 1 Series Coupe": string[]
  "BMW 1 Series Hatchback": string[]
  "BMW 1 Series Hatchback 118i": string[]
  "BMW 1 Series Hatchback 120i": string[]
  "BMW 1 Series Hatchback 125i": string[]
  "BMW 2 Series Activetourer": string[]
  "BMW 2 Series Activetourer 218i": string[]
  "BMW 2 Series Convertible": string[]
  "BMW 2 Series Convertible 220i": string[]
  "BMW 2 Series Convertible 230i": string[]
  "BMW 2 Series Coupe": string[]
  "BMW 2 Series Coupe 220i": string[]
  "BMW 2 Series Coupe 230i": string[]
  "BMW 2002": string[]
  "BMW 3 Series Convertible": string[]
  "BMW 3 Series Convertible 320i": string[]
  "BMW 3 Series Convertible 325i": string[]
  "BMW 3 Series Convertible 330i": string[]
  "BMW 3 Series Convertible 335i": string[]
  "BMW 3 Series Coupe": string[]
  "BMW 3 Series Coupe 320i": string[]
  "BMW 3 Series Coupe 325i": string[]
  "BMW 3 Series Coupe 330i": string[]
  "BMW 3 Series Coupe 335i": string[]
  "BMW 3 Series GT": string[]
  "BMW 3 Series GT 328i": string[]
  "BMW 3 Series Sedan": string[]
  "BMW 3 Series Sedan 316i": string[]
  "BMW 3 Series Sedan 318i-automatic": string[]
  "BMW 3 Series Sedan 318i-manual": string[]
  "BMW 3 Series Sedan 320i": string[]
  "BMW 3 Series Sedan 325i": string[]
  "BMW 3 Series Sedan 328i": string[]
  "BMW 3 Series Sedan 330i": string[]
  "BMW 4 Series Convertible": string[]
  "BMW 4 Series Convertible 428i": string[]
  "BMW 4 Series Coupe": string[]
  "BMW 4 Series Coupe 420i": string[]
  "BMW 4 Series Coupe 428i": string[]
  "BMW 4 Series Grancoupe": string[]
  "BMW 4 Series Grancoupe 420i": string[]
  "BMW 4 Series Grancoupe 428i": string[]
  "BMW 5 Series GT": string[]
  "BMW 5 Series GT 528i": string[]
  "BMW 5 Series GT 535i": string[]
  "BMW 5 Series Sedan": string[]
  "BMW 5 Series Sedan 518": string[]
  "BMW 5 Series Sedan 520i": string[]
  "BMW 5 Series Sedan 523i": string[]
  "BMW 5 Series Sedan 525i": string[]
  "BMW 5 Series Sedan 528i": string[]
  "BMW 5 Series Sedan 530i": string[]
  "BMW 5 Series Sedan 530xi": string[]
  "BMW 5 Series Sedan 535i": string[]
  "BMW 5 Series Sedan 540i": string[]
  "BMW 5 Series Sedan 550i": string[]
  "BMW 6 Series Convertible": string[]
  "BMW 6 Series Convertible 630i": string[]
  "BMW 6 Series Convertible 650i": string[]
  "BMW 6 Series Convertible M6": string[]
  "BMW 6 Series Coupe": string[]
  "BMW 6 Series Coupe 630i": string[]
  "BMW 6 Series Coupe 640i": string[]
  "BMW 6 Series Coupe 650i": string[]
  "BMW 6 Series Grancoupe": string[]
  "BMW 6 Series Grancoupe 640i": string[]
  "BMW 6 Series Grancoupe 650i": string[]
  "BMW 6 Series Grancoupe M6": string[]
  "BMW 7 Series": string[]
  "BMW 7 Series 730i": string[]
  "BMW 7 Series 730li": string[]
  "BMW 7 Series 740li": string[]
  "BMW 7 Series 750li": string[]
  "BMW Classic": string[]
  "BMW X1": string[]
  "BMW X1 18i": string[]
  "BMW X1 20i": string[]
  "BMW X1 25i": string[]
  "BMW X1 28i": string[]
  "BMW X3": string[]
  "BMW X3 25i": string[]
  "BMW X3 28i": string[]
  "BMW X3 30i": string[]
  "BMW X3 35i": string[]
  "BMW X4": string[]
  "BMW X4 28i": string[]
  "BMW X5": string[]
  "BMW X5 50i": string[]
  "BMW X6": string[]
  "BMW X6 35i": string[]
  "BMW X6 50i": string[]
  "BMW Z3": string[]
  "BMW Z4": string[]
  "BMW Z4 20i": string[]
  "BMW Z4 23i": string[]
  "BMW Z4 28i": string[]
  "BMW Z4 30i": string[]
  "BMW Z4 35i": string[]
  "BMW i8": string[]
  BYD: string[]
  "BYD F3": string[]
  "BYD S6": string[]
  "BYD S7": string[]
  Bestune: string[]
  "Bestune T77": string[]
  "Bestune T99": string[]
  Besturn: string[]
  "Besturn B30": string[]
  "Besturn B50": string[]
  "Besturn B50F": string[]
  Borgward: string[]
  "Borgward BX5": string[]
  "Borgward BX5 Ultimate": string[]
  "Borgward BX6": string[]
  "Borgward BX7": string[]
  "Borgward BX7 Ultimate": string[]
  "Borgward BX7TS": string[]
  Brilliance: string[]
  "Brilliance C3": string[]
  "Brilliance C3 automatic-1500cc": string[]
  "Brilliance C3 automatic-1650cc": string[]
  "Brilliance H220": string[]
  "Brilliance H220 automatic": string[]
  "Brilliance H220 manual": string[]
  "Brilliance H230": string[]
  "Brilliance H230 automatic": string[]
  "Brilliance H230 manual": string[]
  "Brilliance H320": string[]
  "Brilliance H320 automatic-1500cc": string[]
  "Brilliance H320 automatic-1650cc": string[]
  "Brilliance H320 manual-1500cc": string[]
  "Brilliance H320 manual-1650cc": string[]
  "Brilliance H330": string[]
  "Brilliance H330 automatic-1500cc": string[]
  "Brilliance H330 automatic-1650cc": string[]
  "Brilliance H330 manual-1500cc": string[]
  "Brilliance H330 manual-1650cc": string[]
  "Brilliance V5": string[]
  "Brilliance Van": string[]
  "Brilliance Van H2L": string[]
  Buick: string[]
  "Buick B2": string[]
  "Buick B3": string[]
  "Buick B3-ir": string[]
  Capra: string[]
  "Capra Capra 2": string[]
  "Capra Double Cabin": string[]
  "Capra Double Cabin doubledifferential": string[]
  "Capra Double Cabin singledifferential": string[]
  "Capra Single-cabin": string[]
  "Capra Single-cabin singledifferential": string[]
  Changan: string[]
  "Changan CS 35  3": string[]
  "Changan CS 55": string[]
  "Changan CS35": string[]
  "Changan CS35-ir": string[]
  "Changan Cs 35 2": string[]
  "Changan EADO": string[]
  Chery: string[]
  "Chery Arizo 5 sport FL": string[]
  "Chery Arrizo 5": string[]
  "Chery Arrizo 5 automati-luxury": string[]
  "Chery Arrizo 5 automatic-excellent": string[]
  "Chery Arrizo 5 manual-luxury": string[]
  "Chery Arrizo 5IE New": string[]
  "Chery Arrizo 5IE New Turbo": string[]
  "Chery Arrizo 5TE": string[]
  "Chery Arrizo 5TE turbo-excellent": string[]
  "Chery Arrizo 6": string[]
  "Chery Arrizo 6 excellent": string[]
  "Chery Queen": string[]
  "Chery Tiggo 5": string[]
  "Chery Tiggo 5 IE": string[]
  "Chery Tiggo 5 IL": string[]
  "Chery Tiggo 5 TE": string[]
  "Chery Tiggo 5 excellent": string[]
  "Chery Tiggo 5 luxury": string[]
  "Chery Tiggo 5 luxury-sport": string[]
  "Chery Tiggo 7": string[]
  "Chery Tiggo 7 IE": string[]
  "Chery Tiggo 7 excellent": string[]
  "Chery Viana A15": string[]
  Chevrolet: string[]
  "Chevrolet Bel Air": string[]
  "Chevrolet Blazer": string[]
  "Chevrolet Camaro": string[]
  "Chevrolet Caprice": string[]
  "Chevrolet Fleetmaster": string[]
  "Chevrolet Impala": string[]
  "Chevrolet Monte Carlo": string[]
  "Chevrolet Nova": string[]
  "Chevrolet Nova-ir": string[]
  "Chevrolet Pickup": string[]
  "Chevrolet Royal-ir": string[]
  "Chevrolet Suburban": string[]
  "Chevrolet Van": string[]
  "Chevrolet Van Vandura": string[]
  Chrysler: string[]
  Citroen: string[]
  "Citroen C3": string[]
  "Citroen C3 wo-warmer": string[]
  "Citroen C3 wt-warmer": string[]
  "Citroen C5": string[]
  "Citroen Jian": string[]
  "Citroen New C5": string[]
  "Citroen Sialk": string[]
  "Citroen Xantia": string[]
  "Citroen Xantia 1800cc": string[]
  "Citroen Xantia 2000cc": string[]
  "Citroen Xantia2": string[]
  DS: string[]
  "DS 3": string[]
  "DS 5": string[]
  "DS 5LS": string[]
  "DS 6": string[]
  "DS Crossback-4": string[]
  "DS crossback-7": string[]
  "DS crossback-7 opera": string[]
  "DS crossback-7 rivoli": string[]
  Daewoo: string[]
  "Daewoo Cielo": string[]
  "Daewoo Cielo hatchback": string[]
  "Daewoo Cielo sedan": string[]
  "Daewoo Espero": string[]
  "Daewoo Espero automatic": string[]
  "Daewoo Espero manual": string[]
  "Daewoo Matiz": string[]
  "Daewoo Racer": string[]
  "Daewoo Racer GTE": string[]
  "Daewoo Racer GTI": string[]
  "Daewoo Racer hatchback": string[]
  Daihatsu: string[]
  Datsun: string[]
  "Datsun Car": string[]
  "Datsun Pickup": string[]
  Dayun: string[]
  "Dayun Y5": string[]
  "Dayun Y5 Plus": string[]
  "Dayun Y7": string[]
  Deer: string[]
  "Deer Deer": string[]
  Delica: string[]
  "Delica Van": string[]
  "Delica Van Personal": string[]
  "Delica Van Taxi": string[]
  Dena: string[]
  "Dena Dena plus turbo": string[]
  "Dena basic": string[]
  "Dena basic 1700cc": string[]
  "Dena basic 2": string[]
  "Dena plus": string[]
  "Dena plus 1700cc Automatic": string[]
  "Dena plus 1700cc Manual": string[]
  "Dena plus 1700cc-turbo": string[]
  "Dena plus Manual 1": string[]
  "Dena plus Manual 6 Turbo": string[]
  "Dena plus Turbo 1": string[]
  Dignity: string[]
  "Dignity Prestige": string[]
  "Dignity Prime": string[]
  Dodge: string[]
  "Dodge Coronet": string[]
  "Dodge Van": string[]
  Domy: string[]
  "Domy X7": string[]
  Dongfeng: string[]
  "Dongfeng E5": string[]
  "Dongfeng H30": string[]
  "Dongfeng S30": string[]
  "Dongfeng Shine Max": string[]
  Farda: string[]
  "Farda 511": string[]
  "Farda Suba M4": string[]
  "Farda Sx5": string[]
  "Farda Sx6": string[]
  "Farda T5": string[]
  "Farda m4 Suba": string[]
  Faw: string[]
  "Faw H5": string[]
  "Faw Siba": string[]
  Fiat: string[]
  "Fiat 500": string[]
  "Fiat R500": string[]
  "Fiat Siena": string[]
  Fidelity: string[]
  "Fidelity FIDELITY PRESTIGE": string[]
  "Fidelity Prime": string[]
  "Fidelity Prime 5seater": string[]
  "Fidelity Prime 7seater": string[]
  Ford: string[]
  "Ford F150": string[]
  "Ford Mustang": string[]
  "Ford Taurus": string[]
  Foton: string[]
  "Foton Pickup": string[]
  "Foton Pickup Tunland Petrol doubledifferential": string[]
  "Foton Pickup Tunland diesel doubledifferential": string[]
  "Foton Sauvana": string[]
  "Foton Tunland G7": string[]
  "Foton Van": string[]
  Fownix: string[]
  "Fownix Arrizo 6 pro": string[]
  "Fownix Fx": string[]
  "Fownix Fx Excellent": string[]
  "Fownix Fx Premium": string[]
  "Fownix Tiggo 7 pro": string[]
  "Fownix Tiggo 8 Promax": string[]
  "Fownix Tiggo 8 pro": string[]
  "Fownix تیگو 8 پرو E plus": string[]
  "GAC Gonow": string[]
  "GAC Gonow G5": string[]
  "GAC Gonow GA3S": string[]
  "GAC Gonow GS5": string[]
  "GAC Gonow Pickup": string[]
  "GAC Gonow Pickup Troy": string[]
  Gac: string[]
  "Gac EMPOW": string[]
  "Gac GS3": string[]
  Geely: string[]
  "Geely AZKARRA": string[]
  "Geely BINRUI": string[]
  "Geely COOLRAY PLUS": string[]
  "Geely Emgrand 7": string[]
  "Geely Emgrand 7 automatic": string[]
  "Geely Emgrand 7 manual": string[]
  "Geely Emgrand 7_RV": string[]
  "Geely Emgrand 7_RV automatic": string[]
  "Geely Emgrand 7_RV manual": string[]
  "Geely Emgrand X7": string[]
  "Geely GC6": string[]
  "Geely GC6 elite": string[]
  "Geely GC6 excellent": string[]
  "Geely GX3 PRO": string[]
  "Geely MONJARO": string[]
  "Geely PREFACE": string[]
  "Great-Wall": string[]
  "Great-Wall C30": string[]
  "Great-Wall C30 automatic": string[]
  "Great-Wall C30 manual": string[]
  "Great-Wall Pickup Wingle 3": string[]
  "Great-Wall Pickup Wingle 5-double cabin": string[]
  "Great-Wall Pickup Wingle 5-double cabin doubledifferential": string[]
  "Great-Wall Pickup Wingle 5-double cabin singledifferential": string[]
  "Great-Wall Pickup Wingle 5-single cabin": string[]
  "Great-Wall Pickup Wingle 5-single cabin doubledifferential": string[]
  "Great-Wall Pickup Wingle 5-single cabin singledifferential": string[]
  "Great-Wall Van": string[]
  "Great-Wall Van 13 Seater": string[]
  "Great-Wall Van 9 Seater": string[]
  "Hafei Lobo": string[]
  "Hafei Lobo Lobo": string[]
  Haima: string[]
  "Haima S5": string[]
  "Haima S5 6 AT": string[]
  "Haima S5 AT CVT": string[]
  "Haima S7": string[]
  "Haima S7 Plus": string[]
  "Haima S7 automatic-2000cc": string[]
  "Haima S7 automatic-turbo-1800cc": string[]
  "Haima S8": string[]
  "Haima X7": string[]
  Hanteng: string[]
  "Hanteng X5-ir": string[]
  "Hanteng X7-ir": string[]
  Haval: string[]
  "Haval H2-ir": string[]
  "Haval H6": string[]
  "Haval H6-ir": string[]
  "Haval H9": string[]
  "Haval M4": string[]
  "Haval M4-ir": string[]
  Hillman: string[]
  Honda: string[]
  "Honda Accord": string[]
  "Honda Accord DX": string[]
  "Honda Accord EX": string[]
  "Honda Accord EXA": string[]
  "Honda Accord EXB": string[]
  "Honda Accord EXL": string[]
  "Honda Accord LXB": string[]
  "Honda CR-V": string[]
  "Honda CR-V EX-L": string[]
  "Honda CR-V Touring": string[]
  "Honda CR-X": string[]
  "Honda Civic": string[]
  "Honda Legend": string[]
  Hummer: string[]
  "Hummer H2": string[]
  Hyosow: string[]
  "Hyosow T205 Pickup": string[]
  Hyundai: string[]
  "Hyundai Accent": string[]
  "Hyundai Accent basic": string[]
  "Hyundai Accent blue": string[]
  "Hyundai Accent-ir": string[]
  "Hyundai Avante": string[]
  "Hyundai Avante automatic": string[]
  "Hyundai Avante manual": string[]
  "Hyundai Azera Grandeur": string[]
  "Hyundai Azera Grandeur 2400cc": string[]
  "Hyundai Azera Grandeur 3000cc": string[]
  "Hyundai Azera Grandeur 3300cc": string[]
  "Hyundai Centennial": string[]
  "Hyundai Elantra": string[]
  "Hyundai Elantra 1600cc": string[]
  "Hyundai Elantra 1800cc": string[]
  "Hyundai Elantra 2000cc": string[]
  "Hyundai Elantra-ir": string[]
  "Hyundai Excel": string[]
  "Hyundai FX Coupe": string[]
  "Hyundai FX Coupe automatic": string[]
  "Hyundai FX Coupe manual": string[]
  "Hyundai Genesis Coupe": string[]
  "Hyundai Genesis Sedan": string[]
  "Hyundai Hyundai Elantra 1600": string[]
  "Hyundai Hyundai Hyundai Elantra 1800": string[]
  "Hyundai Santafe ix45": string[]
  "Hyundai Santafe ix45 2400cc": string[]
  "Hyundai Santafe ix45 2700cc": string[]
  "Hyundai Santafe ix45 3500cc": string[]
  "Hyundai Scoupe": string[]
  "Hyundai Sonata-LF": string[]
  "Hyundai Sonata-LF-hybrid": string[]
  "Hyundai Sonata-LF-hybrid GL": string[]
  "Hyundai Sonata-LF-hybrid GLS": string[]
  "Hyundai Sonata-LF-hybrid GLS-Plus": string[]
  "Hyundai Sonata-NF": string[]
  "Hyundai Sonata-NF NF-3300cc": string[]
  "Hyundai Sonata-NF automatic-2400cc": string[]
  "Hyundai Sonata-NF manual-2400cc": string[]
  "Hyundai Sonata-YF": string[]
  "Hyundai Trajet": string[]
  "Hyundai Tucson-ix35": string[]
  "Hyundai Tucson-ix35 2000cc": string[]
  "Hyundai Tucson-ix35 2400cc": string[]
  "Hyundai Tucson-ix35 2700cc": string[]
  "Hyundai Van": string[]
  "Hyundai Van H1": string[]
  "Hyundai Van H350": string[]
  "Hyundai Veloster": string[]
  "Hyundai Veracruz-ix55": string[]
  "Hyundai Verna": string[]
  "Hyundai Verna automatic": string[]
  "Hyundai Verna manual": string[]
  "Hyundai hyundai creta": string[]
  "Hyundai i10-ir": string[]
  "Hyundai i20": string[]
  "Hyundai i20-ir": string[]
  "Hyundai i20-ir basic": string[]
  "Hyundai i20-ir optional": string[]
  "Hyundai i30": string[]
  "Hyundai i40": string[]
  "Hyundai i40 Station": string[]
  "IranKhodro Van": string[]
  "IranKhodro Van Ghazal": string[]
  "IranKhodro Van Vana": string[]
  Isuzu: string[]
  "Isuzu Double Cabin": string[]
  "Isuzu Double Cabin D Max": string[]
  Iveco: string[]
  "Iveco Van": string[]
  "Iveco Van A36": string[]
  JAC: string[]
  "JAC J3 Hatchback": string[]
  "JAC J3 Sedan": string[]
  "JAC J4": string[]
  "JAC J5": string[]
  "JAC J5 automatic-1500cc": string[]
  "JAC J5 manual-1500cc": string[]
  "JAC S3": string[]
  "JAC S3 automatic": string[]
  "JAC S5": string[]
  "JAC S5 New Face": string[]
  "JAC S5 automatic": string[]
  "JAC S5 manual": string[]
  "JAC Van": string[]
  "JAC Van Refine": string[]
  "JAC Van Sunray": string[]
  JMC: string[]
  "JMC S350": string[]
  Jaguar: string[]
  "Jaguar XJ": string[]
  Jeep: string[]
  "Jeep Ahoo": string[]
  "Jeep Cherokee": string[]
  "Jeep KM": string[]
  "Jeep Mute": string[]
  "Jeep Pickup": string[]
  "Jeep Pickup Simorgh": string[]
  "Jeep Renegade": string[]
  "Jeep Sahra": string[]
  "Jeep Shahbaz": string[]
  "Jeep Wagoneer": string[]
  "Jeep Wrangler": string[]
  Joylong: string[]
  "Joylong Van": string[]
  KMC: string[]
  "KMC J7": string[]
  "KMC K7": string[]
  "KMC T8": string[]
  "KMC X5": string[]
  Kia: string[]
  "Kia Cee'd": string[]
  "Kia Cerato": string[]
  "Kia Cerato Coupe": string[]
  "Kia Cerato Coupe 1600cc": string[]
  "Kia Cerato Coupe 2000cc": string[]
  "Kia Cerato automatic-1600cc": string[]
  "Kia Cerato automatic-2000cc": string[]
  "Kia Cerato-ir": string[]
  "Kia Cerato-ir automatic-2000cc": string[]
  "Kia Cerato-ir manual-1600cc": string[]
  "Kia Cerato-ir manual-optional-1600cc": string[]
  "Kia Cerato-ir optional-automatic-2000cc": string[]
  "Kia K5": string[]
  "Kia Opirus": string[]
  "Kia Optima": string[]
  "Kia Optima 2400cc": string[]
  "Kia Optima 2700cc": string[]
  "Kia Optima GT Line 2400cc": string[]
  "Kia Optima-hybrid": string[]
  "Kia Picanto": string[]
  "Kia Rio": string[]
  "Kia Rio hatchback": string[]
  "Kia Rio sedan": string[]
  "Kia Rio-ir": string[]
  "Kia Rio-ir automatic": string[]
  "Kia Rio-ir manual": string[]
  "Kia Seltos": string[]
  "Kia Sonet": string[]
  "Kia Sorento": string[]
  "Kia Sorento GT Line-third generation": string[]
  "Kia Sorento first generation-(2002-2009)": string[]
  "Kia Sorento second generation": string[]
  "Kia Sorento third generation-(2016-present)": string[]
  "Kia Sportage": string[]
  "Kia Sportage 2000cc turbo": string[]
  "Kia Sportage 2400cc": string[]
  "Kia Sportage 2700cc": string[]
  "Kia Sportage GT Line-2400cc": string[]
  "Kia Van": string[]
  "Kia cadenza": string[]
  "Kia carens": string[]
  "Kia carnival": string[]
  "Kia mohave": string[]
  "Kia mohave 6 cylinder": string[]
  "Kia mohave 8 cylinder": string[]
  "Kia soul": string[]
  Lada: string[]
  "Lada Granta": string[]
  "Lada Niva": string[]
  "Lada Niva Travel": string[]
  "Lada Vesta Cross": string[]
  "Lada Vesta Sport": string[]
  Lamari: string[]
  "Lamari Eama": string[]
  Lamborghini: string[]
  "Land Rover": string[]
  "Land Rover Defender": string[]
  "Land Rover Discovery": string[]
  "Land Rover Freelander": string[]
  "Land Rover Range Rover": string[]
  "Land Rover Range Rover-Evoque": string[]
  "Land Rover ir": string[]
  Landmark: string[]
  "Landmark V7": string[]
  Lexus: string[]
  "Lexus CT": string[]
  "Lexus CT 200-hybrid": string[]
  "Lexus CT 200-hybrid-F-sport": string[]
  "Lexus ES": string[]
  "Lexus ES 250": string[]
  "Lexus ES 350": string[]
  "Lexus GS": string[]
  "Lexus GS 250": string[]
  "Lexus GS 250-F-sport": string[]
  "Lexus GS 430": string[]
  "Lexus GS 460": string[]
  "Lexus IS": string[]
  "Lexus IS 250": string[]
  "Lexus IS 250-F-sport": string[]
  "Lexus IS 300": string[]
  "Lexus IS convertible": string[]
  "Lexus IS convertible 300": string[]
  "Lexus LS": string[]
  "Lexus LS 460L": string[]
  "Lexus LX": string[]
  "Lexus LX 570": string[]
  "Lexus NX 200t": string[]
  "Lexus NX 200t F": string[]
  "Lexus NX 200t paltinum": string[]
  "Lexus NX 200t premium": string[]
  "Lexus NX 300 H": string[]
  "Lexus NX 300 H 300-hybrid": string[]
  "Lexus NX 300 H 300-hybrid-F-sport": string[]
  "Lexus RX": string[]
  "Lexus RX 200T-F-sport": string[]
  "Lexus RX 200t-luxury": string[]
  "Lexus RX 350": string[]
  "Lexus RX 350-F-sport": string[]
  Lifan: string[]
  "Lifan 520": string[]
  "Lifan 520i": string[]
  "Lifan 620": string[]
  "Lifan 620 1600cc": string[]
  "Lifan 620 1800cc": string[]
  "Lifan 820": string[]
  "Lifan X50": string[]
  "Lifan X50 automatic": string[]
  "Lifan X50 manual": string[]
  "Lifan X60": string[]
  "Lifan X60 automatic": string[]
  "Lifan X60 manual": string[]
  "Lifan X70": string[]
  Lotus: string[]
  "Lotus Elise": string[]
  "Lotus Elise 220 cup": string[]
  "Lotus Elise S": string[]
  Luxgen: string[]
  "Luxgen U6": string[]
  MG: string[]
  "MG 3": string[]
  "MG 350": string[]
  "MG 360": string[]
  "MG 360 automatic": string[]
  "MG 360 automatic-turbo": string[]
  "MG 360 manual": string[]
  "MG 550": string[]
  "MG 6": string[]
  "MG 6 GT": string[]
  "MG 6 Magnette": string[]
  "MG 6 New": string[]
  "MG GS": string[]
  "MG GT": string[]
  "MG RX5": string[]
  MINI: string[]
  "MINI Classic": string[]
  "MINI Clubman": string[]
  "MINI Clubman S": string[]
  "MINI Cooper S": string[]
  "MINI Cooper S 3 door": string[]
  "MINI Cooper S 5 door": string[]
  "MINI Countryman": string[]
  "MINI Countryman S": string[]
  MVM: string[]
  "MVM 110": string[]
  "MVM 110 3 cylinder": string[]
  "MVM 110 automatic-4 cylinder": string[]
  "MVM 110 manual-4 cylinder": string[]
  "MVM 110S": string[]
  "MVM 110S comfort": string[]
  "MVM 110S luxury": string[]
  "MVM 110S sport-luxury": string[]
  "MVM 315 Hatchback Plus": string[]
  "MVM 315 Sedan": string[]
  "MVM 315 Sedan basic": string[]
  "MVM 315 Sedan sedan-sport": string[]
  "MVM 315 hatchback": string[]
  "MVM 315 hatchback basic": string[]
  "MVM 315 hatchback sport-excellent": string[]
  "MVM 315 hatchback sport-luxury": string[]
  "MVM 530": string[]
  "MVM 550": string[]
  "MVM 550 automatic": string[]
  "MVM 550 manual": string[]
  "MVM X22": string[]
  "MVM X22 automatic": string[]
  "MVM X22 automatic-luxury": string[]
  "MVM X22 automatic-sport": string[]
  "MVM X22 automatic-sport-excellent": string[]
  "MVM X22 automatic-sport-luxury": string[]
  "MVM X22 manual-basic": string[]
  "MVM X22 manual-luxury": string[]
  "MVM X22 manual-sport-excellent": string[]
  "MVM X22 manual-sport-luxury": string[]
  "MVM X22pro": string[]
  "MVM X22pro Excellent": string[]
  "MVM X22pro IE": string[]
  "MVM X33": string[]
  "MVM X33 X33": string[]
  "MVM X33 automatic": string[]
  "MVM X33 manual": string[]
  "MVM X33S": string[]
  "MVM X33S New Face": string[]
  "MVM X33S basic": string[]
  "MVM X33S sport": string[]
  "MVM X55": string[]
  "MVM X55 Excellent": string[]
  "MVM X55 Excellent-sport": string[]
  "MVM X55 Pro": string[]
  "MVM X55 Pro Excellent": string[]
  "MVM X55 Pro Excellent-sport": string[]
  "MVM X55 Pro IE": string[]
  "MVM X55 Pro IE Sport": string[]
  Maserati: string[]
  "Maserati Ghibli": string[]
  "Maserati Grancabrio": string[]
  "Maserati Grancabrio MC": string[]
  "Maserati Grancabrio S": string[]
  "Maserati Grancabrio basic": string[]
  "Maserati Granturismo": string[]
  "Maserati Granturismo MC": string[]
  "Maserati Granturismo S": string[]
  "Maserati Granturismo basic": string[]
  "Maserati Quattroporte": string[]
  "Maserati Quattroporte GTS": string[]
  "Maserati Quattroporte S": string[]
  "Maserati Quattroporte basic": string[]
  Maxmotor: string[]
  "Maxmotor Kalut": string[]
  "Maxmotor Kalut Automatic": string[]
  "Maxmotor Kalut manual": string[]
  "Maxmotor Tiara": string[]
  Maxus: string[]
  "Maxus Van": string[]
  Mazda: string[]
  "Mazda 2-ir": string[]
  "Mazda 2-ir 2": string[]
  "Mazda 3-ir": string[]
  "Mazda 3-ir 1": string[]
  "Mazda 3-ir 2": string[]
  "Mazda 3-ir 3": string[]
  "Mazda 323": string[]
  "Mazda 323 F": string[]
  "Mazda 323 automatic": string[]
  "Mazda 323 manual": string[]
  "Mazda 3N Hatchback-ir": string[]
  "Mazda 3N Hatchback-ir 1": string[]
  "Mazda 3N Hatchback-ir 3": string[]
  "Mazda 3N Sedan-ir": string[]
  "Mazda 3N Sedan-ir 1": string[]
  "Mazda 3N Sedan-ir 2": string[]
  "Mazda 3N Sedan-ir 3": string[]
  "Mazda 3N Sedan-ir 4": string[]
  "Mazda 6": string[]
  "Mazda Pickup": string[]
  "Mazda Pickup 1000": string[]
  "Mazda Pickup 1600": string[]
  "Mazda Pickup 2600": string[]
  "Mazda Pickup Cara-double cabin 1700cc": string[]
  "Mazda Pickup Cara-double cabin 2000cc": string[]
  "Mazda Pickup Cara-single cabin 1700cc": string[]
  "Mazda Pickup Cara-single cabin 2000cc": string[]
  "Mazda Pickup injector 2000-double cabin Bi-fuel": string[]
  "Mazda Pickup injector 2000-double cabin petrol": string[]
  "Mazda Pickup injector 2000-single cabin Bi-fuel": string[]
  "Mazda Pickup injector 2000-single cabin petrol": string[]
  "Mercedes-Benz": string[]
  "Mercedes-Benz A Class": string[]
  "Mercedes-Benz A Class A150": string[]
  "Mercedes-Benz A Class A170": string[]
  "Mercedes-Benz A Class A200": string[]
  "Mercedes-Benz A Class A200-turbo": string[]
  "Mercedes-Benz B Class": string[]
  "Mercedes-Benz B Class B200": string[]
  "Mercedes-Benz B Class B200-turbo": string[]
  "Mercedes-Benz C Class": string[]
  "Mercedes-Benz C Class C180": string[]
  "Mercedes-Benz C Class C200": string[]
  "Mercedes-Benz C Class C230": string[]
  "Mercedes-Benz C Class C240-automatic": string[]
  "Mercedes-Benz C Class C240-manual": string[]
  "Mercedes-Benz C Class C250": string[]
  "Mercedes-Benz C Class C280": string[]
  "Mercedes-Benz C Class C300": string[]
  "Mercedes-Benz C Class C350": string[]
  "Mercedes-Benz C Class Coupe": string[]
  "Mercedes-Benz C Class Coupe C230": string[]
  "Mercedes-Benz C Class Coupe C250": string[]
  "Mercedes-Benz C Class Coupe C350": string[]
  "Mercedes-Benz CL Class": string[]
  "Mercedes-Benz CL Class CL500": string[]
  "Mercedes-Benz CLA Class": string[]
  "Mercedes-Benz CLA Class CLA45": string[]
  "Mercedes-Benz CLK Class Coupe": string[]
  "Mercedes-Benz CLK Class Coupe CLK200": string[]
  "Mercedes-Benz CLK Class convertible": string[]
  "Mercedes-Benz CLK Class convertible CLK200": string[]
  "Mercedes-Benz CLK Class convertible CLK240": string[]
  "Mercedes-Benz CLK Class convertible CLK280": string[]
  "Mercedes-Benz CLS Class": string[]
  "Mercedes-Benz CLS Class CLS350": string[]
  "Mercedes-Benz CLS Class CLS500": string[]
  "Mercedes-Benz CLS Class CLS550": string[]
  "Mercedes-Benz Classic": string[]
  "Mercedes-Benz E Class": string[]
  "Mercedes-Benz E Class Convertible": string[]
  "Mercedes-Benz E Class Convertible E200": string[]
  "Mercedes-Benz E Class Convertible E250": string[]
  "Mercedes-Benz E Class Convertible E350": string[]
  "Mercedes-Benz E Class Coupe": string[]
  "Mercedes-Benz E Class Coupe E200": string[]
  "Mercedes-Benz E Class Coupe E250": string[]
  "Mercedes-Benz E Class Coupe E350": string[]
  "Mercedes-Benz E Class E190": string[]
  "Mercedes-Benz E Class E200": string[]
  "Mercedes-Benz E Class E220": string[]
  "Mercedes-Benz E Class E230": string[]
  "Mercedes-Benz E Class E240-automatic": string[]
  "Mercedes-Benz E Class E240-manual": string[]
  "Mercedes-Benz E Class E250": string[]
  "Mercedes-Benz E Class E280": string[]
  "Mercedes-Benz E Class E300": string[]
  "Mercedes-Benz E Class E350": string[]
  "Mercedes-Benz E Class-ir": string[]
  "Mercedes-Benz E Class-ir E200": string[]
  "Mercedes-Benz E Class-ir E280": string[]
  "Mercedes-Benz E Class-ir E350": string[]
  "Mercedes-Benz GLA Class": string[]
  "Mercedes-Benz GLA Class GLA250": string[]
  "Mercedes-Benz GLA Class GLA45": string[]
  "Mercedes-Benz GLK Class": string[]
  "Mercedes-Benz GLK Class GLK350": string[]
  "Mercedes-Benz ML Class": string[]
  "Mercedes-Benz ML Class ML350": string[]
  "Mercedes-Benz S Class": string[]
  "Mercedes-Benz S Class S280": string[]
  "Mercedes-Benz S Class S300": string[]
  "Mercedes-Benz S Class S320": string[]
  "Mercedes-Benz S Class S350": string[]
  "Mercedes-Benz S Class S500": string[]
  "Mercedes-Benz S Class SE": string[]
  "Mercedes-Benz SL Class": string[]
  "Mercedes-Benz SL Class SL350": string[]
  "Mercedes-Benz SL Class SL500": string[]
  "Mercedes-Benz SLC Class": string[]
  "Mercedes-Benz SLK Class": string[]
  "Mercedes-Benz SLK Class SLK200": string[]
  "Mercedes-Benz SLK Class SLK280": string[]
  "Mercedes-Benz SLK Class SLK350": string[]
  "Mercedes-Benz Van": string[]
  "Mercedes-Benz Van MB140": string[]
  "Mercedes-Benz Van Vito": string[]
  Mitsubishi: string[]
  "Mitsubishi ASX": string[]
  "Mitsubishi ASX 4": string[]
  "Mitsubishi ASX highline": string[]
  "Mitsubishi ASX midline": string[]
  "Mitsubishi Galant": string[]
  "Mitsubishi Lancer": string[]
  "Mitsubishi Lancer 1800cc": string[]
  "Mitsubishi Lancer automatic-1600cc": string[]
  "Mitsubishi Lancer manual-1600cc": string[]
  "Mitsubishi Mirage": string[]
  "Mitsubishi Outlander": string[]
  "Mitsubishi Outlander 3": string[]
  "Mitsubishi Outlander 4": string[]
  "Mitsubishi Outlander 5": string[]
  "Mitsubishi Outlander PHEV": string[]
  "Mitsubishi Pajero 2 door": string[]
  "Mitsubishi Pajero 2 door 4 cylinder": string[]
  "Mitsubishi Pajero 2 door 6 cylinder": string[]
  "Mitsubishi Pajero 4 door": string[]
  "Mitsubishi Pajero 4 door 4 cylinder": string[]
  "Mitsubishi Pajero 4 door 6 cylinder": string[]
  "Mitsubishi Pajero-ir": string[]
  "Mitsubishi Pajero-ir automatic": string[]
  "Mitsubishi Pajero-ir manual": string[]
  "Mitsubishi Pickup": string[]
  "Mitsubishi Van": string[]
  "Mitsubishi Van Caspian": string[]
  Narvan: string[]
  "Narvan Personal": string[]
  "Narvan Taxi": string[]
  Nissan: string[]
  "Nissan Altima": string[]
  "Nissan Juke": string[]
  "Nissan Juke platinum": string[]
  "Nissan Juke skypack": string[]
  "Nissan Juke sport": string[]
  "Nissan KICKS": string[]
  "Nissan Maxima-im": string[]
  "Nissan Maxima-ir": string[]
  "Nissan Maxima-ir automatic": string[]
  "Nissan Maxima-ir manual": string[]
  "Nissan Murano": string[]
  "Nissan Murano LE": string[]
  "Nissan Murano SE": string[]
  "Nissan Murano SL": string[]
  "Nissan Pathfinder": string[]
  "Nissan Patrol 2 door": string[]
  "Nissan Patrol 2 door 4 cylinder": string[]
  "Nissan Patrol 4 door": string[]
  "Nissan Patrol 4 door 4 cylinder": string[]
  "Nissan Patrol 4 door 6 cylinder": string[]
  "Nissan Pickup": string[]
  "Nissan Pickup Double-Cabin": string[]
  "Nissan Pickup Patrol": string[]
  "Nissan Pickup single-cabin": string[]
  "Nissan Qashqai": string[]
  "Nissan Qashqai-ir": string[]
  "Nissan Roniz": string[]
  "Nissan Seranza": string[]
  "Nissan Sunny": string[]
  "Nissan Sylphy": string[]
  "Nissan Teana-im": string[]
  "Nissan Teana-ir": string[]
  "Nissan Teana-ir HI": string[]
  "Nissan Teana-ir MID": string[]
  "Nissan Tiida": string[]
  "Nissan X trail": string[]
  "Nissan X-Trail": string[]
  "Nissan X-Trail automatic": string[]
  "Nissan X-Trail manual": string[]
  Oldsmobile: string[]
  "Oldsmobile Cutlass": string[]
  "Oldsmobile Regency": string[]
  Opel: string[]
  "Opel Astra": string[]
  "Opel Astra Hatchback": string[]
  "Opel Astra Hatchback 1400cc": string[]
  "Opel Astra Hatchback 1600cc": string[]
  "Opel Astra Station": string[]
  "Opel Astra new": string[]
  "Opel Astra old": string[]
  "Opel Calibra": string[]
  "Opel Corsa": string[]
  "Opel Corsa automatic": string[]
  "Opel Corsa new": string[]
  "Opel Corsa old": string[]
  "Opel Insignia": string[]
  "Opel Mokka": string[]
  "Opel Omega": string[]
  "Opel Vectra": string[]
  Paykan: string[]
  "Paykan Bi-fuel(CNG)": string[]
  "Paykan Bi-fuel(LPG)": string[]
  "Paykan Petrol": string[]
  "Paykan Pickup": string[]
  "Paykan Pickup CNG": string[]
  "Paykan Pickup LPG": string[]
  "Paykan Pickup Petrol": string[]
  Pazhan: string[]
  "Pazhan 2 door": string[]
  "Pazhan 4 door": string[]
  "Pazhan 4 door 4 cylinder-4 door": string[]
  "Pazhan 4 door 6 cylinder-4 door": string[]
  "Pazhan Herour": string[]
  Peugeot: string[]
  "Peugeot 2008": string[]
  "Peugeot 205": string[]
  "Peugeot 206": string[]
  "Peugeot 206 1": string[]
  "Peugeot 206 2": string[]
  "Peugeot 206 3": string[]
  "Peugeot 206 3P": string[]
  "Peugeot 206 4": string[]
  "Peugeot 206 5": string[]
  "Peugeot 206 6": string[]
  "Peugeot 206 SD": string[]
  "Peugeot 206 SD V1": string[]
  "Peugeot 206 SD V10": string[]
  "Peugeot 206 SD V19": string[]
  "Peugeot 206 SD V2": string[]
  "Peugeot 206 SD V20": string[]
  "Peugeot 206 SD V6": string[]
  "Peugeot 206 SD V8": string[]
  "Peugeot 206 SD V9": string[]
  "Peugeot 207i": string[]
  "Peugeot 207i Automatic P": string[]
  "Peugeot 207i Automatic P TU5P": string[]
  "Peugeot 207i Automatic TU5P": string[]
  "Peugeot 207i Manual P": string[]
  "Peugeot 207i Manual TU3": string[]
  "Peugeot 207i SD": string[]
  "Peugeot 207i SD automatic": string[]
  "Peugeot 207i SD manual": string[]
  "Peugeot 207i automatic": string[]
  "Peugeot 207i automatic MC": string[]
  "Peugeot 207i manual": string[]
  "Peugeot 301": string[]
  "Peugeot 404": string[]
  "Peugeot 405": string[]
  "Peugeot 405 GL": string[]
  "Peugeot 405 GL-Bi-fuel(CNG)": string[]
  "Peugeot 405 GL-Bi-fuel(LPG)": string[]
  "Peugeot 405 GL-petrol": string[]
  "Peugeot 405 GLX": string[]
  "Peugeot 405 GLX-Bi-fuel(CNG)": string[]
  "Peugeot 405 GLX-Bi-fuel(LPG)": string[]
  "Peugeot 405 GLX-TU5": string[]
  "Peugeot 405 GLX-TU5-Bi-fuel": string[]
  "Peugeot 405 GLX-TU5-Petrol": string[]
  "Peugeot 405 GLX-petrol": string[]
  "Peugeot 405 GLi": string[]
  "Peugeot 405 GLi-Bi-fuel(CNG)": string[]
  "Peugeot 405 GLi-Bi-fuel(LPG)": string[]
  "Peugeot 405 GLi-petrol": string[]
  "Peugeot 405 SLX": string[]
  "Peugeot 405 SLX-1800": string[]
  "Peugeot 405 SLX-Bi-fuel": string[]
  "Peugeot 405 station": string[]
  "Peugeot 406": string[]
  "Peugeot 407": string[]
  "Peugeot 504": string[]
  "Peugeot 508": string[]
  "Peugeot 508 GT": string[]
  "Peugeot Limousine": string[]
  "Peugeot Pars": string[]
  "Peugeot Pars Bi-fuel": string[]
  "Peugeot Pars ELX": string[]
  "Peugeot Pars ELX XUM": string[]
  "Peugeot Pars ELX-TU5": string[]
  "Peugeot Pars LX-TU5": string[]
  "Peugeot Pars XU7P": string[]
  "Peugeot Pars XU7P-ELX": string[]
  "Peugeot Pars automatic-TU5": string[]
  "Peugeot Pars basic": string[]
  "Peugeot Pars latest": string[]
  "Peugeot RD": string[]
  "Peugeot RD Bi-fuel(CNG)": string[]
  "Peugeot RD Bi-fuel(LPG)": string[]
  "Peugeot RD petrol": string[]
  "Peugeot RDI": string[]
  "Peugeot RDI petrol": string[]
  "Peugeot Roa": string[]
  "Peugeot Roa Bi-fuel": string[]
  "Peugeot Roa Petrol": string[]
  "Peugeot Roa Sal": string[]
  "Peugeot Roa Sal Bi-fuel": string[]
  "Peugeot Roa Sal petrol": string[]
  Pontiac: string[]
  "Pontiac Grandprix": string[]
  "Pontiac Parisienne": string[]
  Porsche: string[]
  "Porsche 911": string[]
  "Porsche 911 Carrera 4": string[]
  "Porsche 911 Carrera S": string[]
  "Porsche Boxster": string[]
  "Porsche Boxster 718": string[]
  "Porsche Boxster 718 S": string[]
  "Porsche Boxster V6": string[]
  "Porsche Boxster V6 S": string[]
  "Porsche Cayenne": string[]
  "Porsche Cayenne GTS": string[]
  "Porsche Cayenne S": string[]
  "Porsche Cayenne S turbo": string[]
  "Porsche Cayenne V6": string[]
  "Porsche Cayman": string[]
  "Porsche Cayman S": string[]
  "Porsche Macan": string[]
  "Porsche Panamera": string[]
  "Porsche Panamera 4S": string[]
  "Porsche Panamera 4S turbo": string[]
  "Porsche Panamera V6": string[]
  Pride: string[]
  "Pride 111": string[]
  "Pride 111 EX": string[]
  "Pride 111 SE": string[]
  "Pride 111 SL": string[]
  "Pride 111 SX": string[]
  "Pride 131": string[]
  "Pride 131 Bi-fuel": string[]
  "Pride 131 EX": string[]
  "Pride 131 LE": string[]
  "Pride 131 SE": string[]
  "Pride 131 SL": string[]
  "Pride 131 SX": string[]
  "Pride 131 TL": string[]
  "Pride 132": string[]
  "Pride 132 Bi-fuel": string[]
  "Pride 132 EX": string[]
  "Pride 132 LE": string[]
  "Pride 132 SE": string[]
  "Pride 132 SL": string[]
  "Pride 132 SX": string[]
  "Pride 132 TL": string[]
  "Pride 132 basic": string[]
  "Pride 141": string[]
  "Pride 141 Bi-fuel": string[]
  "Pride 141 DLXI": string[]
  "Pride 141 EX": string[]
  "Pride 141 LE": string[]
  "Pride 141 SE": string[]
  "Pride 141 SL": string[]
  "Pride 141 SX": string[]
  "Pride 141 basic": string[]
  "Pride 141 i": string[]
  "Pride Automatic": string[]
  "Pride Hatchback": string[]
  "Pride Pickup": string[]
  "Pride Pickup 151 Bi-fuel": string[]
  "Pride Pickup 151 SE": string[]
  "Pride Pickup 151 SL": string[]
  "Pride Pickup Plus": string[]
  "Pride Sedan": string[]
  "Pride Sedan CNG": string[]
  "Pride Sedan LPG": string[]
  "Pride Sedan petrol": string[]
  "Pride Station": string[]
  Proton: string[]
  "Proton Gen-2": string[]
  "Proton Gen-2 automatic": string[]
  "Proton Gen-2 manual": string[]
  "Proton Impian": string[]
  "Proton Viera": string[]
  "Proton Viera automatic": string[]
  "Proton Viera manual": string[]
  Qingling: string[]
  "Qingling TAGA  (pick-up)": string[]
  Quick: string[]
  "Quick Automatic": string[]
  "Quick Automatic P Plus": string[]
  "Quick Automatic S": string[]
  "Quick GX": string[]
  "Quick GXH": string[]
  "Quick GXR": string[]
  "Quick RS": string[]
  "Quick automatic-full": string[]
  "Quick automatic-full plus": string[]
  "Quick manual": string[]
  "Quick manual G": string[]
  "Quick manual R": string[]
  "Quick manual R Plus": string[]
  "Quick manual S": string[]
  "Quick manual basic": string[]
  Rayen: string[]
  "Rayen R3": string[]
  "Rayen V5": string[]
  "Rayen V5 automatic": string[]
  "Rayen V5 manual": string[]
  Renault: string[]
  "Renault 21": string[]
  "Renault 5": string[]
  "Renault 5-ir": string[]
  "Renault Captur": string[]
  "Renault Duster": string[]
  "Renault Duster PE Singledifferential": string[]
  "Renault Duster PE doubledifferential": string[]
  "Renault Duster SE Singledifferential": string[]
  "Renault Duster SE doubledifferential": string[]
  "Renault Fluence": string[]
  "Renault Fluence E2": string[]
  "Renault Fluence E4": string[]
  "Renault Fluence manual": string[]
  "Renault Koleos": string[]
  "Renault Koleos first generation": string[]
  "Renault Koleos second generation": string[]
  "Renault Laguna": string[]
  "Renault Laguna coupe": string[]
  "Renault Latitude": string[]
  "Renault Megan": string[]
  "Renault Megan 1600cc": string[]
  "Renault Megan 2000cc": string[]
  "Renault Megan convertible": string[]
  "Renault Megan hatchback": string[]
  "Renault Megan-ir": string[]
  "Renault Megan-ir 2000cc": string[]
  "Renault Megan-ir E1-1600cc": string[]
  "Renault Megan-ir E2-1600cc": string[]
  "Renault PK": string[]
  "Renault Pars Tondar": string[]
  "Renault Pars Tondar manual": string[]
  "Renault Pickup": string[]
  "Renault Pickup Tondar 90": string[]
  "Renault Safrane": string[]
  "Renault Safrane LE-2500cc": string[]
  "Renault Safrane PE-2000cc": string[]
  "Renault Safrane PE-2500cc": string[]
  "Renault Safrane SE-2000cc": string[]
  "Renault Sandero": string[]
  "Renault Sandero automatic": string[]
  "Renault Sandero manual": string[]
  "Renault Sandero-Stepway": string[]
  "Renault Sandero-Stepway automatic": string[]
  "Renault Sandero-Stepway manual": string[]
  "Renault Scala": string[]
  "Renault Scala 1600cc": string[]
  "Renault Scala E2": string[]
  "Renault Scala E4": string[]
  "Renault Scala convertible": string[]
  "Renault Sepand": string[]
  "Renault Symbol": string[]
  "Renault Symbol LE": string[]
  "Renault Symbol PE": string[]
  "Renault Symbol SE": string[]
  "Renault Talisman": string[]
  "Renault Talisman E2": string[]
  "Renault Talisman E3": string[]
  "Renault Tondar 90": string[]
  "Renault Tondar 90 E0-Bi-fuel": string[]
  "Renault Tondar 90 E0-petrol": string[]
  "Renault Tondar 90 E1-Bi-fuel": string[]
  "Renault Tondar 90 E1-petrol": string[]
  "Renault Tondar 90 E2-Bi-fuel": string[]
  "Renault Tondar 90 E2-petrol": string[]
  "Renault Tondar 90 automatic": string[]
  "Renault Tondar 90 plus": string[]
  "Renault Tondar 90 plus automatic": string[]
  "Renault Tondar 90 plus manual": string[]
  "Renault Tondar 90 station": string[]
  "Renault Van": string[]
  "Renault Van Traffic": string[]
  Respect: string[]
  "Respect Prime": string[]
  "Respect RESPECT II": string[]
  Rich: string[]
  "Rich Rich": string[]
  Rigan: string[]
  "Rigan Coupa": string[]
  "Rigan Coupa exclusive": string[]
  "Rigan Coupa flagship": string[]
  "Rigan Coupa royal": string[]
  Rollsroyce: string[]
  Runna: string[]
  "Runna EL": string[]
  "Runna LX": string[]
  "Runna Plus": string[]
  "Runna Plus P": string[]
  SWM: string[]
  "SWM G01": string[]
  "SWM G01 F": string[]
  Saina: string[]
  "Saina GX": string[]
  "Saina S": string[]
  "Saina automatic": string[]
  "Saina automatic EX": string[]
  "Saina automatic S": string[]
  "Saina manual": string[]
  "Saina manual EX": string[]
  "Saina manual G": string[]
  "Saina manual Plus": string[]
  "Saina manual S": string[]
  "Saina manual SX": string[]
  Saipa: string[]
  "Saipa Arya": string[]
  "Saipa Atlas E": string[]
  "Saipa Atlas G": string[]
  "Saipa Atlas L": string[]
  "Saipa Atlas S": string[]
  "Saipa Karvan Saipa": string[]
  "Saipa Sahand": string[]
  Samand: string[]
  "Samand EL": string[]
  "Samand EL Bi-fuel": string[]
  "Samand EL petrol": string[]
  "Samand LX": string[]
  "Samand LX EF7": string[]
  "Samand LX EF7-petrol": string[]
  "Samand LX basic": string[]
  "Samand SE": string[]
  "Samand Sarir": string[]
  "Samand Soren": string[]
  "Samand Soren ELX": string[]
  "Samand Soren ELX turbo": string[]
  "Samand Soren Plus": string[]
  "Samand Soren basic": string[]
  "Samand X7": string[]
  "Samand X7 Bi-fuel": string[]
  "Samand X7 petrol": string[]
  Seat: string[]
  "Seat Leon": string[]
  Shahin: string[]
  "Shahin G": string[]
  "Shahin G CVT": string[]
  "Shahin GL": string[]
  "Shahin Plus": string[]
  Sinad: string[]
  Smart: string[]
  "Smart Forfour": string[]
  "Smart Fortwo": string[]
  Soueast: string[]
  "Soueast DX-3": string[]
  SsangYong: string[]
  "SsangYong Actyon": string[]
  "SsangYong Chairman": string[]
  "SsangYong Korando": string[]
  "SsangYong Korando 2300cc": string[]
  "SsangYong Korando 3200cc": string[]
  "SsangYong Kyron": string[]
  "SsangYong Musso": string[]
  "SsangYong Musso (pick-up)": string[]
  "SsangYong Musso E23M1": string[]
  "SsangYong Musso E32M1": string[]
  "SsangYong Musso E32M3": string[]
  "SsangYong Rexton": string[]
  "SsangYong Rexton G4": string[]
  "SsangYong Rexton basic": string[]
  "SsangYong Rexton-ir": string[]
  "SsangYong Rexton-ir Emperor": string[]
  "SsangYong Rexton-ir G4": string[]
  "SsangYong Rodius": string[]
  "SsangYong Tivoli": string[]
  "SsangYong Tivoli armour": string[]
  "SsangYong Tivoli elite": string[]
  "SsangYong Tivoli sport": string[]
  "SsangYong Tivoli-IR": string[]
  "SsangYong Tivoli-IR Armour": string[]
  "SsangYong Tivoli-IR Fighter": string[]
  "SsangYong Tivoli-IR Solar": string[]
  "SsangYong Tivoli-IR Special": string[]
  "SsangYong new actyon": string[]
  "SsangYong new actyon comfort": string[]
  "SsangYong new actyon luxury": string[]
  "SsangYong new actyon prestige": string[]
  "SsangYong new-korando": string[]
  "SsangYong new-korando Optimum": string[]
  "SsangYong new-korando Premium": string[]
  "SsangYong new-korando Premium Plus": string[]
  Subaru: string[]
  "Subaru Forester": string[]
  "Subaru Legacy": string[]
  "Subaru Pickup": string[]
  "Subaru Way Wave": string[]
  "Subaru X7": string[]
  Suzuki: string[]
  "Suzuki BALENO": string[]
  "Suzuki Celerio": string[]
  "Suzuki Ciaz": string[]
  "Suzuki Dzire": string[]
  "Suzuki Fronx GLX": string[]
  "Suzuki Grand-Vitara": string[]
  "Suzuki Grand-Vitara automatic-2000cc": string[]
  "Suzuki Grand-Vitara manual-2000cc": string[]
  "Suzuki Grand-Vitara-ir": string[]
  "Suzuki Grand-Vitara-ir automatic-2000cc": string[]
  "Suzuki Grand-Vitara-ir automatic-2400cc": string[]
  "Suzuki Grand-Vitara-ir manual-2000cc": string[]
  "Suzuki Grand-Vitara-ir manual-2400cc": string[]
  "Suzuki Jimny": string[]
  "Suzuki Kizashi": string[]
  "Suzuki Kizashi automatic": string[]
  "Suzuki Kizashi manual": string[]
  "Suzuki S-PRESSO": string[]
  "Suzuki Swift": string[]
  Tara: string[]
  "Tara Automatic": string[]
  "Tara Manual": string[]
  "Tara V1 plus": string[]
  "Tara v4  LX": string[]
  Tiba: string[]
  "Tiba Hatchback": string[]
  "Tiba Hatchback EX": string[]
  "Tiba Hatchback Plus": string[]
  "Tiba Hatchback SX": string[]
  "Tiba Sedan": string[]
  "Tiba Sedan EX": string[]
  "Tiba Sedan EX Bi-fuel": string[]
  "Tiba Sedan LX Bi-fuel": string[]
  "Tiba Sedan Plus": string[]
  "Tiba Sedan SL": string[]
  "Tiba Sedan SX": string[]
  "Tiba Sedan SX Bi-fuel": string[]
  Tigard: string[]
  "Tigard X35": string[]
  Toyota: string[]
  "Toyota 4runner": string[]
  "Toyota Aurion": string[]
  "Toyota Aurion grand": string[]
  "Toyota Aurion sport": string[]
  "Toyota C-HR": string[]
  "Toyota C-HR Petrol Singledifferential": string[]
  "Toyota C-HR Petrol doubledifferential": string[]
  "Toyota C-HR hybrid": string[]
  "Toyota Camry": string[]
  "Toyota Camry Aurion": string[]
  "Toyota Camry GL": string[]
  "Toyota Camry GLX": string[]
  "Toyota Camry Grand-4 cylinder": string[]
  "Toyota Camry Grand-6 cylinder": string[]
  "Toyota Camry LE": string[]
  "Toyota Camry SE": string[]
  "Toyota Camry hybrid-LE": string[]
  "Toyota Camry hybrid-XLE": string[]
  "Toyota Camry manual": string[]
  "Toyota Carina": string[]
  "Toyota Celica": string[]
  "Toyota Corolla": string[]
  "Toyota Corolla GLI-2000cc": string[]
  "Toyota Corolla GLI-automatic-1800cc": string[]
  "Toyota Corolla GLI-manual-1800cc": string[]
  "Toyota Corolla SE-1600cc": string[]
  "Toyota Corolla XLI-2000cc": string[]
  "Toyota Corolla XLI-automatic-1800cc": string[]
  "Toyota Corolla XLI-manual-1800cc": string[]
  "Toyota Corona": string[]
  "Toyota Cressida": string[]
  "Toyota Crown": string[]
  "Toyota Echo": string[]
  "Toyota FJ Cruiser": string[]
  "Toyota Furtuner": string[]
  "Toyota GT86": string[]
  "Toyota GT86 automatic": string[]
  "Toyota GT86 manual": string[]
  "Toyota Hilux double cabin": string[]
  "Toyota Hilux double cabin automatic": string[]
  "Toyota Hilux double cabin high": string[]
  "Toyota Hilux double cabin high automatic": string[]
  "Toyota Hilux double cabin high manual": string[]
  "Toyota Hilux double cabin manual": string[]
  "Toyota Hilux single cabin": string[]
  "Toyota Landcruiser 2door": string[]
  "Toyota Landcruiser 2door 2F": string[]
  "Toyota Landcruiser 2door 3F": string[]
  "Toyota Landcruiser 4door": string[]
  "Toyota Landcruiser 4door 4000cc": string[]
  "Toyota Landcruiser 4door 4500cc": string[]
  "Toyota Landcruiser 4door 4700cc": string[]
  "Toyota Landcruiser 4door 5700cc": string[]
  "Toyota Pickup": string[]
  "Toyota Pickup Land Cruiser-Pickup-Double cabin 3F": string[]
  "Toyota Pickup Land Cruiser-Pickup-Double cabin 4.5F": string[]
  "Toyota Pickup Land Cruiser-Pickup-Single cabin 4.5F": string[]
  "Toyota Pickup Land Cruiser-Pickup-single cabin 2F": string[]
  "Toyota Pickup Land Cruiser-Pickup-single cabin 3F": string[]
  "Toyota Prado 2door": string[]
  "Toyota Prado 2door 4 cylinder": string[]
  "Toyota Prado 2door 6 cylinder": string[]
  "Toyota Prado 4door": string[]
  "Toyota Prado 4door 4 cylinder": string[]
  "Toyota Prado 4door 6 cylinder": string[]
  "Toyota Prado 4door 6 cylinder-off road": string[]
  "Toyota Prado 4door 6 cylinder-on road": string[]
  "Toyota Prius": string[]
  "Toyota Prius 2": string[]
  "Toyota Prius 3": string[]
  "Toyota Prius A": string[]
  "Toyota Prius B": string[]
  "Toyota Prius C": string[]
  "Toyota Rav4": string[]
  "Toyota Solara": string[]
  "Toyota Supra": string[]
  "Toyota Van": string[]
  "Toyota Van Hiace": string[]
  "Toyota Van Previa": string[]
  "Toyota Yaris Hatchback": string[]
  "Toyota Yaris Hatchback 1300cc": string[]
  "Toyota Yaris Hatchback 1500cc": string[]
  "Toyota Yaris Hatchback Hybrid": string[]
  "Toyota Yaris Sedan": string[]
  "Toyota Yaris Sedan 1300cc": string[]
  "Toyota Yaris Sedan 1500cc": string[]
  "Toyota corolla 1200": string[]
  "Toyota corolla 1500": string[]
  Uaz: string[]
  "Uaz Patriot": string[]
  "Uaz Pickup": string[]
  VGV: string[]
  "VGV U75 PLUS": string[]
  Venucia: string[]
  "Venucia Big V": string[]
  "Venucia D 60 Plus": string[]
  "Venucia D60EV Plus": string[]
  "Venucia Star": string[]
  "Venucia V-Online DD-i": string[]
  Volkswagen: string[]
  "Volkswagen Beetle": string[]
  "Volkswagen Beetle Coupe": string[]
  "Volkswagen Beetle convertible": string[]
  "Volkswagen Caddy": string[]
  "Volkswagen Gol": string[]
  "Volkswagen Golf": string[]
  "Volkswagen Golf GTI": string[]
  "Volkswagen Golf basic": string[]
  "Volkswagen Jetta VS5": string[]
  "Volkswagen Passat": string[]
  "Volkswagen Pickup": string[]
  "Volkswagen Tiguan": string[]
  "Volkswagen Van": string[]
  "Volkswagen Van Caddy": string[]
  "Volkswagen Van T2": string[]
  "Volkswagen Van T2 Camper": string[]
  "Volkswagen Van T3": string[]
  "Volkswagen Van Transporter": string[]
  "Volkswagen jetta": string[]
  "Volkswagen jetta VS7": string[]
  Volvo: string[]
  "Volvo C30": string[]
  "Volvo C70": string[]
  "Volvo C70 convertible": string[]
  "Volvo V40": string[]
  "Volvo V40 R-Design": string[]
  "Volvo V40 R-Design-Plus": string[]
  "Volvo XC60": string[]
  "Volvo XC60 R-Design": string[]
  "Volvo XC60 T5": string[]
  "Volvo XC90": string[]
  "Volvo XC90 Inscription": string[]
  "Volvo XC90 Momentum": string[]
  "Volvo XC90 R-Design": string[]
  XTRIM: string[]
  "XTRIM Xtrim (EXEED) LX": string[]
  "XTRIM Xtrim (EXEED) TXL": string[]
  "XTRIM Xtrim (EXEED) VX": string[]
  ZX_AUTO: string[]
  "ZX_AUTO G9": string[]
  Zamyad: string[]
  "Zamyad Dorka": string[]
  "Zamyad Karoon": string[]
  "Zamyad Padra": string[]
  "Zamyad Padra Plus": string[]
  "Zamyad Shooka": string[]
  "Zamyad Z 24": string[]
  "Zamyad Z 24 Bi-fuel": string[]
  "Zamyad Z 24 Bi-fuel Optional": string[]
  "Zamyad Z 24 Optional": string[]
  "Zamyad Z 24 Petrol": string[]
  "Zamyad Z 24 Petrol Optional": string[]
  "Zamyad Z 24 diesel": string[]
  "Zamyad Z 28": string[]
  "Zamyad Z28": string[]
  "Zamyad Zagros": string[]
  Zotye: string[]
  "Zotye DL5": string[]
  "Zotye Z300-im": string[]
  inroads: string[]
  "inroads Van C35": string[]
  other: string[]
}

export interface Value15 {
  items: Items7
}

export interface Items7 {}

export interface BrandModelManufacturerOrigin2 {
  "ui:field": string
  "ui:options": UiOptions4
  urischema: Urischema3
  value: Value16
}

export interface UiOptions4 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema3 {
  display: Display3
}

export interface Display3 {
  domestic: string[]
  foreign: string[]
}

export interface Value16 {
  "ui:options": UiOptions5
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions5 {}

export interface BusinessType2 {
  "ui:field": string
  "ui:options": UiOptions6
  urischema: Urischema4
  value: Value17
}

export interface UiOptions6 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema4 {
  display: Display4
}

export interface Display4 {
  "car-business": string[]
  personal: string[]
}

export interface Value17 {
  "ui:options": UiOptions7
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions7 {
  "postfix-label": string
}

export interface Category3 {
  "ui:field": string
  "ui:options": UiOptions8
  urischema: Urischema5
  value: Value18
}

export interface UiOptions8 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema5 {
  display: Display5
  order: number
}

export interface Display5 {
  CCTV: string[]
  ROOT: string[]
  accessories: string[]
  "accounting-and-finance": string[]
  "accounting-finance-legal": string[]
  "administration-and-hr": string[]
  "air-conditioning-fan-coil": string[]
  animals: string[]
  "antiques-and-art": string[]
  "apartment-rent": string[]
  "apartment-sell": string[]
  appliance: string[]
  "artificial-flower": string[]
  "audio-video": string[]
  "baby-and-toys": string[]
  "ball-sports": string[]
  "barbershop-and-beautysalon": string[]
  batch: string[]
  "bathroom-accessories": string[]
  "bathroom-wc-sauna": string[]
  bathrooms: string[]
  "beauty-and-haircare": string[]
  "bed-pillow-blanket": string[]
  "bed-service": string[]
  "bed-sheet": string[]
  "beds-bedroom": string[]
  bicycle: string[]
  birds: string[]
  boat: string[]
  "book-student-literature": string[]
  "bookcase-shelf": string[]
  "buffet-showcases": string[]
  "building-and-garden": string[]
  "building-equipment": string[]
  "bus-metro-train": string[]
  businesses: string[]
  "cafe-and-restaurant": string[]
  "camera-camcoders": string[]
  "camping-outdoor": string[]
  "car-and-motor": string[]
  "care-health-beauty": string[]
  carpet: string[]
  "carpet-moquette": string[]
  carpets: string[]
  cars: string[]
  cat: string[]
  catering: string[]
  "chair-bench": string[]
  chandeliers: string[]
  "child-car-seat": string[]
  "childrens-clothing-and-shoe": string[]
  "childrens-furniture": string[]
  classic: string[]
  cleaning: string[]
  "cleaning-supplies": string[]
  "clothes-rack": string[]
  clothing: string[]
  "clothing-and-shoes": string[]
  "coin-stamp": string[]
  "commercial-rent": string[]
  "commercial-sell": string[]
  community: string[]
  "computer-and-it": string[]
  "computer-and-mobile": string[]
  computers: string[]
  concert: string[]
  "conference-meeting": string[]
  "construction-craft": string[]
  "container-organizers": string[]
  containers: string[]
  "cooking-utensils": string[]
  "cookware-tableware": string[]
  crafts: string[]
  craftsmen: string[]
  "curtains-table-cover": string[]
  decoration: string[]
  desk: string[]
  desktops: string[]
  "detergent-tissue": string[]
  "dining-table": string[]
  dishwasher: string[]
  "diving-watersports": string[]
  dog: string[]
  "drink-maker": string[]
  "drums-percussion": string[]
  education: string[]
  educational: string[]
  "electronic-devices": string[]
  "equipments-and-machinery": string[]
  event: string[]
  "events-sports": string[]
  "fan-ventilator-humidifier": string[]
  "farm-animals": string[]
  figurines: string[]
  fish: string[]
  fishing: string[]
  "food-and-drink": string[]
  "food-mill": string[]
  "for-sale": string[]
  "for-the-home": string[]
  furniture: string[]
  "furniture-and-home-decore": string[]
  "furniture-wood": string[]
  "game-consoles-and-video-games": string[]
  "garden-and-landscaping": string[]
  "garden-and-patio": string[]
  "garden-tools": string[]
  "gift-certificate": string[]
  "guitar-bass-amplifier": string[]
  "health-beauty": string[]
  heavy: string[]
  historical: string[]
  "historical-objects": string[]
  "hobby-collectibles": string[]
  "home-catering": string[]
  "home-kitchen": string[]
  "home-lighting": string[]
  "horses-equestrian": string[]
  "house-villa-rent": string[]
  "house-villa-sell": string[]
  industrial: string[]
  "industrial-machinery": string[]
  "industrial-technology": string[]
  "industry-agriculture-business-rent": string[]
  "industry-agriculture-business-sell": string[]
  "instrument-cleaning-tailoring": string[]
  "janitorial-cleaning": string[]
  jewelry: string[]
  "jewelry-and-watches": string[]
  jobs: string[]
  juicers: string[]
  kitchen: string[]
  "kitchen-utensils": string[]
  lamps: string[]
  lampshade: string[]
  laptops: string[]
  "leisure-hobbies": string[]
  "leisure-hobbies-toys": string[]
  light: string[]
  lighting: string[]
  literary: string[]
  "lost-and-found": string[]
  "lost-animals": string[]
  "lost-things": string[]
  "lumbar-pillow": string[]
  magazines: string[]
  mat: string[]
  mattress: string[]
  "media-advertising": string[]
  "medical-equipment": string[]
  "microwave-stove": string[]
  mirror: string[]
  "mobile-phones": string[]
  "mobile-tablet": string[]
  "mobile-tablet-accessories": string[]
  "modem-and-network-equipment": string[]
  moquette: string[]
  motorcycles: string[]
  "movies-and-music": string[]
  "mp3-player": string[]
  "musical-instruments": string[]
  "natural-plants": string[]
  "office-decoration": string[]
  "office-rent": string[]
  "office-sell": string[]
  offices: string[]
  "other-appliances": string[]
  "oven-baking-appliances": string[]
  "paintings-picture": string[]
  partnership: string[]
  "parts-accessories": string[]
  "parts-and-accessories": string[]
  personal: string[]
  "personal-toys": string[]
  phone: string[]
  "phone-desk": string[]
  "piano-keyboard": string[]
  "pictorial-carpet": string[]
  "plot-old": string[]
  "pot-kettle": string[]
  presell: string[]
  "printer-scaner-copier": string[]
  "range-hood": string[]
  "real-estate": string[]
  "real-estate-services": string[]
  "refrigerator-freezer": string[]
  religious: string[]
  rental: string[]
  "repair-tool": string[]
  reptile: string[]
  research: string[]
  "residential-rent": string[]
  "residential-sell": string[]
  rhinestones: string[]
  "rodents-rabbits": string[]
  "rubber-carpet": string[]
  "rugs-woolen-cloth": string[]
  "sales-marketing": string[]
  services: string[]
  "sewing-accessories": string[]
  "sewing-knitting": string[]
  "sewing-machine": string[]
  "shoe-rack-drawer": string[]
  "shoes-belt-bag": string[]
  "shop-and-cash": string[]
  "shop-rent": string[]
  "shop-restaurant": string[]
  "shop-sell": string[]
  "sim-card": string[]
  "sleep-goods": string[]
  "sofa-armchair": string[]
  sport: string[]
  "sport-leisure": string[]
  stationery: string[]
  "steam-iron": string[]
  "stereo-surround": string[]
  storage: string[]
  "stove-and-heating": string[]
  "stoves-heaters-fireplaces": string[]
  "strollers-and-accessories": string[]
  "suite-apartment": string[]
  tablecloths: string[]
  "tables-and-chairs": string[]
  tablet: string[]
  teaching: string[]
  "temporary-rent": string[]
  "textile-ornaments": string[]
  "theatre-and-cinema": string[]
  ticket: string[]
  "tickets-sports": string[]
  toolbox: string[]
  "tools-materials-equipment": string[]
  traditional: string[]
  training: string[]
  transport: string[]
  transportation: string[]
  "travel-packages": string[]
  "tv-projector": string[]
  "tv-stand": string[]
  "utensils-and-appliances": string[]
  utility: string[]
  "vacuums-cleaner": string[]
  vehicles: string[]
  "ventilation-cooling-heating": string[]
  "video-dvdplayer": string[]
  villa: string[]
  violins: string[]
  volunteers: string[]
  "wall-clock": string[]
  "washer-dryer": string[]
  "washing-cleaning": string[]
  "washing-machines": string[]
  watches: string[]
  "water-cooler": string[]
  "water-cooler-refinery": string[]
  "water-heater-package-radiator": string[]
  "wc-accessories": string[]
  wind: string[]
  "winter-sports": string[]
  "work-equipment": string[]
  workspace: string[]
  "yarn-lights": string[]
}

export interface Value18 {
  "ui:options": UiOptions9
}

export interface UiOptions9 {
  "default-text": string
}

export interface ChassisStatus2 {
  "ui:field": string
  "ui:options": UiOptions10
  urischema: Urischema6
  value: Value19
}

export interface UiOptions10 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema6 {
  display: Display6
}

export interface Display6 {
  "back-damage": string[]
  "back-damage-front-paint": string[]
  "back-paint": string[]
  "both-damage": string[]
  "both-healthy": string[]
  "both-paint": string[]
  "front-damage": string[]
  "front-damage-back-paint": string[]
  "front-paint": string[]
}

export interface Value19 {
  "ui:options": UiOptions11
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions11 {
  "postfix-label": string
}

export interface Cities2 {
  "ui:options": UiOptions12
  "ui:widget": string
}

export interface UiOptions12 {
  "is-advanced": boolean
  "parent-category-slug": string
}

export interface Color2 {
  "ui:field": string
  "ui:options": UiOptions13
  value: Value20
}


export interface UiOptions13 {
  data: Data3
  data_title: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  pinned_data: PinnedData
  pinned_data_title: string
  search: Search3
}

export interface Data3 {
  children: Children4[]
  enum: string
  enumName: string
}

export interface Children4 {
  children: any[]
  enum: string
  enumName: string
  iconUrl: string
}

export interface PinnedData {
  children: Children5[]
  enum: string
  enumName: string
}

export interface Children5 {
  children: any[]
  enum: string
  enumName: string
  iconUrl: string
}

export interface Search3 {
  enabled: boolean
}


export interface Value20 {}

export interface Divider2 {
  "ui:field": string
}

export interface Exchange2 {
  "ui:field": string
  "ui:options": UiOptions14
  urischema: Urischema8
  value: Value21
}

export interface UiOptions14 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema8 {
  display: Display8
}

export interface Display8 {
  "exclude-exchanges": string[]
  "only-exchanges": string[]
}

export interface Value21 {
  "ui:options": UiOptions15
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions15 {}

export interface FuelType2 {
  "ui:field": string
  "ui:options": UiOptions16
  urischema: Urischema9
  value: Value22
}

export interface UiOptions16 {
  "display-text-format": string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema9 {
  display: Display9
}

export interface Display9 {
  benzine: string[]
  "company-hybrid": string[]
  gasoline: string[]
  "manual-hybrid": string[]
}

export interface Value22 {
  items: Items8
  "ui:options": UiOptions17
  "ui:placeholder": string
  "ui:title": string
  "ui:widget": string
}

export interface Items8 {}

export interface UiOptions17 {}

export interface Gearbox2 {
  "ui:field": string
  "ui:options": UiOptions18
  urischema: Urischema10
  value: Value23
}

export interface UiOptions18 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema10 {
  display: Display10
}

export interface Display10 {
  automatic: string[]
  manual: string[]
}

export interface Value23 {
  "ui:options": UiOptions19
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions19 {
  "postfix-label": string
}

export interface HasPhoto2 {
  "ui:options": UiOptions20
  "ui:widget": string
}

export interface UiOptions20 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface InstallmentSale2 {
  "ui:field": string
  "ui:options": UiOptions21
  urischema: Urischema11
  value: Value24
}

export interface UiOptions21 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema11 {
  display: Display11
}

export interface Display11 {
  cash: string[]
  instalment: string[]
}

export interface Value24 {
  "ui:options": UiOptions22
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions22 {
  "postfix-label": string
}

export interface MotorStatus2 {
  "ui:field": string
  "ui:options": UiOptions23
  urischema: Urischema12
  value: Value25
}

export interface UiOptions23 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema12 {
  display: Display12
}

export interface Display12 {
  healthy: string[]
  "needs-repair": string[]
  replaced: string[]
}

export interface Value25 {
  "ui:options": UiOptions24
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions24 {
  "postfix-label": string
}

export interface Price2 {
  max: Max5
  min: Min5
  "ui:field": string
  "ui:options": UiOptions27
  "ui:order": string[]
}

export interface Max5 {
  enum: number[]
  enumNames: string[]
  "ui:options": UiOptions25
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions25 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "postfix-label": string
}

export interface Min5 {
  enum: number[]
  enumNames: string[]
  "ui:options": UiOptions26
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions26 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "overlay-label": string
  "postfix-label": string
}

export interface UiOptions27 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface ProductionYear2 {
  max: Max6
  min: Min6
  "ui:field": string
  "ui:options": UiOptions30
  "ui:order": string[]
}

export interface Max6 {
  enum: number[]
  enumNames: string[]
  "ui:options": UiOptions28
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions28 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "overlay-label": string
  "postfix-label": string
}

export interface Min6 {
  enum: number[]
  enumNames: string[]
  "ui:options": UiOptions29
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions29 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "postfix-label": string
}

export interface UiOptions30 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Query2 {
  "ui:options": UiOptions31
  "ui:widget": string
}

export interface UiOptions31 {
  "is-advanced": boolean
  "parent-category-slug": string
}

export interface Sort2 {
  "ui:field": string
  "ui:options": UiOptions32
  "ui:title": string
  "ui:widget": string
  urischema: Urischema13
  value: Value26
}

export interface UiOptions32 {
  display_text_format: string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Urischema13 {
  display: Display13
}

export interface Display13 {
  cheapest: string[]
  most_expensive: string[]
  sort_date: string[]
}

export interface Value26 {
  "ui:options": UiOptions33
  "ui:placeholder": string
  "ui:title": string
  "ui:widget": string
}

export interface UiOptions33 {}

export interface ThirdPartyInsuranceDeadline2 {
  max: Max7
  min: Min7
  "ui:field": string
  "ui:options": UiOptions36
  "ui:order": string[]
}

export interface Max7 {
  enum: string[]
  enumNames: string[]
  "ui:options": UiOptions34
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions34 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "overlay-label": string
  "postfix-label": string
}

export interface Min7 {
  enum: string[]
  enumNames: string[]
  "ui:options": UiOptions35
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions35 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "postfix-label": string
}

export interface UiOptions36 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface UiGroup {}

export interface Urgent2 {
  "ui:options": UiOptions37
  "ui:widget": string
}

export interface UiOptions37 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface Usage3 {
  max: Max8
  min: Min8
  "ui:field": string
  "ui:options": UiOptions40
  "ui:order": string[]
}

export interface Max8 {
  enum: number[]
  enumNames: string[]
  "ui:options": UiOptions38
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions38 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "postfix-label": string
}

export interface Min8 {
  enum: number[]
  enumNames: string[]
  "ui:options": UiOptions39
  "ui:placeholder": string
  "ui:widget": string
}

export interface UiOptions39 {
  label: string
  "manual-input-button-label": string
  "not-set-value": string
  "overlay-label": string
  "postfix-label": string
}

export interface UiOptions40 {
  "display-text-format": string
  icon: string
  "is-advanced": boolean
  label: string
  "parent-category-slug": string
  "post-set-label": string
}

export interface RootCat {
  name: string
  icon: string
  icon_dark: string
  id: number
  slug: string
  second_slug: string
  children: Children6[]
  parent: string
  second_name: string
  url: Url4
}

export interface Children6 {
  name: string
  icon: string
  icon_dark: string
  id: number
  slug: string
  second_slug: string
  children: Children7[]
  parent: string
  second_name: string
  url: Url3
}

export interface Children7 {
  name: string
  icon: string
  icon_dark: string
  id: number
  slug: string
  second_slug: string
  children: Children8[]
  parent: string
  second_name: string
  url: Url2
}

export interface Children8 {
  name: string
  icon: string
  icon_dark: string
  id: number
  slug: string
  second_slug: string
  children: any[]
  parent: string
  second_name: string
  url: Url
}

export interface Url {
  display: string
  order: number
}

export interface Url2 {
  display: string
  order: number
}

export interface Url3 {
  display: string
  order: number
}

export interface Url4 {
  display: string
  order: number
}

export interface ActionLogs {}

export interface Category4 {
  slug: string
}

export interface Filters {
  cities: string[]
  category: Category5
  usage: Usage4
}

export interface Category5 {
  value: string
}

export interface Usage4 {
  max: number
  min: number
}

export interface SearchData {
  query: string
  page: string
  formData: FormData
}

export interface FormData {}

export interface NavBar {
  hasSubmit: boolean
  hasChat: boolean
  hasSearch: boolean
  hasCategories: boolean
  hasSelectCity: boolean
  shouldShowShadow: boolean
}

export interface Note {
  hasNote: boolean
}

export interface DefaultReducer {
  cityChanged: boolean
  isSearchEngine: boolean
  ip: string
  realIP: string
  isWebView: boolean
  error: any
  isSubmitModalOpen: boolean
  isPWAModalOpen: boolean
}

export interface CurrentPost {
  renderPostSuccess: boolean
  reportReasonsSuccess: boolean
  reportReasons: any
  sourceType: string
  getContactBlocked: boolean
  getContactBlockedError: any
  post: Post
  hasError: boolean
  isReportModalOpen: boolean
}

export interface Post {
  loading: boolean
}

export interface CarInspectionReport {
  loading: boolean
  report: any
}

export interface StaticPage {
  pages: Pages
  currentPage: string
  getStaticSuccess: boolean
}

export interface Pages {}

export interface HttpError {
  is404: boolean
  is301: boolean
  is302: boolean
}

export interface Captcha {
  source: any
  modalEnable: boolean
  captchaKey: any
  base64Image: any
  captchaToken: any
  error: any
  solved: boolean
  onSolve: any
  onEscape: any
  isLoading: boolean
}

export interface Auth {
  source: any
  authModalShow: boolean
  error: any
  confirmSent: boolean
  captcha: boolean
  loading: boolean
  canReplacePhone: boolean
  resendEnabled: boolean
  requiredUserType: any
}

export interface User {
  token: any
  appellantUUID: any
  isLoggedIn: boolean
  data: Data4
  business: Business
  showConnectionBanner: boolean
  showIosInstallationBanner: boolean
  isLogoutConfirmationAlertOpen: boolean
  isBlacklisted: any
}

export interface Data4 {}

export interface Business {
  loading: boolean
  hasError: boolean
}

export interface Dealership {
  loadingData: boolean
  loadingPosts: boolean
  dataError: any
  postsError: any
  data: any
  posts: Posts
}

export interface Posts {
  list: any[]
  lastPostDate: any
  hasMore: boolean
}

export interface RealEstate {
  isActive: boolean
  loading: boolean
  pageLoading: boolean
  filterLoading: boolean
  page: Page
  header: Header
  seoDetails: SeoDetails2
}

export interface Page {}

export interface Header {}

export interface SeoDetails2 {}

export interface ContactTerms {
  data: any
  loading: boolean
}

export interface CarPrices {
  data: any
  query: any
  pinnedWidgets: any[]
}

export interface CarPricesBrand {
  brand: any
  result: any
}

export interface CarSpecsHome {
  data: any
  query: any
}

export interface CarSpecsAllBrands {
  data: any
  query: any
}

export interface CarSpecsModel {
  params: any
  dataStatus: string
}

export interface CarSpecsBrand {
  brand: any
  dataStatus: string
}

export interface CarDealersList {
  data: any
  query: any
}

export interface MobilePrices {
  data: any
  query: any
  pinnedWidgets: any[]
  error: any
}

export interface MobileBrands {
  data: any
  query: any
}

export interface MobileBrand {
  brand: any
  hasError: boolean
}

export interface MobileModel {
  params: any
  hasError: boolean
}

export interface City {
  citySlug: string
  city: City2
  shouldSelectCity: boolean
  cities: any[]
  topCities: string[]
  places: Places
  compressedData: any[][]
}

export interface City2 {
  id: number
  name: string
  slug: string
}

export interface Places {}

export interface Marketplace {
  isLoading: boolean
  hasError: boolean
  data: any
}

export interface MarketplaceList {
  loading: boolean
}

export interface EmployerProfile {
  isLoading: boolean
  error: any
  data: any
}

export interface JobsApply {
  isEnabled: boolean
  hasIndicator: boolean
  cached: boolean
}

export interface History {
  length: number
}

export interface Chat {
  hasUnread: boolean
}

export interface Shared {
  data: Data5
  recentLoadedKeys: any[]
}

export interface Data5 {}

export interface MultiCity {
  data: Data6
  selectedCities: SelectedCity[]
  prevSelectedCities: any[]
  subtitle: string
  shouldShowCityTooltip: boolean
  onClose: any
}

export interface Data6 {
  title: string
  children: Children9[]
}

export interface Children9 {
  id: number
  name: string
  slug: string
  children: Children10[]
}

export interface Children10 {
  id: number
  name: string
  slug: string
  parent: number
  relativeChildren?: RelativeChildren[]
  isProvince?: boolean
}

export interface RelativeChildren {
  id: number
  name: string
  slug: string
}

export interface SelectedCity {
  id: number
  name: string
  slug: string
  parent: number
  relativeChildren: any
  isProvince: any
}

export interface Widgets {
  postRow: PostRow
}

export interface PostRow {
  selectedPosts: any[]
}

export interface ModalPage {
  isOpen: boolean
  submitLoading: boolean
  lastRequest: any
  submissionButton: any
  history: any[]
  requestCache: RequestCache
  currentPageIndex: number
}

export interface RequestCache {}

export interface Language {}

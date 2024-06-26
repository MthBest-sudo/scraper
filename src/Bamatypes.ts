export interface tel_Root {
  status: boolean
  errors: any[]
  metadata: any
  data: tel_Data
}

export interface tel_Data {
  phone: any
  mobile: string[]
}

export interface Root {
    metadata: Metadata
    status: boolean

    errors: any[]
    data: Data
  }
  
  export interface Metadata {
    total_count: number
    total_pages: number
    current_page: number
    has_next: boolean
    has_previous: boolean
  }
  
  export interface Data {
    url: string
    ads: Ad[]
    banner: any
    prices: any
    metadata: Metadata3
    breadcrump: Breadcrump2
    pillar_content: any
  }
  
  export interface Ad {
    type: string
    detail?: Detail
    specs?: Specs
    dealer: any
    price?: Price
    images?: Image[]
    metadata?: Metadata2
    breadcrump?: Breadcrump
    banner?: Banner
    promotion: any
    similarity: any
  }
  
  export interface Detail {
    type: string
    code: string
    rank: number
    badge: boolean
    pin: boolean
    url: string
    title: string
    subtitle: string
    trim: string
    time: string
    year: string
    mileage: string
    location: string
    specialcase: any
    transmission: string
    fuel: string
    color: string
    body_color: string
    inside_color: string
    body_status: string
    description?: string
    authenticated: boolean
    body_type: string
    body_type_fa: string
    cylinder_fa: string
    image_count: number
    image?: string
    modified_date: string
  }
  
  export interface Specs {
    volume?: string
    engine?: string
    acceleration?: string
    fuel?: string
    battery_capacity: any
    all_electric_range: any
    url_price?: string
    url_review?: string
  }
  
  export interface Price {
    type: string
    price: string
    prepayment: string
    payment: string
    prepayment_primary: string
    prepayment_secondary: string
    payment_primary: string
    month_number: number
    installments: number
    delivery_days: number
  }
  
  export interface Image {
    large: string
    small: string
    thumb: string
    pinkie: string
  }
  
  export interface Metadata2 {
    title_tag: string
    keywords: string
    description: string
    canonical: string
    noindex: boolean
  }
  
  export interface Breadcrump {
    links: Link[]
  }
  
  export interface Link {
    title: string
    url?: string
  }
  
  export interface Banner {
    type: string
    position: number
    title: string
    href: string
    aspect_ratio_desktop: number
    aspect_ratio_mobile: number
    mobile_large: string
    large_url: string
  }
  
  export interface Metadata3 {
    title: string
    title_sec: string
    title_tag: string
    keywords: string
    description: string
    canonical: string
    noindex: boolean
  }
  
  export interface Breadcrump2 {
    links: Link2[]
  }
  
  export interface Link2 {
    title: string
    url?: string
  }
  
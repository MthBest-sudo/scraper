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

export type Root = {
  metadata: {
    total_count: number
    total_pages: number
    current_page: number
    has_next: boolean
    has_previous: boolean
  }
  status: boolean
  errors: Array<any>
  data: {
    url: string
    ads: Array<{
      type: string
      detail: {
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
      specs: {
        volume?: string
        engine?: string
        acceleration?: string
        fuel?: string
        battery_capacity: any
        all_electric_range: any
        url_price?: string
        url_review?: string
      }
      dealer: any
      price: {
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
      images?: Array<{
        large: string
        small: string
        thumb: string
        pinkie: string
      }>
      metadata: {
        title_tag: string
        keywords: string
        description: string
        canonical: string
        noindex: boolean
      }
      breadcrump: {
        links: Array<{
          title: string
          url?: string
        }>
      }
      banner: any
      promotion: any
      similarity: any
      authenticity: any
    }>
    banner: any
    prices: any
    metadata: {
      title: string
      title_sec: string
      title_tag: string
      keywords: string
      description: string
      canonical: string
      noindex: boolean
    }
    breadcrump: {
      links: Array<{
        title: string
        url?: string
      }>
    }
    pillar_content: any
  }
}

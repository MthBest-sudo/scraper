export type divar_res= {
  nb: {
    listTopWidgets: Array<{
      widgetType: string
      "@type"?: string
      title?: string
      icon?: {
        image_url_dark: string
        image_url_light: string
        icon_name: string
        icon_color: string
      }
      items?: Array<{
        title: string
        action: {
          type: string
          payload: {
            "@type": string
            search_data: {
              form_data: {
                data: {
                  category: {
                    str: {
                      value: string
                    }
                  }
                  sort: {
                    str: {
                      value: string
                    }
                  }
                  usage: {
                    number_range: {
                      minimum: string
                      maximum: string
                    }
                  }
                }
              }
            }
            source_view: string
            source_view_str: string
          }
        }
      }>
      KEY_PROP_NAME: string
      visibilityConditions: Array<any>
      text?: string
    }>
    listWidgets: Array<{
      type: string
      data: {
        widgetType: string
        title: string
        topDescription: string
        middleDescription: string
        bottomDescription: string
        hasChat?: boolean
        tag: {}
        badge: {}
        action: {
          as: string
          props: {
            to: string
          }
        }
        actionLog: {
          server_side_info: {
            item_type: {
              type: string
            }
            info: {
              "@type": string
              post_token: string
              index: number
              post_type: string
              list_type: string
              source_page: string
              extra_data: {
                "@type": string
                jli: {
                  category: {
                    value: string
                  }
                  cities: Array<string>
                  sort: {
                    value: string
                  }
                  usage: {
                    max: number
                    min: number
                  }
                }
                search_data: {
                  form_data_json: string
                  cities: Array<string>
                }
              }
            }
          }
          enabled: boolean
        }
        KEY_PROP_NAME: string
        visibilityConditions: Array<any>
        loadingSrc: string
        image?: string
        redText?: string
      }
    }>
    listBottomWidgets: Array<any>
    sidebarTopWidgets: Array<any>
    sidebarBottomWidgets: Array<any>
    filterChips: Array<any>
    seo: {
      title: string
      description: string
      headline: string
      next: string
      web_url: string
      android_url: string
      robots: {
        follow: boolean
      }
      breadcrumb: Array<{
        name: string
        url?: string
      }>
    }
    actionLog: {
      server_side_info: {
        item_type: {
          type: string
        }
        info: {
          "@type": string
          cities: Array<string>
          current_tab: string
          search_data: {
            form_data_json: string
            cities: Array<string>
          }
          tokens: Array<string>
          has_next_page: boolean
          last_post_date_epoch: string
          search_id: string
          source_view: string
          posts_metadata: Array<{
            token: string
            sort_date: string
            source: string
          }>
          jli: {
            category: {
              value: string
            }
            cities: Array<string>
            sort: {
              value: string
            }
            usage: {
              max: number
              min: number
            }
          }
        }
      }
      enabled: boolean
    }
    searchBarConfig: {
      bookmark: {
        toggle_action_log: {
          server_side_info: {
            item_type: {
              type: string
            }
          }
          enabled: boolean
        }
        enabled: boolean
      }
    }
    pagination: {
      hasMore: boolean
      data: {
        "@type": string
        last_post_date: string
        page: number
        layer_page: number
      }
    }
    isLoading: boolean
    isLoadingMore: boolean
    isPullingToRefresh: boolean
    lastFetchedLocation: {
      pathname: string
      search: string
    }
    filtersPage: {
      title: string
      actionText: string
      widgetList: Array<{
        uid: string
        widgetType: string
        widgetList: Array<{
          uid: string
          size?: string
          hasDivider: boolean
          placeholder?: string
          modalTitle?: string
          search?: {
            type: string
            data?: {
              fieldKey: string
              searchKey: string
              source: string
              minQueryLength: number
              placeholder: string
            }
          }
          root?: {
            name: string
            children: Array<{
              id: string
              name: string
              iconUrl?: {
                light: string
                dark: string
              }
              relativeChildren: any
              children?: Array<{
                id: string
                name: string
                iconUrl?: {
                  light: string
                  dark: string
                }
                parent: string
                relativeChildren?: Array<{
                  id: string
                  name: string
                  children?: Array<{
                    id: string
                    name: string
                    parent: string
                    relativeChildren?: Array<{
                      id: string
                      name: string
                    }>
                  }>
                }>
                children?: Array<{
                  id: string
                  name: string
                  parent: string
                  relativeChildren?: Array<{
                    id: string
                    name: string
                  }>
                }>
              }>
              parent?: string
            }>
            id?: string
          }
          commonOptions?: Array<{
            id: string
            name: string
            iconUrl: {
              light: string
              dark: string
            }
          }>
          widgetType: string
          keysTypeMap: {
            brand_model?: string
            brand_model_manufacturer_origin?: string
            color?: string
            price?: string
            exchange?: string
            "production-year"?: string
            usage?: string
            body_status?: string
            chassis_status?: string
            fuel_type?: string
            gearbox?: string
            motor_status?: string
            installment_sale?: string
            third_party_insurance_deadline?: string
            "has-photo"?: string
            urgent?: string
            "business-type"?: string
          }
          field: {
            key: string
            validators: Array<any>
            defaultValue: any
          }
          KEY_PROP_NAME: string
          visibilityConditions: Array<any>
          options?: Array<{
            value: string
            display?: string
            label?: string
          }>
          small?: boolean
          suffix?: string
          ranges?: {
            minimum: {
              clearable: boolean
              options: Array<{
                value: string
                display: string
              }>
              title: string
              placeholder: string
              manualInputLabel?: string
              manualInputPosition?: string
            }
            maximum: {
              clearable: boolean
              options: Array<{
                value: string
                display: string
              }>
              title: string
              placeholder: string
              manualInputLabel?: string
              manualInputPosition?: string
            }
          }
          clearable?: boolean
          title?: string
        }>
        keys: Array<string>
        title: string
        hasDivider: boolean
        defaultExpanded: boolean
        clearable: boolean
        KEY_PROP_NAME: string
        visibilityConditions: Array<any>
      }>
      isLoading: boolean
    }
    searchBar: {
      bookmark: {
        toggle_action_log: {
          server_side_info: {
            item_type: {
              type: string
            }
          }
          enabled: boolean
        }
        enabled: boolean
      }
    }
    fabButton: any
    searchId: string
  }
  browse: {
    items: Array<any>
    seoDetails: {}
    suggestionList: Array<any>
    lastPostDate: number
    logPostDate: number
    page: number
    searchSuggestions: Array<any>
    postListWillLoad: boolean
    requestUrl: any
    dataWillFetch: boolean
    errors: {}
    linkedDataRequirements: {}
    internalLinkSections: any
    UNSAFE_hideFilterChips: boolean
    toolbox: {}
    loadedForUrl: any
    tabs: any
    currentTabId: any
    tabsData: {}
    isPullingToRefresh: boolean
    serverActionLog: any
    smartWidgets: Array<any>
    stickyWidget: any
    UNSAFE_forcedInline: any
  }
  search: {
    schema: any
    rootCat: {
      name: string
      icon: string
      icon_dark: string
      id: number
      slug: string
      second_slug: string
      children: Array<{
        name: string
        icon: string
        icon_dark: string
        id: number
        slug: string
        second_slug: string
        children: Array<{
          name: string
          icon: string
          icon_dark: string
          id: number
          slug: string
          second_slug: string
          children: Array<{
            name: string
            icon: string
            icon_dark: string
            id: number
            slug: string
            second_slug: string
            children: Array<any>
            parent: string
            second_name: string
            url: {
              display: string
              order: number
            }
          }>
          parent: string
          second_name: string
          url: {
            display: string
            order: number
          }
        }>
        parent: string
        second_name: string
        url: {
          display: string
          order: number
        }
      }>
      parent: string
      second_name: string
      url: {
        display: string
        order: number
      }
    }
    actionLogs: {}
    category: {}
    filters: {
      query: string
      category: {
        value: string
      }
    }
    realTimeQuery: string
    filtersChangesVersion: number
    isSchemaLoading: boolean
    schemaHasError: boolean
    categoriesHasError: boolean
    shouldSelectCategory: any
    isBottomNavCategoryActive: boolean
    shouldSendServerSideLoadPostActionLog: boolean
    searchData: {
      formData: {
        category: {
          str: {
            value: string
          }
        }
        sort: {
          str: {
            value: string
          }
        }
        usage: {
          number_range: {
            minimum: string
            maximum: string
          }
        }
      }
    }
  }
  navBar: {
    hasSubmit: boolean
    hasChat: boolean
    hasSearch: boolean
    hasCategories: boolean
    hasSelectCity: boolean
    shouldShowShadow: boolean
  }
  note: {
    hasNote: boolean
  }
  defaultReducer: {
    cityChanged: boolean
    isSearchEngine: boolean
    ip: string
    realIP: string
    isWebView: boolean
    error: any
    isSubmitModalOpen: boolean
    isPWAModalOpen: boolean
  }
  currentPost: {
    renderPostSuccess: boolean
    sourceType: string
    getContactBlocked: boolean
    getContactBlockedError: any
    post: {
      loading: boolean
    }
    hasError: boolean
  }
  carInspectionReport: {
    loading: boolean
    report: any
  }
  staticPage: {
    pages: {}
    currentPage: string
    getStaticSuccess: boolean
  }
  httpError: {
    is404: boolean
    is301: boolean
    is302: boolean
  }
  captcha: {
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
  auth: {
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
  user: {
    token: any
    appellantUUID: any
    isLoggedIn: boolean
    data: {}
    business: {
      loading: boolean
      hasError: boolean
    }
    showConnectionBanner: boolean
    showIosInstallationBanner: boolean
    isLogoutConfirmationAlertOpen: boolean
    isBlacklisted: any
  }
  dealership: {
    loadingData: boolean
    loadingPosts: boolean
    dataError: any
    postsError: any
    data: any
    posts: {
      list: Array<any>
      lastPostDate: any
      hasMore: boolean
    }
  }
  realEstate: {
    isActive: boolean
    loading: boolean
    pageLoading: boolean
    filterLoading: boolean
    page: {}
    header: {}
    seoDetails: {}
  }
  contactTerms: {
    data: any
    loading: boolean
  }
  carPrices: {
    data: any
    query: any
    pinnedWidgets: Array<any>
  }
  carPricesBrand: {
    brand: any
    result: any
  }
  carSpecsHome: {
    data: any
    query: any
  }
  carSpecsAllBrands: {
    data: any
    query: any
  }
  carSpecsModel: {
    params: any
    dataStatus: string
  }
  carSpecsBrand: {
    brand: any
    dataStatus: string
  }
  carDealersList: {
    data: any
    query: any
  }
  mobilePrices: {
    data: any
    query: any
    pinnedWidgets: Array<any>
    error: any
  }
  mobileBrands: {
    data: any
    query: any
  }
  mobileBrand: {
    brand: any
    hasError: boolean
  }
  mobileModel: {
    params: any
    hasError: boolean
  }
  city: {
    citySlug: string
    city: {
      id: number
      name: string
      slug: string
    }
    shouldSelectCity: boolean
    cities: Array<any>
    topCities: Array<string>
    places: {}
    compressedData: Array<Array<any>>
  }
  marketplace: {
    isLoading: boolean
    hasError: boolean
    data: any
  }
  marketplaceList: {
    loading: boolean
  }
  employerProfile: {
    isLoading: boolean
    error: any
    data: any
  }
  jobsApply: {
    isEnabled: boolean
    hasIndicator: boolean
    cached: boolean
  }
  history: {
    length: number
  }
  chat: {
    hasUnread: boolean
  }
  shared: {
    data: {}
    recentLoadedKeys: Array<any>
  }
  multiCity: {
    data: {
      title: string
      children: Array<{
        id: number
        name: string
        slug: string
        children: Array<{
          id: number
          name: string
          slug: string
          parent: number
          relativeChildren?: Array<{
            id: number
            name: string
            slug: string
          }>
          isProvince?: boolean
        }>
      }>
    }
    selectedCities: Array<{
      id: number
      name: string
      slug: string
      parent: number
      relativeChildren: any
      isProvince: any
    }>
    prevSelectedCities: Array<any>
    subtitle: string
    shouldShowCityTooltip: boolean
    onClose: any
  }
  widgets: {
    postRow: {
      selectedPosts: Array<any>
    }
  }
  modalPage: {
    isOpen: boolean
    submitLoading: boolean
    lastRequest: any
    submissionButton: any
    history: Array<any>
    requestCache: {}
    currentPageIndex: number
  }
  richWebView: {}
}

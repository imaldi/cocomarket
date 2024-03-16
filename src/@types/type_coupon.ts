export interface ResponseCouponDetails {
  message: string
  status: boolean
  data: CouponDetails
}

export interface CouponDetails {
  id: string
  code: string
  valid_start: string
  valid_end: string
  transaction_type: string
  title: string
  description: string
  freshshop_vendor_id: string
  discount_type: string
  discount_percent: string
  discount_max_amount: string
  vendors: Vendors
}

interface Vendors {
  id: string
  name: string
  description: string
  phone: string
  status: number
  deleted_at: any
  latitude: string
  longitude: string
  address: string
  google_place_id: string
}

// export interface ParamsUseCoupon {
//   code: string
//   valid_start: string
//   valid_end: string
//   transaction_type: string
//   title: string
//   description: string
//   freshshop_vendor_id: string
//   discount_type: string
//   discount_percent: string
//   discount_max_amount: string
// }

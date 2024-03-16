import { defineStore } from 'pinia'
import axiosClient from '../apiClient'
import { CouponDetails, ResponseCouponDetails } from '../../@types/type_coupon'

interface CouponStore {
  getAllCoupon(): Promise<any>
  getCouponDetails(id: string): Promise<ResponseCouponDetails>
  useCouponNow(params: CouponDetails): Promise<any>
}

export const useCouponStore = defineStore('couponStore', () => {
  const getAllCoupon: CouponStore['getAllCoupon'] = async () => {
    return axiosClient.get('/api/coupons')
  }
  const getCouponDetails: CouponStore['getCouponDetails'] = async (
    id: string
  ) => {
    return axiosClient.get(`/api/coupons/${id}`)
  }
  const useCouponNow: CouponStore['useCouponNow'] = async (params) => {
    const data = new FormData()
    data.append('code', params.code)
    data.append('valid_start', params.valid_start)
    data.append('valid_end', params.valid_end)
    data.append('transaction_type', params.transaction_type)
    data.append('title', params.title)
    data.append('description', params.description)
    data.append('freshshop_vendor_id', params.freshshop_vendor_id)
    data.append('discount_type', params.discount_type)
    data.append(
      'discount_percent',
      parseInt(params.discount_percent, 10).toString()
    )
    data.append(
      'discount_max_amount',
      parseInt(params.discount_max_amount, 10).toString()
    )
    return axiosClient.post('/api/coupons/', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
  return {
    getAllCoupon,
    getCouponDetails,
    useCouponNow,
  }
})

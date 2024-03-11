import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface CouponStore {
  getAllCoupon(): Promise<any>;
}

export const useCouponStore = defineStore("category", () => {
  const getAllCoupon: CouponStore["getAllCoupon"] = async () => {
    return axiosClient.get("/api/coupons");
  };
  return {
    getAllCoupon,
  };
});

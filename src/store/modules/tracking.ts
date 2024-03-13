import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface trackingStore {
  addAddress(payload: any): Promise<any>;
  allTrackingByOrderId(): Promise<any>;
  confirmOrders(): Promise<any>;
  trackingByProduct(id:any): Promise<any>;
}

export const useTrackingStore = defineStore("trackingStore", () => {
  const addAddress: trackingStore["addAddress"] = async (payload) => {
    return axiosClient.post("/api/addresses", payload);
  };
  const allTrackingByOrderId: trackingStore["allTrackingByOrderId"] = async () => {
    return axiosClient.get("/api/category/9b81eddc-e4d1-4c42-83d2-05643638090c");
  };
  const trackingByProduct: trackingStore["trackingByProduct"] = async (id:any) => {
    return axiosClient.get(`/api/addresses/${id}`);
  };
  return {
    allTrackingByOrderId,
    trackingByProduct,
    addAddress,
  };
});

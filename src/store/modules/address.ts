import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface addressStore {
  addAddress(payload: any): Promise<any>;
  getListAddress(): Promise<any>;
  confirmOrders(): Promise<any>;
  getAddressDetail(id:any): Promise<any>;
}

export const useAddressStore = defineStore("address", () => {
  const addAddress: addressStore["addAddress"] = async (payload) => {
    return axiosClient.post("/api/addresses", payload);
  };
  const getListAddress: addressStore["getListAddress"] = async () => {
    return axiosClient.get("/api/addresses");
  };
  const getAddressDetail: addressStore["getAddressDetail"] = async (id:any) => {
    return axiosClient.get(`/api/addresses/${id}`);
  };
  return {
    getListAddress,
    getAddressDetail,
    addAddress,
  };
});

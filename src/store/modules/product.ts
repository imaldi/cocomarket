import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProdukStore {
  getProductById(id: any): Promise<any>;
  getHistoryByid(id: any): Promise<any>;
  getHistory(): Promise<any>;
}

export const useProdukStore = defineStore("product", () => {
  const getProductById: ProdukStore["getProductById"] = async (id: any) => {
    return axiosClient.get(`/api/product/${id}`);
  };
  const getHistoryByid: ProdukStore["getHistoryByid"] = async (id: any) => {
    return axiosClient.get(`/api/history/${id}`);
  };
  const getHistory: ProdukStore["getHistory"] = async () => {
    return axiosClient.get(`/api/history`);
  };
  return {
    getHistory,
    getHistoryByid,
    getProductById,
  };
});

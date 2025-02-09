import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProdukStore {
  getProductById(id: any): Promise<any>;
  getHistoryByid(id: any): Promise<any>;
  getHistory(): Promise<any>;
  getHistoryComplete(): Promise<any>;
  getHistoryCanceled(): Promise<any>;
  getOrder(): Promise<any>;
}

export const useProdukStore = defineStore("produkStore", () => {
  const getProductById: ProdukStore["getProductById"] = async (id: any) => {
    return axiosClient.get(`/api/product/${id}`);
  };
  const getHistoryByid: ProdukStore["getHistoryByid"] = async (id: any) => {
    return axiosClient.get(`/api/history/${id}`);
  };
  const getHistory: ProdukStore["getHistory"] = async () => {
    return axiosClient.get(`/api/history`);
  };
  const getHistoryComplete: ProdukStore["getHistoryComplete"] = async () => {
    return axiosClient.get(`/api/history?status=complete`);
  };
  const getHistoryCanceled: ProdukStore["getHistoryCanceled"] = async () => {
    return axiosClient.get(`/api/history?status=cancel`);
  };
  const getOrder: ProdukStore["getOrder"] = async () => {
    return axiosClient.get(`/api/history?status=ongoing`);
  };
  return {
    getHistory,
    getHistoryByid,
    getProductById,
    getHistoryComplete,
    getHistoryCanceled,
    getOrder,
  };
});

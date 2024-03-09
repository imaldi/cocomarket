import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface CategoryStore {
  getAllSearch(e: any): Promise<any>;
  getAmountWallet(): Promise<any>;
  getBestDeal(): Promise<any>;
}

export const useHomeStore = defineStore("homeStore", () => {
  const getAllSearch: CategoryStore["getAllSearch"] = async (e: any) => {
    return axiosClient.get(`/api/product?search=${e}`);
  };
  const getAmountWallet: CategoryStore["getAmountWallet"] = async () => {
    return axiosClient.get("/api/wallet");
  };
  const getBestDeal: CategoryStore["getBestDeal"] = async () => {
    return axiosClient.get(`/api/best`);
  };
  return {
    getAllSearch,
    getBestDeal,
    getAmountWallet
  };
});

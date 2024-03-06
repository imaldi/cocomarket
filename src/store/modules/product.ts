import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProdukStore {
  getProductById(id: any): Promise<any>;
}

export const useProdukStore = defineStore("product", () => {
  const getProductById: ProdukStore["getProductById"] = async (id: any) => {
    return axiosClient.get(`/api/product/${id}`);
  };
  return {
    getProductById,
  };
});

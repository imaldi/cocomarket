import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProductStore {
  getProductByCategory(id: any): Promise<any>;
  getAllProduct(): Promise<any>;
}

export const useProductStore = defineStore("auth", () => {
  const getAllProduct: ProductStore["getAllProduct"] = async () => {
    return axiosClient.get("/api/product");
  };
  const getProductByCategory: ProductStore["getProductByCategory"] = async (
    id: any
  ) => {
    return axiosClient.get(`/api/category/${id}/product`);
  };
  return {
    getAllProduct,
    getProductByCategory,
  };
});

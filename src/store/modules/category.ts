import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface CategoryStore {
  getAllCategory(): Promise<any>;
  getAllProduct(): Promise<any>;
  getProductByCategory(id: any): Promise<any>;
}

export const useCategoryStore = defineStore("category", () => {
  const getAllCategory: CategoryStore["getAllCategory"] = async () => {
    return axiosClient.get("/api/category");
  };
  const getAllProduct: CategoryStore["getAllProduct"] = async () => {
    return axiosClient.get("/api/product");
  };
  const getProductByCategory: CategoryStore["getProductByCategory"] = async (
    id: any
  ) => {
    return axiosClient.get(`/api/category/${id}/product`);
  };
  return {
    getAllProduct,
    getProductByCategory,
    getAllCategory,
  };
});

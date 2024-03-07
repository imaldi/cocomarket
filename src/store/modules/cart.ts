import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface CartStore {
  addToCart(payload: any): Promise<any>;
  getCartTotal(): Promise<any>;
  confirmOrders(): Promise<any>;
  getCartDetail(id:any): Promise<any>;
}

export const useCartStore = defineStore("cart", () => {
  const addToCart: CartStore["addToCart"] = async (payload) => {
    return axiosClient.post("/api/cart", payload);
  };
  const getCartTotal: CartStore["getCartTotal"] = async () => {
    return axiosClient.get("/api/cart/total");
  };
  const getCartDetail: CartStore["getCartDetail"] = async (id:any) => {
    return axiosClient.get(`/api/cart/${id}/show-details`);
  };
  const confirmOrders: CartStore["confirmOrders"] = async () => {
    return axiosClient.post(`/api/orders`);
  };
  return {
    confirmOrders,
    getCartTotal,
    getCartDetail,
    addToCart,
  };
});

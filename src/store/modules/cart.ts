import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface CartStore {
  removeCartDetail(carts_id: any): Promise<any>;
  putToCart(payload: any, carts_id: any): Promise<any>;
  addToCart(payload: any): Promise<any>;
  getCartTotal(): Promise<any>;
  getCartTotalAll(): Promise<any>;
  confirmOrders(payload: any): Promise<any>;
  getCartDetail(id: any): Promise<any>;
}

export const useCartStore = defineStore("cartStore", () => {
  const removeCartDetail: CartStore["removeCartDetail"] = async (carts_id) => {
    return axiosClient.delete(`/api/cart_details/${carts_id}/`);
  };
  const putToCart: CartStore["putToCart"] = async (payload, carts_id) => {
    return axiosClient.put(`/api/cart/${carts_id}/update`, payload);
  };
  const addToCart: CartStore["addToCart"] = async (payload) => {
    return axiosClient.post("/api/cart", payload);
  };
  const getCartTotalAll: CartStore["getCartTotalAll"] = async () => {
    return axiosClient.get("/api/cart/totalall");
  };
  const getCartTotal: CartStore["getCartTotal"] = async () => {
    return axiosClient.get("/api/cart/total");
  };
  const getCartDetail: CartStore["getCartDetail"] = async (id: any) => {
    return axiosClient.get(`/api/cart/${id}/show-detail`);
  };
  const confirmOrders: CartStore["confirmOrders"] = async (payload) => {
    return axiosClient.post(`/api/orders`, payload);
  };
  return {
    getCartTotalAll,
    removeCartDetail,
    putToCart,
    confirmOrders,
    getCartTotal,
    getCartDetail,
    addToCart,
  };
});

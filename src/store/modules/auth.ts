import { defineStore } from 'pinia';
import axiosClient from '../apiClient';
import { ref } from 'vue';

interface Product {
  email: string;
}

interface AuthStore {
  verifiedEmail: string;
  login(payload: any): Promise<any>;
  register(payload: any): Promise<any>;
  addToCart(payload: Product): Promise<void>;
  verifyCode(payload: any): Promise<any>;
}

interface AuthState {
  verifiedEmail: string;
  products: Product[];
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    verifiedEmail: '',
    products: [],
  }),
  actions: {
    login: async function (payload: any) {
      const response = await axiosClient.post('/api/auth/login', payload);
      if (response && response.data && response.data.email) {
        this.verifiedEmail = response.data.email;
      }
      return response;
    },
    register: async function (payload: any) {
      const response = await axiosClient.post('/api/auth/register', payload);
      if (response && response.data && response.data.email) {
        const productToAdd: Product = {
          email: response.data.email,
        };
        await this.addToCart(productToAdd);
      }
      return response;
    },
    verifyCode: async function (payload: any) {
      const response = await axiosClient.post('/api/auth/verify', payload);
      return response;
    },
    addToCart: async function (payload: { email: string; }) {
      // Menambahkan produk ke daftar produk
      this.products.push(payload);
    },
    getEmailFromCart: function () {
      // Implementasi sederhana, hanya mengambil email dari produk terakhir
      const lastProduct = this.products[this.products.length - 1];
      return lastProduct ? lastProduct.email : null;
    },
  },
});

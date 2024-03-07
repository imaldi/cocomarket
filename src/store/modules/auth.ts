import { defineStore } from "pinia";
import axiosClient from "../apiClient";
import { ref } from "vue";
interface AuthStore {
  verifiedEmail: string;
  login(payload: any): Promise<any>;
  register(payload: any): Promise<any>;
  verifyCode(payload: any): Promise<any>;
}

export const useAuthStore = defineStore("auth", () => {
  const verifiedEmail = ref('');
  const login: AuthStore["login"] = async (payload) => {
    const response = await axiosClient.post("/api/auth/login", payload);
    if (response && response.data && response.data.email) {
      verifiedEmail.value = response.data.email;
    }
    return response;
  };
  const register: AuthStore["login"] = async (payload) => {
    return axiosClient.post("/api/auth/register", payload);
  }; 
  const verifyCode: AuthStore["verifyCode"] = async (payload) => {
    return axiosClient.post("/api/auth/verify", payload);
  }; 
  return {
    verifyCode,
    login,
    register
  };
});

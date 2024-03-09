import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface AuthState {
  login(payload: any): Promise<any>;
  register(payload: any): Promise<any>;
  verifyCode(payload: any): Promise<any>;
}

export const useAuthStore = defineStore("auth", () => {
  const login: AuthState["login"] = async (payload: any) => {
    return axiosClient.post(`/api/auth/login`, payload);
  };
  const register: AuthState["register"] = async (payload: any) => {
    return axiosClient.post("/api/auth/register", payload);
  };
  const verifyCode: AuthState["verifyCode"] = async (payload: any) => {
    return axiosClient.post(`/api/auth/verify`, payload);
  };
  return {
    login,
    verifyCode,
    register,
  };
});

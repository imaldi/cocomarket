import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface AuthState {
  login(payload: any): Promise<any>;
  logout(): Promise<any>;
  register(payload: any): Promise<any>;
  verifyCode(payload: any): Promise<any>;
  resendCode(payload: any): Promise<any>;
  forgotEmail(payload: any): Promise<any>;
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
  const resendCode: AuthState["resendCode"] = async (payload: any) => {
    return axiosClient.post(`/api/auth/regenerateOTP`, payload);
  };
  const logout: AuthState["logout"] = async () => {
    return axiosClient.post(`/api/auth/logout`);
  };
  const forgotEmail: AuthState["forgotEmail"] = async (payload: any) => {
    return axiosClient.post(`/api/auth/reset`, payload);
  };
  return {
    forgotEmail,
    resendCode,
    login,
    logout,
    verifyCode,
    register,
  };
});

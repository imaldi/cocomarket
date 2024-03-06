import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface AuthStore {
  login(payload: any): Promise<any>;
  register(payload: any): Promise<any>;
}

export const useAuthStore = defineStore("auth", () => {
  const login: AuthStore["login"] = async (payload) => {
    return axiosClient.post("/api/auth/login", payload);
  };
  const register: AuthStore["login"] = async (payload) => {
    return axiosClient.post("/api/auth/register", payload);
  };
  return {
    login,
    register
  };
});

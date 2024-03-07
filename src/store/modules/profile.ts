import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProfileStore {
  getProfile(): Promise<any>;
  updateProfile(payload: any): Promise<any>;
  updatePassword(payload: any): Promise<any>;
}

export const useProfileStore = defineStore("profile", () => {
  const getProfile: ProfileStore["getProfile"] = async () => {
    return axiosClient.get("/api/user/profile");
  };
  const updateProfile: ProfileStore["updateProfile"] = async (payload) => {
    return axiosClient.put("/api/user/profile",payload);
  };
  const updatePassword: ProfileStore["updatePassword"] = async (payload) => {
    return axiosClient.post("/api/auth/change",payload);
  };
  return {
    updateProfile,
    updatePassword,
    getProfile,
  };
});

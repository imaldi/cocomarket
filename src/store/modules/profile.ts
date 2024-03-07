import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProfileStore {
  getProfile(): Promise<any>;
}

export const useProfileStore = defineStore("profile", () => {
  const getProfile: ProfileStore["getProfile"] = async () => {
    return axiosClient.get("/api/user/profile");
  };
  return {
    getProfile,
  };
});

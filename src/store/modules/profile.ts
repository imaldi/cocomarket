import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface ProfileStore {
  getProfile(): Promise<any>;
  updateProfile(payload: any): Promise<any>;
  updatePassword(payload: any): Promise<any>;
  updatePhotoProfile(formData: FormData): Promise<any>;
}

export const useProfileStore = defineStore("profile", () => {
  const getProfile: ProfileStore["getProfile"] = async () => {
    return axiosClient.get("/api/user/profile");
  };
  const updateProfile: ProfileStore["updateProfile"] = async (payload) => {
    return axiosClient.put("/api/user/profile", payload);
  };
  const updatePhotoProfile: ProfileStore["updatePhotoProfile"] = async (
    formData
  ) => {
    return axiosClient.post("/api/user/uploadprofile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const updatePassword: ProfileStore["updatePassword"] = async (payload) => {
    return axiosClient.post("/api/auth/change", payload);
  };
  return {
    updatePhotoProfile,
    updateProfile,
    updatePassword,
    getProfile,
  };
});

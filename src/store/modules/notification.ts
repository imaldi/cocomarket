import { defineStore } from "pinia";
import axiosClient from "../apiClient";

interface notifStore {
  getListNotification(): Promise<any>;
}

export const useNotifStore = defineStore("notifStore", () => {
  const getListNotification: notifStore["getListNotification"] = async () => {
    return axiosClient.get("/api/notification/list");
  };
  return {
    getListNotification,
  };
});

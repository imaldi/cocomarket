import { useRouter } from "vue-router";
import axios, { AxiosResponse } from "axios";
const router = useRouter();
const BASE_URL: string | undefined = import.meta.env.VITE_BASE_URL;
const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'multipart/form-data',
  // },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data ? response.data : response;
  },
  (error) => {
    const isAuthenticated = localStorage.getItem("user_id");
    
    if (isAuthenticated == null) return window.open("/", "_self");

    if (error.response && error.response.status === 401) {
      localStorage.clear();
      router.push("/");
    }
    return Promise.reject(error);
  }
);

export default apiClient;

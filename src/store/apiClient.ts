import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
const BASE_URL: string | undefined = import.meta.env.VITE_BASE_URL;
const token: string | null = localStorage.getItem('token');

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('auth_token');
      router.push('/');
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

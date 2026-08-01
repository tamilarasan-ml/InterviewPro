import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(
      `🚀 ${config.method?.toUpperCase()} ${config.url}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 */
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(
      `✅ ${response.status} ${response.config.url}`
    );

    return response;
  },
  (error) => {
    console.error(
      `❌ ${error.response?.status} ${error.config?.url}`
    );

    return Promise.reject(error);
  }
);

export default axiosInstance;
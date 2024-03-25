import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://nmc-api.terracecafe.com.np/api/",
});
export default axiosInstance;

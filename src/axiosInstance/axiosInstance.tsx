import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://admin.nmcth.edu/api/",
});
export default axiosInstance;

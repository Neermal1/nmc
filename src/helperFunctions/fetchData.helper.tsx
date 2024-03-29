import axiosInstance from "@/axiosInstance/axiosInstance";

export const SSR_fetchData = async (url: string) => {
  const response = await axiosInstance.get(url);

  const data = response.data;

  return { data };
};

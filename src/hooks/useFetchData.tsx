import axiosInstance from "@/axiosInstance/axiosInstance";
import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [fetchedData, setFetchData] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setFetchData(response.data);
      setLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        setTimeout(() => {
          fetchData();
        }, 5000);
      } else {
        console.log("Error occurred:", error);
      }
    }
  };

  return { fetchedData, loading, refetchData: fetchData };
};

export default useFetchData;

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, END_POINT } from "@/helper/constants/endpoint";

const UseDetailUser = (id) => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserDetail = useCallback(async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL.API}${END_POINT.GET_USERS}/${id}`);
      setDetail(response.data.data);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred while fetching user details.");
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  
  

  useEffect(() => {
    getUserDetail();
  }, [getUserDetail]);

  return {
    detail,
    isLoading,
    error,
    refetch: getUserDetail
  };
};

export default UseDetailUser;
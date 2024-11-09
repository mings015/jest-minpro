import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, END_POINT } from "@/helper/constants/endpoint";

const UseUserList = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 6,
    total: null,
    total_pages: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const getUsersList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BASE_URL.API}${END_POINT.GET_USERS}?page=${pagination.page}`,
      );
      setData(response.data.data);
      setPagination((prev) => ({
        ...prev,
        total: response.data.total,
        total_pages: response.data.total_pages,
      }));
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while fetching users."
      );
    } finally {
      setIsLoading(false);
    }
  }, [pagination.page]);

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const setPage = (page) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const handleNext = () => {
    if (pagination.page < pagination.total_pages) {
      setPage(pagination.page + 1);
    }
  };

  const handlePrev = () => {
    if (pagination.page > 1) {
      setPage(pagination.page - 1);
    }
  };

  return {
    data,
    pagination,
    isLoading,
    error,
    setPage,
    handleNext,
    handlePrev,
    searchTerm, handleSearchChange,filteredData
  };
};

export default UseUserList;
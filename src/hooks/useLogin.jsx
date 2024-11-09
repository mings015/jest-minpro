import { BASE_URL, END_POINT } from "@/helper/constants/endpoint";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL.API}${END_POINT.LOGIN}`,
        formData
      );
      const token = response.data?.token;
      localStorage.setItem("token", token);
      setSuccess(true);
      setError("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      setSuccess(false);
      setError(e.response?.data?.error || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    success,
    error,
    isLoading,
    handleChange,
    handleLogin,
  };
};

export default UseLogin;

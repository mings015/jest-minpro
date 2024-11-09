import { BASE_URL, END_POINT } from "@/helper/constants/endpoint";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseDeleteUser = () => {
  const [successDelete, setSuccessDelete] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL.API}${END_POINT.GET_USERS}/${id}`);
      console.log("successfully deleted");
      setSuccessDelete(true);
      setTimeout(() => {
        navigate("/user");
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("Failed to delete user");
    }
  };

  const handleAddUser = () => {
    setTimeout(() => {
      navigate("/user");
    }, 2000);
  };

  return {
    handleAddUser,
    handleDelete,
    successDelete,
  };
};

export default UseDeleteUser;

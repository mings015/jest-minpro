import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseLogout = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

    const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return {
    isLoggedIn,
    handleLogout
  };
}

export default UseLogout
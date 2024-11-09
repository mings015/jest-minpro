import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ( {children} ) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return <Navigate to="/login"/>
    } 

    return children ? children : <Outlet />;

}

export default ProtectedRoute;
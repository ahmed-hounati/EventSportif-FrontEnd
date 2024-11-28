import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
        useEffect(() => {
            navigate("/login");
        })
    }

    return children;
};

export default ProtectedRoute;

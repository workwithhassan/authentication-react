import React, { useContext, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../auth/Login"

const ProtectedRoute = ({ children }) => {
        
  const isAuthenticated = useContext(AuthContext);
  console.log("Is authenticated: ", isAuthenticated);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  switch (isAuthenticated) {
        case true:
                return children
        case false:
                return <Navigate to='login' />
        default:
                break;
}
};

export default ProtectedRoute;

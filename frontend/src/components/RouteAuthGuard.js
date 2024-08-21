import React from "react";
import { Navigate } from "react-router-dom";

const RouteAuthGuard = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem('auth'));
  
  const token = userInfo?.token
  if (!token) {
    return <Navigate to="/login" replace />;
  } 

  return children;
};

export default RouteAuthGuard;

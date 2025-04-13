import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../contexts/Authentication/authContext";

function PrivateRoutes() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/getstarted" replace />;
  }
  return <Outlet />;
}

export default PrivateRoutes;

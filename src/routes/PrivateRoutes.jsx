import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../contexts/Authentication/authContext";
import Loader from "../components/Loader";
import useMovieData from "../contexts/Movie Category/movieContext";

function PrivateRoutes() {
  const { user, loader } = useAuth();
  const {mediaLoader} = useMovieData();
  if (!user) {
    return <Navigate to="/getstarted" replace />;
  }
  if(loader || mediaLoader){
    return <Loader />
  }

  return <Outlet />;
}

export default PrivateRoutes;

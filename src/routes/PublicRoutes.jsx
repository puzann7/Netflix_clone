import React from 'react'
import useAuth from '../contexts/Authentication/authContext';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
import useMovieData from '../contexts/Movie Category/movieContext';

function PublicRoutes() {
  const { user, loader } = useAuth();
  const {mediaLoader} = useMovieData();
  if (user) {
    return <Navigate to="/" replace />;
  }
  if(loader || mediaLoader){
    return <Loader />
}
  return <Outlet />;
}

export default PublicRoutes

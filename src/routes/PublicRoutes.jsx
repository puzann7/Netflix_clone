import React from 'react'
import useAuth from '../contexts/Authentication/authContext';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoutes() {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default PublicRoutes

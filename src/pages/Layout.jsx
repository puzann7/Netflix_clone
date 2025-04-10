import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MovieContextProvider } from '../contexts/Movie Category/movieContext'
import Footer from '../components/Footer'
import { AuthContextProvider } from '../contexts/Authentication/authContext';
function Layout() {
    const location = useLocation();
    const hideFooterRoutes = ["/"];
    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <AuthContextProvider>
    <MovieContextProvider>
    <div className='relative '>
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </div>
    </MovieContextProvider>
    </AuthContextProvider>
  )
}

export default Layout

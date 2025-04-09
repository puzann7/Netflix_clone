import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MovieContextProvider } from '../contexts/Movie Category/movieContext'
import Footer from '../components/Footer'
function Layout() {
    const location = useLocation();
    const hideFooterRoutes = ["/"];
    const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <MovieContextProvider>
    <div className='relative '>
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </div>
    </MovieContextProvider>
  )
}

export default Layout

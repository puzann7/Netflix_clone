import React from 'react'
import { Outlet } from 'react-router-dom'
import { MovieContextProvider } from '../contexts/Movie Category/movieContext'
function Layout() {
  return (
    <MovieContextProvider>
    <div>
      <Outlet />
    </div>
    </MovieContextProvider>
  )
}

export default Layout

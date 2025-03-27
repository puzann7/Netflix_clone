import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import GetStarted from './pages/GetStarted'
import Login from './pages/Login'
import Home from './pages/Home'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<GetStarted />} />
            <Route path='login' element={<Login />} />
            <Route path='Home' element={<Home />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)

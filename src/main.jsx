import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/Layout";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./contexts/Authentication/authContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import { MovieContextProvider } from "./contexts/Movie Category/movieContext";
import PublicRoutes from "./routes/PublicRoutes";
import Search from "./components/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<PublicRoutes />}>
        <Route path="getstarted" element={<GetStarted />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="" element={<Home />}>
        <Route path="search" element={<Search />} />
        </Route>

        <Route path="movies/:movieId" element={<Movies />} />
        <Route path="TVShows/:showId" element={<TVShows />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MovieContextProvider>
      <RouterProvider router={router} />
    </MovieContextProvider>
  </AuthContextProvider>
);

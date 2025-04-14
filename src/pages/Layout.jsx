import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MovieContextProvider } from "../contexts/Movie Category/movieContext";
import Footer from "../components/Footer";
import useAuth, {
  AuthContextProvider,
} from "../contexts/Authentication/authContext";
import GetStarted from "./GetStarted";
import Loader from "../components/Loader";
function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  const { user } = useAuth();
  if (!user) {
    return <Outlet />;
  }

  return (
    <MovieContextProvider>
      <div className="relative ">
        <Outlet />
        {!shouldHideFooter && <Footer />}
      </div>
    </MovieContextProvider>
  );
}

export default Layout;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (user && user.email) {
    return children;
  }

  //   for loading
  if (loading) {
    return (
      <div className="flex py-52 justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return <Navigate state={location} to="/login"></Navigate>;
};

export default PrivateRoute;

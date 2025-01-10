import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-yellow-500 loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;

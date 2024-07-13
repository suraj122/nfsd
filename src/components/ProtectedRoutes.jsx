import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // Authentication logic
  const isAuthenticated = false;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;

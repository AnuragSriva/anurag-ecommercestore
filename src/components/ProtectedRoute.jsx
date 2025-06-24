import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const user = useSelector(state => state.user);

  return user?.isAuthenticated ? children : <Navigate to="/login" />;
}

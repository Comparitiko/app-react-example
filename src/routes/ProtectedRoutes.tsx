import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../contexts/auth.context";

export default function ProtectedRoutes() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  console.log(isLoggedIn);

  return <Outlet />;
}

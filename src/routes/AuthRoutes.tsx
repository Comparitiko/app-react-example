import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../contexts/auth.context";

export default function AuthRoutes() {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

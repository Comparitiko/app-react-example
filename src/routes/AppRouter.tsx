import { BrowserRouter, Route } from "react-router";
import Configuration from "../pages/Configuration";
import Login from "../pages/Login";
import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import RoutesWithNotFound from "./RoutesWithNotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route index element={<Configuration />} />
        </Route>
        <Route path="/login" element={<AuthRoutes />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/register" element={<AuthRoutes />}>
          <Route index element={<h1>Register</h1>} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

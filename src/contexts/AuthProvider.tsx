import { ReactNode, useState } from "react";
import { AuthContext } from "./auth.context";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("user");
  });

  const login = (ip: string, username: string, token: string) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ip,
        username,
        token,
      })
    );
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

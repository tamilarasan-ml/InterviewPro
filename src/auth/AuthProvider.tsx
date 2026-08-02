import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import type { LoginRequest, User } from "../types/auth.types";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (data: LoginRequest): Promise<void> => {
    const mockUser: User = {
      id: 1,
      name: "Tamil Arasan",
      email: data.email,
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading: false,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
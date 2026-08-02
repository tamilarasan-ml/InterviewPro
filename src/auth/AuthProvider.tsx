import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import type {
  LoginRequest,
  User,
} from "./auth.types";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
    }

    setIsLoading(false);
  }, []);

  // Mock Login
  const login = async (
    data: LoginRequest
  ): Promise<void> => {
    const mockUser: User = {
      id: 1,
      name: "Tamil Arasan",
      email: data.email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(mockUser)
    );

    setUser(mockUser);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
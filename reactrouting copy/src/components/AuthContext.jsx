import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userLogined, setUserLogined] = useState(
    localStorage.getItem("userLogined") === "true"
  );

  useEffect(() => {
    // Persist state to localStorage
    localStorage.setItem("userLogined", userLogined);
  }, [userLogined]);

  const handleLogin = () => setUserLogined(true);
  const handleLogout = () => setUserLogined(false);

  return (
    <AuthContext.Provider value={{ userLogined, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
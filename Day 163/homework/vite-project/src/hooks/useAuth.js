import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return { user, login, register, logout };
}

import { createContext,useContext, useState, useEffect } from "react";
import { getUserDetails, setUserDetails } from "../utils/helpers";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserDetails());

  useEffect(() => {
    setUserDetails(user);
  }, [user]);

  console.log('AuthProvider rendered, user:', user);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
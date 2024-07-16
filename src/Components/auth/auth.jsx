import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const login = ({ username }) => {
    setUser({ username });
    navigate("/about");
  };
  const logout = () => {
    setUser(null);
    navigate("/")
  };
  const auth = { user, login, logout };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export { AuthProvider, useAuth };

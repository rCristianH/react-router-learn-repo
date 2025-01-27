import { Children, createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ['redhd01','ccrhd']

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const login = ({ username }) => {
    const isAdmin = adminList.find(admin => admin === username)
    setUser({ username, isAdmin });
    navigate("/about");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };
  
  const auth = { user, login, logout };
  
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export { AuthProvider, useAuth, AuthRoute };

import { useState } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  Navigate
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };
  if (auth.user) {
    return <Navigate to="/about"/>
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};
export { Login };

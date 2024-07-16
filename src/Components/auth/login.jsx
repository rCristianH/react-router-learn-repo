import { useState } from "react";
import { useAuth } from "./auth";

const Login = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };
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

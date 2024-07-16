import { useAuth } from "./auth";

const Logout = () => {
  const auth = useAuth()
  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }
  return (
    <>
      <h2>Logout</h2>
      <form className="logout" onSubmit={logout}>
        <label>Do you want get out?</label>
        <button type="submit">LogOut</button>
      </form>
    </>
  );
}
export {Logout}
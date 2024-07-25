import { useParams } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { users } from "../AboutPage";
const deleteMsg = (i) => {
  console.log("i", i);
  const men = document.querySelector(`.${i}`);
  console.log("men", men);
  men.remove();
};
const Users = () => {
  const { username } = useParams();
  const auth = useAuth();
  const user = users.find((user) => user.username === username);
  const isAdmin = users.some(
    (user) => user.username === auth.user?.username && user.rol === "admin"
  );
  const canDelete = isAdmin || user.username === auth.user?.username;

  return (
    <>
      <p>Welcome back, {user.username}</p>
      {canDelete && (
        <button onClick={() => deleteMsg(user.username)}>Delete</button>
      )}
    </>
  );
};
export { Users };

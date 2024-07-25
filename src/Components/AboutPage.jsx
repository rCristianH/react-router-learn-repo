import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./auth/auth";
import { useState } from "react";
function AboutPage() {
  const auth = useAuth();
  const [outletActive, setOutletActive] = useState(false);
  const admins = users.filter((user) => user.rol === "admin");
  const editors = users.filter((user) => user.rol === "editor");
  const viewers = users.filter((user) => user.rol === "viewer");
  return (
    <>
      <h2>About Page</h2>
      <Outlet context={(e) => setOutletActive(true)} />
      <p>Welcome back, {auth.user.username}</p>
      <section className="users">
        <table>
          <thead>
            <tr>
              <th>Admins</th>
              <th>Editors</th>
              <th>Viewers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {admins.map((user) => (
                  <UserLink className={user.username} key={user.username} user={user} />
                ))}
              </td>
              <td>
                {editors.map((user) => (
                  <UserLink key={user.username} user={user} />
                ))}
              </td>
              <td>
                {viewers.map((user) => (
                  <UserLink key={user.username} user={user} />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

const UserLink = ({ user }) => {
  return <Link className={user.username} to={`/about/${user.username}`}>{user.username}</Link>;
};

const users = [
  { username: "jdoe", rol: "admin" },
  { username: "asmith", rol: "editor" },
  { username: "mbrown", rol: "viewer" },
  { username: "ljones", rol: "admin" },
  { username: "kwilson", rol: "editor" },
  { username: "ewhite", rol: "viewer" },
  { username: "bking", rol: "admin" },
  { username: "cparker", rol: "editor" },
  { username: "djohnson", rol: "viewer" },
  { username: "emartin", rol: "admin" },
  { username: "fmoore", rol: "editor" },
  { username: "ghall", rol: "viewer" },
  { username: "hlee", rol: "admin" },
  { username: "ijackson", rol: "editor" },
  { username: "kthomas", rol: "viewer" },
];
export { AboutPage, users };

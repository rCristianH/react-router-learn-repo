import { NavLink } from "react-router-dom";
import { useAuth } from "./auth/auth";

const Menu = () => {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          /* si la ruta solo esta en modo publico y esta autenticado no la renderize (return null) break  */
          if (route.private && !auth.user) return null;
          return (
            <li key={route.to}>
              <NavLink to={route.to}>{route.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/about",
  text: "About",
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  private: false,
  publicOnly: true,
  /* Se muestra solo si no esta logeado */
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});

export { Menu };

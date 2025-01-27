import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Components/HomePage";
import { BlogPage } from "./Components/BlogPage";
import { AboutPage } from "./Components/AboutPage";
import { NotFound } from "./Components/NotFound";
import { BlogPost } from "./Components/BlogPost";
import { Login } from "./Components/auth/login";
import { Logout } from "./Components/auth/logout";
import { AuthProvider, AuthRoute } from "./Components/auth/auth";
import { Users } from "./Components/Users/Users";

const App = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <main className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />}>
                <Route path=":slug" element={<BlogPost />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <Logout />
                  </AuthRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <AuthRoute>
                    <AboutPage />
                  </AuthRoute>
                }
              >
                <Route path=":username" element={<Users />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export default App;

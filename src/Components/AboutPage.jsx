import { useAuth } from "./auth/auth";
function AboutPage() {
  const auth = useAuth();
  return (
    <>
      <h2>About Page</h2>
      <p>Welcome back, {auth.user.username}</p>
    </>
  );
}

export { AboutPage };

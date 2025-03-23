import { useAuthContext } from "../contexts/auth.context";

export default function Login() {
  const { login } = useAuthContext();

  const handleClick = () => {
    login("127.0.0.1", "admin", "admin");
  };

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

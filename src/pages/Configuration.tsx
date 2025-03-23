import { useAuthContext } from "../contexts/auth.context";

export default function Configuration() {
  const { logout } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h1>Configuration page</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

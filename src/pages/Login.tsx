import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../contexts/auth.context";
import { userSchema } from "../schemas/user.schema";

export default function Login() {
  const { login } = useAuthContext();

  const handleClick = () => {
    login("127.0.0.1", "admin", "admin");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

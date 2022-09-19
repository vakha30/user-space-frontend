import { useAuth } from "js-space/context/authContext";
import { FC, useState } from "react";

const LoginPage: FC = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { loginUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user.username, user.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="text"
        name="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginPage;

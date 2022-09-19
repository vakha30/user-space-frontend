import { useAuth } from "js-space/context/authContext";
import { FC, useState } from "react";

const RegistrationPage: FC = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const { registerUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(user);
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
      <input
        type="text"
        name="password2"
        onChange={(e) => setUser({ ...user, password2: e.target.value })}
      />
      <input
        type="text"
        name="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        name="first_name"
        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
      />
      <input
        type="text"
        name="last_name"
        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegistrationPage;

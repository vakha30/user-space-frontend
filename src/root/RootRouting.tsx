import { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../js-space/context/authContext";

const RegistrationPage = lazy(
  () => import("../pages/AuthPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/AuthPage/LoginPage"));

export const RootRouting: FC = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route
        path="/login"
        element={user !== null ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route path="/register" element={<RegistrationPage />} />
      <Route
        path="*"
        element={user !== null ? <>Hello User</> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

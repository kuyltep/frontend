import { Navigate, Outlet } from "react-router-dom";
import LoginPage from "../../components/auth/login";

const PrivateRoute = () => {
  const auth = false;
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;

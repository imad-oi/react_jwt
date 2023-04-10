import { accountService } from "../_services/account.services";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default AuthGuard;

import { useLocation } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import "./style.scss";
import { Box } from "@mui/material";

const AuthRootComponent = () => {
  const location = useLocation();
  return (
    <div className="root">
      <div className="form">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "680px",
            margin: "auto",
            padding: 5,
            borderRadius: "5px",
            boxShadow: "5px 5px #ccc",
          }}
        >
          {location.pathname === "/register" ? (
            <RegisterPage />
          ) : location.pathname === "/login" ? (
            <LoginPage />
          ) : null}
        </Box>
      </div>
    </div>
  );
  // return location.pathname === "/register" ? (
  //   <RegisterPage />
  // ) : location.pathname === "/login" ? (
  //   <LoginPage />
  // ) : null;
};

export default AuthRootComponent;

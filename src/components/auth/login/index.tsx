import React from "react";
import Greeting from "./Greeting";

const LoginPage = () => {
  const name = "Alex";
  return (
    <div>
      <h1>Login Page</h1>
      <Greeting name={name} />
    </div>
  );
};

export default LoginPage;

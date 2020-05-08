import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginState from "./LoginState";

export default () => {
  const [isAuth, updateAuth] = useState(false);
  const toggleAuth = () => updateAuth(!isAuth);

  return localStorage.getItem("current_user") ? (
    <Dashboard />
  ) : (
    <LoginState toggleAuth={toggleAuth} />
  );
};
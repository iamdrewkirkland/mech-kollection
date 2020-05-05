import React, { useState } from "react";
import { Dashboard } from "./Dashboard";
import SignIn from "./auth/SignIn";

export default () => {
  const [check, update] = useState(false);
  const toggle = () => update(!check);

  return localStorage.getItem("current_user") ? (
    <Dashboard />
  ) : (
    <SignIn toggle={toggle} />
  );
};
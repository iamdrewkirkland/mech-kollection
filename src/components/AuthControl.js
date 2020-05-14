import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginState from "./LoginState";
import { BuildProvider } from "./builds/BuildDataProvider";
import { ResultsProvider } from "./testResults/ResultsProvider";
import { StatusProvider } from "./statuses/StatusProvider";
import { MaterialProvider } from "./materials/MaterialProvider";
import { LayoutProvider } from "./layouts/LayoutProvider";

export default () => {
  const [isAuth, updateAuth] = useState(false);
  const toggleAuth = () => updateAuth(!isAuth);

  return localStorage.getItem("current_user") ? (
    <BuildProvider>
      <StatusProvider>
        <ResultsProvider>
          <MaterialProvider>
            <LayoutProvider>
              <Dashboard toggleAuth={toggleAuth} />
            </LayoutProvider>
          </MaterialProvider>
        </ResultsProvider>
      </StatusProvider>
    </BuildProvider>
  ) : (
    <LoginState toggleAuth={toggleAuth} />
  );
};

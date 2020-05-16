import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginState from "./LoginState";
import { BuildProvider } from "./builds/BuildDataProvider";
import { ResultsProvider } from "./testResults/ResultsProvider";
import { StatusProvider } from "./statuses/StatusProvider";
import { MaterialProvider } from "./materials/MaterialProvider";
import { LayoutProvider } from "./layouts/LayoutProvider";
import { SwitchTypeProvider } from "./switches/SwitchTypeProvider";
import { FriendProvider } from "./friends/FriendProvider";
import { UserProvider } from "./users/UserProvider";

export default () => {
  const [isAuth, updateAuth] = useState(false);
  const toggleAuth = () => updateAuth(!isAuth);

  const currentUserId = parseInt(localStorage.getItem("current_user"))
  return currentUserId ? (
    <BuildProvider>
      <StatusProvider>
        <ResultsProvider>
          <MaterialProvider>
            <LayoutProvider>
              <SwitchTypeProvider>
                <FriendProvider>
                  <UserProvider>
                    <Dashboard toggleAuth={toggleAuth} currentUserId={currentUserId} />
                  </UserProvider>
                </FriendProvider>
              </SwitchTypeProvider>
            </LayoutProvider>
          </MaterialProvider>
        </ResultsProvider>
      </StatusProvider>
    </BuildProvider>
  ) : (
    <LoginState toggleAuth={toggleAuth} />
  );
};

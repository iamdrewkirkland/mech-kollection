import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import NewBuild from "./NewBuild";
import { BuildList } from "./BuildList";
import { MaterialContext } from "../materials/MaterialProvider";
import { LayoutContext } from "../layouts/LayoutProvider";
import { SwitchTypeContext } from "../switches/SwitchTypeProvider";
export const BuildsView = React.memo(({ myBuilds, currentUserId }) => {
  const [showForm, toggleShowForm] = useState(false);
  const { materials } = useContext(MaterialContext);
  const { switchTypes } = useContext(SwitchTypeContext);
  const { layouts } = useContext(LayoutContext);

  return (
    <>
      {showForm ? (
        <NewBuild
          materials={materials}
          layouts={layouts}
          switchTypes={switchTypes}
          currentUserId={currentUserId}
        />
      ) : (
        <BuildList
          materials={materials}
          layouts={layouts}
          switchTypes={switchTypes}
          myBuilds={myBuilds}
        />
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          toggleShowForm(!showForm);
        }}
      >
        {showForm ? "View Builds" : "Add Build"}
      </Button>
    </>
  );
});

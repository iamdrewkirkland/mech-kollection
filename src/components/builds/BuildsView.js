import React, { useState, useContext } from "react";
import { Paper, Button } from "@material-ui/core";
import NewBuild from "./NewBuild";
import { BuildList } from "./BuildList";
import { MaterialContext } from "../materials/MaterialProvider";
import { LayoutContext } from "../layouts/LayoutProvider";
import { SwitchTypeContext } from "../switches/SwitchTypeProvider";
export default function BuildsView({ myBuilds }) {
  const [showForm, toggleShowForm] = useState(false);
  const { materials } = useContext(MaterialContext);
  const { switchTypes } = useContext(SwitchTypeContext);
  const { layouts } = useContext(LayoutContext);

  return (
    <>
      {showForm ? (
        <NewBuild materials={materials} layouts={layouts} switchTypes={switchTypes}/>
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
}

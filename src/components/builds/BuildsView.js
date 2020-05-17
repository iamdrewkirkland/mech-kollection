import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import NewBuild from "./NewBuild";
import { BuildList } from "./BuildList";
import { MaterialContext } from "../materials/MaterialProvider";
import { LayoutContext } from "../layouts/LayoutProvider";
import { SwitchTypeContext } from "../switches/SwitchTypeProvider";
export const BuildsView = React.memo(({ myBuilds, currentUserId }) => {
  const [showForm, setShowForm] = useState(false);
  const [editBuild, setEditBuild] = useState({});
  const { materials } = useContext(MaterialContext);
  const { switchTypes } = useContext(SwitchTypeContext);
  const { layouts } = useContext(LayoutContext);

  function editThisBuild(build){
    setEditBuild({...build})
    toggleShowForm()
  }

  function toggleShowForm(){
    setShowForm(!showForm)
  }
  return (
    <>
      {showForm ? (
        <NewBuild
          materials={materials}
          layouts={layouts}
          switchTypes={switchTypes}
          editBuild={editBuild}
          currentUserId={currentUserId}
        />
      ) : (
        <BuildList
          materials={materials}
          layouts={layouts}
          switchTypes={switchTypes}
          myBuilds={myBuilds}
          editThisBuild={editThisBuild}
          toggleShowForm={toggleShowForm}
        />
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setEditBuild({})
          toggleShowForm();
        }}
      >
        {showForm ? "View Builds" : "Add Build"}
      </Button>
    </>
  );
});

import React, { useState, useContext } from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import NewBuild from "./NewBuild";
import { BuildList } from "./BuildList";
import { MaterialContext } from "../materials/MaterialProvider";
import { LayoutContext } from "../layouts/LayoutProvider";
import { SwitchTypeContext } from "../switches/SwitchTypeProvider";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  flexGrow:{
    flexGrow: 1
  },
  cardAppBar: {
    height: 50,
  },
  fixedHeight: {
    height: 50,
  },
}));

export const BuildsView = React.memo(({ myBuilds, currentUserId }) => {
  const classes = useStyles();

  const [showForm, setShowForm] = useState(false);
  const [editBuild, setEditBuild] = useState({});
  const { materials } = useContext(MaterialContext);
  const { switchTypes } = useContext(SwitchTypeContext);
  const { layouts } = useContext(LayoutContext);

  function editThisBuild(build) {
    setEditBuild({ ...build });
    toggleShowForm();
  }

  function toggleShowForm() {
    setShowForm(!showForm);
  }
  return (
    <>
    <div className={classes.flexGrow}>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.cardAppBar}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.flexGrow}>Build Collection</Typography>
          <Button
            fullWidth={false}
            variant="contained"
            color="primary"
            onClick={() => {
              setEditBuild({});
              toggleShowForm();
            }}
          >
            {showForm ? "View Builds" : "Add Build"}
          </Button>
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.root}>
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
      </div>
    </>
  );
});

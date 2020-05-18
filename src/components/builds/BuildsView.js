import React, { useState, useContext } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Fab,
} from "@material-ui/core";
import NewBuild from "./NewBuild";
import { BuildList } from "./BuildList";
import { MaterialContext } from "../materials/MaterialProvider";
import { LayoutContext } from "../layouts/LayoutProvider";
import { SwitchTypeContext } from "../switches/SwitchTypeProvider";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  flexGrow: {
    flexGrow: 1,
  },
  cardAppBar: {
    height: 75,
    padding: theme.spacing(),
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
            <Typography variant="h6" className={classes.flexGrow}>
              Build Collection
            </Typography>
            {showForm ? (
              <Tooltip title="Back">
                <Fab
                  color="secondary"
                  onClick={() => {
                    setEditBuild({});
                    toggleShowForm();
                  }}
                >
                  <ArrowBackRoundedIcon />
                </Fab>
              </Tooltip>
            ) : (
              <Tooltip title="Add New Build">
                <Fab
                  size="small"
                  color="action"
                  onClick={() => {
                    setEditBuild({});
                    toggleShowForm();
                  }}
                >
                  <AddRoundedIcon />
                </Fab>
              </Tooltip>
            )}
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

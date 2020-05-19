import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Tooltip,
  Typography,
  Fab,
} from "@material-ui/core";
import FriendForm from "./FriendForm";
import FriendList from "./FriendList";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  cardAppBar: {
    height: 75,
    padding: theme.spacing(),
  },
}));

export default function FriendsView({ currentUserId }) {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  function toggleShowForm() {
    setShowForm(!showForm);
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="primary"
          elevation={0}
          className={classes.cardAppBar}
        >
          <Toolbar>
            <Typography variant="h5" className={classes.flexGrow}>
              FRIENDS
            </Typography>
            {showForm ? (
              <Tooltip title="Back">
                <Fab size="small" color="secondary" onClick={toggleShowForm}>
                  <ArrowBackRoundedIcon />
                </Fab>
              </Tooltip>
            ) : (
              <Tooltip title="Add New Friend">
                <Fab size="small" color="action" onClick={toggleShowForm}>
                  <AddRoundedIcon />
                </Fab>
              </Tooltip>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {showForm ? (
        <FriendForm toggleForm={toggleShowForm} currentUserId={currentUserId} />
      ) : (
        <FriendList currentUserId={currentUserId} />
      )}
    </>
  );
}

import React from "react";
import { Avatar, Typography, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignContent: "center",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
  name: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function Friend({ friend }) {
  const classes = useStyles();
  const first = friend.firstName;
  const last = friend.lastName;
  const username = friend.username;

  return (
    <>
      <Paper className={classes.root}>
        <Avatar alt={first} className={classes.avatar} variant="rounded" />

        <Typography className={classes.name} variant="h5">
          {first} {last}
        </Typography>
        <Typography className={classes.username} variant="h6">
          {username}
        </Typography>
      </Paper>
    </>
  );
}

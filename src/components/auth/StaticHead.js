import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlined from "@material-ui/icons/LockOutlined";

// theme and layout control
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  logoText:{
      marginBottom: theme.spacing(2)
  }
}));

// function that returns static login header.
export default () => {
  // set variable for classes
  const classes = useStyles();

  // jsx fragment - HTML representation
  return (
    <>
      <Avatar className={classes.avatar} variant="rounded" alt="login">
        <LockOutlined />
      </Avatar>
      <Typography className={classes.logoText} component="h1" variant="h5">
        mech köllection
      </Typography>
    </>
  );
};

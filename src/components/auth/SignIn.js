import React from "react";
import Login from "./Login";
import Register from "./Register";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlined from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

//function to clear login form and render register form
//state hook for login/register?

//theme and layout control
const useStyles = makeStyles((theme) => ({
  container: {
    // padding: theme.spacing(2),
  },
  avatar: {
      backgroundColor: theme.palette.primary.main
  },
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: theme.spacing(10),
    padding: theme.spacing(2)
  },
  form: {
    marginTop: theme.spacing(2)
  },
  fakeLink:{
    marginTop:theme.spacing(2),
    alignSelf: "flex-end"   
  }
}));

export default ({ toggle }) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container} maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar} variant="rounded" alt="login">
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            mech köllection
          </Typography>
          <Typography component="p">please sign in</Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              toggle={toggle}
            >
              Sign In
            </Button>
          </form>
          <Link
            component="button"
            className={classes.fakeLink}
            onClick={() => {
              console.log("Register function go here.");
            }}
          >
            {"Don't have an account? Register Here."}
          </Link>
        </Paper>
      </Container>
    </>
  );
};

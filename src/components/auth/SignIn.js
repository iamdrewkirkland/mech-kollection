import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

// theme and layout control
const useStyles = makeStyles((theme) => ({
  form: {
    // display: "grid"
  },
  fakeLink: {
    marginTop: theme.spacing(2),
    alignSelf: "flex-end",
  },
}));


export default ({ toggleAuth, toggleForm }) => {
  // set variable "classes" to utilize theme and layout control properties
  const classes = useStyles();
  // set DOM references to capture user input for sign in form
  const email = useRef();
  const password = useRef();
  
  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((_) => _.json())
      .then((user) => {
        if (user.length) {
          return user[0];
        }
        return false;
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("current_user", exists.id);
        toggleAuth();
      } else if (exists && exists.password !== password.current.value) {
        window.alert("Password does not match");
      } else if (!exists) {
        window.alert("User account does not exist");
      }
    });
  };
  return (
    <>
      <Typography component="p">Sign In</Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          inputRef={email}
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
          inputRef={password}
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
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </form>
      <Link
        component="button"
        className={classes.fakeLink}
        onClick={toggleForm}
      >
        {"Don't have an account? Register here."}
      </Link>
    </>
  );
};

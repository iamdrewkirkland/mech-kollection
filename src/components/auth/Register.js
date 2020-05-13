import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

// theme and layout control
const useStyles = makeStyles((theme) => ({
  form: {
    display: "grid",
  },
  fakeLink: {
    marginTop: theme.spacing(2),
    alignSelf: "flex-end",
  }
}));

const Register = ({ toggleAuth, toggleForm }) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const verifyPassword = useRef();

  const classes = useStyles();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((_) => _.json())
      .then((user) => {
        if (user.length) {
          return true;
        }
        return false;
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            username: username.current.value,
            firstName: firstName.current.value, 
            lastName: lastName.current.value,
          }),
        })
          .then((_) => _.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("current_user", createdUser.id);
              toggleAuth()
            }
          });
      });
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <>
      <Typography>Register</Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={1}>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="firstName"
              inputRef={firstName}
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={lastName}
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={username}
              id="userName"
              label="Username"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={password}
              id="password"
              label="Password"
              name="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={verifyPassword}
              id="verifyPassword"
              label="Verify Password"
              name="verifypassword"
              autoComplete="new-password"
            />
          </Grid>
          <Button 
          onClick={handleRegister}
          type="submit" 
          fullWidth 
          variant="contained" 
          color="primary">
            Submit
          </Button>
        </Grid>
      </form>
      <Link
        className={classes.fakeLink}
        component="button"
        onClick={toggleForm}
      >
        {"Already have an account? Sign in here."}
      </Link>
    </>
  );
};

export default Register;

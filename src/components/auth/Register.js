import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";



// theme and layout control
const useStyles = makeStyles(theme => ({
    form:{
        display:"grid",
    }
}));


const Register = ({view}) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const verifyPassword = useRef();



  const classes = useStyles()

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
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
        fetch("http://localhost:8088/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            username: username.current.value,
            name: `${firstName.current.value} ${lastName.current.value}`,
          }),
        })
          .then((_) => _.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("current_user", createdUser.id);
            }
          });
      });
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <>
      <Typography>please register here</Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={1}>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="firstName"
              ref={firstName}
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
              ref={lastName}
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
              ref={username}
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
              ref={email}
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
              ref={password}
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
              ref={verifyPassword}
              id="verifyPassword"
              label="Verify Password"
              name="verifypassword"
              autoComplete="new-password"
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </Grid>
      </form>
      <Link
        component="button"
        
        onClick={() => {
          props.view("signIn");
        }}
      >
        {"Already have an account? Sign in here."}
      </Link>
    </>
  );
};

export default Register;

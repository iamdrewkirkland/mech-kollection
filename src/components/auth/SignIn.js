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

//function to clear login form and render register form
//state hook for login/register?

export default ({ toggle }) => {
  return (
    <>
      <Container maxWidth="xs">
        <Avatar variant="rounded" alt="login">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          mech köllection
        </Typography>
        <Typography component="p">please sign in</Typography>
        <form noValidate>
          <TextField
            variant="outlined"
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
          onClick={() => {
           console.log('Register function go here.');
          }}
        >
          {"Don't have an account? Register Here."}
        </Link>
      </Container>
    </>
  );
};

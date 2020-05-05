import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


//theme and layout control
const useStyles = makeStyles((theme) => ({
  form: {
    // display: "grid"
  },
  fakeLink: {
    marginTop: theme.spacing(2),
    alignSelf: "flex-end",
  },
}));

export default ({ view, toggle }) => {
  const classes = useStyles();
  return (
    <>
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
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
      <Link
        component="button"
        className={classes.fakeLink}
        onClick={() => {
          view("register");
        }}
      >
        {"Don't have an account? Register here."}
      </Link>
    </>
  );
};

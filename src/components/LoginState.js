// component resposible for checking and controlling the application state.
import React, { useState, useEffect } from "react";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import StaticHead from "./auth/StaticHead";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: theme.spacing(10),
    padding: theme.spacing(2),
  },
}));

export default function LoginState({ toggleAuth }) {
  // set variable for styles
  const classes = useStyles();

  const [showForm, toggleShowForm] = useState(false);
  const toggleForm = () => toggleShowForm(!showForm);

  return (
    <>
      <Container className="componentView" maxWidth="xs">
        <Paper className={classes.paper} elevation={10}>
          <StaticHead />
          {showForm ? (
            <Register toggleForm={toggleForm} toggleAuth={toggleAuth} />
          ) : (
            <SignIn toggleForm={toggleForm} toggleAuth={toggleAuth} />
          )}
        </Paper>
      </Container>
    </>
  );
}

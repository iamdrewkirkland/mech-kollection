// component resposible for checking and controlling the application state.
import React, { useState, useEffect } from "react";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import StaticHead from "./auth/StaticHead";
import BuildList from "./builds/BuildList";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: theme.spacing(10),
    padding: theme.spacing(2),
  },
}));




export default () => {
  // set variable for styles
  const classes = useStyles();

      // const toggle = () => update(!check); 

  //state hooks
  const [components, setComponents] = useState();
  const [activeView, setActiveView] = useState("signIn");
  //components with state function passed as key-value pair
  const signIn = () => <SignIn view={setActiveView} />;
  const register = () => <Register view={setActiveView} />;
  const buildList = () => <BuildList view={setActiveView} />;
  
  // effect hooks to change the component
  useEffect(() => {
    if (activeView === "signIn") {
      setComponents(signIn);
    } else if (activeView === "register") {
      setComponents(register);
    } 
  }, [activeView]);

  // jsx fragment container to hold current component
  return (
    <>
      <Container className="componentView" maxWidth="xs">
        <Paper className={classes.paper} elevation={10}>
          <StaticHead />
          {components}
        </Paper>
      </Container>
    </>
  );
};

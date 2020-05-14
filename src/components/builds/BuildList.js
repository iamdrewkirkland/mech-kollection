import React from "react";
import { makeStyles, Container, Button } from "@material-ui/core";
import Build from "./Build";

/**
 *  Component: BuildList
 *      Reponsible for rendering the list of build cards from the users build collection.
 *      Converts each object into the JSX representation from Build.js
 *  Author: Drew Kirkland
 */

const useStyles = makeStyles((theme) => ({
  buildList: {
    display: "flex",
    flexFlow: "row wrap",
  },
}));

export default function BuildList() {
  const classes = useStyles();
  const fakeBuilds = [1, 2, 3];
  return (
    <>
      <Container className={classes.buildList}>
        {fakeBuilds.map((build) => (
          <Build key={build}/>
        ))}
      </Container>
    </>
  );
};
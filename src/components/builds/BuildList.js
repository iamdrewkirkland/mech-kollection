import React from "react";
import { makeStyles, Container } from "@material-ui/core";
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

export const BuildList = React.memo(({ myBuilds }) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.buildList}>
        {myBuilds.map((build) => (
          <Build key={build.name} build={build} />
        ))}
      </Container>
    </>
  );
});

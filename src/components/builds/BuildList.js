import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography } from "@material-ui/core";
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
  fixedHeight: {
    height: 50,
  },
}));

export const BuildList = React.memo(
  ({ myBuilds, materials, layouts, switchTypes, editThisBuild }) => {
    const classes = useStyles();

    return (
      <>
        <Container className={classes.buildList}>
           
          {myBuilds.map((build) => (
            <Build
              key={build.name}
              build={build}
              materials={materials}
              layouts={layouts}
              switchTypes={switchTypes}
              editThisBuild={editThisBuild}
            />
          ))}
        </Container>
      </>
    );
  }
);

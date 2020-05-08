import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ResultsView from "./testResults/ResultsView";
import BuildsView from "./builds/BuildsView";
import FriendsView from "./friends/FriendView";

// drawer width for theme and layout control
const drawerWidth = 210;

// theme and layout control
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
  },
  container: {
    paddingTop: theme.mixins.toolbar,
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
  },
  fixedHeight: {
    height: 350,
  },
}));


const Dashboard = () => {
  // theme and layout control variables
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <div className={classes.root}>
        {/* <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography component="h1" variant="h6">
              mech köllection
            </Typography>
          </Toolbar>
        </AppBar> */}
        <div className={classes.appBarSpacer} />
        <Drawer variant="permanent" className={classes.drawer}>
          <List>
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
          </List>
        </Drawer>
        <main>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <Paper className={fixedHeightPaper}>
                  <BuildsView />
                </Paper>
              </Grid>
              <Grid item lg={7}>
                <Paper className={fixedHeightPaper}>
                  <ResultsView />
                </Paper>
              </Grid>
              <Grid item lg={4}>
                <Paper className={fixedHeightPaper}>
                  <FriendsView />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
};
// left side vertical tabs for static navigation

// main container with collection, friends, and test results sections

export default Dashboard;

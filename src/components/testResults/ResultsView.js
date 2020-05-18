import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Fab,
  Toolbar,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import { ResultsList } from "./ResultsList";
import { ResultsForm } from "./ResultsForm";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  cardAppBar: {
    height: 75,
    padding: theme.spacing(),
  },
}));

export const ResultsView = React.memo(
  ({ currentUserId, myBuilds, myCollection }) => {
    const classes = useStyles();
    const [showForm, toggleShowForm] = useState(false);
    const [result, setResult] = useState(null);

    function toggleForm() {
      toggleShowForm(!showForm);
    }

    return (
      <>
        <div >
          <AppBar
            position="static"
            color="primary"
            elevation={0}
            className={classes.cardAppBar}
          >
            <Toolbar>
              <Typography variant="h6" className={classes.flexGrow}>
                Test Results
              </Typography>
              {showForm ? (
                <Tooltip title="Back">
                  <Fab color="secondary" onClick={toggleForm}>
                    <ArrowBackRoundedIcon />
                  </Fab>
                </Tooltip>
              ) : (
                <Tooltip title="Add New Result">
                  <Fab size="small" color="action" onClick={toggleForm}>
                    <AddRoundedIcon />
                  </Fab>
                </Tooltip>
              )}
            </Toolbar>
          </AppBar>
        </div>
        {showForm ? (
          <ResultsForm
            toggleForm={toggleForm}
            result={result}
            setResult={setResult}
            myBuilds={myBuilds}
            myCollection={myCollection}
          />
        ) : (
          <ResultsList
            myBuilds={myBuilds}
            toggleForm={toggleForm}
            currentUserId={currentUserId}
          />
        )}
      </>
    );
  }
);

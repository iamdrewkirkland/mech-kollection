import React, { useState, useContext } from "react";
import { BuildForm } from "./BuildForm";
import CaseForm from "./CaseForm";
import KeycapForm from "./KeycapForm";
import SwitchForm from "./SwitchForm";
import {
  Button,
  Paper,
  Typography,
  Stepper,
  StepLabel,
  Step,
  makeStyles,
} from "@material-ui/core";
import { BuildContext } from "./BuildDataProvider";

//function to override default styling
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

//function that established a new build to be linked to "add build" button
export default function NewBuild() {
  //variable to hold styles
  const classes = useStyles();

  //variable to hold function to post data to API
  const { addBuild } = useContext(BuildContext);
  //array declaring the name and order of the steps
  const steps = ["Build Details", "Case", "Switches", "Keycaps"];

  /**
   * state hook to set and contain the form input values.
   * pass to each child component to set and return values.
   */
  const [buildInputs, setBuildInputs] = useState(null);
  const [buildStatus, setBuildStatus] = useState(null);
  // const [caseInputs, setCaseInputs] = useState(null);

  const newBuildObject = { ...buildInputs };
  const newStatusObject = { ...buildStatus };

  //function to return the content of the corresponding step
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <BuildForm
            currentInputs={buildInputs}
            setInputs={setBuildInputs}
            status={buildStatus}
            setStatus={setBuildStatus}
          />
        );
      case 1:
        return <CaseForm />;
      case 2:
        return <SwitchForm />;
      case 3:
        return <KeycapForm />;
      default:
        throw new Error("Unknown step");
    }
  }

  //state hook to check and set the current form step
  const [activeStep, setActiveStep] = useState(0);

  //function for "next" button action
  const handleNext = () => {
    if (activeStep === steps.length) {
      submitBuild(newBuildObject);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  //function for "back" button action
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function submitBuild() {
    addBuild(newBuildObject);
    
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h4">Add New Build</Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5">Your build is complete.</Typography>
              <Typography variant="subtitle1">
                Your build details have been saved. You can now view it in your
                collection and log typing test results.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div>
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    if (activeStep === steps.length - 1) {
                      submitBuild(newBuildObject);
                      handleNext();
                    } else {
                      handleNext();
                    }
                  }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </>
      </Paper>
    </>
  );
}

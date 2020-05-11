import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

//function that established a new build to be linked to "add build" button
export default function NewBuild() {
  //array declaring the name and order of the steps
  const steps = ["Build Details", "Case", "Switches", "Keycaps"];

  /**
   * state hook to set and contain the form input values.
   * pass to each child component to set and return values.
   */
  const [buildInputs, setBuildInputs] = useState(null)

  //function to return the content of the corresponding step
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BuildForm setInputs={setBuildInputs} />;
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

  //variable to hold styles
  const classes = useStyles();

  //state hook to check and set the current form step
  const [activeStep, setActiveStep] = useState(0);

  //function for "next" button action
  const handleNext = () => {
    //if active step = steps.length then AddBuild
    console.log(buildInputs)
    debugger
    setActiveStep(activeStep + 1);
  };

  //function for "back" button action
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
                  onClick={handleNext}
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

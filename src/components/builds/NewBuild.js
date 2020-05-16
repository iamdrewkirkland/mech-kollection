import React, { useState, useContext } from "react";
import BuildForm from "./BuildForm";
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
import { StatusContext } from "../statuses/StatusProvider";



//function to override default styling
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

//function that established a new build to be linked to "add build" button
export default function NewBuild({materials, layouts, switchTypes}) {
  //variable to hold styles
  const classes = useStyles();

  const { addBuild } = useContext(BuildContext);
  const { addStatus } = useContext(StatusContext);

  /** STATE HOOKS
   *    state hook to set and contain the form input values.
   *    pass to each child component to set and return values.
   */
  const [buildInputs, setBuildInputs] = useState(null);
  const [buildStatus, setBuildStatus] = useState(null);

  //separating form inputs into new objects to be posted
  const newBuildObject = { ...buildInputs };
  const newStatusObject = { ...buildStatus };

  //array declaring the name and order of the form steps
  const steps = ["Build Details", "Case", "Switches", "Keycaps"];

  //function to return the content of the corresponding form step
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
        return (
          <CaseForm
            currentInputs={buildInputs}
            setInputs={setBuildInputs}
            materials={materials}
            layouts={layouts}
          />
        );
      case 2:
        return (
          <SwitchForm
            currentInputs={buildInputs}
            setInputs={setBuildInputs}
            switchTypes={switchTypes}
          />
        );
      case 3:
        return (
          <KeycapForm
            currentInputs={buildInputs}
            setInputs={setBuildInputs}
            materials={materials}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  //state hook to check and set the current form step
  const [activeStep, setActiveStep] = useState(0);

  //function for "next" button action. on final step, submit newBuild for post.
  function handleNext() {
    if (activeStep === steps.length) {
      submitBuild();
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  //function for "back" button action
  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  //function that designates all build data to appropriate resource
  function submitBuild() {
    addBuild(newBuildObject);
    addStatus(newStatusObject);
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

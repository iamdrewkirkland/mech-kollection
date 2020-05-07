import React, { useState } from "react";
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
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

const steps = ["Build Details", "Case", "Switches", "Keycaps"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BuildForm />;
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

const NewBuild = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container maxWidth="md">
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
                  Your build details have been saved. You can now view it in
                  your collection and log typing test results.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>Back</Button>
                  )}
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
      </Container>
    </>
  );
};

export default NewBuild;

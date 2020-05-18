import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Switch, Button } from "@material-ui/core";

export default function BuildForm({
  activeStep,
  setActiveStep,
  status,
  setStatus,
  currentInputs,
  setInputs,
}) {
  //establish input references to grab values
  const buildName = useRef();
  const buildWeight = useRef();
  const buildDescription = useRef();
  let isActive = false;
  const activeStatus = useRef();

  //deconstruct all current inputs from previous form pages
  const currentBuildObject = { ...currentInputs };
  const currentStatusObjecct = { ...status };

  //function to control value of toggle
  function toggleActive() {
    return (isActive = !isActive);
  }

  //function that executes each time an input is changed
  function handleChange() {
     
 const newBuildObject = {
  name: buildName.current.value,
  buildWeight: parseInt(buildWeight.current.value),
  description: buildDescription.current.value,
};

    const newStatusObject = {
      isActive: isActive,
      label: activeStatus.current.value,
    };
    setStatus(Object.assign(currentStatusObjecct, newStatusObject));
  }

  // function handleNext() {
  //   debugger
  //   setInputs(Object.assign(currentBuildObject, newBuildObject));
  //   debugger
  //   setActiveStep(activeStep + 1)
    
  // }

  return (
    <>
      <Typography variant="h6">Build Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            label="Build Name"
            onChange={handleChange}
            inputRef={buildName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Build Description"
            onChange={handleChange}
            inputRef={buildDescription}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Build Weight (grams)"
            inputRef={buildWeight}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            label="Active"
            control={
              <Switch
                onChange={() => {
                  toggleActive();
                  handleChange();
                }}
              />
            }
          />
        </Grid>
        <Grid item>
          <TextField
            label="Label (Home, Work, Display, etc)"
            onChange={handleChange}
            inputRef={activeStatus}
          />
        </Grid>
      </Grid>
      <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleNext}
                >
                  DOESN'T WORK
                </Button>
    </>
  );
}

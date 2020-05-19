import React, { useRef, useState, useEffect } from "react";
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
  editBuild,
}) {
  useEffect(() => {
    if (Object.values(editBuild).length !== 0) {
      setInputs(editBuild);
    }
  }, [editBuild, setInputs]);

  console.log(editBuild);

  //establish input references to manage values
  let isActive = false;
  const activeStatus = useRef();
  const [buildName, setBuildName] = useState();
  const [buildDescription, setBuildDescription] = useState();
  const [buildWeight, setBuildWeight] = useState(null);

  //deconstruct all current inputs from previous form pages
  const currentStatusObjecct = { ...status };

  //function to control value of toggle
  function toggleActive() {
    return (isActive = !isActive);
  }

  const pageObject = {
    name: buildName,
    buildWeight: parseInt(buildWeight),
    description: buildDescription,
  };

  // function that executes each time status is changed
  function handleChange() {
    const newStatusObject = {
      isActive: isActive,
      label: activeStatus.current.value,
    };
    setStatus(Object.assign(currentStatusObjecct, newStatusObject));
  }

  function handleNext() {
    if (isNaN(pageObject.buildWeight)) {
      delete pageObject.buildWeight;
    }
    setInputs(Object.assign(currentInputs, pageObject));
    setActiveStep(activeStep + 1);
  }

  function handleNameChange(e) {
    setBuildName(e.target.value);
  }
  function handleWeightChange(e) {
    setBuildWeight(e.target.value);
  }
  function handleDescriptionChange(e) {
    setBuildDescription(e.target.value);
  }

  return (
    <>
      <Typography variant="h4">Build Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            variant="outlined"
            label="Build Name"
            onChange={handleNameChange}
            value={buildName}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Build Description"
            onChange={handleDescriptionChange}
            value={buildDescription}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Build Weight (grams)"
            onChange={handleWeightChange}
            value={buildWeight}
          />
        </Grid>
        {/* <Grid item>
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
        </Grid> */}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleNext}>
        NEXT
      </Button>
    </>
  );
}

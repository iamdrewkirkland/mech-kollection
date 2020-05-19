import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem, Button } from "@material-ui/core";

export default function SwitchForm({ currentInputs, setInputs, switchTypes, activeStep, setActiveStep }) {
  const [switchName, setSwitchName] = useState();
  const [switchWeight, setSwitchWeight] = useState(null);
  const [switchLube, setSwitchLube] = useState();
  const [switchTypeId, setSwitchTypeId] = useState();

  const pageObject = {
    switchName: switchName,
    switchWeight: parseInt(switchWeight),
    switchLube: switchLube,
    switchTypeId: switchTypeId,
  };

  function handleNext() {
    if (isNaN(pageObject.switchWeight)){
      delete pageObject.switchWeight
    }
    setInputs(Object.assign(currentInputs, pageObject));
    setActiveStep(activeStep + 1);

  }

  function handleNameChange(e) {
    setSwitchName(e.target.value);
  }
  function handleWeightChange(e) {
    setSwitchWeight(e.target.value);
  }
  function handleLubeChange(e) {
    setSwitchLube(e.target.value);
  }
  function handleTypeChange(e) {
    setSwitchTypeId(e.target.value);
  }
  return (
    <>
      <Typography variant="h4">Switches</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            variant="outlined"
            required
            label="Name"
            onChange={handleNameChange}
            value={switchName}
          />
        </Grid>
        <Grid item>
          <InputLabel id="switchType">Type</InputLabel>
          <Select
            variant="outlined"
            required
            labelId="switchType"
            onChange={handleTypeChange}
            value={switchTypeId}
          >
            {switchTypes.map((type) => (
              <MenuItem key={type.name} value={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Weight (grams)"
            onChange={handleWeightChange}
            value={switchWeight}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Lube"
            onChange={handleLubeChange}
            value={switchLube}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleNext}>
        NEXT
      </Button>
    </>
  );
}

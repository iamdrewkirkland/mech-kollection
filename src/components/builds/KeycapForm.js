import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";
import { BuildContext } from "./BuildDataProvider";

export default function KeycapForm({
  currentInputs,
  setInputs,
  materials,
  activeStep,
  setActiveStep,
}) {
  const [keycapSculpt, setKeycapSculpt] = useState();
  const [keycapName, setKeycapName] = useState();
  const [keycapProfile, setKeycapProfile] = useState();
  const [keycapMaterialId, setKeycapMaterialId] = useState();
  const { addBuild } = useContext(BuildContext);

  function filterMaterials(resource) {
    return materials.filter((material) => material.resource === resource);
  }
  const pageObject = {
    keycapName: keycapName,
    keycapProfile: keycapProfile,
    keycapMaterialId: keycapMaterialId,
    keycapSculpt: keycapSculpt,
  };

  function handleNext() {
    setInputs(Object.assign(currentInputs, pageObject));
    addBuild(currentInputs);
    setActiveStep(activeStep + 1);
  }

  function handleSculptChange(e) {
    setKeycapSculpt(e.target.value);
  }
  function handleNameChange(e) {
    setKeycapName(e.target.value);
  }
  function handleProfileChange(e) {
    setKeycapProfile(e.target.value);
  }
  function handleMaterialChange(e) {
    setKeycapMaterialId(e.target.value);
  }

  return (
    <>
      <Typography variant="h4">Keycaps</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            required
            label="Name"
            onChangeCapture={handleNameChange}
            value={keycapName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Profile"
            onChange={handleProfileChange}
            value={keycapProfile}
          />
        </Grid>
        <Grid item>
          <InputLabel id="keycapMaterial"> Keycap Material</InputLabel>
          <Select
            labelId="keycapMaterial"
            onChange={handleMaterialChange}
            value={keycapMaterialId}
          >
            {filterMaterials("keycap").map((material) => (
              <MenuItem key={material.name} value={material.id}>
                {material.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <FormLabel>Sculpted?</FormLabel>
          <RadioGroup
            name="sculpt"
            value={keycapSculpt}
            onChange={handleSculptChange}
          >
            <FormControlLabel
              key="sculpted"
              label="Sculpted"
              labelPlacement="end"
              value="Sculpted"
              control={<Radio />}
            />
            <FormControlLabel
              key="unsculpted"
              label="Unsculpted"
              labelPlacement="end"
              value="Unsculpted"
              control={<Radio />}
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleNext}>
        SUBMIT BUILD
      </Button>
    </>
  );
}

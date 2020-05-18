import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";

export default function KeycapForm({ currentInputs, setInputs, materials }) {
  const [keycapSculpt, setKeycapSculpt] = useState();
  const [keycapName, setKeycapName] = useState();
  const [keycapProfile, setKeycapProfile] = useState();
  const [keycapMaterialId, setKeycapMaterialId] = useState();

  // let currentBuildObject = { ...currentInputs };

  function filterMaterials(resource) {
    return materials.filter((material) => material.resource === resource);
  }

  const pageObject = {
    keycapName: keycapName,
    keycapProfile: keycapProfile,
    keycapMaterialId: keycapMaterialId,
    keycapSculpt: keycapSculpt,
  };

  const setPageInputs = () => {
    setInputs(Object.assign(currentInputs, pageObject));
  };

  function handleSculptChange(e) {
    setKeycapSculpt(e.target.value);
    setPageInputs();
  }
  function handleNameChange(e) {
    setKeycapName(e.target.value);
    setPageInputs();
  }
  function handleProfileChange(e) {
    setKeycapProfile(e.target.value);
    setPageInputs();
  }
  function handleMaterialChange(e) {
    setKeycapMaterialId(e.target.value);
    setPageInputs();
  }

  return (
    <>
      <Typography variant="h4">Keycaps</Typography>
      <Grid container spacing={2}>
          <Grid item>
            <TextField
              required
              label="Name"
              onChange={handleNameChange}
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
    </>
  );
}

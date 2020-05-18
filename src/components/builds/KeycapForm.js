import React, { useRef, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  FormHelperText,
} from "@material-ui/core";

export default function KeycapForm({
  currentInputs,
  setInputs,
  materials,
}) {
  const [keycapSculpt, setKeycapSculpt] = useState();
  const [keycapName, setKeycapName] = useState();
  const [keycapProfile, setKeycapProfile] = useState();
  const [keycapMaterialId, setKeycapMaterialId] = useState();
  const [error, setError] = useState(false);

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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (radioValue === null) {
  //     setError(true);
  //   } else {
  //     addResults(newResultObject);
  //     toggleForm();
  //   }
  // }

  function handleSculptChange(e) {
    setKeycapSculpt(e.target.value);
    setError(false);
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
      <Grid container spacing={1}>
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
        <Grid>
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
        <Grid>
          <FormControl component="fieldset">
            <RadioGroup
              name="sculpt"
              value={keycapSculpt}
              onChange={handleSculptChange}
            >
              <FormControlLabel
                label="Sculpted"
                labelPlacement="end"
                value={true}
                control={<Radio />}
              />
              <FormControlLabel
                label="Unsculpted"
                labelPlacement="end"
                value={false}
                control={<Radio />}
              />
            </RadioGroup>
            <FormHelperText color="secondary">
              {error ? "Please selection an option." : null}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

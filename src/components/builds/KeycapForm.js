import React, { useRef } from "react";
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
} from "@material-ui/core";

export default function KeycapForm({ currentInputs, setInputs, materials }) {
  const keycapName = useRef();
  const keycapProfile = useRef();
  const keycapMaterial = useRef();

  let currentBuildObject = { ...currentInputs };

  function filterMaterials(resource) {
    return materials.filter((material) => material.resource === resource);
  }

  const handleChange = () => {
    const newBuildObject = {
      keycapName: keycapName.current.value,
      keycapProfile: keycapProfile.current.value,
      keycapMaterialId: keycapMaterial.current.value,
    };
    setInputs(Object.assign(currentBuildObject, newBuildObject));
  };

  return (
    <>
      <Typography variant="h4">Keycaps</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            required
            label="Name"
            onChange={handleChange}
            inputRef={keycapName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Profile"
            onChange={handleChange}
            inputRef={keycapProfile}
          />
        </Grid>
        <Grid>
          <InputLabel id="keycapMaterial"> Keycap Material</InputLabel>
          <Select
            labelId="keycapMaterial"
            onChange={handleChange}
            inputRef={keycapMaterial}
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
            <FormControlLabel
              label="Sculpted"
              labelPlacement="end"
              control={<Radio />}
            />
            <FormControlLabel
              label="Unsculpted"
              labelPlacement="end"
              control={<Radio />}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

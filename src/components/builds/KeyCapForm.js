import React from "react";
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

export default function CaseForm() {
  return (
    <>
      <Typography variant="h4">Key Caps</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Name" />
        </Grid>
        <Grid item>
          <TextField label="Profile" />
        </Grid>
        <Grid>
          <InputLabel id="switchMaterial">Material</InputLabel>
          <Select labelId="switchMaterial">
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
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

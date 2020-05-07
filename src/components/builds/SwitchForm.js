import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

export default function SwitchForm() {
  return (
    <>
      <Typography variant="h4">Switches</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Name" />
        </Grid>
        <Grid>
          <InputLabel id="switchType">Type</InputLabel>
          <Select labelId="switchType">
            <MenuItem>Linear</MenuItem>
            <MenuItem>Tactile</MenuItem>
            <MenuItem>Clicky</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <TextField label="Weight (grams)" />
        </Grid>
        <Grid item>
          <TextField label="Lube" />
        </Grid>
      </Grid>
    </>
  );
}

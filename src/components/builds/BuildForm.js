import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Switch } from "@material-ui/core";

export default function BuildForm() {
  return (
    <>
      <Typography variant="h4">Build Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Build Name" />
        </Grid>
        <Grid item>
          <FormControlLabel 
          label="Active"
          control={
            <Switch />
            } />
        </Grid>
        <Grid item>
          <TextField label="Active Status" />
        </Grid>
      </Grid>
    </>
  );
}

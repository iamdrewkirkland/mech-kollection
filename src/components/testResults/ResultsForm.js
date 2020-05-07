import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {  FormControl, Radio, FormControlLabel, Select, InputLabel, MenuItem, Switch } from "@material-ui/core";

export default function ResultsForm() {
  return (
    <>
      <Typography variant="h4">Results Info</Typography>
      <Grid container spacing={1}>
        <Grid>
            <InputLabel id="layout">Build</InputLabel>
            <Select labelId="layout">
                <MenuItem>Build 1</MenuItem>
                <MenuItem>Build 2</MenuItem>
                <MenuItem>Build 3</MenuItem>
            </Select>
        </Grid>
        <Grid>
            <TextField 
                id="datetime-local"
                label="Test Time"
                type="datetime-local"
                InputLabelProps ={{
                  shrink: true,
                }}
            />
        </Grid>
        <Grid item>
          <TextField label="WPM" />
        </Grid>
        <Grid item>
          <FormControlLabel 
          label="Personal Best?"
          control={
            <Switch />
            } />
        </Grid>
        <Grid>
          <FormControl component="fieldset">
            <FormControlLabel
              label="10fastfingers.com"
              labelPlacement="end"
              control={<Radio />}
            />
            <FormControlLabel
              label="typetest.io"
              labelPlacement="end"
              control={<Radio />}
            />
            <FormControlLabel
            label="typing.works"
            labelPlacement="end"
            control={<Radio />}
          />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
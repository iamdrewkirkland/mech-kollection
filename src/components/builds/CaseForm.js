import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {  Select, InputLabel, MenuItem } from "@material-ui/core";

export default function CaseForm() {
  return (
    <>
      <Typography variant="h4">Case Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Name" />
        </Grid>
        <Grid item>
          <TextField label="Color" />
        </Grid>
        <Grid item>
          <TextField label="Designer" />
        </Grid>
        
        <Grid>
            <InputLabel id="layout">Layout</InputLabel>
            <Select labelId="layout">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
            </Select>
        </Grid>
        <Grid>
            <InputLabel id="caseMaterial">Material</InputLabel>
            <Select labelId="caseMaterial">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
            </Select>
        </Grid>
        <Grid>
            <InputLabel id="plateMaterial">Layout</InputLabel>
            <Select labelId="plateMaterial">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
            </Select>
        </Grid>
      </Grid>
    </>
  );
}
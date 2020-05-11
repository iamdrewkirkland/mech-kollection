import React, { useRef, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Switch } from "@material-ui/core";

//export build info via context provider


export const BuildForm = ({ setInputs }) => {
  //state hook to check the inputs for changes

  const buildName = useRef();
  const isActive = false;
  const statusName = useRef();

  const buildObject={}
  
  const handleChange = () => {

    const newBuildObject={
      buildName:buildName.current.value,
  
    }
    setInputs(Object.assign(buildObject, newBuildObject))
  }
 
  
 
  
  return (
    <>
      <Typography variant="h4">Build Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Build Name" onChange={handleChange} inputRef={buildName} />
        </Grid>
        <Grid item>
          <FormControlLabel
            label="Active"
            control={<Switch onChange={!isActive} />}
          />
        </Grid>
        <Grid item>
          <TextField label="Active Status" inputRef={statusName} />
        </Grid>
      </Grid>
    </>
  );
};

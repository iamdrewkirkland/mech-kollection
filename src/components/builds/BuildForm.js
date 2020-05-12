import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Switch } from "@material-ui/core";

//export build info via context provider

export const BuildForm = ({ currentInputs, setInputs }) => {
  //state hook to check the inputs for changes

  const buildName = useRef();
  const isActive = false;
  const statusName = useRef();

  let currentBuildObject = { ...currentInputs };

  const handleChange = (input) => {
    const newBuildObject = {
      buildName: input.target.value,
    };
    setInputs(Object.assign(currentBuildObject, newBuildObject));
  };

  return (
    <>
      <Typography variant="h4">Build Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            label="Build Name"
            onChange={(e) => handleChange(e)}
            inputRef={buildName}
          />
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

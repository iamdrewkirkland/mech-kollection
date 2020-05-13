import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Switch } from "@material-ui/core";

export default function BuildForm({ status, setStatus, currentInputs, setInputs }) {
  const buildName = useRef();
  const buildWeight = useRef();
  let isActive = false;
  const activeStatus = useRef();

  let currentBuildObject = { ...currentInputs };
  let currentStatusObjecct = { ...status };

  function toggleActive() {isActive = !isActive}

  const handleChange = () => {
    const newBuildObject = {
      userId: parseInt(localStorage.getItem("current_user")),
      name: buildName.current.value,
      buildWeight: parseInt(buildWeight.current.value),
    };
    const newStatusObject = {
      isActive: isActive,
      label: activeStatus.current.value,
    };
    setInputs(Object.assign(currentBuildObject, newBuildObject));
    setStatus(Object.assign(currentStatusObjecct, newStatusObject));
  };

  return (
    <>
      <Typography variant="h6">Build Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            label="Build Name"
            onChange={handleChange}
            inputRef={buildName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Build Weight (grams)"
            inputRef={buildWeight}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            label="Active"
            control={<Switch onChange={()=>{
              toggleActive()
              handleChange()
            }}/>}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Label (Home, Work, Display, etc)"
            onChange={handleChange}
            inputRef={activeStatus}
          />
        </Grid>
      </Grid>
    </>
  );
};

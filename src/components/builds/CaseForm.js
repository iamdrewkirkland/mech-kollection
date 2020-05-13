import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

export default function CaseForm({currentInputs, setInputs}) {
  const caseName = useRef();
  const caseColor = useRef();
  const caseDesigner = useRef();

  let currentBuildObject = { ...currentInputs };


  const handleChange = () => {
    const newBuildObject = {
      caseName: caseName.current.value,
      caseColor: caseColor.current.value,
      caseDesigner: caseDesigner.current.value,
    }
    setInputs(Object.assign(currentBuildObject, newBuildObject));
  }
  return (
    <>
      <Typography variant="h4">Case Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Name" onChange={handleChange} inputRef={caseName} />
        </Grid>
        <Grid item>
          <TextField label="Color" onChange={handleChange} inputRef={caseColor} />
        </Grid>
        <Grid item>
          <TextField label="Designer" onChange={handleChange} inputRef={caseDesigner} />
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

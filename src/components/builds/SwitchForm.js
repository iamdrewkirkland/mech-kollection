import React, {useRef} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

export default function SwitchForm({currentInputs, setInputs}) {

  const switchName = useRef();
  const switchWeight = useRef();
  const switchLube = useRef();

  let currentBuildObject = { ...currentInputs };

  
  const handleChange = () => {
    const newBuildObject = {
      switchName: switchName.current.value,
      switchWeight: parseInt(switchWeight.current.value),
      switchLube: switchLube.current.value,
    }
    setInputs(Object.assign(currentBuildObject, newBuildObject));
  }

  return (
    <>
      <Typography variant="h4">Switches</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Name" onChange={handleChange} inputRef={switchName} />
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
          <TextField label="Weight (grams)" onChange={handleChange} inputRef={switchWeight} />
        </Grid>
        <Grid item>
          <TextField label="Lube" onChange={handleChange} inputRef={switchLube} />
        </Grid>
      </Grid>
    </>
  );
}

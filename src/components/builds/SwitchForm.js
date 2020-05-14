import React, { useRef, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { SwitchTypeContext } from "../switches/SwitchTypeProvider";

export default function SwitchForm({ currentInputs, setInputs }) {
  const { switchTypes } = useContext(SwitchTypeContext);
  const switchName = useRef();
  const switchWeight = useRef();
  const switchLube = useRef();
  const switchType = useRef();

  let currentBuildObject = { ...currentInputs };

  const handleChange = () => {
    const newBuildObject = {
      switchName: switchName.current.value,
      switchWeight: parseInt(switchWeight.current.value),
      switchLube: switchLube.current.value,
      switchTypeId: switchType.current.value,
    };
    setInputs(Object.assign(currentBuildObject, newBuildObject));
  };

  return (
    <>
      <Typography variant="h4">Switches</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            label="Name"
            onChange={handleChange}
            inputRef={switchName}
          />
        </Grid>
        <Grid>
          <InputLabel id="switchType">Type</InputLabel>
          <Select
            labelId="switchType"
            onChange={handleChange}
            inputRef={switchType}
          >
            {switchTypes.map((type) => (
              <MenuItem key={type.name} value={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <TextField
            label="Weight (grams)"
            onChange={handleChange}
            inputRef={switchWeight}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Lube"
            onChange={handleChange}
            inputRef={switchLube}
          />
        </Grid>
      </Grid>
    </>
  );
}

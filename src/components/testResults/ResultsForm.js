import React, { useContext, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  Radio,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  Switch,
} from "@material-ui/core";
import { BuildContext } from "../builds/BuildDataProvider";

export default function ResultsForm({ setResult }) {
  const { getBuilds } = useContext(BuildContext);
  const buildId = useRef();
  const date = useRef();
  const wpm = useRef();
  const website = useRef();
  const userId = localStorage.getItem("current_user");
  let personalBest = false;

  function toggleBest() {
    return (personalBest = !personalBest);
  }

  function userBuilds() {
    return getBuilds(userId);
  }

  const handleChange = () => {
    const newResultObject = {
      buildId: buildId.current.value,
      date: date.current.value,
      wpm: parseInt(wpm.current.value),
      pb: personalBest.current.value,
      website: website.current.value,
    };
    setResult(newResultObject);
  };

  return (
    <>
      <Typography variant="h4">Results Info</Typography>
      <Grid container spacing={1}>
        <Grid>
          <InputLabel id="build">Build</InputLabel>
          <Select labelId="build" onChange={handleChange} inputRef={buildId}>
            {userBuilds.map((build) => (
              <MenuItem key={build} value={build.id}>
                {build.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid>
          <TextField
            id="datetime-local"
            label="Test Time"
            type="datetime-local"
            inputRef={date}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
          <TextField label="WPM" inputRef={wpm} onChange={handleChange} />
        </Grid>
        <Grid item>
          <FormControlLabel
            label="Personal Best?"
            control={
              <Switch
                onChange={() => {
                  toggleBest();
                  handleChange();
                }}
              />
            }
          />
        </Grid>
        <Grid>
          <FormControl component="fieldset" inputRef={website}>
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

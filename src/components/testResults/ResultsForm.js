import React, { useContext, useRef, useState } from "react";
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
  Button,
} from "@material-ui/core";
import { BuildContext } from "../builds/BuildDataProvider";
import { ResultsContext } from "./ResultsProvider";


export default function ResultsForm({ result, toggleForm, setResult, myBuilds }) {
  const buildId = useRef(null);
  const date = useRef(null);
  const wpm = useRef(null);
  const website = useRef("");
  const [personalBest, setPersonalBest] = useState(false);

  const { addResults } = useContext(ResultsContext);
  const { builds } = useContext(BuildContext);

  function toggleBest() {
    setPersonalBest(!personalBest);
  }

  function handleChange() {
    const newResultObject = {
      buildId: buildId.current.value,
      date: date.current.value,
      wpm: parseInt(wpm.current.value),
      pb: personalBest,
      website: website.current.value,
    };
    setResult(newResultObject);
  };
  function submitClose() {
    addResults(result)
    toggleForm();
  }
  return (
    <>
      <Typography variant="h4">Results Info</Typography>
      <Grid container spacing={1}>
        <Grid>
          <InputLabel id="build">Build</InputLabel>
          <Select labelId="build" onChange={handleChange} inputRef={buildId}>
            {myBuilds.map((build) => (
              <MenuItem key={build.name} value={build.id}>
                {build.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid>
          <TextField
            id="datetime-local"
            label="Date and Time"
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
        <Button
        variant="contained"
        color="primary"
        onClick={submitClose}>ADD RESULT</Button>
      </Grid>
    </>
  );
}

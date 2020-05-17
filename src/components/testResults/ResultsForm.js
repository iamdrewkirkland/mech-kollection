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
import { ResultsContext } from "./ResultsProvider";

export const ResultsForm = React.memo(
  ({ result, toggleForm, setResult, myBuilds, myCollection }) => {
    const buildId = useRef(null);
    const date = useRef(null);
    const wpm = useRef(null);
    const website = useRef("");
    const [personalBest, setPersonalBest] = useState(false);

    const { addResults } = useContext(ResultsContext);

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
    }
    function submitClose() {
      addResults(result);
      toggleForm();
    }

    //function to check if property exsists and is not null
    function inputCheck(buildObject, prop) {
      if (buildObject.hasOwnProperty(prop) && buildObject[prop] !== "") {
        return buildObject[prop];
      }
    }
    return (
      <>
        <Typography variant="h4">Results Info</Typography>
        <Grid container spacing={1}>
          <Grid>
            <InputLabel id="build">Build</InputLabel>
            <Select labelId="build" onChange={handleChange} inputRef={buildId}>
              {myCollection.map((build) => (
                <MenuItem
                  key={
                    inputCheck(build, "name")
                      ? `${build.name}`
                      : `${build.caseName}`
                  }
                  value={build.id}
                >
                  {inputCheck(build, "name")
                    ? `${build.name}`
                    : `${build.caseName}`}
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
          <Button variant="contained" color="primary" onClick={submitClose}>
            ADD RESULT
          </Button>
        </Grid>
      </>
    );
  }
);

import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Radio,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  Switch,
  Button,
  RadioGroup,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import { ResultsContext } from "./ResultsProvider";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export const ResultsForm = React.memo(({ toggleForm, myCollection }) => {
  const [buildId, setBuildId] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [personalBest, setPersonalBest] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [radioValue, setRadioValue] = useState(null);
  const [error, setError] = useState(false);

  const { addResults } = useContext(ResultsContext);
  
  //object containing values of user inputs 
  const newResultObject = {
    buildId: buildId,
    date: selectedDate,
    wpm: parseInt(wpm),
    pb: personalBest,
    website: radioValue,
  };

  //add or remove websites here
  const websitesArray = [
    "10fastfingers",
    "typetest.io",
    "typeracer",
    "typing.works",
  ];

  function toggleBest() {
    setPersonalBest(!personalBest);
  }

  function handleWpmChange(e) {
    setWpm(e.target.value);
  }
  function handleBuildChange(e) {
    setBuildId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (radioValue === null) {
      setError(true);
    } else {
      addResults(newResultObject);
      toggleForm();
    }
  }

  //function to check if property exsists and is not null
  function inputCheck(buildObject, prop) {
    if (buildObject.hasOwnProperty(prop) && buildObject[prop] !== "") {
      return buildObject[prop];
    }
  }

  function handleRadioChange(e) {
    setRadioValue(e.target.value);
    setError(false);
  }
  return (
    <>
      <Typography variant="h4">Results Info</Typography>
      <Grid container spacing={2}>
        <FormControl component="div" error={error}>
          <Grid item>
            <InputLabel id="build">Build</InputLabel>
            <Select labelId="build" onChange={handleBuildChange}>
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
          <Grid item>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                disableFuture={true}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item>
            <TextField label="WPM" value={wpm} onChange={handleWpmChange} />
          </Grid>
          <Grid item>
            <FormControlLabel
              label="Personal Best?"
              control={
                <Switch
                  onChange={() => {
                    toggleBest();
                  }}
                />
              }
            />
          </Grid>

          <Grid item>
            <FormLabel>Website</FormLabel>
            <RadioGroup
              name="website"
              value={radioValue}
              onChange={handleRadioChange}
            >
              {websitesArray.map((website) => {
                return (
                  <FormControlLabel
                    key={website}
                    label={website}
                    value={website}
                    labelPlacement="end"
                    control={<Radio />}
                  />
                );
              })}
            </RadioGroup>
            <FormHelperText color="secondary">
              {error ? "Please selection an option." : null}
            </FormHelperText>
          </Grid>
        </FormControl>
              <Grid item>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          >
          Submit
        </Button>
          </Grid>
      </Grid>
    </>
  );
});

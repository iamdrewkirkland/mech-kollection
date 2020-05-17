import React, { useContext, useRef, useState } from "react";
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

export const ResultsForm = React.memo(
  ({ result, toggleForm, setResult, myCollection }) => {
    const buildId = useRef(null);
    const wpm = useRef(null);
    const [personalBest, setPersonalBest] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());
    const [radioValue, setRadioValue] = useState(null);
    const [error, setError] = useState(false);

    const { addResults } = useContext(ResultsContext);
    const websitesArray = [
      "10fastfingers",
      "typetest.io",
      "typeracer",
      "typing.works",
    ];
    function toggleBest() {
      setPersonalBest(!personalBest);
    }

    function handleChange() {
      const newResultObject = {
        buildId: buildId.current.value,
        date: selectedDate,
        wpm: parseInt(wpm.current.value),
        pb: personalBest,
        website: radioValue,
      };
      setResult(newResultObject);
    }
    function handleSubmit(e) {
      e.preventDefault();
      if (radioValue === null) {
        setError(true);
      } else {
        addResults(result);
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
          <FormControl component="fieldset" error={error}>
            <Grid>
              <InputLabel id="build">Build</InputLabel>
              <Select
                labelId="build"
                onChange={handleChange}
                inputRef={buildId}
              >
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
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  disableFuture={true}
                />
              </MuiPickersUtilsProvider>
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

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            ADD RESULT
          </Button>
        </Grid>
      </>
    );
  }
);

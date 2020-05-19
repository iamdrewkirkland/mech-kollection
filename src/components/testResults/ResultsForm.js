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
  makeStyles,
} from "@material-ui/core";
import { ResultsContext } from "./ResultsProvider";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  button: {
    alignSelf: "center",
  },
}));

export const ResultsForm = React.memo(({ toggleForm, myCollection }) => {
  const classes = useStyles();
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
      <Typography variant="h4" className={classes.title}>
        Results Info
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <InputLabel id="build">Build</InputLabel>
          <Select
            autoWidth
            variant="outlined"
            labelId="build"
            onChange={handleBuildChange}
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
        <Grid item md={3}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker
              inputVariant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
              disableFuture={true}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={3}>
          <TextField
            variant="outlined"
            label="WPM"
            value={wpm}
            onChange={handleWpmChange}
          />
        </Grid>
        <Grid item md={3}>
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

        <Grid item md={3}>
          <FormControl component="fieldset" error={error}>
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
          </FormControl>
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
});

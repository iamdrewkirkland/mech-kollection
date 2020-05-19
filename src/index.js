import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AuthControl from "./components/AuthControl";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "rgba(249, 249, 249, 1)",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(149, 149, 149, 1)",
      main: "rgba(53, 53, 53, 1)",
      dark: "rgba(33, 33, 33, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(165, 130, 255, 1)",
      main: "rgba(102, 40, 255, 1)",
      dark: "rgba(80, 10, 255, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthControl />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

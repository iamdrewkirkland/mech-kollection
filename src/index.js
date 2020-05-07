import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppState from "./components/AppState";
import Dashboard from "./components/Dashboard";
import NewBuild from "./components/builds/NewBuild";

ReactDOM.render(<NewBuild />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

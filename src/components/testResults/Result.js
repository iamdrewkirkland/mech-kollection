import React, { useContext } from "react";

import { TableRow, TableCell, Button } from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { ResultsContext } from "./ResultsProvider";

export default function Result({ result, matchingBuild }) {
  const { deleteResults } = useContext(ResultsContext);
  //date time control with moment.js
  const moment = require("moment");
  moment().locale();

  //function to check if property exsists and is not null
  function inputCheck(prop) {
    if (matchingBuild.hasOwnProperty(prop) && matchingBuild[prop] !== "") {
      return matchingBuild[prop];
    }
  }

  function removeResult(){
    deleteResults(result.id)
  }

  return (
    <TableRow>
      <TableCell>
        {inputCheck("name")
          ? `${matchingBuild.name}`
          : `${matchingBuild.caseName}`}
      </TableCell>
      <TableCell>{result.wpm}</TableCell>
      <TableCell>{result.pb ? <StarRoundedIcon /> : "-"}</TableCell>
      <TableCell>{result.website}</TableCell>
      <TableCell  sortDirection="desc">{moment(result.date).format("LLL")}</TableCell>
      <TableCell>
        <Button size="small" onClick={removeResult}>
          <CloseRoundedIcon size="small" color="secondary" />
        </Button>
      </TableCell>
    </TableRow>
  );
}

import React from "react";

import { TableRow, TableCell } from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

export default function Result({ result, matchingBuild }) {
  //function to check if property exsists and is not null
  function inputCheck(prop) {
    if (matchingBuild.hasOwnProperty(prop) && matchingBuild[prop] !== "") {
      return matchingBuild[prop];
    }
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
      <TableCell>{result.date}</TableCell>
    </TableRow>
  );
}

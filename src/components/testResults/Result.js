import React from "react";

import { TableRow, TableCell } from "@material-ui/core";
import StarRoundedIcon from '@material-ui/icons/StarRounded';


export default function Result({result, matchingBuild}) {
  return (
    <TableRow>
      <TableCell>{result.date}</TableCell>
      <TableCell>{matchingBuild.name}</TableCell>
      <TableCell>{result.wpm}</TableCell>
      <TableCell>{result.pb ? <StarRoundedIcon /> : "-"}</TableCell>
      <TableCell>{result.website}</TableCell>
    </TableRow>
  );
}

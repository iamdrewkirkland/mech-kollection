import React, { useState, useContext } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { ResultsContext } from "./ResultsProvider";

const { results } = useContext(ResultsContext);


// Grab results where userId matches the current user

// Put results into row format

// Map rows into table format

export default function ResultsList() {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Build</TableCell>
            <TableCell>WPM</TableCell>
            <TableCell>PB?</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result}>
              <TableCell>{result.date}</TableCell>
          <TableCell>{result.build}</TableCell> 
          <TableCell>{result.wpm}</TableCell>
          <TableCell>{result.pb}</TableCell>
          <TableCell>{result.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

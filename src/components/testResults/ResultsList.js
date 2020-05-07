import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";


// Grab results where userId matches the current user
const results = [1,2,3,4]
// Put results into row format

// Map rows into table format

const ResultsList = () => {
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
              <TableCell>Today</TableCell>
              <TableCell>Polaris</TableCell>
              <TableCell>120</TableCell>
              <TableCell>NO</TableCell>
              <TableCell>10fastfingers.com</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ResultsList;

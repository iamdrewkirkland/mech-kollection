import React, { useContext } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { ResultsContext } from "./ResultsProvider";
import { BuildContext } from "../builds/BuildDataProvider";
import StarRoundedIcon from '@material-ui/icons/StarRounded';


export default function ResultsList() {
  const { results } = useContext(ResultsContext);
  const { builds } = useContext(BuildContext);

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
          {results.map((result) => {
            const matchingBuild = builds.find(
              (build) => (build.id === result.buildId)
            ) || {};
            return (<TableRow>
              <TableCell>{result.date}</TableCell>
              <TableCell>{matchingBuild.name}</TableCell>
              <TableCell>{result.wpm}</TableCell>
              <TableCell>{result.pb ? <StarRoundedIcon /> : "-"}</TableCell>
              <TableCell>{result.website}</TableCell>
            </TableRow>)})}
        </TableBody>
      </Table>
    </>
  );
}

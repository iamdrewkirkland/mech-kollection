import React, { useContext, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { ResultsContext } from "./ResultsProvider";
import { useState } from "react";
import Result from "./Result";

export default function ResultsList({ currentUserId, myBuilds }) {
  const { results } = useContext(ResultsContext);

  console.log(myBuilds);

  const [myResults, setMyResults] = useState([]);

  // const [matchingBuild, setMatchingBuild] = useState({});

  useEffect(() => {
    const myFilteredResults = results.filter((result) => {
      const matchingBuildObject =
        myBuilds.find((myBuild) => result.buildId === myBuild.id) || {};
      debugger;
      // setMatchingBuild(matchingBuildObject)
      return matchingBuildObject ;
    });
    setMyResults(myFilteredResults);
    debugger;
  }, [currentUserId, myBuilds, results]);

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
          {myResults.map((result) => {
            const resultBuild=myBuilds.find((build) => build.id === result.buildId) || {};
            debugger;
            return <Result result={result} matchingBuild={resultBuild} />;
          }) || []}
        </TableBody>
      </Table>
    </>
  );
}

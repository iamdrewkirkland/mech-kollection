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

export const ResultsList = React.memo(({ currentUserId, myBuilds }) => {
  const { results } = useContext(ResultsContext);

  const [myResults, setMyResults] = useState([]);
  // const [matchingBuild, setMatchingBuild] = useState({});

  useEffect(() => {
    const myFilteredResults = results.filter((result) => {
      const matchingBuildObject =
        myBuilds.find((myBuild) => result.buildId === myBuild.id) || {};
      // setMatchingBuild(matchingBuildObject)
      return matchingBuildObject;
    });
    setMyResults(myFilteredResults);
  }, [myBuilds, results]);

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
            const resultBuild =
              myBuilds.find((build) => build.id === result.buildId) || {};
            return <Result key={result.id} result={result} matchingBuild={resultBuild} />;
          }) || []}
        </TableBody>
      </Table>
    </>
  );
});

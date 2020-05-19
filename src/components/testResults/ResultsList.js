import React, { useContext, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { ResultsContext } from "./ResultsProvider";
import { useState } from "react";
import Result from "./Result";


const useStyles = makeStyles((theme) => ({

}));

export const ResultsList = React.memo(({ myBuilds, }) => {
  const classes=useStyles()
  const { results } = useContext(ResultsContext);

  const [myResults, setMyResults] = useState([]);

  useEffect(() => {
    const myFilteredResults = results.filter((result) => {
      const matchingBuildObject =
        myBuilds.find((myBuild) => result.buildId === myBuild.id);
      // setMatchingBuild(matchingBuildObject)
      return matchingBuildObject;
    });
    setMyResults(myFilteredResults);
  }, [myBuilds, results]);

  return (
    <>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Build</TableCell>
            <TableCell>WPM</TableCell>
            <TableCell>PB?</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>
          REMOVE
        </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myResults.map((result) => {
            const resultBuild =
              myBuilds.find((build) => build.id === result.buildId) || {
                //create "missing build" object
              };
              
            return <Result key={result.id} result={result} matchingBuild={resultBuild} />;
          }) || []}
        </TableBody>
      </Table>
    </>
  );
});

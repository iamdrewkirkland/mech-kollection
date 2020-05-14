import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import ResultsList from "./ResultsList";
import ResultsForm from "./ResultsForm";
import { ResultsContext } from "./ResultsProvider";


export default function ResultsView() {
  const { addResults } = useContext(ResultsContext);
  const [showForm, toggleShowForm] = useState(false);
  const [result, setResult] = useState(null);


function submitClose() {
  addResults(result);
  toggleShowForm(!showForm);
}

  return (
    <>
      {showForm ? (
        <ResultsForm toggleForm={toggleShowForm}  setResult={setResult} />
      ) : (
        <ResultsList toggleForm={toggleShowForm}  />
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          showForm ? submitClose() : toggleShowForm(!showForm);
        }}
      >
        {showForm ? "Back" : "Add Results"}
      </Button>
    </>
  );
}

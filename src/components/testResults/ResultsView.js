import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ResultsList from "./ResultsList";
import ResultsForm from "./ResultsForm";


export default function ResultsView() {
 
  const [showForm, toggleShowForm] = useState(false);
  const [result, setResult] = useState(null);

function toggleForm(){toggleShowForm(!showForm)}


  return (
    <>
      {showForm ? (
        <ResultsForm toggleForm={toggleForm} result={result} setResult={setResult} />
      ) : (
        <ResultsList toggleForm={toggleForm}  />
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleForm}
      >
        {showForm ? "Back" : "Add Results"}
      </Button>
    </>
  );
}

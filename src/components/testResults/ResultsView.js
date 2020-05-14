import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import ResultsList from "./ResultsList";
import ResultsForm from "./ResultsForm";
import { ResultsContext } from "./ResultsProvider";


export default function ResultsView() {
  const {addResult} = useContext(ResultsContext)
  const [showForm, toggleShowForm] = useState(false);
  const [result, setResult] = useState(null);

  return (
      <>
      {showForm ? (
        <ResultsForm toggleForm={toggleShowForm} setResult={setResult} />
      ) : (
        <ResultsList toggleForm={toggleShowForm} />
      )}
      <Button variant="contained" color="primary" onClick={()=>{
          showForm ?(addResult(result)):(toggleShowForm(!showForm))
      }}>{showForm ? ('Back') : ('Add Results')}</Button>
      </>
  );
}

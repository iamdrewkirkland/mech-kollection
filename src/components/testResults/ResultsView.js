import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ResultsList from "./ResultsList";
import ResultsForm from "./ResultsForm";


export default function ResultsView() {
  const [showForm, toggleShowForm] = useState(false);
  return (
      <>
      {showForm ? (
        <ResultsForm toggleForm={toggleShowForm} />
      ) : (
        <ResultsList toggleForm={toggleShowForm} />
      )}
      <Button variant="contained" color="primary" onClick={()=>{
          toggleShowForm(!showForm)
      }}>{showForm ? ('Back') : ('Add Results')}</Button>
      </>
  );
}

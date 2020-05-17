import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ResultsList } from "./ResultsList";
import { ResultsForm } from "./ResultsForm";

export const ResultsView = React.memo(({ currentUserId, myBuilds, myCollection }) => {
  const [showForm, toggleShowForm] = useState(false);
  const [result, setResult] = useState(null);

  function toggleForm() {
    toggleShowForm(!showForm);
  }

  return (
    <>
      {showForm ? (
        <ResultsForm
          toggleForm={toggleForm}
          result={result}
          setResult={setResult}
          myBuilds={myBuilds}
          myCollection={myCollection}
        />
      ) : (
        <ResultsList
          myBuilds={myBuilds}
          toggleForm={toggleForm}
          currentUserId={currentUserId}
        />
      )}
      <Button variant="contained" color="primary" onClick={toggleForm}>
        {showForm ? "Back" : "Add Results"}
      </Button>
    </>
  );
});

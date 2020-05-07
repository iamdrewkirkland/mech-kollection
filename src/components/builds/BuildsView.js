import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import NewBuild from "./NewBuild";
import BuildList from "./BuildList";



export default function BuildsView() {
  const [showForm, toggleShowForm] = useState(false);
  return (
    <>
      {showForm ? (
        <NewBuild />
      ) : (
        <BuildList />
      )}
      
      <Button variant="contained" color="primary" onClick={()=>{
          toggleShowForm(!showForm)
      }}>{showForm ? ('View Builds') : ('Add Build')}</Button>
      
    </>
  );
}

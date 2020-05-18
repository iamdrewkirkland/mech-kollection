import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

export default function CaseForm({
  currentInputs,
  setInputs,
  materials,
  layouts,
}) {

  const [caseName, setCaseName] = useState();
  const [caseDesigner, setCaseDesigner] = useState();
  const [caseColor, setCaseColor] = useState();
  const [caseMaterialId, setCaseMaterialId] = useState();
  const [plateMaterialId, setPlateMaterialId] = useState();
  const [layoutId, setLayoutId] = useState();

  function filterMaterials(resource) {
    return materials.filter((material) => material.resource === resource);
  }

  //placeholder for value of current inputs (values retained when BACK button is used)
  const pageObject = {
    caseName: caseName,
    caseColor: caseColor,
    caseDesigner: caseDesigner,
    caseMaterialId: caseMaterialId,
    plateMaterialId: plateMaterialId,
    caseLayoutId: layoutId,
  };
  const setPageInputs = () => {
    setInputs(Object.assign(currentInputs, pageObject));
  };
  
  function handleNameChange(e) {
    setCaseName(e.target.value);
    setPageInputs();
  }
  function handleColorChange(e) {
    setCaseColor(e.target.value);
    setPageInputs();
  }
  function handleDesignerChange(e) {
    setCaseDesigner(e.target.value);
    setPageInputs();
  }
  function handleCaseMaterialChange(e) {
    setCaseMaterialId(e.target.value);
    setPageInputs();
  }
  function handleLayoutChange(e) {
    setLayoutId(e.target.value);
    setPageInputs();
  }
  function handlePlateMaterialChange(e) {
    setPlateMaterialId(e.target.value);
    setPageInputs();
  }


  return (
    <>
      <Typography variant="h4">Case Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            required
            label="Name"
            value={caseName}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Color"
            onChange={handleColorChange}
            value={caseColor}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Designer"
            onChange={handleDesignerChange}
            value={caseDesigner}
          />
        </Grid>

        <Grid item>
          <InputLabel id="layout">Layout</InputLabel>
          <Select
            required
            labelId="layout"
            onChange={handleLayoutChange}
            value={layoutId}
          >
            {layouts.map((layout) => (
              <MenuItem key={layout.name} value={layout.id}>
                {layout.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <InputLabel id="caseMaterial">Case Material</InputLabel>
          <Select
            labelId="caseMaterial"
            onChange={handleCaseMaterialChange}
            value={caseMaterialId}
          >
            {filterMaterials("case").map((material) => (
              <MenuItem key={material.name} value={material.id}>
                {material.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <InputLabel id="plateMaterial">Plate Material</InputLabel>
          <Select
            labelId="plateMaterial"
            onChange={handlePlateMaterialChange}
            value={plateMaterialId}
          >
            {filterMaterials("plate").map((material) => (
              <MenuItem key={material.name} value={material.id}>
                {material.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </>
  );
}

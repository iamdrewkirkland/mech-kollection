import React, { useRef, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { LayoutContext } from "../layouts/LayoutProvider";

export default function CaseForm({ currentInputs, setInputs, materials }) {
  //references to user input fields
  const caseName = useRef();
  const caseColor = useRef();
  const caseDesigner = useRef();
  const caseMaterial = useRef();
  const plateMaterial = useRef();
  const layout = useRef();
  const { layouts } = useContext(LayoutContext);

  function filterMaterials(resource) {
    return materials.filter((material) => material.resource === resource);
  }

  //placeholder for value of current inputs (values retained when BACK button is used)
  let currentBuildObject = { ...currentInputs };

  const handleChange = () => {
    const newBuildObject = {
      caseName: caseName.current.value,
      caseColor: caseColor.current.value,
      caseDesigner: caseDesigner.current.value,
      caseMaterialId: caseMaterial.current.value,
      caseLayoutId: layout.current.value,
    };
    setInputs(Object.assign(currentBuildObject, newBuildObject));
  };

  return (
    <>
      <Typography variant="h4">Case Info</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Name" onChange={handleChange} inputRef={caseName} />
        </Grid>
        <Grid item>
          <TextField
            label="Color"
            onChange={handleChange}
            inputRef={caseColor}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Designer"
            onChange={handleChange}
            inputRef={caseDesigner}
          />
        </Grid>

        <Grid>
          <InputLabel id="layout">Layout</InputLabel>
          <Select labelId="layout" onChange={handleChange} inputRef={layout}>
            {layouts.map((layout) => (
              <MenuItem key={layout.name} value={layout.id}>
                {layout.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid>
          <InputLabel id="caseMaterial">Case Material</InputLabel>
          <Select
            labelId="caseMaterial"
            onChange={handleChange}
            inputRef={caseMaterial}
          >
            {filterMaterials("case").map((material) => (
              <MenuItem key={material.name} value={material.id}>
                {material.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid>
          <InputLabel id="plateMaterial">Plate Material</InputLabel>
          <Select
            labelId="plateMaterial"
            onChange={handleChange}
            inputRef={plateMaterial}
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

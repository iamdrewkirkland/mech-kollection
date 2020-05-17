import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  makeStyles,
  Chip,
  Button,
} from "@material-ui/core";
import { BuildContext } from "./BuildDataProvider";

/**
 *  jsx representation of a full build item.
 *  should have all properties from ERD represented
 */
const cardWidth = 320;
const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    width: cardWidth,
  },
  flexRow: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  },
}));
const Build = ({ build, layouts, materials, switchTypes }) => {
  const classes = useStyles();
  let propId = null;
  const { updateBuild } = useContext(BuildContext);

  function getNameById(prop) {
    switch (prop) {
      case "caseLayoutId":
        propId = build[prop];

        const matchingLayout = layouts.find((layout) => propId === layout.id);
        return matchingLayout.name;

      case "switchMaterialId":
      case "plateMaterialId":
      case "caseMaterialId":
      case "keycapMaterialId":
        propId = build[prop];
        const matchingMaterial = materials.find(
          (material) => propId === material.id
        );
        return matchingMaterial.name;

      case "switchTypeId":
        propId = build[prop];
        const matchingSwitchType = switchTypes.find(
          (switchType) => propId === switchType.id
        );
        return matchingSwitchType.name;

      default:
        alert("Sorry there was a problem.");
        break;
    }
  }

  //function to check if property exsists and is not null
  function inputCheck(prop) {
    if (build.hasOwnProperty(prop) && build[prop] !== "") {
      if (prop.includes("Id")) {
        //need logic to identify the resource & grab name
        return getNameById(prop);
      }
    }
    return build[prop];
  }

  function removeBuild() {
    const currentBuildObject = { ...build };
    const hiddenBuildObject = {
      isHidden: true,
    };
    const updatedBuild = Object.assign(currentBuildObject, hiddenBuildObject)
    debugger
    updateBuild(updatedBuild);
    debugger
  }

  

  return (
    <Card className={classes.card}>
      <div className={classes.flexRow}>
        <CardHeader
          title={inputCheck("name") ? `${build.name}` : `${build.caseName}`}
          subheader={inputCheck("description") ? `${build.description}` : null}
        />
        <Chip label="status" variant="outlined" />
        <Button onClick={removeBuild}>REMOVE BUILD</Button>
      </div>
      <CardContent className={classes.flexRow}>
        <div>
          <Typography variant="h5">{inputCheck("caseName")}</Typography>
          <Typography>{inputCheck("caseLayoutId")}</Typography>
          {/**will need to revist to bring in case layout name */}
          <Typography>{inputCheck("caseDesigner")}</Typography>
          <Typography>{inputCheck("caseMaterialId")}</Typography>
          {/**will need to revist to bring in case material name */}
          <Typography>{inputCheck("plateMaterialId")}</Typography>
          {/**will need to revist to bring in case material name */}
        </div>
        <div>
          <Typography variant="h5">
            {inputCheck("switchWeight") ? `${build.switchWeight}g` : null}
          </Typography>
          <Typography>{inputCheck("switchTypeId")}</Typography>{" "}
          {/**will need to revist to bring in switch type name */}
          <Typography>{inputCheck("switchName")}</Typography>
          <Typography>{inputCheck("switchLube")}</Typography>
        </div>
        <div>
          <Typography variant="h5">{inputCheck("keycapName")}</Typography>
          <Typography>{inputCheck("keycapMaterialId")}</Typography>{" "}
          {/**will need to revist to bring in material name */}
          <Typography>{inputCheck("keycapProfile")}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Build;

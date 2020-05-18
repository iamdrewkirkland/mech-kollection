import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  makeStyles,
  Chip,
  Button,
  Tooltip,
} from "@material-ui/core";
import { BuildContext } from "./BuildDataProvider";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
/**
 *  jsx representation of a full build item.
 *  should have all properties from ERD represented
 */
const cardWidth = 420;
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
const Build = ({ build, layouts, materials, switchTypes, editThisBuild }) => {
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
    const updatedBuild = Object.assign(currentBuildObject, hiddenBuildObject);
    updateBuild(updatedBuild);
  }
  function editBuild() {
    editThisBuild(build);
  }

  return (
    <Card className={classes.card}>
      <div className={classes.flexRow}>
        <CardHeader
          title={inputCheck("name") ? `${build.name}` : `${build.caseName}`}
          subheader={inputCheck("description") ? `${build.description}` : null}
        />
        {/* <Chip label="status" variant="outlined" /> */}
        {/* <Tooltip title="Edit Build" arrow>
          <Button onClick={editBuild}>
            <EditRoundedIcon />
          </Button>
        </Tooltip> */}
        <Tooltip title="Remove Build" arrow>
          <Button onClick={removeBuild}>
            <CloseRoundedIcon color="secondary" />
          </Button>
        </Tooltip>
      </div>
      <CardContent className={classes.flexRow}>
        <div>
          <Typography variant="h5">{inputCheck("caseName")}</Typography>
          <Typography>{inputCheck("caseLayoutId")}</Typography>
          <Typography>{inputCheck("caseDesigner")}</Typography>
          <Typography>{inputCheck("caseMaterialId")}</Typography>
          <Typography>{inputCheck("plateMaterialId")}</Typography>
        </div>
        <div>
          <Typography variant="h5">
            {inputCheck("switchWeight") ? `${build.switchWeight}g` : null}
          </Typography>
          <Typography>{inputCheck("switchTypeId")}</Typography>
          <Typography>{inputCheck("switchName")}</Typography>
          <Typography>{inputCheck("switchLube")}</Typography>
        </div>
        <div>
          <Typography variant="h5">{inputCheck("keycapName")}</Typography>
          <Typography>{inputCheck("keycapMaterialId")}</Typography>
          <Typography>{inputCheck("keycapProfile")}</Typography>
          <Typography>{inputCheck("keycapSculpt")}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Build;

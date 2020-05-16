import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  makeStyles,
  Chip,
} from "@material-ui/core";

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
const Build = ({ build }) => {
  const classes = useStyles();

  //  const currentBuild = {...build}

  function inputCheck(prop) {
    if (build.hasOwnProperty(prop) && build[prop] !== "") {
      return build[prop];
    }
  }

  // {`${build.description}` ? `${build.description}` : false}

  return (
    <Card className={classes.card}>
      <div className={classes.flexRow}>
        <CardHeader
          title={inputCheck("name") ? `${build.name}` : `${build.caseName}`}
          subheader={inputCheck("description")}
        />
        <Chip label="status" variant="outlined" />
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
          <Typography variant="h5">{inputCheck("switchWeight") ? `${build.switchWeight}g` : null}</Typography>
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

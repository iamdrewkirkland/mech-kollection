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
  return (
    <Card className={classes.card}>
      <div className={classes.flexRow}>
        <CardHeader title="Purple Polaris" subheader="my main build" />
        <Chip label="status" variant="outlined" />
      </div>
      <CardContent className={classes.flexRow}>
        <div>
          <Typography variant="h5">Polaris</Typography>
          <Typography>60%</Typography>
          <Typography>HHKB</Typography>
          <Typography>Brass Plate</Typography>
        </div>
        <div>
          <Typography variant="h5">67g</Typography>
          <Typography>tactile</Typography>
          <Typography>Zealios</Typography>
          <Typography>Tribosys 3203</Typography>
        </div>
        <div>
          <Typography variant="h5">GMK Jamon</Typography>
          <Typography>Doubleshot ABS</Typography>
          <Typography>Cherry</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Build;

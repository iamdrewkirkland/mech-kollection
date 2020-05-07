import React from "react";
import { Card, CardHeader, Typography, CardContent } from "@material-ui/core";

/**
 *  jsx representation of a full build item.
 *  should have all properties from ERD represented
 */

const Build = () => {
  return (
      <Card>
        <CardHeader title={null} subheader={null} />
        <CardContent>
          <div>
            <Typography variant="h4">h4 Property</Typography>
            <Typography variant="body1">Body1 Property</Typography>
            <Typography variant="subtitle1">Subtitle Property</Typography>
          </div>
        </CardContent>
      </Card>
  );
};

export default Build;

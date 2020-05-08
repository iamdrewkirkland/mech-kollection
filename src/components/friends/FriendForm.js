import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function FriendForm() {
  return (
    <>
      <Typography variant="h4">Add Friend</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="Search for a username" />
        </Grid>
      </Grid>
    </>
  );
}
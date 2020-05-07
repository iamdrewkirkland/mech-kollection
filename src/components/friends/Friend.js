import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

const Friend = () => {
  return (
    <>
      <Avatar variant={"rounded"}>
        <PeopleIcon />
      </Avatar>

      <Typography>My Friend's Name</Typography>
    </>
  );
};

export default Friend;

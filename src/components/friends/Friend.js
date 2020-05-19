import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

export default function Friend({ friend }) {
  const first = friend.firstName;
  const last = friend.lastName;
  const username = friend.username;

  return (
    <>
      <div>
        <Avatar variant={"rounded"}>
          <PeopleIcon />
        </Avatar>

        <Typography>
          {first} {last}
        </Typography>
        <Typography>{username}</Typography>
      </div>
    </>
  );
}

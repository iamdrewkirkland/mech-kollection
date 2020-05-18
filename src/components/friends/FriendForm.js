import React, { useRef, useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";

export default function FriendForm({ toggleForm, currentUserId }) {
  const { addFriend } = useContext(FriendContext);
  const { users } = useContext(UserContext);
  const searchTerm = useRef("");

  const [foundUserObject, setFoundUserObject] = useState(null);

  function search() {
    const foundUser =
      users.find((user) => user.username === searchTerm.current.value) || {};
    setFoundUserObject(foundUser);
  }

  function confirm() {
    alert(
      `Are you sure you want to add ${foundUserObject.username} as a friend?`
    );
  }

  function submitClose() {
    const newFriend = {
      userId: currentUserId,
      following: foundUserObject.id,
    };
    confirm();
    addFriend(newFriend);
    toggleForm();
  }

  return (
    <>
      <Typography variant="h4">Add Friend</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            label="Enter a username"
            inputRef={searchTerm}
            onChange={search}
          />
        </Grid>
        <Button variant="contained" color="primary" onClick={submitClose}>
          ADD FRIEND
        </Button>
      </Grid>
    </>
  );
}

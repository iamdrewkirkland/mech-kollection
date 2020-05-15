import React, { useRef, useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";

export default function FriendForm({ myFriends, setMyFriends, toggleForm }) {
  const { addFriend } = useContext(FriendContext);
  const { users } = useContext(UserContext);
  const userId = parseInt(localStorage.getItem("current_user"));
  const searchTerm = useRef("");

  const [foundUserId, setFoundUser] = useState(null);

  function search() {
    const foundUser1 =
      users.find((user) => user.username === searchTerm.current.value) || {};
      setFoundUser(foundUser1.id);
      debugger
      
  }

  function submitClose() {
    debugger
    addFriend(newFriend);
    toggleForm();
  }

  const newFriend = {
    userId: userId,
    following: foundUserId
  };

  return (
    <>
      <Typography variant="h4">Add Friend</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            label="Search for a username"
            inputRef={searchTerm}
            onChange={search}
          />
        </Grid>
        <Button variant="contained" color="primary" onClick={submitClose}>
          ADD RESULT
        </Button>
      </Grid>
    </>
  );
}

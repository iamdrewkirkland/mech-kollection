import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FriendForm from "./FriendForm";
import FriendList from "./FriendList";


export default function FriendsView({currentUserId}) {
  const [showForm, toggleShowForm] = useState(false);

  return (
    <>
      {showForm ? <FriendForm toggleForm={toggleShowForm} currentUserId={currentUserId} /> : <FriendList currentUserId={currentUserId} />}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          toggleShowForm(!showForm);
        }}
      >
        {showForm ? "View Friends" : "Add Friend"}
      </Button>
    </>
  );
}

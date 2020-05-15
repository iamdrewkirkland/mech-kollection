import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FriendForm from "./FriendForm";
import FriendList from "./FriendList";


export default function FriendsView() {
  const [showForm, toggleShowForm] = useState(false);
  const [myFriends, setMyFriends] = useState(null)

  return (
    <>
      {showForm ? (
        <FriendForm friends={myFriends} setFriends={setMyFriends} toggleForm={toggleShowForm} />
      ) : (
        <FriendList friends={myFriends} />
      )}
      
      <Button variant="contained" color="primary" onClick={()=>{
          toggleShowForm(!showForm)
      }}>{showForm ? ('View Friends') : ('Add Friend')}</Button>
      
    </>
  );
}

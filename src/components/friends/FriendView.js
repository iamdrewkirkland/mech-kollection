import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FriendForm from "./FriendForm";
import FriendList from "./FriendList";


export default function FriendsView() {
  const [showForm, toggleShowForm] = useState(false);
  return (
    <>
      {showForm ? (
        <FriendForm />
      ) : (
        <FriendList />
      )}
      
      <Button variant="contained" color="primary" onClick={()=>{
          toggleShowForm(!showForm)
      }}>{showForm ? ('View Friends') : ('Add Friend')}</Button>
      
    </>
  );
}

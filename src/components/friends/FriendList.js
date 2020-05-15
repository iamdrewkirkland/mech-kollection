import React, { useContext, useState, useEffect } from "react";
import Friend from "./Friend";
import { Container } from "@material-ui/core";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";

export default function FriendsList() {
  const { friends } = useContext(FriendContext);
  const { users } = useContext(UserContext);
  const userId = localStorage.getItem("current_user");
  
  // gets all relationships were friends.userId = userId
  const myFriends = friends.filter((friend) => friend.userId === userId);
  // get the corresponding friend name where relationship.userId === users.id



  return <Container>{myFriends.map(rel => {
    const friendDetail = users.find(user => user.id === rel.following) || {};
    return <Friend friend={friendDetail} />;
  })}</Container>;
}




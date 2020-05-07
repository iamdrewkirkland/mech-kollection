import React from "react";
import Friend from "./Friend";
import { Container } from "@material-ui/core";

const FriendList = () => {
  const fakeFriends = [1, 2, 3, 4, 5];
  return (
    <Container>
      {fakeFriends.map((friend) => (
        <Friend />
      ))}
    </Container>
  );
};

export default FriendList;

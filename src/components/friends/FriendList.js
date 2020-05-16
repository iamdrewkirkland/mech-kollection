import React, { useContext, useState, useEffect } from "react";
import Friend from "./Friend";
import { Container } from "@material-ui/core";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";

export default function FriendsList({ currentUserId }) {
  const { friends } = useContext(FriendContext);
  const { users } = useContext(UserContext);

  const [myFriends, setMyFriends] = useState([]);
  // const [userId, setUserId] = useState(null);

  // useEffect(()=>{
  //   setMyFriends()
  // },[])

  useEffect(() => {
    const myFilteredFriends = friends.filter((friend) => {
      return friend.userId === currentUserId;
    });

    setMyFriends(myFilteredFriends);
  }, [currentUserId, friends]);

  return (
    <Container>
      {myFriends.map((friend) => {
        const friendDetail =
          users.find((user) => user.id === friend.following) || {};
        return <Friend friend={friendDetail} />;
      })}
    </Container>
  );
}

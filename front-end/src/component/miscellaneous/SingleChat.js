import React from "react";
import { ChatState } from "../../Context/ChatProvider";

function SingleChat({ fetchagain, setFetchagain }) {
  const { users, selectedChat, setSelectedChat } = ChatState();

  return <div>SingleChat</div>;
}

export default SingleChat;

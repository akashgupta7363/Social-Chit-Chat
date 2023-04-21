import React, { useEffect, useState } from "react";
import axios from "axios";

function Chatpage() {
  const [chats, setChats] = useState([]);
  // const fetchChats = async () => {
  //   const datased = await axios.get("/api/chat").data;
  //   setChats(datased);
  //   //   // console.log(data);
  // };
  useEffect(() => {
    // fetchChats();
    axios
      .get("/api/chat")
      .then((res) => {
        setChats(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default Chatpage;

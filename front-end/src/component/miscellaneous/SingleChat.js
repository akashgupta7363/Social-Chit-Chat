import React from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Box, Text } from "@chakra-ui/react";

const SingleChat = ({ fetchagain, setFetchagain }) => {
  const { users, selectedChat, setSelectedChat } = ChatState();

  return (
    <>
      {selectedChat ? (
        <></>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};
export default SingleChat;

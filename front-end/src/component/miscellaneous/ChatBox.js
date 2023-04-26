import { Box } from "@chakra-ui/layout";
import "./style.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../../Context/ChatProvider";
const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg={"white"}
      backgroundColor="white"
      width={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      Single chats
    </Box>
  );
};

export default Chatbox;

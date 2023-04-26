import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../component/miscellaneous/SideDrawer";
import MyChats from "../component/miscellaneous/MyChats";
import ChatBox from "../component/miscellaneous/ChatBox";
import { useState } from "react";
function Chatpage() {
  const { user } = ChatState();
  const [fetchagain, setFetchagain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchagain={fetchagain} />}
        {user && (
          <ChatBox fetchagain={fetchagain} setFetchagain={setFetchagain} />
        )}
      </Box>
    </div>
  );
}

export default Chatpage;

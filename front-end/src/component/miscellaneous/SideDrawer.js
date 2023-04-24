import React, { useState } from "react";
import { Box, Button, Text, Tooltip } from "@chakra-ui/react";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChats, setLoadingChats] = useState("");

  return (
    <div>
      <Box>
        <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
          <Button variant={"ghost"}>
            <i class="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={"4"}>
              {" "}
              Search user
            </Text>
          </Button>
        </Tooltip>
      </Box>
    </div>
  );
}

export default SideDrawer;

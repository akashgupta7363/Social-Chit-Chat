import React from "react";

import { Avatar, Box, Text } from "@chakra-ui/react";

function UserListItem({ user, handleFunction }) {
  return (
    <>
      <Box
        onClick={handleFunction}
        cursor="pointer"
        backgroundColor="#F0F0F0"
        _hover={{
          background: "#38B2AC",
          color: "white",
        }}
        w="100%"
        display="flex"
        alignItems="center"
        color="black"
        paddingX={3}
        paddingY={2}
        width={"94%"}
        marginLeft={2}
        marginRight={2}
        mb={2}
        borderRadius="lg"
      >
        <Avatar
          marginRight={2}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.pic}
        />
        <Box>
          <Text>{user.name}</Text>
          <Text fontSize="xs">
            <b>Email : </b>
            {user.email}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default UserListItem;

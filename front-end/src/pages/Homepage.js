import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

function Homepage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0px 15px 0px"
        borderRadius="1g"
        borderWidht="1px"
      >
        <Text
          fontSize={"4xl"}
          fontFamily={"work sans"}
          color={"black"}
          textAlign={"center"}
        >
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius={"1g"}
        borderWidth={"1px"}
      ></Box>
    </Container>
  );
}

export default Homepage;

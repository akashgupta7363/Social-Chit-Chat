import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUp from "../component/Authentication/SignUp";
import Login from "../component/Authentication/Login";

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
        borderRadius="8px"
        borderWidth="1px"
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
      <Box bg="white" w="100%" p={4} borderRadius={"5px"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width={"50%"}>Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

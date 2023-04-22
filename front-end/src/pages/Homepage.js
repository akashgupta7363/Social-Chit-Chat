import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
      <Box bg="white" w="100%" p={4} borderRadius={"5px"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

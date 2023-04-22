import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const submitHandler = () => {};

  return (
    <>
      <VStack spacing={"5px"}>
        <FormControl id="checkemail" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl id="checkpassword" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Your Email"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <InputRightElement width={"4rem"}>
              <Button h="1.7rem" size={"sm"} onClick={handleClick}>
                {show ? "Hide" : "show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>
        <Button
          variant={"solid"}
          colorScheme="red"
          width={"100%"}
          onClick={() => {
            setEmail("test111@gmail.com");
            setPassword("test111");
          }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </>
  );
}

export default Login;

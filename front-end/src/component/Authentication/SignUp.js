import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const submitHandler = () => {};

  const postDetails = (pics) => {};
  return (
    <>
      <VStack spacing={"5px"}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl id="password" isRequired>
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
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirm Passwod</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Your Email"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
            <InputRightElement width={"4rem"}>
              <Button h="1.7rem" size={"sm"} onClick={handleClick}>
                {show ? "Hide" : "show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="pic" isRequired>
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            p="1"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          ></Input>
        </FormControl>
        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
}

export default SignUp;

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
import { useToast } from "@chakra-ui/react";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const toast = useToast();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const submitHandler = async () => {};

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an image",

        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "web-chat-app");
      data.append("cloud_name", "dnsjltjvo");
      fetch("https://api.cloudinary.com/v1_1/dnsjltjvo/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
          console.log(data.url.toString());
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an image",

        status: "danger",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <VStack spacing={"5px"}>
        <FormControl id="name" isRequired>
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
          isLoading={loading}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
}

export default SignUp;

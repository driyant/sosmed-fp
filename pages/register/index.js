import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Box,
  Heading,
  FormControl,
  Button,
  FormLabel,
  Input,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import Link from "next/link";
import useRegisterStore from "@/store/auth-store/register";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";

const metaData = {
  title: "Register",
  metaDescription: "Social Media App Register Sanber Next JS- Ryanta",
};

const RegisterPage = () => {
  const toast = useToast();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [hobby, setHobby] = useState("");
  const [phone, setPhone] = useState("");
  const { registerHandler } = useRegisterStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name,
      email,
      password,
      date,
      hobby,
      phone,
    };
    const registerResult = await registerHandler(data);
    console.log(registerResult);
    if (registerResult.success) {
      toast({
        title: "Success",
        description: `Hi ${name} your registration is success!`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push("/");
    } else {
      toast({
        title: "Error",
        description: registerResult.error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Layout metaData={metaData}>
      <Box
        width={{ base: "100%", lg: "50%" }}
        padding="2rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80%">
          <Heading as="h3" size="lg" marginTop="2rem">
            Sign Up
          </Heading>
          <Text color="gray.400">Register your account</Text>
          <FormControl as="form" marginTop="3rem" marginBottom="1rem">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              _placeholder={{ color: "gray.400", fontSize: "0.875rem" }}
              id="name"
              data-testid="name"
            />
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              placeholder="Your Email Address"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              _placeholder={{ color: "gray.400", fontSize: "0.875rem" }}
              id="email"
              data-testid="email"
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              placeholder="Your Password"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              _placeholder={{ color: "gray.400", fontSize: "0.875rem" }}
              id="password"
              data-testid="password"
            />
            <FormLabel htmlFor="date">Date Birth</FormLabel>
            <Input
              type="date"
              borderRadius="0"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              marginBottom="1rem"
              letterSpacing="1px"
              _placeholder={{ color: "gray.400", fontSize: "0.875rem" }}
              color="gray.400"
              id="date"
              data-testid="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fontSize="0.875rem"
            />
            <FormLabel htmlFor="hobby">Hobby</FormLabel>
            <Input
              type="text"
              placeholder="Your Hobby"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              _placeholder={{ color: "gray.400", fontSize: "0.875rem" }}
              id="hobby"
              data-testid="hobby"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
            <FormLabel htmlFor="hobby">Phone</FormLabel>
            <Input
              type="text"
              placeholder="Your Phone Number"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              _placeholder={{ color: "gray.400", fontSize: "0.875rem" }}
              id="phone"
              data-testid="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Box textAlign="right" marginTop="1rem">
              <Button
                colorScheme="teal"
                variant="solid"
                borderRadius="20px"
                width="100%"
                onClick={handleSubmit}
                isDisabled={isLoading ? true : false}
              >
                {isLoading && <Spinner color="white" />}
                {!isLoading && "Register"}
              </Button>
            </Box>
            <FormHelperText marginTop="1rem" fontSize="0.875rem">
              Already have account?{" "}
              <Box as="span" textDecoration="underline">
                <Link href="/">Login</Link>
              </Box>
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Layout>
  );
};

export default RegisterPage;

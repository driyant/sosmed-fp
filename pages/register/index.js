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

const metaData = {
  title: "Register",
  metaDescription: "Social Media App Register Sanber Next JS- Ryanta",
};

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <Heading as="h3" size="lg">
            Sign Up
          </Heading>
          <Text color="gray.400">Register your account</Text>
          <FormControl as="form" marginTop="3rem">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Your Email Address"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              _placeholder={{ color: "gray.400" }}
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Your Password"
              marginBottom="1rem"
              boxShadow="0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              _placeholder={{ color: "gray.400" }}
            />
            <Box textAlign="right" marginTop="1rem">
              <Button
                colorScheme="teal"
                variant="solid"
                borderRadius="20px"
                width="100%"
              >
                Login
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

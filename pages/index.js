import Layout from "./components/Layout";
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
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import useLoginStore from "@/store/auth-store/login";
import { Spinner } from "@chakra-ui/react";

const metaData = {
  title: "Login",
  metaDescription: "Social Media App Login Sanber Next JS- Ryanta",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler } = useLoginStore();
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      password,
    };
    const loginResult = await loginHandler(data);
    if (loginResult.success) {
      router.push("/dashboard");
      toast({
        title: "Success",
        description: "Login success, signing in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      console.log(loginResult.error);
      toast({
        title: "Error",
        description: loginResult.error,
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
          <Heading as="h3" size="lg">
            Login
          </Heading>
          <Text color="gray.400">Sign in with your account</Text>
          <FormControl as="form" marginTop="3rem">
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
                {!isLoading && "Login"}
              </Button>
            </Box>
            <FormHelperText marginTop="1rem" fontSize="0.875rem">
              Don't have account?{" "}
              <Box as="span" textDecoration="underline">
                <Link href="/register">Sign Up</Link>
              </Box>
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Layout>
  );
}

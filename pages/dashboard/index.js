import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";

const metaData = {
  title: "Login",
  metaDescription: "Social Media App Login Sanber Next JS- Ryanta",
};

const Dashboard = () => {
  return (
    <LayoutDashboard metaData={metaData}>
      <Box
        display={{ base: "none", lg: "block" }}
        width={{ base: "100vw", md: "auto", lg: "auto" }}
      >
        Left
      </Box>
      <Box
        overscrollY="scroll"
        width={{ base: "100vw", md: "auto", lg: "auto" }}
        paddingBottom="53px"
      >
        <Box
          display="flex"
          flexFlow="column"
          boxShadow="0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
          marginBottom="0.5rem"
        >
          <Box display="flex">
            <Box width="30%" display="flex" alignItems="center">
              <Avatar
                size="md"
                marginLeft="2rem"
                name="John Doe"
                bg="teal.500"
                color="white"
                border="2px solid white"
                _hover={{ cursor: "pointer" }}
                style={{ height: "64px", width: "64px" }}
              />
            </Box>
            <Box
              width="70%"
              display="flex"
              justifyContent="center"
              flexFlow="column"
              padding="1rem"
            >
              <Heading as="h6" size="sm">
                John
              </Heading>
              <Text fontSize="0.875rem">johndoe@gmail.com</Text>
              <Text fontSize="0.875rem">Jan 3, 2024</Text>
            </Box>
          </Box>
          <Box width="100%" padding="1rem">
            <Text>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </Box>
          <Box display="flex">
            <Box
              width="49%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="1rem"
            >
              <AiOutlineHeart size="18px" />
              <Text fontSize="0.875rem" marginLeft="1rem">
                12
              </Text>
            </Box>
            <Box
              width="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="1rem"
            >
              <BsChatLeft size="18px" />
              <Text fontSize="0.87rem" marginLeft="1rem">
                5
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexFlow="column"
          boxShadow="0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
          marginBottom="0.5rem"
        >
          <Box display="flex">
            <Box width="30%" display="flex" alignItems="center">
              <Avatar
                size="md"
                marginLeft="2rem"
                name="John Doe"
                bg="teal.500"
                color="white"
                border="2px solid white"
                _hover={{ cursor: "pointer" }}
                style={{ height: "64px", width: "64px" }}
              />
            </Box>
            <Box
              width="70%"
              display="flex"
              justifyContent="center"
              flexFlow="column"
              padding="1rem"
            >
              <Heading as="h6" size="sm">
                John
              </Heading>
              <Text fontSize="0.875rem">johndoe@gmail.com</Text>
              <Text fontSize="0.875rem">Jan 3, 2024</Text>
            </Box>
          </Box>
          <Box width="100%" padding="1rem">
            <Text>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </Box>
          <Box display="flex">
            <Box
              width="49%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="1rem"
            >
              <AiOutlineHeart size="18px" />
              <Text fontSize="0.875rem" marginLeft="1rem">
                12
              </Text>
            </Box>
            <Box
              width="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="1rem"
            >
              <BsChatLeft size="18px" />
              <Text fontSize="0.87rem" marginLeft="1rem">
                5
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexFlow="column"
          boxShadow="0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
          marginBottom="0.5rem"
        >
          <Box display="flex">
            <Box width="30%" display="flex" alignItems="center">
              <Avatar
                size="md"
                marginLeft="2rem"
                name="John Doe"
                bg="teal.500"
                color="white"
                border="2px solid white"
                _hover={{ cursor: "pointer" }}
                style={{ height: "64px", width: "64px" }}
              />
            </Box>
            <Box
              width="70%"
              display="flex"
              justifyContent="center"
              flexFlow="column"
              padding="1rem"
            >
              <Heading as="h6" size="sm">
                John
              </Heading>
              <Text fontSize="0.875rem">johndoe@gmail.com</Text>
              <Text fontSize="0.875rem">Jan 3, 2024</Text>
            </Box>
          </Box>
          <Box width="100%" padding="1rem">
            <Text>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </Box>
          <Box display="flex">
            <Box
              width="49%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="1rem"
            >
              <AiOutlineHeart size="18px" />
              <Text fontSize="0.875rem" marginLeft="1rem">
                12
              </Text>
            </Box>
            <Box
              width="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="1rem"
            >
              <BsChatLeft size="18px" />
              <Text fontSize="0.87rem" marginLeft="1rem">
                5
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>Trending thread</Box>
    </LayoutDashboard>
  );
};

export default Dashboard;

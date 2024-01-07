import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import { Box, Avatar, Text, Spinner } from "@chakra-ui/react";
import CardPost from "../components/CardPost";
import axios from "axios";
import Cookies from "js-cookie";
import { AiFillHome } from "react-icons/ai";

const metaData = {
  title: "Dashboard",
  metaDescription: "Social Media App Login Sanber Next JS- Ryanta",
};

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "/api/posts",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async (id) => {
    try {
      const response = await axios({
        url: `/api/like/${id}`,
        method: "POST",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = async (id) => {
    try {
      const response = await axios({
        url: `/api/unlike/${id}`,
        method: "POST",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <LayoutDashboard metaData={metaData}>
      <Box
        display={{ base: "none", lg: "block" }}
        width={{ base: "100vw", md: "auto", lg: "auto" }}
      >
        <Box display="flex" flexFlow="column">
          <Box display="flex" padding="1rem" flexFlow="column">
            <Box width="30%" display="flex">
              <Avatar
                size="md"
                name="John Doe"
                bg="teal.500"
                color="white"
                border="2px solid white"
                src="/images/woman-close-up.jpg"
                _hover={{ cursor: "pointer" }}
                style={{ height: "64px", width: "64px" }}
              />
            </Box>
            <Text>Hi, John Doe!</Text>
          </Box>
          <Box
            display="flex"
            flexFlow="row"
            alignItems="center"
            border="0.5px solid gray"
            padding="1rem"
            cursor="pointer"
            _hover={{
              background: "orange",
              color: "white",
            }}
          >
            <AiFillHome />
            <Text marginLeft="1rem">Home</Text>
          </Box>
          <Box
            display="flex"
            flexFlow="row"
            alignItems="center"
            padding="1rem"
            cursor="pointer"
            border="0.5px solid gray"
            _hover={{
              background: "orange",
              color: "white",
            }}
          >
            <AiFillHome />
            <Text marginLeft="1rem">Tweet</Text>
          </Box>
          <Box
            display="flex"
            flexFlow="row"
            alignItems="center"
            padding="1rem"
            cursor="pointer"
            border="0.5px solid gray"
            _hover={{
              background: "orange",
              color: "white",
            }}
          >
            <AiFillHome />
            <Text marginLeft="1rem">Notification</Text>
          </Box>
          <Box
            display="flex"
            flexFlow="row"
            alignItems="center"
            padding="1rem"
            cursor="pointer"
            border="0.5px solid gray"
            _hover={{
              background: "orange",
              color: "white",
            }}
          >
            <AiFillHome />
            <Text marginLeft="1rem">Logout</Text>
          </Box>
        </Box>
      </Box>
      <Box
        overscrollY="scroll"
        width={{ base: "100vw", md: "100vw", lg: "auto" }}
        paddingBottom="53px"
      >
        {isLoading && (
          <Box
            display="flex"
            justifyContent="center"
            flexFlow="column"
            alignItems="center"
            paddingTop="2rem"
          >
            <Spinner />
            <Text>Retrive Data</Text>
          </Box>
        )}
        {!isLoading && (
          <CardPost
            posts={posts}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
          />
        )}
      </Box>
      <Box display={{ base: "none", lg: "block" }}>Trending thread</Box>
    </LayoutDashboard>
  );
};

export default Dashboard;

// export async function getServerSideProps(context) {
//   const cookies = parse(context.req.headers.cookie || "");
//   try {
//     const response = await axios({
//       url: "http://localhost:3000/api/posts",
//       headers: {
//         Authorization: cookies.token,
//       },
//     });
//     console.log(response);
//     return {
//       props: {
//         data: "OK",
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         message: "error",
//       },
//     };
//   }
// }

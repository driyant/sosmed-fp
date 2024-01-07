import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { formattedDate } from "../helpers";
import { useRouter } from "next/router";

const CardPost = ({ posts, handleLike, handleUnlike }) => {
  const router = useRouter();
  return (
    <>
      {posts?.map((post) => {
        return (
          <Box
            key={post.id}
            display="flex"
            flexFlow="column"
            boxShadow="0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
            marginBottom="0.5rem"
            padding="1rem"
          >
            <Box display="flex">
              <Box width="30%" display="flex" alignItems="center">
                <Avatar
                  size="md"
                  marginLeft="2rem"
                  name={post.user.name}
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
                  {post.user.name}
                </Heading>
                <Text fontSize="0.875rem">{post.user.email}</Text>
                <Text fontSize="0.875rem">
                  {formattedDate(post.created_at)}
                </Text>
              </Box>
            </Box>
            <Box width="100%" padding="1rem">
              <Text>{post.description}</Text>
            </Box>
            <Box display="flex">
              <Box
                width="49%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="1rem"
                onClick={() => {
                  if (post.is_like_post) {
                    handleUnlike(post.id);
                  } else {
                    handleLike(post.id);
                  }
                }}
              >
                <AiOutlineHeart
                  size="18px"
                  color={post.is_like_post ? "red" : "black"}
                />
                <Text fontSize="0.875rem" marginLeft="1rem">
                  {post.likes_count}
                </Text>
              </Box>
              <Box
                width="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="1rem"
                onClick={() => router.push(`/tweet-reply/${post.id}`)}
              >
                <BsChatLeft size="18px" />
                <Text fontSize="0.87rem" marginLeft="1rem">
                  {post.replies_count}
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default CardPost;

import React, { useState } from "react";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { useRouter } from "next/router";

const CardPostProfile = ({ userPosts, handleDelete, handleLike, unlike }) => {
  const router = useRouter();
  return (
    <>
      {userPosts?.map((userPost) => {
        return (
          <Box
            key={userPost.id}
            padding={{ base: "1rem", lg: "0" }}
            boxShadow="0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
          >
            <Box display="flex" flexFlow="column">
              <Box display="flex">
                <Text width="90%">{userPost.description}</Text>
                <Box width="10%" paddingLeft="0.5rem">
                  <Menu>
                    <MenuButton
                      as={HamburgerIcon}
                      aria-label="Options"
                      icon={<HamburgerIcon />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem
                        onClick={() => router.push(`/tweet?id=${userPost.id}`)}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem onClick={() => handleDelete(userPost.id)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
              <Box display="flex">
                <Box
                  width="49%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="1rem"
                  onClick={() => {
                    if (userPost.is_like_post) {
                      unlike(userPost.id);
                    } else {
                      handleLike(userPost.id);
                    }
                  }}
                >
                  <AiOutlineHeart
                    size="18px"
                    color={userPost.is_like_post ? "red" : "black"}
                  />
                  <Text fontSize="0.875rem" marginLeft="1rem">
                    {userPost.likes_count}
                  </Text>
                </Box>
                <Box
                  width="50%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="1rem"
                  onClick={() => router.push(`/tweet-reply/${userPost.id}`)}
                >
                  <BsChatLeft size="18px" />
                  <Text fontSize="0.87rem" marginLeft="1rem">
                    {userPost.replies_count}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default CardPostProfile;

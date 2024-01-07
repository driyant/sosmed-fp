import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { Image as ImageChakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

const Header = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios({
        url: "/api/logout",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      Cookies.remove("token");
      Cookies.remove("expires");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        display="flex"
        visibility={{ lg: "hidden" }}
        height="70px"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        width="100vw"
        backgroundColor="brown"
        zIndex="55"
      >
        <Box width="80%">
          <ImageChakra
            height="50px"
            src="/images/logo-no-background.png"
            alt="CherisHub Logo"
            marginLeft="1rem"
          />
        </Box>
        <Box
          width="20%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Menu>
            <MenuButton
              as={Button}
              bg="transparent" // Set background color to transparent
              _hover={{ bg: "transparent" }} // Set background color on hover
            >
              <Box
                width="40px"
                height="40px"
                borderRadius="full"
                overflow="hidden"
                transition="box-shadow 0.3s ease-in-out" // Add transition effect to box-shadow
                _hover={{ boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)" }} // Set box-shadow on hover
              >
                <ImageChakra
                  src="/images/woman-close-up.jpg"
                  alt="profile"
                  objectFit="cover"
                />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Header;

import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Image as ImageChakra } from "@chakra-ui/react";

const Header = () => {
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
          <Box width="40px" height="40px" borderRadius="full" overflow="hidden">
            <ImageChakra
              src="/images/woman-close-up.jpg"
              alt="profile"
              objectFit="cover"
              boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;

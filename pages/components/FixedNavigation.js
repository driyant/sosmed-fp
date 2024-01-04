import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { TfiHome, TfiBell, TfiUser } from "react-icons/tfi";
import NextLink from "next/link";

const FixedNavigation = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      backgroundColor="#ffffff"
      padding="10px"
      boxShadow="0px -5px 10px rgba(0, 0, 0, 0.1)"
      display={{ base: "grid", lg: "none" }}
      height="60px"
      gridTemplateColumns="1fr 1fr 1fr"
    >
      <Link as={NextLink} href="/dashboard" paddingTop="0.3rem">
        <Box display="flex" justifyContent="center" alignItems="center">
          <TfiHome size="28px" />
        </Box>
      </Link>
      <Link as={NextLink} href="/notification" paddingTop="0.3rem">
        <Box display="flex" justifyContent="center" alignItems="center">
          <TfiBell size="28px" />
        </Box>
      </Link>
      <Link as={NextLink} href="/profile" paddingTop="0.3rem">
        <Box display="flex" justifyContent="center" alignItems="center">
          <TfiUser size="28px" />
        </Box>
      </Link>
    </Box>
  );
};

export default FixedNavigation;

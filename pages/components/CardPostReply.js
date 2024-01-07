import React from "react";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { formattedDate } from "../helpers";

const CardPostReply = ({
  created_at,
  description,
  email,
  name,
  is_own_reply,
  id,
  handleDelete,
}) => {
  return (
    <>
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
              name={name}
              bg="teal.500"
              color="white"
              border="2px solid white"
              _hover={{ cursor: "pointer" }}
              style={{ height: "64px", width: "64px" }}
            />
          </Box>
          <Box
            width="60%"
            display="flex"
            justifyContent="center"
            flexFlow="column"
            padding="1rem"
          >
            <Heading as="h6" size="sm">
              {name}
            </Heading>
            <Text fontSize="0.875rem">{formattedDate(created_at)}</Text>
            <Text fontSize="0.875rem">{email}</Text>
          </Box>
          {is_own_reply ? (
            <Box width="10%" paddingLeft="0.5rem">
              <Menu>
                <MenuButton
                  as={HamburgerIcon}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem onClick={() => handleDelete(id)}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          ) : null}
        </Box>
        <Box width="100%" padding="1rem">
          <Text>{description}</Text>
        </Box>
      </Box>
    </>
  );
};

export default CardPostReply;

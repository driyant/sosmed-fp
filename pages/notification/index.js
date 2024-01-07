import React, { useEffect, useState } from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import {
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Heading,
  Box,
  StackDivider,
  Text,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { formatTimeAgo, formattedDate } from "../../helpers";

const metaData = {
  title: "Notification",
  description: "CherrisHub",
};

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotification = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "/api/notification",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response.data.data.data);
      setNotifications(response.data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  return (
    <LayoutDashboard metaData={metaData}>
      <Box
        width={{ base: "100vw", md: "100vw", lg: "auto" }}
        paddingBottom="50px"
      >
        <Card>
          <CardHeader>
            <Heading size="md">Notification</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {isLoading && (
                <Box
                  display="flex"
                  justifyContent="center"
                  flexFlow="column"
                  alignItems="center"
                  paddingTop="2rem"
                >
                  <Spinner />
                  <Text>Retrive Data Notification</Text>
                </Box>
              )}
              {!isLoading ? (
                notifications.length === 0 ? (
                  <Text>You have no notifications yet.</Text>
                ) : (
                  notifications.map((notification) => (
                    <Box key={notification.id}>
                      <Text pt="2" fontSize="sm">
                        {notification.user.name} {notification.remark} your post
                        on{" "}
                        <Box as="span" fontStyle="italic">
                          {formattedDate(notification.created_at)}
                        </Box>
                      </Text>
                    </Box>
                  ))
                )
              ) : null}
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </LayoutDashboard>
  );
};

export default Notification;

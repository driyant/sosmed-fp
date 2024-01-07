import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Avatar,
  FormControl,
  Button,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import LayoutDashboard from "../components/LayoutDashboard";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import CardPostReply from "../components/CardPostReply";
import { useToast } from "@chakra-ui/react";

const metaData = {
  title: "Profile User",
  description: "CherrisHub - Profile",
};

const TweetReply = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoadingReply, setIsLoadingReply] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [replies, setReplies] = useState([]);
  const toast = useToast();

  const handleReply = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      reply: comment,
    };
    try {
      const response = await axios({
        url: `/api/tweet-reply/${id}`,
        method: "POST",
        headers: {
          Authorization: Cookies.get("token"),
        },
        data: data,
      });
      console.log(response, "dari compoenent");
      setComment("");
      // Show toast
      toast({
        title: "Success",
        description: "Repy has been posted successfully!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      fetchTweetReply();
    } catch (error) {
      console.log(error.response);
      toast({
        title: "Error",
        description: "Something went wrong! " + error.response.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTweetReply = async () => {
    setIsLoadingReply(true);
    try {
      const response = await axios({
        url: `/api/tweet-reply/${id}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setReplies(response.data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingReply(false);
    }
  };

  const handleReplyDelete = async (id) => {
    try {
      const response = await axios({
        url: `/api/tweet-reply/${id}`,
        method: "DELETE",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      toast({
        title: "Success",
        description: response.data.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      fetchTweetReply();
    } catch (error) {
      console.log(error.response);
      toast({
        title: "Error",
        description: "Something went wrong! " + error.response.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchTweetReply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(replies);

  return (
    <>
      <LayoutDashboard metaData={metaData}>
        <Box width={{ base: "100vw", md: "100vw", lg: "auto" }} padding="1rem">
          <Box marginBottom="60px">
            <FormControl as="form" marginBottom="1rem">
              <Textarea
                placeholder="Reply Comment"
                height="130px"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                isDisabled={isLoading ? true : false}
              />
              <Box textAlign="right" marginTop="1rem">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  borderRadius="20px"
                  width="100%"
                  onClick={handleReply}
                  isDisabled={isLoading ? true : false}
                >
                  {isLoading && <Spinner color="white" />}
                  {!isLoading && "Reply"}
                </Button>
              </Box>
            </FormControl>
            {isLoadingReply && (
              <Box
                display="flex"
                justifyContent="center"
                flexFlow="column"
                alignItems="center"
                paddingTop="2rem"
              >
                <Spinner />
                <Text>Retrive Reply</Text>
              </Box>
            )}
            {!isLoadingReply && (
              <>
                {replies.length > 0 ? (
                  replies.map((reply) => (
                    <React.Fragment key={reply.id}>
                      <CardPostReply
                        key={reply.id}
                        created_at={reply.created_at}
                        description={reply.description}
                        name={reply.user.name}
                        email={reply.user.email}
                        is_own_reply={reply.is_own_reply}
                        id={reply.id}
                        handleDelete={handleReplyDelete}
                      />
                    </React.Fragment>
                  ))
                ) : (
                  <Text>No replies yet.</Text>
                )}
              </>
            )}
          </Box>
        </Box>
      </LayoutDashboard>
    </>
  );
};

export default TweetReply;

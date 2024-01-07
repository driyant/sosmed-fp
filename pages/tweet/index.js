import React, { useEffect, useState } from "react";
import { Box, FormControl, Spinner, Textarea, Button } from "@chakra-ui/react";
import LayoutDashboard from "../components/LayoutDashboard";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const metaData = {
  title: "Profile User",
  description: "CherrisHub - Profile",
};

const Tweet = () => {
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const token = Cookies.get("token");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios({
        url: "/api/tweet",
        method: "POST",
        headers: {
          Authorization: Cookies.get("token"),
        },
        data: { post: tweet },
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: `/api/posts/${id}`,
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response.data.data.data);
      setTweet(response.data.data.data.description);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    const data = {
      tweet: tweet,
    };
    try {
      const response = await axios({
        url: `/api/posts/${id}`,
        method: "PATCH",
        headers: {
          Authorization: Cookies.get("token"),
        },
        data: data,
      });
      console.log(response);
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) {
      setTweet("");
    }
    if (id) {
      fetchPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <LayoutDashboard metaData={metaData}>
      <Box width="100vw" padding="1rem">
        <FormControl as="form">
          <Textarea
            placeholder="What is happening?!"
            height="130px"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            isDisabled={isLoading ? true : false}
          />
          <Box textAlign="right" marginTop="1rem">
            <Button
              colorScheme="teal"
              variant="solid"
              borderRadius="20px"
              width="100%"
              onClick={() => {
                if (!id) {
                  handleSubmit();
                } else {
                  handleEdit();
                }
              }}
              isDisabled={isLoading ? true : false}
            >
              {isLoading && <Spinner color="white" />}
              {!isLoading && "Tweet"}
            </Button>
          </Box>
        </FormControl>
      </Box>
    </LayoutDashboard>
  );
};

export default Tweet;

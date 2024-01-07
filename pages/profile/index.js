import React, { useEffect, useState } from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import axios from "axios";
import Cookies from "js-cookie";
import useProfileStore from "@/store/profile";
import { Box, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { VscCalendar, VscMail } from "react-icons/vsc";
import CardPostProfile from "../components/CardPostProfile";
import { Skeleton, Stack } from "@chakra-ui/react";

const metaData = {
  title: "Profile User",
  description: "CherrisHub - Profile",
};

const profileUser = {
  id: 78,
  name: "Jasmine Lee Hyun",
  email: "jasmine_lee_hyun@gmail.com",
  dob: "24 Jan 1993",
  phone: "087899108874",
  hobby: "Sport",
  deleted_at: null,
  created_at: "2024-01-03T09:31:15.000000Z",
  updated_at: "2024-01-03T09:31:15.000000Z",
};

const ProfileUser = (props) => {
  // const { fetchProfile, profile } = useProfileStore();
  const [profile, setProfile] = useState(profileUser);
  const [userPosts, setUsersPosts] = useState([]);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  const fetchProfile = async () => {
    setIsLoadingProfile(true);
    try {
      const response = await axios({
        url: "/api/profile",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setProfile(response.data.profile);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingProfile(false);
    }
  };

  const fetchUserPost = async () => {
    setIsLoadingPosts(true);
    try {
      const response = await axios({
        url: "/api/profile/me",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setUsersPosts(response.data.profile);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const response = await axios({
        url: `/api/posts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      fetchUserPost();
    } catch (error) {
      console.log(error);
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
      fetchUserPost();
    } catch (error) {
      console.log(error);
    }
  };

  const unlike = async (id) => {
    console.log(id);
    try {
      const response = await axios({
        url: `/api/unlike/${id}`,
        method: "POST",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log(response);
      fetchUserPost();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPost = (id) => {
    console.log(id);
  };

  useEffect(() => {
    fetchProfile();
    fetchUserPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutDashboard metaData={metaData}>
      <Box width={{ base: "100vw", md: "100vw", lg: "auto" }}>
        {isLoadingProfile && <Skeleton height="100px" />}
        {!isLoadingProfile && (
          <Box
            border="0.5px solid gray"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexFlow="column"
            padding="1rem"
            marginBottom="1rem"
          >
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
              marginBottom="0.5rem"
            >
              <Avatar
                size="md"
                name={profile.name}
                bg="teal.500"
                color="white"
                border="2px solid white"
                _hover={{ cursor: "pointer" }}
                style={{ height: "64px", width: "64px" }}
              />
            </Box>
            <Box>
              <Text textDecoration="underline">{profile.name}</Text>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <VscCalendar />
              <Text marginLeft="0.5rem">{profile.dob}</Text>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <VscMail />
              <Text marginLeft="0.5rem" fontSize="0.875rem">
                {profile.email}
              </Text>
            </Box>
          </Box>
        )}
        <Box paddingBottom="50px">
          {isLoadingProfile && (
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
          )}
          {!isLoadingPosts && (
            <CardPostProfile
              userPosts={userPosts}
              handleDelete={handleDelete}
              handleLike={handleLike}
              unlike={unlike}
              handleEditPost={handleEditPost}
            />
          )}
        </Box>
      </Box>
    </LayoutDashboard>
  );
};

export default ProfileUser;

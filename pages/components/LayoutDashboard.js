import React, { useEffect } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "./Header";
import FixedNavigation from "./FixedNavigation";

const LayoutDashboard = ({ children, metaData }) => {
  const { title, metaDescription } = metaData;
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>{`CherishHub | ${title}`}</title>
        <meta
          name="description"
          content={`${metaDescription} - Cherish Love, Connect Hearts`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box
        as="main"
        width="100vw"
        height="100vh"
        display="grid"
        gridTemplateColumns="1fr 2fr 1fr"
        gridAutoRows="auto"
        paddingTop={{ base: "70px" }}
        paddingBottom={{ base: "60px" }}
      >
        {children}
      </Box>
      <FixedNavigation />
    </>
  );
};

export default LayoutDashboard;

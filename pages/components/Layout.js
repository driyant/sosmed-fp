import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Layout = ({ children, metaData }) => {
  const { title, metaDescription } = metaData;
  return (
    <>
      <Head>
        <title>{`Social Media App | ${title}`}</title>
        <meta name="description" content={`${metaDescription}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" width="100vw" height="100vh" display="flex">
        <Box
          width="49%"
          height="100vh"
          position="relative"
          display={{
            base: "none",
            lg: "block",
          }}
        >
          <Image
            src="/images/people.jpg"
            alt="social-media-app-ryanta"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        {children}
      </Box>
    </>
  );
};

export default Layout;

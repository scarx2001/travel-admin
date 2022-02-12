import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import theme from "../theme";

import "@fontsource/spartan/100.css";
import "@fontsource/spartan/200.css";
import "@fontsource/spartan/300.css";
import "@fontsource/spartan/400.css";
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/600.css";
import "@fontsource/spartan/700.css";
import "@fontsource/spartan/800.css";
import "@fontsource/spartan/900.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel Admin</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

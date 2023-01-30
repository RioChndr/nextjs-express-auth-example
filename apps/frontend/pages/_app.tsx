import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react"

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider>
          <Head>
            <title>Welcome to frontend!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default CustomApp;

import type { NextPage } from "next";
import Head from "next/head";
import { HomePage } from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

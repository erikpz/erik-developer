import type { NextPage } from "next";
import Head from "next/head";
import { HomePage } from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainSection from "../components/MainSection";
import { useState } from "react";

const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "whitesmoke",
  padding: "0px 70px",
  width: "100%",
  maxWidth: 1400,
  margin: "0 auto",
  [theme.breakpoints.down(1000)]: {
    padding: "0px 40px",
  },
}));

const Home: NextPage = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <HomeContainer>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar open={openMenu} handleOpen={setopenMenu} />
      <MainSection />
    </HomeContainer>
  );
};

export default Home;

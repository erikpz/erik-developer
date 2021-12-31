import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainSection from "../components/MainSection";
import { useEffect, useState } from "react";
import SkillsSection from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import { Menu } from "../components/Menu";
import { WorksSection } from "../components/WorksSection";

const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "0px 50px",
  width: "100%",
  maxWidth: 1400,
  margin: "0 auto",
  overflowX: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "0px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px",
  },
}));

const Home: NextPage = () => {
  const [openMenu, setopenMenu] = useState(false);
  const smScreen = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!smScreen) {
      setopenMenu(false);
    }
  }, [smScreen]);

  return (
    <HomeContainer>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ProgressBar />
      <NavBar open={openMenu} handleOpen={setopenMenu} />
      <Menu open={openMenu} handleOpen={setopenMenu} />
      <MainSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <SkillsSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <ExperienceSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <WorksSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;

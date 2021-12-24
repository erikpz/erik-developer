import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainSection from "../components/MainSection";
import { useEffect, useRef, useState } from "react";
import SkillsSection from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";

const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "0px 50px",
  width: "100%",
  maxWidth: 1400,
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    padding: "0px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px",
  },
}));

const Home: NextPage = () => {
  const [openMenu, setopenMenu] = useState(false);
  const barRef = useRef<any>(null);
  const doProgress = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barRef.current.style.width = scrolled + "%";
  };
  useEffect(() => {
    window.addEventListener("scroll", doProgress);
    return window.removeEventListener("scroll", doProgress);
  }, []);
  return (
    <HomeContainer>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        sx={{
          width: "100%",
          height: "5px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        <Box
          ref={barRef}
          sx={(theme) => ({
            height: "100%",
            backgroundColor: theme.palette.text.primary,
            width: "0%",
          })}
        ></Box>
      </Box>
      <NavBar open={openMenu} handleOpen={setopenMenu} />
      <MainSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <SkillsSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <ExperienceSection />
      <Divider sx={{ my: { xs: 6, md: 9 } }} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;

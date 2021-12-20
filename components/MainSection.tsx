import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Alien from "../assets/alien.jpg";

const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "lightblue",
  minHeight: "calc(200vh-80px)",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  margin: "50px 0px",
}));

const Photo = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 4,
  },
}));

export const MainSection = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Typography variant="h2" align="center">
          Erik Pizaña
        </Typography>
        <Typography variant="h2" align="center">
          wep diveloper
        </Typography>
      </TitleContainer>
      <Box
        sx={{
          width: 300,
          height: 500,
          borderRadius: 50,
          outline: "2px solid #888",
          outlineOffset: 15,
          overflow: "hidden",
        }}
      >
        <Image src={Alien} alt="me" />
      </Box>
    </MainContainer>
  );
};

export default MainSection;

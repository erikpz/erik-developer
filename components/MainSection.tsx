import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Alien from "../assets/alien.jpg";

const MainContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  minHeight: "calc(100vh-80px)",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  marginTop: 40,
  marginBottom: 60,
}));

const BioContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: 300,
  height: 450,
  boxSizing: "border-box",
  borderRadius: 500,
  outline: "2px solid #888",
  outlineColor: theme.palette.grey[600],
  outlineOffset: 15,
  overflow: "hidden",
  "& span": {
    height: "100% !important",
    width: "100% !important",
    "& img": {
      objectFit: "cover",
    },
  },
  [theme.breakpoints.down(900)]: {
    width: 250,
    height: 400,
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

      <BioContainer>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              marginBottom: 3,
              color: (theme) => theme.palette.grey[600],
            }}
          >
            ¿Quién soy?
          </Typography>
          <Typography sx={{ width: 160, fontWeight: 500 }}>
            Me llamo Erik, soy desarrollador web e ingeniero en sistemas
            computacionales.
          </Typography>
        </Box>

        <ImageContainer>
          <Image src={Alien} />
        </ImageContainer>

        <Box
          sx={{
            width: "30%",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              marginBottom: 3,
              color: (theme) => theme.palette.grey[600],
            }}
          >
            Servicios
          </Typography>
          <Typography sx={{ width: 160, fontWeight: 500 }}>
            Desarrollo de sitios y aplicaciones web adaptables a cualquier
            dispositivo.
          </Typography>
        </Box>
      </BioContainer>
    </MainContainer>
  );
};

export default MainSection;

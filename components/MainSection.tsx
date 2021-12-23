import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import alien from "../assets/alien.jpg";
import ipn from "../assets/ipn.png";

const MainContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  minHeight: "100vh",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 70,
  animation: "fade 2s linear 0s 1 alternate",
  "@keyframes fade": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  [theme.breakpoints.down(750)]: {
    marginBottom: 50,
  },
}));

const BioContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down(750)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: 300,
  height: 450,
  boxSizing: "border-box",
  borderRadius: 500,
  outline: "1px solid #888",
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
  [theme.breakpoints.down(750)]: {
    margin: "40px 0",
  },
}));

const BioText: FC<{ title: string; text: string; align: string }> = (props) => {
  return (
    <Box
      sx={[
        {
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: props.align === "right" ? "flex-end" : "flex-start",
          textAlign: props.align as any,
        },
        (theme) => ({
          [theme.breakpoints.down(750)]: {
            alignItems: "center",
            textAlign: "center",
          },
        }),
      ]}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          marginBottom: 3,
          color: (theme) => theme.palette.grey[600],
        }}
      >
        {props.title}
      </Typography>
      <Typography sx={{ width: 160, fontWeight: 500 }}>{props.text}</Typography>
    </Box>
  );
};

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
        <BioText
          title="¿Quién soy?"
          text="Me llamo Erik, soy desarrollador web e ingeniero en sistemas
            computacionales."
          align="left"
        />

        <ImageContainer>
          <Image src={alien} priority />
        </ImageContainer>

        <BioText
          title="Servicios"
          text="  Desarrollo de sitios y aplicaciones web adaptables a cualquier
            dispositivo."
          align="right"
        />
      </BioContainer>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap:5,
          filter:'grayscale(100%)'
        }}
      >
        <Typography>Instituto Politécnico Nacional</Typography>
        <Box sx={{ width: 60 }}>
          <Image src={ipn} priority />
        </Box>
        <Typography>Escuela Superior de Cómputo</Typography>
      </Box>
    </MainContainer>
  );
};

export default MainSection;

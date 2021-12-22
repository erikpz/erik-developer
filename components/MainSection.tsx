import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Alien from "../assets/alien.jpg";

const MainContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  minHeight: "calc(100vh-80px)",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 90,
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
}));

const BioText: FC<{ title: string; text: string; align: string }> = (props) => {
  return (
    <Box
      sx={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: props.align === "right" ? "flex-end" : "flex-start",
        textAlign: props.align as any,
      }}
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
          <Image src={Alien} priority />
        </ImageContainer>

        <BioText
          title="Servicios"
          text="  Desarrollo de sitios y aplicaciones web adaptables a cualquier
            dispositivo."
          align="right"
        />
      </BioContainer>
    </MainContainer>
  );
};

export default MainSection;

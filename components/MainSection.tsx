import React, { FC, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import alien from "../assets/alien.jpg";
import ipn from "../assets/ipn.png";
import { LanguageContext } from "../contexts/LanguageContext";

const MainContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  /* minHeight: "100vh", */
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 70,
  opacity: 0,
  animation: "fade 1.5s linear 400ms 1 normal forwards",
  [theme.breakpoints.down(750)]: {
    marginBottom: 50,
  },
}));

const BioContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  animation: "fade 1.5s linear 600ms normal forwards",
  opacity: 0,
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
  [theme.breakpoints.down(450)]: {
    width: 190,
    height: 330,
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
  const langContext = useContext(LanguageContext);
  return (
    <MainContainer>
      <TitleContainer>
        <Typography variant="h2" align="center">
          Erik Pizaña
        </Typography>
        <Typography variant="h2" align="center">
          {langContext.state.content.mainSection.title}
        </Typography>
        <Typography variant="h2" align="center">
          {langContext.state.content.mainSection.subtitle}
        </Typography>
      </TitleContainer>

      <BioContainer>
        <BioText
          title={langContext.state.content.mainSection.who}
          text={langContext.state.content.mainSection.whoDescription}
          align="left"
        />

        <ImageContainer>
          <Image src={alien} priority alt="Erik" />
        </ImageContainer>

        <BioText
          title={langContext.state.content.mainSection.services}
          text={langContext.state.content.mainSection.servicesDescription}
          align="right"
        />
      </BioContainer>
      <Box
        sx={[
          {
            marginTop: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 5,
            filter: "grayscale(100%)",
            opacity: 0,
            animation: "fade 2s linear 0.8s 1 normal forwards",
          },
          (theme) => ({
            [theme.breakpoints.down(750)]: { marginTop: 5, columnGap: 3 },
            [theme.breakpoints.down("sm")]: { columnGap: 2 },
          }),
        ]}
      >
        <Typography align="center" variant="caption" color="secondary">
          Instituto Politécnico Nacional
        </Typography>
        <Box
          sx={[
            { width: 60 },
            (theme) => ({
              opacity: 0.8,
              [theme.breakpoints.down(750)]: { width: 50 },
            }),
          ]}
        >
          <Image src={ipn} priority alt="IPN" />
        </Box>
        <Typography align="center" variant="caption" color="secondary">
          Escuela Superior de Cómputo
        </Typography>
      </Box>
    </MainContainer>
  );
};

export default MainSection;

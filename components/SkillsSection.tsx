import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import node from "../assets/node.png";
import nest from "../assets/nest.png";
import express from "../assets/express.png";
import next from "../assets/next.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";

const techs = [
  { icon: react, name: "React Js" },
  { icon: javascript, name: "Javascript" },
  { icon: typescript, name: "Typescript" },
  { icon: next, name: "Next Js" },
  { icon: html, name: "HTML 5" },
  { icon: css, name: "CSS3" },
  { icon: sass, name: "Sass" },
  { icon: node, name: "Node Js" },
  { icon: nest, name: "Nest Js" },
  { icon: express, name: "Express" },
  { icon: mongodb, name: "Mongo DB" },
  { icon: mysql, name: "MySql" },
  { icon: git, name: "Git" },
  { icon: github, name: "Github" },
  { icon: gitlab, name: "Gitlab" },
];

const SkillsContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  /* minHeight: "100vh", */
}));

const TechnologyCard = (props: any) => {
  return (
    <Box
      sx={[
        {
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#D2D2D2" : "#1F1C19",
          height: 250,
          width: "100%",
          maxWidth: 190,
          margin: "auto",
          borderRadius: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            cursor: "pointer",
            "& div": {
              transform: "scale(1.2)",
              filter: "grayscale(0%)",
            },
          },
        },
        (theme) => ({
          [theme.breakpoints.down("md")]: {
            height: 230,
            maxWidth: 160,
          },
        }),
      ]}
    >
      <Box
        sx={[
          {
            /* backgroundColor: "lightgreen", */
            width: 100,
            height: 100,
            borderRadius: 4,
            overflow: "hidden",
            transition: "0.3s",
            filter: "grayscale(100%)",
          },
          (theme) => ({
            [theme.breakpoints.down("md")]: {
              width: 80,
              height: 80,
            },
          }),
        ]}
      >
        <Image alt="tech" src={props.tech.icon} priority />
      </Box>
      <Typography
        variant="subtitle1"
        align="center"
        color={grey[600]}
        sx={{ textTransform: "uppercase", mt: { xs: 3, sm: 3, md: 4 } }}
      >
        {props.tech.name}
      </Typography>
    </Box>
  );
};

export const SkillsSection = () => {
  return (
    <SkillsContainer>
      <Typography
        align="center"
        variant="h2"
        sx={{ marginBottom: { xs: 5, sm: 9 } }}
      >
        Habilidades
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginBottom: 8 }}
      >
        {techs.map((tech: any) => (
          <Grid item xs={6} sm={3} md={3} lg={2} key={tech.name}>
            <TechnologyCard tech={tech} />
          </Grid>
        ))}
      </Grid>
    </SkillsContainer>
  );
};

export default SkillsSection;

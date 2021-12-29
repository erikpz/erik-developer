import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
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

const animationDelays = (length: number) => {
  let delays: number[] = [];
  for (let i = 0; i < length; i++) {
    delays = [...delays, Math.floor(Math.random() * (length * 300 - 0.1))];
  }
  return delays;
};

const SkillsContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  /* minHeight: "100vh", */
}));

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#D2D2D2" : "#1F1C19",
  height: 200,
  width: "100%",
  maxWidth: 150,
  borderRadius: 1000,
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
  [theme.breakpoints.down("lg")]: {
    height: 170,
    maxWidth: 120,
  },
  [theme.breakpoints.down("sm")]: {
    height: 130,
    maxWidth: 90,
  },
}));

const LogoContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "delay",
})<any>(({ theme, delay }: any) => ({
  width: "50%",
  borderRadius: 4,
  overflow: "hidden",
  transition: "0.3s transform",
  filter: "grayscale(100%)",
  animation: `heart 4s ease-in ${delay}ms infinite alternate`,
  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
}));

const TechsContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 12,
}));

const TechnologyCard = (props: any) => {
  return (
    <CardContainer>
      <LogoContainer delay={props.delay}>
        <Image alt="tech" src={props.tech.icon} priority />
      </LogoContainer>
      <Typography
        variant="subtitle1"
        align="center"
        color={grey[600]}
        sx={{
          textTransform: "uppercase",
          mt: { xs: 1, md: 3 },
          fontSize: { xs: 11, sm: 12, md: 13 },
        }}
      >
        {props.tech.name}
      </Typography>
    </CardContainer>
  );
};

export const SkillsSection = () => {
  const [delays, setdelays] = useState<number[]>([]);

  useEffect(() => {
    setdelays(animationDelays(techs.length));
  }, []);

  return (
    <SkillsContainer>
      <Typography
        align="center"
        variant="h2"
        sx={{ marginBottom: { xs: 5, sm: 9 } }}
      >
        Habilidades
      </Typography>
      <TechsContainer>
        {techs.map((tech: any, i: number) => (
          <TechnologyCard delay={delays[i]} tech={tech} key={tech.name} />
        ))}
      </TechsContainer>
    </SkillsContainer>
  );
};

export default SkillsSection;

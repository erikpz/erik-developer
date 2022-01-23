import React, { useContext } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, styled, Typography } from "@mui/material";
import Link from "next/link";
import { LanguageContext } from "../contexts/LanguageContext";

const FooterContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  /* minHeight: "100vh", */
  paddingBottom: 100,
  display: "flex",
  justifyContent: "space-between",
  "& p,div": {
    width: 200,
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 70,
    flexDirection: "column",
    alignItems: "center",
    "& p": { textAlign: "center" },
    gap: "15px",
  },
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    marginRight: "-5px",
  },
}));

export const Footer = () => {
  const langContext = useContext(LanguageContext);
  return (
    <>
      <Typography
        align="center"
        variant="h2"
        sx={{ marginBottom: { xs: 5, sm: 9 } }}
      >
        {langContext.state.content.contactSection.title}
      </Typography>
      <FooterContainer id="contact">
        <Link href="#erikdev">
          <Typography sx={{ "&:hover": { cursor: "pointer" } }}>
            Erik Pizaña
          </Typography>
        </Link>
        <Typography>erik@kaantechnologies.com</Typography>
        <IconsContainer>
          <a
            href="https://github.com/erikpz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small">
              <GitHub sx={{ color: "text.primary" }} />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/erik-pizana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small">
              <LinkedIn sx={{ color: "text.primary" }} />
            </IconButton>
          </a>
        </IconsContainer>
      </FooterContainer>
    </>
  );
};

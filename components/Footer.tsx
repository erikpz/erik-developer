import React from "react";
import { GitHub } from "@mui/icons-material";
import { Box, IconButton, styled, Typography } from "@mui/material";

const FooterContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  /* minHeight: "100vh", */
  paddingBottom: 100,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    marginRight: "-5px",
  },
}));

export const Footer = () => {
  return (
    <FooterContainer>
      <Typography>Erik Pizaña Dev.</Typography>
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
      </IconsContainer>
    </FooterContainer>
  );
};

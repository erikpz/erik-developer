import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";

const NavBarContainer = styled(Box)(({ theme }) => ({
  /*  backgroundColor: "lightblue", */
  height: 80,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: 0,
  top: 0,
}));

const Logo = styled(Box)(({ theme }) => ({
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: theme.palette.common.black,
  textAlign: "center",
  padding: "5px 10px",
  "&:hover": { cursor: "pointer" },
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: "0px 8px",
  lineHeight: "1.75",
  "&:hover": { cursor: "pointer", textDecoration: "underline" },
}));

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Box sx={{ display: "flex" }}>
        <Link href="#">
          <NavLink>Trabajos</NavLink>
        </Link>
        <NavLink>Contacto</NavLink>
      </Box>

      <LogoContainer>
        <Logo>
          <Typography sx={{ fontWeight: 700 }}>PIZA</Typography>
          <Typography sx={{ fontWeight: 700 }}>ÑA</Typography>
        </Logo>
      </LogoContainer>

      <IconsContainer>
        <a href="https://github.com/erikpz" target="_blank">
          <IconButton size="small">
            <GitHub sx={{ color: "text.primary" }} />
          </IconButton>
        </a>
      </IconsContainer>
    </NavBarContainer>
  );
};

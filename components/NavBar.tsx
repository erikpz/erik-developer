import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "lightblue",
  height: 80,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  borderWidth:2,
  borderStyle:"solid",
  borderColor: theme.palette.common.black,
  textAlign: "center",
  padding:"5px 10px"
}));

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Box sx={{ display: "flex" }}>
        <Typography variant="subtitle1" sx={{ mx: 1 }}>
          Trabajos
        </Typography>
        <Typography variant="subtitle1" sx={{ mx: 1 }}>
          Contacto
        </Typography>
      </Box>

      <LogoContainer>
        <Typography sx={{ fontWeight: 700 }}>PIZA</Typography>
        <Typography sx={{ fontWeight: 700 }}>ÑA</Typography>
      </LogoContainer>
    </NavBarContainer>
  );
};

import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const NavBarContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "lightblue",
    height:80
}));

export const NavBar = () => {
  return <NavBarContainer>NAVBAR</NavBarContainer>;
};

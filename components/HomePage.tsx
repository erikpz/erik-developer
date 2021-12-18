import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavBar } from "./NavBar";

const HomePageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "whitesmoke",
  padding:'0px 30px'
}));

export const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
    </HomePageContainer>
  );
};

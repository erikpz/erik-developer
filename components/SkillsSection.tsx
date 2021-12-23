import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const SkillsContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  /* minHeight: "100vh", */
}));

export const SkillsSection = () => {
  return (
    <SkillsContainer>
      <Typography align="center" variant="h2">Habilidades</Typography>
    </SkillsContainer>
  );
};

export default SkillsSection;

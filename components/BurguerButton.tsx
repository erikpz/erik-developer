import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Burguer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "2rem",
  height: "2rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  zIndex: 10,
  "&:focus": {
    outline: "none",
  },
  "& div": {
    width: "2rem",
    height: "0.25rem",
    background: theme.palette.text.primary,
    borderRadius: 10,
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: 1,
  },
}));

export const BurguerButton = () => {
  return (
    <Burguer>
      <Box />
      <Box />
      <Box />
    </Burguer>
  );
};

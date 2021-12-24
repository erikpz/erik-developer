import React, { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface BurguerButtonProps {
  open: boolean;
  handleOpen: Function;
}

const Burguer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }: any) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "1.2rem",
  height: "1.2rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  zIndex: 10,
  "&:focus": {
    outline: "none",
  },
  "& div": {
    width: "1.3rem",
    height: "0.1rem",
    background: theme.palette.text.primary,
    borderRadius: 10,
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: 1,
    "&:first-of-type": {
      transform: open ? "rotate(45deg)" : "rotate(0)",
    },
    "&:nth-of-type(2)": {
      opacity: open ? 0 : 1,
      transform: open ? "translateX(20px)" : "translateX(0)",
    },
    "&:nth-of-type(3)": {
      transform: open ? "rotate(-45deg)" : "rotate(0)",
    },
  },
}));

export const BurguerButton: FC<BurguerButtonProps> = (props) => {
  const { open, handleOpen } = props;
  return (
    <Burguer open={open} onClick={() => handleOpen(!open)}>
      <Box />
      <Box />
      <Box />
    </Burguer>
  );
};

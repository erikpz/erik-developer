import { Box, styled, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

interface MenuProps {
  open: boolean;
  handleOpen: Function;
}

const MenuContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "open",
})<any>(({ theme, open }: any) => ({
  backgroundColor: theme.palette.background.paper,
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 50,
  width: "100vw",
  height: "100vh",
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  animation: open
    ? "fade 700ms linear 0s 1 normal forwards"
    : "fadeOut 700ms linear 0s 1 normal forwards",
}));

export const Menu: FC<MenuProps> = (props) => {
  const langCtx = useContext(LanguageContext);
  if (!props.open) {
    return null;
  }
  return (
    <MenuContainer open={props.open}>
      <Link href="#works">
        <Typography
          sx={{
            fontSize: 20,
            mb: 4,
            opacity: 0,
            animation: "fade 700ms linear 600ms 1 normal forwards",
          }}
          onClick={() => props.handleOpen(false)}
        >
          {langCtx.state.language !== "EN" ? "Works" : "Trabajos"}
        </Typography>
      </Link>
      <Link href="#contact">
        <Typography
          sx={{
            fontSize: 20,
            mb: 4,
            opacity: 0,
            animation: "fade 700ms linear 600ms 1 normal forwards",
          }}
          onClick={() => props.handleOpen(false)}
        >
          {langCtx.state.language !== "EN" ? "Contact" : "Contacto"}
        </Typography>
      </Link>
    </MenuContainer>
  );
};

import React, { FC, SetStateAction } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
import { BurguerButton } from "./BurguerButton";

interface NavBarProps {
  open: boolean;
  handleOpen: Function;
}

const NavBarContainer = styled(Box)(({ theme }) => ({
  /*  backgroundColor: "lightblue", */
  height: 80,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down(800)]: {
    justifyContent: "flex-end",
  },
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
  [theme.breakpoints.down(800)]: {
    justifyContent: "flex-start",
  },
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

export const NavBar: FC<NavBarProps> = (props) => {
  const { open, handleOpen } = props;
  const under750 = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));
  return (
    <NavBarContainer>
      {!under750 && (
        <Box sx={{ display: "flex", zIndex: 1 }}>
          <Link href="#">
            <NavLink>Trabajos</NavLink>
          </Link>
          <Link href="#">
            <NavLink>Contacto</NavLink>
          </Link>
        </Box>
      )}

      <LogoContainer>
        <Logo>
          <Typography sx={{ fontWeight: 700 }}>PIZA</Typography>
          <Typography sx={{ fontWeight: 700 }}>ÑA</Typography>
        </Logo>
      </LogoContainer>

      {!under750 ? (
        <IconsContainer>
          <a href="https://github.com/erikpz" target="_blank">
            <IconButton size="small">
              <GitHub sx={{ color: "text.primary" }} />
            </IconButton>
          </a>
        </IconsContainer>
      ) : (
        <BurguerButton open={open} handleOpen={handleOpen} />
      )}
    </NavBarContainer>
  );
};

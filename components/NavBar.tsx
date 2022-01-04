import React, { FC, useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { DarkMode, GitHub, LightMode, Language } from "@mui/icons-material";
import Link from "next/link";
import { BurguerButton } from "./BurguerButton";
import { ColorModeContext } from "../theme/ThemeConfig";
import { LanguageContext } from "../contexts/LanguageContext";

interface NavBarProps {
  open: boolean;
  handleOpen: Function;
}

const NavBarContainer = styled(Box)(({ theme }) => ({
  /*  backgroundColor: "lightblue", */
  height: 130,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: 100,
  },
  [theme.breakpoints.down("sm")]: {
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
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: theme.palette.text.primary,
  textAlign: "center",
  padding: "5px 10px",
  userSelect: "none",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.paper,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 8px",
    "& p": {
      fontSize: 12,
    },
  },
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  /* margin: "0px 8px", */
  padding: "0 10px",
  lineHeight: "1.75",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.paper,
    borderRadius: 20,
    padding: "0 10px",
  },
}));

export const NavBar: FC<NavBarProps> = (props) => {
  const { open, handleOpen } = props;
  const underSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const langContext = useContext(LanguageContext);
  return (
    <NavBarContainer id="erikdev">
      {!underSmScreen && (
        <Box sx={{ display: "flex", zIndex: 1 }}>
          <Link href="#works">
            <NavLink>Trabajos</NavLink>
          </Link>
          <Link href="#contact">
            <NavLink>Contacto</NavLink>
          </Link>
        </Box>
      )}

      <LogoContainer>
        <Logo>
          <Typography sx={{ fontWeight: 700 }}>EPC</Typography>
          <Typography sx={{ fontWeight: 700 }}>DEV.</Typography>
        </Logo>
      </LogoContainer>

      <IconsContainer>
        <IconButton
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
          onClick={() => langContext.dispatch({ type: "TOGGLE" })}
        >
          <Language />
        </IconButton>
        <IconButton
          size="small"
          onClick={colorMode.toggleColorMode}
          sx={{ marginRight: underSmScreen ? 1 : 0 }}
        >
          {theme.palette.mode === "light" ? (
            <DarkMode sx={{ color: "text.primary" }} />
          ) : (
            <LightMode sx={{ color: "text.primary" }} />
          )}
        </IconButton>
        {underSmScreen ? (
          <BurguerButton open={open} handleOpen={handleOpen} />
        ) : (
          <a
            href="https://github.com/erikpz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small">
              <GitHub sx={{ color: "text.primary" }} />
            </IconButton>
          </a>
        )}
      </IconsContainer>
    </NavBarContainer>
  );
};

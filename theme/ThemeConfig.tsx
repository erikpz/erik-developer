import React, { createContext, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  ThemeProvider,
  PaletteOptions,
  PaletteMode,
  alpha,
} from "@mui/material";
import { globalStyles } from "./globalStyles";

const FONT_FAMILY = '"Lato", sans-serif';

const lightPalette: PaletteOptions = {
  common: { black: "#0a0908", white: "#F5F5F5" },
  text: { primary: "#0a0908", secondary: "#1F1C19" },
  background: { default: "#F5F5F5", paper: "#F5F5F5" },
  divider: alpha("#001633", 0.3),
};

const darkPalette: PaletteOptions = {
  common: { black: "#0a0908", white: "#F5F5F5" },
  text: { primary: "#F5F5F5", secondary: "#D2D2D2" },
  background: { default: "#0a0908", paper: "#0a0908" },
  divider: alpha("#F5F5F5", 0.3),
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 550,
    md: 800,
    lg: 1200,
    xl: 1536,
  },
};

const typography = {
  fontFamily: FONT_FAMILY,
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeConfig = ({ children }: any) => {
  /* const storageMode = localStorage.getItem("themeMode") as PaletteMode; */
  const [mode, setmode] = useState<PaletteMode | null>();
  const toggleColorMode = useMemo(
    () => () => {
      setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    []
  );
  let theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        palette: {
          mode: mode ?? "light",
          ...(mode === "light" ? lightPalette : darkPalette),
        },
        typography,
        breakpoints,
      })
    );
  }, [mode]);

  useEffect(() => {
    if (!localStorage.getItem("themeMode")) {
      localStorage.setItem("themeMode", "dark");
    } else {
      setmode(localStorage.getItem("themeMode") as any);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("themeMode", mode ?? "dark");
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={(theme) => globalStyles(theme)} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

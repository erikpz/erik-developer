import React, { createContext, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  ThemeProvider,
  PaletteOptions,
  PaletteMode,
} from "@mui/material";
import { globalStyles } from "./globalStyles";

const FONT_FAMILY = '"Lato", sans-serif';

const lightPalette: PaletteOptions = {
  common: { black: "#0a0908", white: "#F5F5F5" },
  text: { primary: "#0a0908", secondary: "#0a0908" },
  background: { default: "#F5F5F5", paper: "#F5F5F5" },
  divider: "#001633",
};

const darkPalette: PaletteOptions = {
  common: { black: "#0a0908", white: "#F5F5F5" },
  text: { primary: "#F5F5F5", secondary: "#D2D2D2" },
  background: { default: "#0a0908", paper: "#0a0908" },
  divider: "#F5F5F5",
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
  const [mode, setmode] = useState<PaletteMode>("light");
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
          mode,
          ...(mode === "light" ? lightPalette : darkPalette),
        },
        typography,
        breakpoints,
      })
    );
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

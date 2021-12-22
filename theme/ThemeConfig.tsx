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

const palette: PaletteOptions = {
  common: { black: "#001633", white: "#F5F5F5" },
  text: { primary: "#001633" },
};

const typography = {
  fontFamily: FONT_FAMILY,
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeConfig = ({ children }: any) => {
  const [mode, setmode] = useState<PaletteMode>("light");
  const toggleColorMode = () => {
    setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  let theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        palette: {
          mode,
          ...palette,
        },
        typography,
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

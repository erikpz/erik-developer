import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  ThemeProvider,
  PaletteOptions,
} from "@mui/material";
import { globalStyles } from "./globalStyles";

const FONT_FAMILY = '"LAto", sans-serif';

const palette: PaletteOptions = {
  common: { black: "#001633", white: "#F5F5F5" },
  text: { primary: "#001633" },
};

const typography = {
  fontFamily: FONT_FAMILY,
};

export const ThemeConfig = ({ children }: any) => {
  let theme = createTheme({
    palette,
    typography,
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={(theme) => globalStyles(theme)} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

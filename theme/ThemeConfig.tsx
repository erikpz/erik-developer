import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { globalStyles } from "./globalStyles";

const FONT_FAMILY = '"Manrope", sans-serif';

export const ThemeConfig = ({ children }: any) => {
  let theme = createTheme({
    typography: { fontFamily: FONT_FAMILY },
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

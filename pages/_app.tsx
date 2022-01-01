import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeConfig } from "../theme/ThemeConfig";
import { LanguageProvider } from "../contexts/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeConfig>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeConfig>
  );
}

export default MyApp;

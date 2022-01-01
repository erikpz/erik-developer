import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeConfig } from "../theme/ThemeConfig";
import { LanguageProvider } from "../contexts/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeConfig>
        <Component {...pageProps} />
      </ThemeConfig>
    </LanguageProvider>
  );
}

export default MyApp;

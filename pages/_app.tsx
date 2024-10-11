import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";

import "styles/code-highlight.css";
import "styles/globals.css";

import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { AppHead } from "components/AppHead";

function MyApp({ Component, pageProps }: AppProps<{ lngDict: {} }>) {
  const { lngDict, ...rest } = pageProps;

  return (
    <ThemeProvider attribute="class">
      <AppHead />
      <Component {...rest} />
      <Analytics />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

import { I18nProvider } from "next-localization";
import { useRouter } from "next/router";

import "styles/code-highlight.css"

import "styles/globals.css";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps<{ lngDict: {} }>) {
  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <I18nProvider locale={router?.locale as string} lngDict={lngDict}>
        <Component {...rest} />
    </I18nProvider>
  );
}

export default MyApp;

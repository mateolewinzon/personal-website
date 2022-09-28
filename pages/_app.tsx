import { I18nProvider } from "next-localization";
import { useRouter } from "next/router";
import { Layout, AppHead } from "components";
import "styles/globals.css";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps<{ lngDict: {} }>) {
  const { lngDict, ...rest } = pageProps;
  const router = useRouter();

  return (
    <I18nProvider locale={router?.locale as string} lngDict={lngDict}>
      <Layout>
        <AppHead />
        <Component {...rest} />
      </Layout>
    </I18nProvider>
  );
}

export default MyApp;

import { I18nProvider } from "next-localization";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const { lngDict, ...restOfProps } = pageProps;
  const router = useRouter();

  return (
    <SSRProvider>
      <I18nProvider locale={router.locale} lngDict={lngDict}>
        <Layout>
          <Component {...restOfProps} />
        </Layout>
      </I18nProvider>
    </SSRProvider>
  );
}

export default MyApp;

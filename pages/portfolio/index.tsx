import { useI18n } from "next-localization";
import { Container, Heading, PortfolioCard } from "components";
import { getCurrentLocaleMetadata } from "lib/mdx";
import type { GetStaticProps } from "next";
import projects from "config/projects";
import Head from "next/head";

export default function Portfolio({locale}) {
  const i18n = useI18n();
  return (
    <Container>
      <Head>
        <title>Portfolio - Mateo Lewinzon</title>
        <meta
          name="description"
          content="Dale una mirada a mis projectos personales!"
        />
      </Head>
    <div className="flex flex-col items-center">
      <Heading>{i18n.t("portfolio.heading")}</Heading>
      <div className="flex flex-col items-center my-4">
        {projects[locale].map((project, key) => (
          <PortfolioCard key={key} project={project} />
        ))}
      </div></div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return {
    props: {
      lngDict,
      locale
    },
  };
};

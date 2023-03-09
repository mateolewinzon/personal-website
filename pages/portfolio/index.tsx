import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, PortfolioCard, FadeOnView } from "components";
import useTranslation from "hooks/useTranslation";
import { Project } from "lib/types";
import { client } from "lib/sanity";
import { GET_PROJECTS } from "lib/queries";
import type { GetStaticProps } from "next";

export default function Portfolio({ projects }) {
  console.log(projects[0].url);

  const { t } = useTranslation();
  return (
    <Container>
      <Head>
        <title>Portfolio - Mateo Lewinzon</title>
        <meta
          name="description"
          content="Dale una mirada a mis projectos personales!"
        />
      </Head>
      <div className="pt-28 flex flex-col items-center mx-auto max-w-5xl p-4 gap-10">
        <h1>{t("portfolio.heading")}</h1>
        {projects.map((project, key) => (
          <PortfolioCard key={key} project={project} />
        ))}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects: Project[] = await client.fetch(GET_PROJECTS);

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      projects: projects.filter((p) => p.locale === locale),
    },
  };
};

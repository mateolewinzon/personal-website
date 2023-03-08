import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AboutMe, Container } from "components";
import { GetStaticProps } from "next";

const About = () => {
  return (
    <Container>
      <AboutMe />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale!)) } };
};

export default About;

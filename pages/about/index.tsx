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
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return { props: { lngDict } };
};

export default About;

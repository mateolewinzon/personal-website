import { AboutMe } from "components";

function About() {
  return <AboutMe />;
}

export async function getStaticProps({ locale }) {
  const { default: lngDict = {} } = await import(
    `locales/${locale}.json`
  );

  return { props: { lngDict } };
}

export default About;

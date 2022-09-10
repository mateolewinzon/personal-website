import { Container, Row } from "react-bootstrap";
import SecondarySection from "../components/home/secondary-section";
import TopSection from "../components/home/top-section";
import { getMetadata } from "../config/mdx";

function Home() {
  return (
    <>
      <Container>
      <TopSection />

      </Container>
      <Container fluid>
      <SecondarySection />
      </Container>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = await getMetadata(locale);
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

export default Home;

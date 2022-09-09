import { Container, Row } from "react-bootstrap";
import SecondarySection from "../components/home/secondary-section";
import TopSection from "../components/home/top-section";
import { getAllMetadata } from "../config/mdx";

function Home() {
  return (
    <div>
      <Container>
      <TopSection />

      </Container>
      <Container fluid>
      <SecondarySection />
      </Container>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const posts = await getAllMetadata();
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { posts, lngDict },
  };
}

export default Home;

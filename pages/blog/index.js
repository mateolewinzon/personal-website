import { Container, Row } from "react-bootstrap";
import { getMetadata } from "../../config/mdx";

export default function Blogs({ posts }) {
  return (
    <Container>
      <Row>
        {posts.map((post, index) => {
          return <Row key={index}>{post.title}</Row>;
        })}
      </Row>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = getMetadata(locale);
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

  console.log(currentLocaleFiles)

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

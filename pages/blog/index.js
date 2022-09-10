import { useI18n } from "next-localization";
import { Container, Row } from "react-bootstrap";
import BlogsList from "../../components/blogs/blogs-list";
import { getMetadata } from "../../config/mdx";
import {typewriter} from "../../styles/typing-effect.module.css";


export default function Blogs({ posts }) {
  const i18n = useI18n();

  return (
    <Container>
      <Row className="pt-4 pb-4">
        <span className={`title titleBlue ${typewriter}`}>{i18n.t('blogs.recent_posts')}</span>
      </Row>
      <Row className="pb-4">
        <BlogsList items={posts} />
      </Row>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = getMetadata(locale);
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

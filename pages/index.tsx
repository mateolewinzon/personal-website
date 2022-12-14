import { RecentPosts, HomeWelcome, Container } from "components";
import { getCurrentLocaleMetadata } from "lib/mdx";
import type { BlogInfo } from "lib/mdx";
import type { GetStaticProps } from "next";

type Props = {
  posts: BlogInfo[];
};

export default function Home({ posts }: Props) {
  return (
    <Container>
      <HomeWelcome />
      <RecentPosts posts={posts.sort((a, b)=> Date.parse(b.dateCreated) - Date.parse(a.dateCreated)).slice(0,3)} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocaleFiles = getCurrentLocaleMetadata(locale as string);
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
};

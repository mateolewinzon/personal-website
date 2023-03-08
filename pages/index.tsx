import { RecentPosts, HomeWelcome, Container } from "components";
import type { GetStaticProps } from "next";
import type { Post } from "lib/types";
import { client } from "lib/sanity";
import { GET_POSTS } from "lib/queries";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <Container>
      <HomeWelcome />
      <RecentPosts
        posts={posts
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .slice(0, 3)}
      />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts: Post[] = await client.fetch(GET_POSTS, { locale });
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return {
    props: { posts, lngDict },
  };
};

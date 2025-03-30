import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { RecentPosts, HomeWelcome, Container, NowPlaying } from "components";
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
        }
      />
      <NowPlaying />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts: Post[] = await client.fetch(GET_POSTS, { locale });

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      posts,
    },
  };
};

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, PostCard } from "components";
import { GetStaticProps } from "next";
import useTranslation from "hooks/useTranslation";
import { Post } from "lib/types";
import { client } from "lib/sanity";
import { GET_POSTS } from "lib/queries";

type Props = {
  posts: Post[];
};

export default function Blogs({ posts }: Props) {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("blogs.heading")}</h1>
      {posts
        .filter((item) => !item.isHidden)
        .map((item) => (
          <PostCard key={item.slug} item={item} />
        ))}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts: Post[] = await client.fetch(GET_POSTS, { locale });

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      posts
    },
  };
};

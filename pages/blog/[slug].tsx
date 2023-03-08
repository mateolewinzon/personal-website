import { useEffect, createContext } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MDXComponents, BlogLayout, Container } from "components";
import { mdxToHtml } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "lib/types";
import { client } from "lib/sanity";
import { GET_POST, GET_SLUGS } from "lib/queries";

type Props = {
  post: Post;
};

export const TranslatedSlugs = createContext({});

const Blog = ({ post }: Props) => {
  useEffect(() => {
    fetch(`/api/views/${post.slug}`, { method: "POST" });
  }, [post.slug]);

  return (
    <TranslatedSlugs.Provider
      value={{ es: post.esVersion, en: post.enVersion }}
    >
      <Container>
        <BlogLayout post={post}>
          <MDXRemote components={MDXComponents} {...post.content} />
        </BlogLayout>
      </Container>
    </TranslatedSlugs.Provider>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post: Post = await client.fetch(GET_POST, { slug: params!.slug });

  if (!post.content) {
    return {
      notFound: true,
    };
  }

  const content = await mdxToHtml(post.content);

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { slug: string }[] = await client.fetch(GET_SLUGS);

  return {
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export default Blog;

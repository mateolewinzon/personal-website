import { createContext, useEffect } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { MDXComponents, BlogLayout, Container } from "components";
import { getAllMetadataByLocales, getFileBySlug } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import type { PostInfo } from "lib/mdx";

type Props = {
  data: PostInfo;
  source: any;
};

export const BlogMeta = createContext<PostInfo>(null!);

const Blog = ({ source, data }: Props) => {
  useEffect(() => {
    fetch(`/api/views/${data.slug}`, { method: "POST" });
  }, []);

  return (
    <BlogMeta.Provider value={data}>
      <Container>
        <BlogLayout>
          <MDXRemote
            components={MDXComponents}
            {...source}
          />
        </BlogLayout>
      </Container>
    </BlogMeta.Provider>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { source, data } = await getFileBySlug(params?.slug as string);
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);
  return { props: { source, data, lngDict } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filesByLocale = getAllMetadataByLocales();

  type pagePaths = {
    params: { slug: string };
    locale: string;
  };

  let paths: pagePaths[] = [];

  for (let locale in filesByLocale) {
    filesByLocale[locale].map((file) =>
      paths.push({ params: { slug: file.slug }, locale })
    );
  }

  return {
    paths,
    fallback: false,
  };
};

export default Blog;

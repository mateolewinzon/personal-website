import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { MDXComponents, BlogLayout } from "components";
import { getAllMetadata, getFileBySlug } from "utils/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import type { BlogInfo } from "utils/mdx";

type Props = {
  data: BlogInfo
}

const Blog: React.FC = ({ source, data }: Props) => {
  console.log(data)
  return (
    <BlogLayout data={data}>
      <MDXRemote components={MDXComponents} {...source} />
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { source, data } = await getFileBySlug(params?.slug as string);
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return { props: { source, data, lngDict } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filesByLocale = getAllMetadata();

  interface pagePaths {
    params: { slug: string }, locale: string
  }

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
}

export default Blog;

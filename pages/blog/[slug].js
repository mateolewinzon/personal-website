import { MDXRemote } from "next-mdx-remote";
import { MDXComponents, BlogLayout } from "components";
import { getMetadata, getFileBySlug } from "utils/mdx";

function Blog({ source, data }) {
  return (
    <BlogLayout data={data}>
      <MDXRemote components={MDXComponents} {...source} />
    </BlogLayout>
  );
}

export async function getStaticProps({ params, locale }) {
  const { source, data } = await getFileBySlug(params.slug);
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return { props: { source, data, lngDict } };
}

export async function getStaticPaths({ locale }) {
  const { filesByLocale } = await getMetadata(locale);

  let paths = [];

  for (locale in filesByLocale) {
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

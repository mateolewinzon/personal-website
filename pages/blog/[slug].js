import { getMetadata, getFileBySlug } from "../../config/mdx";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/blogs/MDXComponents";

function Blog({ source, data }) {
  return (
    <article className="prose">
      <MDXRemote components={MDXComponents} {...source}  /></article>
  );
}

export async function getStaticProps({ params, locale }) {
  const { source, data } = await getFileBySlug(params.slug);
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

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

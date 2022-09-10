import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMetadata, getFileBySlug } from "../../config/mdx";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/blogs/MDXComponents";

function Blog({ src, data }) {
  return <MDXRemote components={MDXComponents} {...src} />;
}

export async function getStaticProps({ params, locale }) {
  const { src, data } = await getFileBySlug(params.slug);
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

  return { props: { src, data, lngDict } };
}

export async function getStaticPaths({ locale }) {
  const { filesByLocale } = getMetadata(locale);

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

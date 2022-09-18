import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";

import MDXComponents from "../../components/blogs/MDXComponents";
import Heading from "../../components/common/Heading";
import Span from "../../components/common/Span";
import PostTags from "../../components/blogs/PostTags";
import formatDate from "../../utils/date";
import { getMetadata, getFileBySlug } from "../../config/mdx";
import SpanSecondary from "../../components/common/SpanSecondary";
import { useI18n } from "next-localization";
import Head from "next/head";

function Blog({ source, data }) {
  const { locale } = useRouter();
  const i18n = useI18n();

  return (
    <div className="flex justify-center">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description}/>
        <meta name="og:title" content={data.title}/>
        <meta name="og:description" content={data.description}/>
        <meta name="twitter:card" content={data.description}></meta>
      </Head>
      <article className="flex flex-col md:w-[75%]">
        <Heading className="my-6">{data.title}</Heading>
        <div className="my-3 flex justify-between">
          <SpanSecondary className="font-light text-sm">
            {`${i18n.t("blogs.author")} / ${i18n.t(
              "blogs.published_on"
            )} ${formatDate(locale, data.date)}`}
          </SpanSecondary>
          <div>
            <PostTags tags={data.tags} />
          </div>
        </div>
        <MDXRemote components={MDXComponents} {...source} />
      </article>
    </div>
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

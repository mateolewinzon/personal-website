import { useRouter } from "next/router";
import Head from "next/head";
import { useI18n } from "next-localization";
import { SpanSecondary, Heading, PostTags } from "./";
import formatDate from "utils/date";

export function BlogLayout({ data, children }) {
  const { locale } = useRouter();
  const i18n = useI18n();

  return (
    <div className="flex justify-center">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="og:title" content={data.title} />
        <meta name="og:description" content={data.description} />
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
        {children}
      </article>
    </div>
  );
}

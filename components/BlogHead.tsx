import Head from "next/head";
import type { Post } from "lib/types";
import { getUrl } from "lib/sanity-client";

type Props = { data: Post };

export const BlogHead = ({ data }: Props) => (
  <Head>
    <title>{data.title}</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@mateolewinzon" />
    <meta name="twitter:creator" content="@mateolewinzon" />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:description" content={data.teaser} />
    <meta name="description" content={data.teaser} />
    <meta name="og:title" content={data.title} />
    <meta name="og:description" content={data.teaser} />
    <meta property="og:type" content="article" />
    <meta property="article:published_time" content={data.date} />
    {data.image && (
      <>
        <meta
          name="og:image"
          content={getUrl(data.image)
            .format("jpg")
            .fit("crop")
            .size(1200, 630)
            .url()}
        />
        <meta
          name="twitter:image"
          content={getUrl(data.image)
            .format("jpg")
            .fit("crop")
            .size(1200, 630)
            .url()}
        />
      </>
    )}
  </Head>
);

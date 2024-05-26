import Head from "next/head";
import type { Post } from "lib/types";
import { getUrl } from "lib/sanity-client";

type Props = { data: Post };

export const BlogHead = ({ data }: Props) => (
  <Head>
    <title>{data.title}</title>
    <meta name="twitter:card" content="summary"></meta>
    <meta name="twitter:creator" content="@mateolewinzon" />
    <meta name="description" content={data.teaser} />
    <meta name="og:title" content={data.title} />
    <meta name="og:description" content={data.teaser} />
    {data.image && (
      <meta
        name="og:image"
        content={getUrl(data.image)
          .format("jpg")
          .fit("crop")
          .size(1200, 630)
          .url()}
      />
    )}
  </Head>
);

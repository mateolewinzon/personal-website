import Head from "next/head"
import type { Post } from "lib/types"

type Props = { data: Post }

export const BlogHead = ({ data }: Props) => <Head>
  <title>{data.title}</title>
  <meta name="description" content={data.teaser} />
  <meta name="og:title" content={data.title} />
  <meta name="og:description" content={data.teaser} />
  <meta name="twitter:card" content={data.teaser}></meta>
</Head>

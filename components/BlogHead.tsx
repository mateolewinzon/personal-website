import Head from "next/head"
import type { BlogInfo } from "utils/mdx"

type Props = { data: BlogInfo }

export const BlogHead = ({ data }: Props) => <Head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta name="og:title" content={data.title} />
  <meta name="og:description" content={data.description} />
  <meta name="twitter:card" content={data.description}></meta>
</Head>

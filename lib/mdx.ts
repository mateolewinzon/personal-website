import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExtractHeadings from "./extractHeadings";
import { serialize } from "next-mdx-remote/serialize";
import type { Heading } from "./types";
import readingTime from "reading-time";

export async function mdxToHtml(mdx: any) {
  const headings: Heading[] = [];

  const mdxSource = await serialize(mdx, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
        [rehypeExtractHeadings, { rank: 2, headings }],
        rehypeCodeTitles,
        [rehypePrism, { ignoreMissing: true }],
      ],
    },
  });

  return {
    ...mdxSource,
    headings,
    readingTime: Math.ceil(readingTime(mdx).minutes),
  };
}

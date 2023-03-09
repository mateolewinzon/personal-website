import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  categories: string[];
  content: MDXRemoteSerializeResult & {
    headings: Heading[];
    readingTime: number;
  };
  date: string;
  enVersion?: string;
  esVersion?: string;
  image?: string;
  isPublished: boolean;
  isHidden?: boolean;
  locale: string;
  slug: string;
  teaser: string;
  title: string;
};

export type Heading = {
  id: string;
  rank: number;
  title: string;
};

export type Project = {
  date: string
  description: string
  images: string[]
  isPublished: boolean
  locale: string
  repoUrl: string
  techs: string[]
  title: string
  url: string
}

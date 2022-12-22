import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export interface BlogInfo {
  description: string;
  dateCreated: string;
  dateUpdated: string;
  enVersion?: string
  esVersion?: string 
  isPublished: boolean;
  isHidden?: boolean;
  locale: string | undefined;
  readingTime?: Number 
  slug: string;
  tags: string[];
  title: string;
}

export const getFiles = (): string[] => fs.readdirSync(path.join(root, "blog"));

export const getFileBySlug = async (slug: string) => {
  const mdx = fs.readFileSync(path.join(root, "blog", `${slug}.mdx`), "utf-8");
  const { data, content } = matter(mdx);

  const source = await serialize(content, {
    mdxOptions: { format: "mdx" },
  });

  return {
    source,
    data: {
      slug,
      ...data,
    },
  };
};

export const getAllMetadataByLocales = () => {
  const files = getFiles();

  const filesByLocale = files.reduce<{
    [key: string]: BlogInfo[];
  }>(
    (allPosts, postSlug) => {
      const source = fs.readFileSync(
        path.join(root, "blog", postSlug),
        "utf-8"
      );
      const { data } = matter(source);

      if (!data.isPublished) {
        return allPosts;
      }

      return {
        ...allPosts,
        [data.locale]: [
          ...allPosts[data.locale],
          { ...data, slug: postSlug.replace(".mdx", "") },
        ],
      };
    },
    { en: [], es: [] }
  );

  return filesByLocale;
};

export const getCurrentLocaleMetadata = (locale: string | undefined): BlogInfo[] => {
  const filesByLocale = getAllMetadataByLocales();
  const currentLocaleFiles = filesByLocale[locale as string];

  return currentLocaleFiles;
};

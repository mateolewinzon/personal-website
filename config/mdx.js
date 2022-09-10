import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "blog"));

export const getFileBySlug = async (slug) => {
  const mdx = fs.readFileSync(path.join(root, "blog", `${slug}.mdx`), "utf-8");
  const { data, content } = await matter(mdx);
  const src = await serialize(content, {});

  return {
    src,
    data: {
      ...data,
      slug,
    },
  };
};

export const getMetadata = (locale) => {
  const files = getFiles();

  const filesByLocale = files.reduce(
    (allPosts, postSlug) => {
      const src = fs.readFileSync(path.join(root, "blog", postSlug), "utf-8");
      const { data } = matter(src);

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

  const currentLocaleFiles = filesByLocale[locale];

  return { filesByLocale, currentLocaleFiles };
};

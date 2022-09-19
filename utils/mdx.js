import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = async () => fs.readdirSync(path.join(root, "blog"));

export const getFileBySlug = async (slug) => {
  const mdx = fs.readFileSync(path.join(root, "blog", `${slug}.mdx`), "utf-8");
  const { data, content } = await matter(mdx);

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

export const getMetadata = async (locale) => {
  const files = await getFiles();

  const filesByLocale = files.reduce(
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

  const currentLocaleFiles = filesByLocale[locale];

  return { filesByLocale, currentLocaleFiles };
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "blog"));

export const getFileBySlug = async ({ slug, lang }) => {
  const mdx = fs.readFileSync(
    path.join(root, "blog", `${slug}.${lang}.mdx`),
    "utf-8"
  );
  const { data, content } = await matter(mdx);
  const src = await serialize(content, {});

  return {
    src,
    frontMatter: {
      ...data,
      slug,
      lang,
    },
  };
};

export const getAllMetadata = () => {
  const files = getFiles();

  return files.reduce(async (allPosts, postSlug) => {
    const src = fs.readFileSync(path.join(root, "blog", postSlug), "utf-8");
    const { data } = await matter(src);

    return [{ ...data, slug: postSlug.replace(".mdx", "")} ,...allPosts ]
  }, []);
};

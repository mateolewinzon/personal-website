import { useRouter } from "next/router";
import { useEffect } from "react";
import { getFileBySlug, getFiles } from "../../config/mdx";

function Blog({ source, frontmatter }) {
  
  return <div>{source}</div>;
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug({
    slug: params.slug,
    lang: "en",
  });
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((p) => {
    return { params: { slug: p.replace(".mdx", "") } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Blog;

import { RecentPosts, HomePresentation } from "components";
import { getCurrentLocaleMetadata } from "utils/mdx";
import type { BlogInfo } from "utils/mdx";
import type { GetStaticProps } from 'next'

type Props = { 
  posts: BlogInfo[]
}

export default function Home({ posts }: Props) {

  return (
    <>
      <HomePresentation />
      <RecentPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocaleFiles = getCurrentLocaleMetadata(locale as string);
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}


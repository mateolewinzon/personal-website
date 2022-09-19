import { RecentPosts, HomePresentation } from "components";
import { getMetadata } from "utils/mdx";

function Home({ posts }) {
  return (
    <>
      <HomePresentation />
      <RecentPosts posts={posts} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = await getMetadata(locale);
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

export default Home;

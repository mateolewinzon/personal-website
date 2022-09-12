import SecondarySection from "../components/home/secondary-section";
import TopSection from "../components/home/top-section";
import { getMetadata } from "../config/mdx";

function Home({ posts }) {
  return (
    <>
      <TopSection />
      <SecondarySection posts={posts}/>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = await getMetadata(locale);
  const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

export default Home;

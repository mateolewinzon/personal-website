import { useI18n } from "next-localization";
import PostItem from "../../components/blogs/PostItem";
import Heading from "../../components/common/Heading";
import { getMetadata } from "../../config/mdx";
import { typewriter } from "../../styles/typing-effect.module.css";

export default function Blogs({ posts }) {
  const i18n = useI18n();

  return (
    <div className="flex min-h-400 justify-center items-center flex-col">
      <div className="pt-10 pb-4">
        <Heading
          className={typewriter}
        >
          {i18n.t("blogs.recent_posts")}
        </Heading>
      </div>
      <div className="pb-4 flex flex-col items-center">
        {posts.map((item) => (
          <PostItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = await getMetadata(locale);
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

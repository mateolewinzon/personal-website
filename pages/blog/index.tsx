import { useI18n } from "next-localization";
import { Heading, PostListItem } from "components";
import { BlogInfo, getCurrentLocaleMetadata } from "utils/mdx";
import typewriter from "styles/typing-effect.module.css";
import { GetStaticProps } from "next";

type Props = {
  posts: BlogInfo[]
}

export default function Blogs({ posts }: Props) {
  const i18n = useI18n();

  return (
    <div className="flex min-h-400 justify-center items-center flex-col">
      <Heading className={`my-8 ${typewriter}`}>
        {i18n.t("blogs.recent_posts")}
      </Heading>
      <div className="pb-4 flex flex-col items-center">
        {posts.map((item) => (
          <PostListItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocaleFiles = getCurrentLocaleMetadata(locale || 'en');
  const { default: lngDict = {} } = await import(
    `locales/${locale}.json`
  );

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

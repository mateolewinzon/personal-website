import { useI18n } from "next-localization";
import { Container, PostCard } from "components";
import { PostInfo, getCurrentLocaleMetadata } from "lib/mdx";
import styles from "styles/typing-effect.module.css";
import { GetStaticProps } from "next";
import { FadeOnView } from "components/FadeOnView";

type Props = {
  posts: PostInfo[];
};

export default function Blogs({ posts }: Props) {
  const i18n = useI18n();

  return (
    <Container>
      <div className="pt-28 xl:pt-20 flex flex-col max-w-5xl mx-auto min-h-screen items-center p-4 gap-10">
        <h1>
          {i18n.t("blogs.heading")}
        </h1>
        <div className="flex flex-col items-center gap-4">
          {posts
            .filter((item) => !item.isHidden)
            .sort(
              (a, b) => Date.parse(b.dateCreated) - Date.parse(a.dateCreated)
            )
            .map((item) => (
              <PostCard key={item.slug} item={item} />
            ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocaleFiles = getCurrentLocaleMetadata(locale || "en");
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
};

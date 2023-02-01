import { useI18n } from "next-localization";
import { Container, Heading, PostCard } from "components";
import { PostInfo, getCurrentLocaleMetadata } from "lib/mdx";
import typewriter from "styles/typing-effect.module.css";
import { GetStaticProps } from "next";

type Props = {
  posts: PostInfo[];
};

export default function Blogs({ posts }: Props) {
  const i18n = useI18n();

  return (
    <Container>
      <div className="flex min-h-400 justify-center items-center flex-col">
        <Heading className={`my-8 justify-center ${typewriter}`}>
          {i18n.t("blogs.heading")}
        </Heading>
        <div className="pb-4 flex flex-col items-center">
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

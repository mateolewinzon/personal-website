import Link from "next/link";
import { useI18n } from "next-localization";
import { PostCard } from ".";
import { PostInfo } from "lib/mdx";
import { FadeOnView } from "./FadeOnView";

type Props = {
  posts: PostInfo[];
};

export const RecentPosts = ({ posts }: Props) => {
  const i18n = useI18n();

  return (
    <section className="max-w-5xl mx-auto my-16 md:my-10 w-full p-4">
      <div className="flex flex-col items-center gap-10">
        <FadeOnView>
          <h2>{i18n.t("home.recent_posts")}</h2>
        </FadeOnView>
        <div className="flex gap-10 flex-col">
          {posts
            .filter((post) => !post.isHidden)
            .map((post) => (
              <FadeOnView key={post.slug}>
                <PostCard item={post} />
              </FadeOnView>
            ))}
        </div>
        <div>
          <span className="button">
            <Link href="/blog">{i18n.t("home.view_all_blogs")}</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

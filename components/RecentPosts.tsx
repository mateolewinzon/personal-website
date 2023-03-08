import Link from "next/link";
import useTranslation from "hooks/useTranslation";
import { PostCard } from ".";
import { FadeOnView } from "./FadeOnView";
import type { Post } from "lib/types";

type Props = {
  posts: Post[];
};

export const RecentPosts = ({ posts }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto my-16 md:my-10 w-full p-4">
      <div className="flex flex-col items-center gap-10">
        <FadeOnView>
          <h2>{t("home.recent_posts")}</h2>
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
            <Link href="/blog">{t("home.view_all_blogs")}</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

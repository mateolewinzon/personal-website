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
    <section>
      <div className="flex flex-col gap-3">
        <span className="font-semibold">Writing</span>
        <div className="flex gap-2 flex-col">
          {posts
            .filter((post) => !post.isHidden)
            .map((post) => (
              // <FadeOnView key={post.slug}>
              <PostCard key={post.slug} item={post} />
              // </FadeOnView>
            ))}
        </div>

      </div>
    </section>
  );
};

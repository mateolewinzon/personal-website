import { useI18n } from "next-localization";
import Link from "next/link";
import { BlogInfo } from "lib/mdx";
import { SubHeading, PostCard, Span } from ".";

type Props = {
  posts: BlogInfo[];
};

export const RecentPosts = ({ posts }: Props) => {
  const i18n = useI18n();

  return (
    <div className="flex flex-col items-center ">
      <div className="my-8">
        <SubHeading className="font-bold">
          {i18n.t("home.recent_posts")}
        </SubHeading>
      </div>
      <div className="flex flex-col lg:flex-row">
        {posts
          .filter((post) => !post.isHidden)
          .map((post) => (
            <PostCard key={post.slug} item={post} />
          ))}
      </div>
      <div>
        <Span className="hover:underline">
          <Link href="/blog">{i18n.t("home.view_all_blogs")}</Link>
        </Span>
      </div>
    </div>
  );
};

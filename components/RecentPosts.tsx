import { useI18n } from "next-localization";
import Link from "next/link";
import { PostInfo } from "lib/mdx";
import { SubHeading, PostCard, Span } from ".";

type Props = {
  posts: PostInfo[];
};

export const RecentPosts = ({ posts }: Props) => {
  const i18n = useI18n();

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <SubHeading className="font-bold">
          {i18n.t("home.recent_posts")}
        </SubHeading>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse">
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

import { useI18n } from "next-localization";
import { BlogInfo } from "utils/mdx";
import { SubHeading, PostListItemHome } from ".";

type Props = {
  posts: BlogInfo[]
}

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
        {posts.map((post) => (
          <PostListItemHome key={post.slug} item={post} />
        ))}
      </div>
    </div>
  );
}
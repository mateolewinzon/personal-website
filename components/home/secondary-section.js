import { useI18n } from "next-localization";
import PostItemBox from "./PostItemBox";

function SecondarySection({ posts }) {
  const i18n = useI18n();

  return (
    <div className="flex p-2 items-center flex-col min-h-500">
      <div className="py-8">
        <div className="text-4xl font-bold">
          {i18n.t("home.recent_posts")}
        </div>
      </div>
      <div className="flex flex-row items-center flex-wrap">
        {posts.map((post) => (
          <PostItemBox key={post.slug} item={post} />
        ))}
      </div>
    </div>
  );
}

export default SecondarySection;

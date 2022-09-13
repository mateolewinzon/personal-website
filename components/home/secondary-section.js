import { useI18n } from "next-localization";
import PostItemBox from "./PostItemBox";

function SecondarySection({ posts }) {
  const i18n = useI18n();

  return (
    <div className="flex flex-col items-center min-h-500">
      <div className="py-8">
        <div className="text-4xl font-bold">
          {i18n.t("home.recent_posts")}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        {posts.map((post) => (
          <PostItemBox key={post.slug} item={post} />
        ))}
      </div>
    </div>
  );
}

export default SecondarySection;

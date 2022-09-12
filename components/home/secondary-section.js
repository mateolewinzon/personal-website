import { useI18n } from "next-localization";
import PostItemBox from "./PostItemBox";

function SecondarySection({ posts }) {
  const i18n = useI18n();

  return (
    <div className="flex px-4 flex-col min-h-500">
      <div className="pb-4">
        <div className="text-4xl text-red-dark font-semibold">
          {i18n.t("home.recent_posts")}
        </div>
      </div>
      <div className="flex flex-row items-center flex-wrap justify-between">
        {posts.map((post) => (
          <PostItemBox key={post.slug} item={post} />
        ))}
      </div>
    </div>
  );
}

export default SecondarySection;

import { useI18n } from "next-localization";
import SubHeading from "../common/SubHeading";
import PostItemBox from "./PostItemBox";

function SecondarySection({ posts }) {
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
          <PostItemBox key={post.slug} item={post} />
        ))}
      </div>
    </div>
  );
}

export default SecondarySection;

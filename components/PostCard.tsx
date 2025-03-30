import Link from "next/link";
import { PostTags, ViewCount } from "components";
import { Post } from "lib/types";

type Props = {
  item: Post;
};

export const PostCard = ({ item }: Props) => {
  return (
    <div
      className={
        "flex flex-col"
      }
    >
      <Link href={`/blog/${item.slug}`}>
        <div className="flex flex-col gap-1">
          <span className="text-gray-600 dark:text-gray-400">
            {item.title} 
          </span>
          {/* <span className="text-sm text-gray-600 dark:text-gray-300">
            {item.teaser}
          </span> */}
          <div className="flex flex-row gap-3">
            {/* <PostTags tags={item.categories} /> */}
            {/* <ViewCount slug={item.slug} /> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

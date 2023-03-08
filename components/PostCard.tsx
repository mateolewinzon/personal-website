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
        "flex flex-col w-full p-4 py-5"
      }
    >
      <Link href={`/blog/${item.slug}`}>
        <div className="flex flex-col gap-3">
          <span className="text-xl text-gray-800 dark:text-gray-100 font-semibold">
            {item.title}
          </span>
          <span className="text-base text-gray-600 dark:text-gray-300">
            {item.teaser}
          </span>
          <div className="flex flex-row my-2">
            <PostTags tags={item.categories} />
            <ViewCount slug={item.slug} />
          </div>
        </div>
      </Link>
    </div>
  );
};

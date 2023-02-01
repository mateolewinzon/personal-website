import Link from "next/link";
import { PostTags, Span, SubHeading, ViewCount } from ".";
import type { PostInfo } from "lib/mdx";

type Props = {
  item: PostInfo;
};

export const PostCard = ({ item }: Props) => {
  return (
    <div className="flex flex-col outline outline-1 rounded-md outline-neutral-200 hover:outline-neutral-300 dark:outline-neutral-800 dark:hover:outline-neutral-700 p-4 m-4 md:w-3/4 rem py-5">
      <Link href={`/blog/${item.slug}`}>
        <a className="flex flex-col h-full">
          <Span className="text-xl font-semibold mb-2">{item.title}</Span>
          <Span className="text-base mb-4">{item.description}</Span>
          <div className="flex flex-row mt-auto">
            <PostTags tags={item.tags} />
            <ViewCount slug={item.slug} />
          </div>
        </a>
      </Link>
    </div>
  );
};

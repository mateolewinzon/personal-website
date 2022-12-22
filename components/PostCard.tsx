import Link from "next/link";
import {
  PostTags,
  Span,
  SubHeading,
  ViewCount,
} from ".";
import type { BlogInfo } from "utils/mdx";

type Props = {
  item: BlogInfo;
};

export const PostCard= ({ item }: Props) => {

  return (
    <div className="flex flex-col outline outline-1 rounded-md outline-gray-light hover:outline-gray dark:outline-black-800 dark:hover:outline-gray-dark p-4 m-4 md:w-3/4 rem py-5">
      <Link href={`/blog/${item.slug}`}>
        <a className="flex flex-col h-full">
          <div className="pb-3">
            <SubHeading className="text-3xl">{item.title}</SubHeading>
          </div>
          <div className="pb-4">
            <Span className="text-lg">{item.description}</Span>
          </div>
          <div className="flex flex-row mt-auto">
          <PostTags tags={item.tags}/>
          <ViewCount slug={item.slug} />
          </div>
        </a>
      </Link>
    </div>
  );
};

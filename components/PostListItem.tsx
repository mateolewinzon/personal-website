import Link from "next/link";
import { useRouter } from "next/router";
import { PostTags, Span, SubHeading, SpanSecondary } from ".";
import formatDate from "utils/date";
import type { BlogInfo } from "utils/mdx";

type Props = {
  item: BlogInfo;
};

export const PostListItem = ({ item }: Props) => {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col outline outline-1 rounded-md outline-gray-light hover:outline-gray dark:outline-black-800 dark:hover:outline-gray-dark p-4 m-4 w-full md:w-3/4 rem py-5">
      <Link href={`/blog/${item.slug}`}>
        <a className="">
          <div className="pb-3">
            <SubHeading className="text-3xl">{item.title}</SubHeading>
          </div>
          <div className="pb-4">
            <Span className="text-lg">{item.description}</Span>
          </div>
          <div className="flex flex-row">
            {item.date_created && (
              <SpanSecondary className="font-light text-gray-dark">
                {formatDate(locale, item.date_created)}
              </SpanSecondary>
            )}
            <PostTags className="ml-4" tags={item.tags} />
          </div>
        </a>
      </Link>
    </div>
  );
};

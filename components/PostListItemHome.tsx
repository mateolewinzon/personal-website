import Link from "next/link";
import { useRouter } from "next/router";
import { SpanSecondary, SubHeading } from ".";
import formatDate from "utils/date";
import type { BlogInfo } from "utils/mdx";

type Props = {
  item: BlogInfo;
};

export const PostListItemHome = ({ item }: Props) => {
  const { locale } = useRouter();

  return (
    <Link href={`/blog/${item.slug}`}>
      <a className="m-2">
        <div className="flex flex-col outline outline-1 rounded outline-gray-light hover:outline-gray dark:outline-black-800 dark:hover:outline-gray-dark p-4 min-w-[300px]">
          <div className="pb-2">
            <SubHeading className="hover:text-black font-semibold text-2xl">
              {item.title}
            </SubHeading>
          </div>
          <div className="flex flex-row">
            {item.date_created && (
              <SpanSecondary className="font-light text-gray dark:text-gray">
                <div className="">{formatDate(locale, item.date_created)}</div>
              </SpanSecondary>
            )}
            <div className="px-2">
              {item.tags?.map((item) => (
                <SpanSecondary
                  key={item}
                  className="inline text text-gray-dark hover:text-black  m-2 "
                >
                  #{item}
                </SpanSecondary>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

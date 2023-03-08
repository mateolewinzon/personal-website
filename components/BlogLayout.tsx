import { PostTags, BlogHead, ViewCount, ReadTime } from "components";
import formatDate from "utils/date";
import type { Post } from "lib/types";
import useTranslation from "hooks/useTranslation";

type Props = { children: JSX.Element; post: Post };

export const BlogLayout = ({ children, post }: Props) => {
  const { t, locale } = useTranslation();
  
  return (
    <div className="flex justify-center mt-16 p-4">
      <BlogHead data={post} />
      <article className="prose max-w-2xl dark:prose-invert flex flex-col w-full">
        <h1 className="my-6">{post.title}</h1>
        <PostTags tags={post.categories} />
        <div className="flex flex-col sm:flex-row justify-between py-3 items-center">
          {post.date && (
            <span className="font-light text-sm">
              {`${t("blogs.author")} / ${t("blogs.published_on")} ${formatDate(
                locale,
                post.date
              )}`}
            </span>
          )}
          <div className="flex items-center">
            <ViewCount slug={post.slug} />
            <ReadTime minutes={post.content.readingTime} />
          </div>
        </div>
        <div>{children}</div>
      </article>
    </div>
  );
};

import { useRouter } from "next/router";
import { useI18n } from "next-localization";
import { PostTags, BlogHead, ViewCount, ReadTime } from "components";
import formatDate from "utils/date";
import { useContext } from "react";
import { BlogMeta } from "pages/blog/[slug]";

type Props = { children: JSX.Element };

export const BlogLayout = ({ children }: Props) => {
  const { locale } = useRouter();
  const data = useContext(BlogMeta);
  const i18n = useI18n();

  return (
    <div className="flex justify-center mt-16 p-4">
      <BlogHead data={data} />
      <article className="prose max-w-2xl dark:prose-invert flex flex-col w-full">
        <h1 className="my-6">{data.title}</h1>
        <PostTags tags={data.tags} />
        <div className="flex flex-col sm:flex-row justify-between py-3">
          {data.dateCreated && (
            <span className="font-light text-sm">
              {`${i18n.t("blogs.author")} / ${i18n.t(
                "blogs.published_on"
              )} ${formatDate(locale, data.dateCreated)}`}
            </span>
          )}
          <div>
            <ViewCount slug={data.slug} />
            {data.readingTime && <ReadTime minutes={data.readingTime} />}
          </div>
        </div>
        <div>{children}</div>
      </article>
    </div>
  );
};

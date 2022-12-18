import { useRouter } from "next/router";
import { useI18n } from "next-localization";
import { SpanSecondary, Heading, PostTags, BlogHead } from ".";
import formatDate from "utils/date";
import { BlogInfo } from "utils/mdx";
import { useContext } from "react";
import { BlogMeta } from "pages/blog/[slug]";

type Props = { children: JSX.Element };

export const BlogLayout = ({ children }: Props) => {
  const { locale } = useRouter();
  const data = useContext(BlogMeta);
  const i18n = useI18n();

  return (
    <div className="flex justify-center">
      <BlogHead data={data} />
      <article className="flex flex-col md:w-[75%]">
        <Heading className="my-6">{data.title}</Heading>
        <div className="my-3 flex justify-between">
          {data.date_created && (
            <SpanSecondary className="font-light text-sm">
              {`${i18n.t("blogs.author")} / ${i18n.t(
                "blogs.published_on"
              )} ${formatDate(locale, data.date_created)}`}
            </SpanSecondary>
          )}
          <div>
            <PostTags tags={data.tags} />
          </div>
        </div>
        {children}
      </article>
    </div>
  );
};

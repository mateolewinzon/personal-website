import { useI18n } from "next-localization";
import BlogsList from "../../components/blogs/blogs-list";
import { getMetadata } from "../../config/mdx";
import {typewriter} from "../../styles/typing-effect.module.css";


export default function Blogs({ posts }) {
  const i18n = useI18n();

  return (
    <div className="flex flex-col">
      <div className="py-4">
        <span className={`text-6xl text-red-dark font-semibold ${typewriter}`}>{i18n.t('blogs.recent_posts')}</span>
      </div>
      <div className="pb-4">
        <BlogsList items={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const { currentLocaleFiles } = await getMetadata(locale);
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

  return {
    props: { posts: currentLocaleFiles, lngDict },
  };
}

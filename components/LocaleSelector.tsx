import { useContext } from "react";
import Link from "next/link";
import { es, en } from "config/i18n";
import { BlogMeta } from "pages/blog/[slug]";
import "/node_modules/flag-icons/css/flag-icons.min.css";

type Props = {
  currentLocale: string | undefined;
  asPath: string;
};

export const LocaleSelector = ({ currentLocale, asPath }: Props) => {
  const isArticle = asPath.includes("/blog/");
  const article = useContext(BlogMeta);

  const lang = currentLocale === "en" ? es : en;

  const getAlternativeArticleHref = (targetLocale: string): string => {
    return article[targetLocale + "Version"] || asPath;
  };

  return (
    <Link
      href={isArticle ? getAlternativeArticleHref(lang.locale) : asPath}
      locale={lang.locale}
      className='cursor-pointer'
    >
      {lang.flag}
    </Link>
  );
};

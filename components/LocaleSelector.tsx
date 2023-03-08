import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { es, en } from "config/i18n";
import { TranslatedSlugs } from "pages/blog/[slug]";
import "/node_modules/flag-icons/css/flag-icons.min.css";

type Props = {
  currentLocale: string | undefined;
};

export const LocaleSelector = ({ currentLocale }: Props) => {
  const pathname = usePathname();
  const isArticle = pathname.includes("/blog/");
  const lang = currentLocale === "en" ? es : en;

  const getAlternativeArticleHref = (targetLocale: string): string => {
    const translatedSlugs = useContext(TranslatedSlugs);

    return `/blog/${translatedSlugs[targetLocale]}`;
  };

  return (
    <Link
      href={isArticle ? getAlternativeArticleHref(lang.locale) : pathname}
      locale={lang.locale}
      className="cursor-pointer"
    >
      {lang.flag}
    </Link>
  );
};

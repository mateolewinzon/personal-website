import { useContext } from "react";
import Link from "next/link";
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { langs } from "config/i18n";
import type { Lang } from "config/i18n";
import type { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { BlogMeta } from "pages/blog/[slug]";

type LocaleLinkProps = {
  lang: Lang;
  href: string;
};

function LocaleLink({ lang, href }: LocaleLinkProps) {
  return (
    <Link passHref href={href} locale={lang.locale}>
      <MenuLink className={"items-center"}>{lang.flag}</MenuLink>
    </Link>
  );
}

type Props = {
  currentLocale: string | undefined;
  asPath: string;
  query: NextParsedUrlQuery;
};

export const LocaleSelector = ({ currentLocale, asPath }: Props) => {
  const isArticle = asPath.includes("/blog/");
  const article = useContext(BlogMeta)

  const getAlternativeArticleHref = (targetLocale: string): string =>{
    return article[targetLocale+'Version'] || asPath
  }
 
  return (
    <Menu>
      {({ isOpen }) => (
        <div className="pl-4">
          <MenuButton className="flex flex-row items-center">
            {langs.find((lang) => lang.locale === currentLocale)?.flag}
            {isOpen ? (
              <BiChevronUp className="text-black dark:text-white" />
            ) : (
              <BiChevronDown className="text-gray dark:text-white hover:text-black dark:hover:text-gray-light" />
            )}
          </MenuButton>
          <MenuList>
            {langs.map(
              (lang) =>
                lang.locale !== currentLocale && (
                  <LocaleLink
                    lang={lang}
                    key={lang.locale}
                    href={isArticle ? getAlternativeArticleHref(lang.locale): asPath}
                  />
                )
            )}
          </MenuList>
        </div>
      )}
    </Menu>
  );
};

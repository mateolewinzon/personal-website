import { useI18n } from "next-localization";
import Link from "next/link";
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { langs } from "config/i18n";
import type { Lang } from "config/i18n"
import { NextParsedUrlQuery } from "next/dist/server/request-meta";

type LocaleLinkProps = {
  lang: Lang,
  href: string
}

function LocaleLink({ lang, href }: LocaleLinkProps) {
  return (
    <Link passHref href={href} locale={lang.locale}>
      <MenuLink className={"items-center"}>{lang.flag}</MenuLink>
    </Link>
  );
}

type Props = {
  currentLocale: string | undefined,
  asPath: string,
  query: NextParsedUrlQuery
}

export const LocaleSelector = ({ currentLocale, asPath, query }: Props) => {
  const i18n = useI18n();
  const isArticle = asPath.includes("/blog/");

  function getAlternativeHref(targetedLang) {
    return i18n.t(`blogs.articles.${query.slug}.${targetedLang}`);
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
                    href={isArticle ? getAlternativeHref(lang.locale) : asPath}
                  />
                )
            )}
          </MenuList>
        </div>
      )}
    </Menu>
  );
}

import { useI18n } from "next-localization";
import Link from "next/link";
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { langs } from "../../config/i18n";

function LocaleLink({ name, lang, href }) {
  return (
    <Link passHref href={href} locale={lang.locale}>
      <MenuLink className={"items-center"}>{lang.flag}</MenuLink>
    </Link>
  );
}

export default function LocaleSelector({ currentLocale, asPath, query }) {
  const i18n = useI18n();
  const isArticle = asPath.includes("/blog/");

  function getAlternativeHref(targetedLang) {
    return i18n.t(`blogs.articles.${query.slug}.${targetedLang}`);
  }
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton className="flex flex-row">
            {langs.find((i) => i.locale === currentLocale).flag}
            {isOpen ? (
              <BiChevronUp className="text-black" />
            ) : (
              <BiChevronDown className="text-gray hover:text-black" />
            )}
          </MenuButton>
          <MenuList>
            {langs.map(
              (lang) =>
                lang.locale !== currentLocale && (
                  <LocaleLink
                    name={i18n.t(`navbar.${lang.name}`)}
                    lang={lang}
                    key={lang.locale}
                    className=""
                    href={isArticle ? getAlternativeHref(lang.locale) : asPath}
                  />
                )
            )}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

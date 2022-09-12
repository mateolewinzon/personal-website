import { useI18n } from "next-localization";
import Link from "next/link";
import { langs } from "../../config/i18n";
import { Menu, MenuList, MenuButton, MenuLink, MenuPopover } from "@reach/menu-button";


function LocaleLink({ name, lang, href }) {
  return (
    <Link passHref href={href} locale={lang.locale}>
      <MenuLink className={'items-center text-gray hover:text-gray-dark rounded-xl font-semibold px-4 hover:bg-gray-100 active:bg-gray-100'}>
        {name}
      </MenuLink>
    </Link>
  );
}

export default function LocaleSelector({ currentLocale, asPath, query }) {
  const i18n = useI18n();
  const isArticle = asPath.includes("/blog/");
  const title = currentLocale.toLocaleUpperCase();

  function getAlternativeHref(targetedLang) {
    return i18n.t(`blogs.articles.${query.slug}.${targetedLang}`);
  }
  return (
    <Menu >
      <MenuButton
        className="items-center text-gray hover:text-gray-dark rounded-xl font-semibold px-4 hover:bg-gray-100 active:bg-gray-100"
        title={title}
      >
        {title}
      </MenuButton>
      <MenuPopover>
        {langs.map(
          (lang) =>
            lang.locale !== currentLocale && (
              <LocaleLink
                name={i18n.t(`navbar.${lang.name}`)}
                lang={lang}
                key={lang.locale}
                className=''
                href={isArticle ? getAlternativeHref(lang.locale) : asPath}
              />
            )
        )}
      </MenuPopover>
    </Menu>
  );
}

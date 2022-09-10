import { useI18n } from "next-localization";
import Link from "next/link";
import { NavDropdown, NavItem } from "react-bootstrap";
import { langs } from "../../config/i18n";
import styles from "../../styles/header.module.css";

function LocaleLink({ name, lang, href }) {
  return (
    <Link passHref href={href} locale={lang.locale}>
      <NavDropdown.Item className={styles.navbar_drop_item}>
        {name}
      </NavDropdown.Item>
    </Link>
  );
}

export default function LocaleSelector({ currentLocale, asPath, query }) {
  const i18n = useI18n();
  const isArticle = asPath.includes("/blog/")

  function getAlternativeHref(targetedLang){
    return i18n.t(`blogs.articles.${query.slug}.${targetedLang}`)
  } 
  return (
    <NavItem>
      <NavDropdown
        className={`${styles.links} ${styles.navbar_drop_item} ms-auto dropdown-menu-left`}
        title={currentLocale.toLocaleUpperCase()}
      >
        {langs.map(
          (lang) =>
            lang.locale !== currentLocale && (
              <LocaleLink
                name={i18n.t(`navbar.${lang.name}`)}
                lang={lang}
                key={lang.locale}
                href={isArticle ? getAlternativeHref(lang.locale) : asPath}
              />
            )
        )}
      </NavDropdown>
    </NavItem>
  );
}

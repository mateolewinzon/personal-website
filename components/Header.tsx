import { useI18n } from "next-localization";
import { useRouter } from "next/router";
import { LocaleSelector, NavLink, ThemeButton } from ".";
import { pages } from "config/pageList";

export const Header = () => {
  const { asPath, locale, query } = useRouter();
  const i18n = useI18n();

  return (
    <nav>
      <div className="flex justify-between items-center max-w-3x1 py-2 my-0 md:py-4">
        <div>
          {pages.map((page, key) => (
            <NavLink key={key} isActive={asPath === page.path} href={page.path}>
              {i18n.t(`layout.${page.id}`)}
            </NavLink>
          ))}
        </div>
        <div className="flex">
          <ThemeButton />
          <LocaleSelector
            asPath={asPath}
            currentLocale={locale}
            query={query}
          />
        </div>
      </div>
    </nav>
  );
}

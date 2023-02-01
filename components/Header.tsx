import { useState } from "react";
import { useI18n } from "next-localization";
import { useRouter } from "next/router";
import { LocaleSelector, NavLink, ThemeButton } from ".";
import { pages } from "config/pageList";

export const Header = () => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const { asPath, locale, query } = useRouter();
  const i18n = useI18n();

  const ToggleButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      onClick={() => setToggleCollapse((current) => !current)}
      className="inline-flex items-center w-max text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-8 h-8"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );

  const Navigation = () => (
    <div
      className={`${toggleCollapse ? "hidden" : ""} w-full md:block md:w-auto`}
      id="navbar-default"
    >
      <ul className="flex flex-col md:flex-row">
        {pages.map((page, key) => (
          <li key={key}>
            <NavLink isActive={asPath === page.path} href={page.path}>
              {i18n.t(`layout.${page.id}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="flex justify-between w-full py-2 my-0 md:py-4">
        <div className="flex flex-col w-full">
          <ToggleButton />
          <Navigation />
        </div>
        <div className="flex self-start">
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
};

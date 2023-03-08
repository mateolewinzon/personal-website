import { useState } from "react";
import { useI18n } from "next-localization";
import { usePathname } from "next/navigation";
import { LocaleSelector, NavLink, ThemeButton } from "components";
import { pages } from "config/pageList";

export const Header = () => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const pathname = usePathname();
  const i18n = useI18n();

  const ToggleButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      onClick={() => setToggleCollapse((current) => !current)}
      className="p-4 inline-flex items-center w-max text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      className={`${toggleCollapse ? "hidden" : ""} w-full md:block md:w-auto mx-2`}
      id="navbar-default"
    >
      <ul className="flex flex-col md:flex-row">
        {pages.map((page, key) => (
          <li key={key}>
            <NavLink isActive={pathname === page.path} href={page.path}>
              {i18n.t(`layout.${page.id}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="z-30 fixed top-0 w-full justify-between py-2 my-0 md:py-4 shadow backdrop-blur-lg">
      <div className="flex max-w-5xl mx-auto">
        <div className="flex flex-col w-full">
          <ToggleButton />
          <Navigation />
        </div>
        <div className="flex items-center self-start p-4 md:p-2 gap-3">
          <ThemeButton />
          <LocaleSelector
            currentLocale={i18n.locale()}
          />
        </div>
      </div>
    </nav>
  );
};

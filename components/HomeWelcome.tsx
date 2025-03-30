import useTranslation from "hooks/useTranslation";
import Link from "next/link";
import style from "styles/typing-effect.module.css";
import { twMerge } from "tailwind-merge";
import { ThemeButton } from "./ThemeButton";

export const HomeWelcome = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center justify-between">
            <h1><span>Mateo</span><span className={twMerge(style.typewriter)}> Lewinzon</span></h1>
            <ThemeButton />

          </div>
        {/* <h2 className="font-black colorful-text">
          <span> {t("home.software")}</span>
          <span className={style.typewriter}> {t("home.developer")}</span>
        </h2> */}
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-black dark:text-white">{t("about.about_description")}</h4>
          <div className="flex flex-row gap-3">
            <Link className="text-gray-500 dark:text-gray-400" target="_blank" href="https://github.com/mateolewinzon">github</Link>
            <Link className="text-gray-500 dark:text-gray-400" target="_blank" href="https://linkedin.com/in/mateolewinzon">linkedin</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

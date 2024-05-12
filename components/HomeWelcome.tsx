import Image from "next/image";
import Link from "next/link";
import useTranslation from "hooks/useTranslation";
import style from "styles/typing-effect.module.css";

export const HomeWelcome = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex flex-col gap-2">
        <h1>{t("home.title")}</h1>
        <h2 className="font-black colorful-text">
          <span> {t("home.software")}</span>
          <span className={style.typewriter}> {t("home.developer")}</span>
        </h2>
        <h4 className="text-gray-600 dark:text-gray-300">{t("about.about_description")}</h4>
      </div>
    </section>
  );
};

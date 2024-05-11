import Image from "next/image";
import styles from "styles/typing-effect.module.css";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import useTranslation from "hooks/useTranslation";

export const AboutMe = () => {
  const {t, locale} = useTranslation();

  return (
    <section>
      <div className="flex max-w-5xl mx-auto min-h-screen items-center p-4 gap-4">
        <div className="flex flex-col gap-3">
          <h1>
            <span className="text-4xl">{t("about.about")}</span>{" "}
            <span
              className={twMerge("text-4xl")}
            >
              {t("about.me")}
            </span>
          </h1>
          <span className="text-gray-900 dark:text-gray-100 text-xl">
            {t("about.about_description")}
          </span>
          <div className="flex flex-col my-3">
            <Link href={t("about.about_skills_url")!}>
              <button className="button">{t("about.about_skills")}</button>
            </Link>
            <Link href={t("about.about_experience_url")!}>
              <button className="button">
                {t("about.about_experience")}
              </button>
            </Link>
            <Link target="_blank" locale="" href="/Mateo_Lewinzon_CV.pdf">
              <button className="button">{t("about.cv")}</button>
            </Link>
          </div>
        </div>
        <div className="hidden md:inline flex-none">
          <Image
            alt="mateo_mountains"
            height={300}
            width={300}
            src="/images/mateo_mountains.jpg"
          />
        </div>
      </div>
    </section>
  );
};

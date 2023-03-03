import Image from "next/image";
import { useI18n } from "next-localization";
import styles from "styles/typing-effect.module.css";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FadeOnView } from "./FadeOnView";

export const AboutMe = () => {
  const i18n = useI18n();

  return (
    <section className="bg-home-gradient">
      <FadeOnView>
        <div className="flex max-w-5xl mx-auto min-h-screen items-center p-4 gap-4">
          <div className="flex flex-col gap-3">
            <h1>
              <span className="text-4xl">{i18n.t("about.about")}</span>{" "}
              <span
                className={twMerge(
                  "text-4xl colorful-text",
                  styles.typewriter
                )}
              >
                {i18n.t("about.me")}
              </span>
            </h1>
            <span className="text-gray-900 dark:text-gray-100 text-xl">
              {i18n.t("about.about_description")}
            </span>
            <div className="flex flex-col my-3">
              <Link href={i18n.t("about.about_skills_url")}>
                <a className="button">{i18n.t("about.about_skills")}</a>
              </Link>
              <Link href={i18n.t("about.about_experience_url")}>
                <a className="button">
                  {i18n.t("about.about_experience")}
                </a>
              </Link>
              <Link href="/Mateo_Lewinzon_CV.pdf">
                <a className="button" target="_blank">
                  {i18n.t("about.cv")}
                </a>
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
      </FadeOnView>
    </section>
  );
};

import Image from "next/image";
import { useI18n } from "next-localization";
import { Heading, Span } from ".";
import typewriter from "styles/typing-effect.module.css";
import Link from "next/link";

export const AboutMe = () => {
  const i18n = useI18n();

  return (
    <div className="flex mx-auto min-h-500 items-center">
      <div>
        <div className="text-black text-6xl mb-5">
          <Heading>{i18n.t("about.about")}</Heading>{" "}
          <Heading
            as="span"
            className={`text-blue dark:text-blue ${typewriter}`}
          >
            {i18n.t("about.me")}
          </Heading>
        </div>
        <Span className="text-black text-xl">
          {i18n.t("about.about_description")}
        </Span>
        <div className="flex flex-col my-3">
          <Link href={i18n.t("about.about_skills_url")}>
            <a className="text-blue-dark text-lg font-semibold hover:underline">
              {i18n.t("about.about_skills")}
            </a>
          </Link>
          <Link href={i18n.t("about.about_experience_url")}>
            <a className="text-blue-dark text-lg font-semibold hover:underline">
              {i18n.t("about.about_experience")}
            </a>
          </Link>
          <Link href="/Mateo_Lewinzon_CV.pdf">
            <a
              target="_blank"
              className="text-blue-dark text-lg font-semibold hover:underline"
            >
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
  );
};

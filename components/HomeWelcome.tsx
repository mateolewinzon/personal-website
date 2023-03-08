import Image from "next/image";
import Link from "next/link";
import useTranslation from "hooks/useTranslation";
import style from "styles/typing-effect.module.css";

export const HomeWelcome = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-home-gradient">
      <div className="flex max-w-5xl mx-auto items-center justify-between min-h-screen p-4 gap-4">
        <div className="flex flex-col gap-2">
          <h1>{t("home.title")}</h1>
          <h2 className="font-black text-5xl colorful-text">
            <span> {t("home.software")}</span>
            <span className={style.typewriter}> {t("home.developer")}</span>
          </h2>
          <h3>{t("home.welcome_text")}</h3>
          <Link href="/about" className="button">
            {t("home.learn_more")}
          </Link>
        </div>
        <div className="hidden md:inline">
          <Image
            alt="mateo_mountains"
            width={300}
            height={300}
            src="/images/mateo_mountains.jpg"
          />
        </div>
      </div>
    </section>
  );
};

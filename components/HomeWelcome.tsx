import Image from "next/image";
import Link from "next/link";
import { useI18n } from "next-localization";
import style from "styles/typing-effect.module.css";
import { twMerge } from "tailwind-merge";
import { FadeOnView } from "./FadeOnView";

export const HomeWelcome = () => {
  const i18n = useI18n();

  return (
    <section className="bg-home-gradient">
      <FadeOnView>
        <div className="flex max-w-5xl mx-auto items-center justify-between min-h-screen p-4 gap-4">
          <div className="flex flex-col gap-2">
            <h1>{i18n.t("home.title")}</h1>
            <h2 className="font-black text-5xl colorful-text">
              <span> {i18n.t("home.software")}</span>
              <span className={style.typewriter}> {i18n.t("home.developer")}</span>
            </h2>
            <h3>{i18n.t("home.welcome_text")}</h3>
            <Link href="/about">
              <a className="button">{i18n.t("home.learn_more")}</a>
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
      </FadeOnView>
    </section>
  );
};

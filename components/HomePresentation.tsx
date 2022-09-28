import Image from "next/image";
import Link from "next/link";
import { useI18n } from "next-localization";
import { Heading, Span, SubHeading } from ".";
import typewriter from "styles/typing-effect.module.css";

export const HomePresentation = () => {
  const i18n = useI18n();

  return (
    <div className="flex min-h-400 justify-between items-center p-2">
      <div className="flex flex-col">
        <Heading className="pb-2">{i18n.t("home.title")}</Heading>
        <SubHeading className={`${typewriter} text-blue dark:text-blue pb-2`}>
          {i18n.t("home.subtitle")}
        </SubHeading>
        <Span className="text-gray-dark  pb-7 text-xl">
          {i18n.t("home.welcome_text")}
        </Span>
        <div>
          <Link href="/about">
            <a className="rounded-md text-blue p-2.5 outline outline-blue hover:text-blue-dark hover:outline-blue-dark outline-2  font-semibold">
              {i18n.t("home.learn_more")}
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:inline flex-none">
        <Image
          alt="mateo_mountains"
          width={300}
          height={300}
          src="/images/mateo_mountains2.jpg"
        />
      </div>
    </div>
  );
}
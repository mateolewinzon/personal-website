import { useI18n } from "next-localization";
import Image from "next/image";
import Link from "next/link";

import { typewriter } from "../../styles/typing-effect.module.css";

function TopSection() {
  const i18n = useI18n();

  return (
    <div className="flex min-h-500 justify-between items-center px-4">
      <div>
        <div className="text-6xl text-black  pb-4">{i18n.t("home.title")}</div>
        <div className={`text-6xl text-blue  pb-6 ${typewriter}`}>
          {i18n.t("home.subtitle")}
        </div>
        <div className="text-gray-dark  pb-9 text-xl">
          {i18n.t("home.welcome_text")}
        </div>
        <div>
          <Link href="/about">
            <a className="rounded-md text-blue p-2.5 outline outline-blue hover:text-blue-dark hover:outline-blue-dark outline-2  font-semibold">
              {i18n.t("home.learn_more")}
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:inline flex-none">
        <Image width={300} height={300} src="/images/mateo_mountains2.jpg" />
      </div>
    </div>
  );
}

export default TopSection;

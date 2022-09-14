import { useI18n } from "next-localization";
import Image from "next/image";
import { typewriter } from "../../styles/typing-effect.module.css";
import Heading from "../common/Heading";
import Span from "../common/Span";

function AboutMe() {
  const i18n = useI18n();

  return (
    <div className="flex mx-auto min-h-500 justify-between items-center px-4">
        <div>
          <div className="pb-4">
            <div className="text-black text-6xl">
              <Heading>{i18n.t("about.about")}</Heading>{" "}
              <Heading className={`text-blue dark:text-blue ${typewriter}`}>
                {i18n.t("about.me")}
              </Heading>
            </div>
          </div>
          <div>
            <Span className="text-black text-xl">
              {i18n.t("about.about_description")}
            </Span>
          </div>
        </div>
        <div className="hidden md:inline flex-none ">
          <Image
            height={300}
            width={300}
            src="/images/mateo_mountains.jpg"
          />
        </div>
    </div>
  );
}

export default AboutMe;

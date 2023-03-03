import { useI18n } from "next-localization";
import { FooterLink, NowPlaying } from "components";
import footers from "config/footers";


export const Footer = () => {
  const i18n = useI18n();

  return (
    <footer className="mt-20 mb-10 mx-auto max-w-2xl p-4 items-center">
      <NowPlaying/>
      <hr className="dark:border-slate-700 my-3" />
      <div className="grid grid-cols-3">
        {footers.map((footer, key) => (
          <div key={key} className="flex flex-col gap-3">
            {footer.map((item) => (
              <span
              className="text-gray-800 dark:text-gray-100"
                key={item.id}
              >
                <FooterLink isExternal={item.isExternal} href={item.href}>
                  {i18n.t(`layout.${item.id}`)}
                </FooterLink>
              </span>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

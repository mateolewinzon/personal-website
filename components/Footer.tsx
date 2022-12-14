import { useI18n } from "next-localization";
import { SpanSecondary, FooterLink, NowPlaying } from ".";
import footers from "config/footers";


export const Footer = () => {
  const i18n = useI18n();

  return (
    <footer className="mt-20 mb-10 mx-auto max-w-2xl items-center">
      <NowPlaying/>
      <hr className="text-gray-100 dark:text-gray-800" />
      <div className="grid grid-cols-3">
        {footers.map((footer, key) => (
          <div key={key} className="flex flex-col ">
            {footer.map((item) => (
              <SpanSecondary
                key={item.id}
                className="my-3 font-semibold"
              >
                <FooterLink isExternal={item.isExternal} href={item.href}>
                  {i18n.t(`layout.${item.id}`)}
                </FooterLink>
              </SpanSecondary>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

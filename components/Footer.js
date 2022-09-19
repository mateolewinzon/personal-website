import { useI18n } from "next-localization";
import Link from "next/link";
import footers from "config/footers";
import { SpanSecondary } from "./";

function FooterLink({ href, isExternal, children }) {
  const Component = isExternal
    ? ({ ...props }) => (
        <a {...props} target="_blank">
          {children}
        </a>
      )
    : ({ ...props }) => <Link {...props}>{children}</Link>;
  return <Component href={href}>{children}</Component>;
}

export function Footer() {
  const i18n = useI18n();

  return (
    <footer className="mt-20 mb-10 mx-auto max-w-2xl items-center">
      <hr className="text-gray-light dark:text-black-800" />
      <div className="grid md:grid-cols-3">
        {footers.map((footer, key) => (
          <div key={key} className="flex flex-col ">
            {footer.map((item) => (
              <SpanSecondary
                key={item.id}
                className="my-3 text-gray font-semibold"
              >
                <FooterLink isExternal={item.isExternal} href={item.href}>
                  {i18n.t(`navbar.${item.id}`)}
                </FooterLink>
              </SpanSecondary>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

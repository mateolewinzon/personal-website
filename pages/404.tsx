import { usePathname } from "next/navigation";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "components/Container";
import useTranslation from "hooks/useTranslation";
import { GetStaticProps } from "next";

export default function NotFoundPage() {
  const pathname = usePathname();
  const isBlog = pathname.includes("/blog/");
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex items-center min-h-screen max-w-5xl mx-auto p-4">
        <div className="flex flex-col gap-5">
          <h1>{t(isBlog ? "notFound.blog.heading" : "notFound.heading")}</h1>
          <div className="flex flex-col gap-2">
            {isBlog ? (
              <>
                <h3>{t("notFound.blog.subHeading")}</h3>
                <Link locale="en" href="/blog" className="button">
                  {t("notFound.blog.link_en")}
                </Link>
                <Link locale="es" href="/blog" className="button">
                  {t("notFound.blog.link_es")}
                </Link>
              </>
            ) : (
              <>
                <h3>{t("notFound.subHeading")}</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
    },
  };
};

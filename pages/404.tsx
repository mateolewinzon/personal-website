import { Container } from "components/Container";
import { GetStaticProps } from "next";
import { useI18n } from "next-localization";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  const isBlog = router.asPath.includes("/blog/");
  const i18n = useI18n();

  return (
    <Container>
      <div className="flex items-center min-h-screen max-w-5xl mx-auto p-4">
        <div className="flex flex-col gap-5">
          <h1>
            {i18n.t(isBlog ? "notFound.blog.heading" : "notFound.heading")}
          </h1>
          <div className="flex flex-col gap-2">
            {isBlog ? (
              <>
                <h3>{i18n.t("notFound.blog.subHeading")}</h3>
                <Link locale="en" href="/blog">
                  <a className="button">
                    {i18n.t("notFound.blog.link_en")}
                  </a>
                </Link>
                <Link locale="es" href="/blog">
                  <a className="button">
                    {i18n.t("notFound.blog.link_es")}
                  </a>
                </Link>
              </>
            ) : (
              <>
                <h3>{i18n.t("notFound.subHeading")}</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { default: lngDict = {} } = await import(`locales/${locale}.json`);

  return { props: { lngDict } };
};

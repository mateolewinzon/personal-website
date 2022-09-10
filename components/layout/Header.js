import { useI18n } from "next-localization";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { pages } from "../../config/pageList";
import { langs } from "../../config/i18n";
import styles from "../../styles/header.module.css";
import LocaleSelector from "./locale-selector";

function Header() {
  const { asPath, locale, query } = useRouter();
  const i18n = useI18n();

  if (asPath.includes("/blog/")) {
    var alternative = i18n.t(`blogs.articles.${query.slug}.${locale}`);
  }

  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Nav>
          {pages.map((page, key) => (
            <NavItem key={key}>
              <Link passHref href={page.path}>
                <Nav.Link
                  active={asPath === page.path}
                  className={styles.links}
                >
                  {i18n.t(`navbar.${page.id}`)}
                </Nav.Link>
              </Link>
            </NavItem>
          ))}
        </Nav>
        <Nav>
          <LocaleSelector
            asPath={asPath}
            currentLocale={locale}
            query={query}
          />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

import { useI18n } from "next-localization";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { pages } from "../../config/pageList";
import { langs } from "../../config/i18n";
import styles from "../../styles/header.module.css";

function Header() {
  const { pathname, locale } = useRouter();
  const i18n = useI18n();

  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Nav>
          {pages.map((page, key) => (
            <NavItem key={key}>
              <Link passHref href={page.path}>
                <Nav.Link
                  active={pathname === page.path}
                  className={styles.links}
                >
                  {i18n.t(`navbar.${page.id}`)}
                </Nav.Link>
              </Link>
            </NavItem>
          ))}
        </Nav>
        <Nav>
          <NavItem>
            <NavDropdown
              className={`${styles.links} ${styles.navbar_drop_item} ms-auto dropdown-menu-left`}
              title={locale.toLocaleUpperCase()}
            >
              {langs.map(
                (l) =>
                  l.locale !== locale && (
                    <Link key={l} passHref href={pathname} locale={l.locale}>
                      <NavDropdown.Item className={styles.navbar_drop_item}>
                        {i18n.t(`navbar.${l.name}`)}
                      </NavDropdown.Item>
                    </Link>
                  )
              )}
            </NavDropdown>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

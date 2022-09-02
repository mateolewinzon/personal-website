import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import Link from "next/link";
import { pages } from "../../config/pageList";
import styles from "./header.module.css";

function Header() {
  return (
    <Navbar expand='md' className={styles.navbar}>
      <Container>
        <Link passHref href={'/'}>
        <Navbar.Brand className={styles.brand}>Mateo Lewinzon</Navbar.Brand></Link>
        <Nav>
          {pages.map((page) => (
            <NavItem>
              <Link passHref href={page.path}>
                <Nav.Link className={styles.links}>{page.title["en"]}</Nav.Link>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

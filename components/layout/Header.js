import Link from "next/link";
import {useRouter} from "next/router"
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import { pages } from "../../config/pageList";
import styles from "./header.module.css";

function Header() {

  const {pathname} = useRouter()

  return (
    <Navbar expand="md" className={styles.navbar}>
      <Container>
        <Link passHref href={"/"}>
          <Navbar.Brand className={styles.brand}>Mateo Lewinzon</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {pages.map((page) => (
              <NavItem>
                <Link passHref href={page.path}>
                  <Nav.Link active={pathname === page.path} className={styles.links}>
                    {page.title["en"]}
                  </Nav.Link>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

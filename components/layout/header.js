import { useI18n } from "next-localization";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import { pages } from "../../config/pageList";
import LocaleSelector from "./locale-selector";

function Header() {
  const { asPath, locale, query } = useRouter();
  const i18n = useI18n();

  return (
    <nav>
      <div className="flex justify-between items-center max-w-3x1 py-2 my-0 md:my-4">
        <div>
          {pages.map((page, key) => (
            <NavLink key={key} isActive={asPath === page.path} href={page.path}>
              {i18n.t(`navbar.${page.id}`)}
            </NavLink>
          ))}
        </div>
        <div className="flex">
          <LocaleSelector
            asPath={asPath}
            currentLocale={locale}
            query={query}
          />
        </div>
      </div>
    </nav>
    // <Navbar className={styles.navbar}>
    //   <Container>
    //     <Nav>
    //       {pages.map((page, key) => (
    //         <NavItem key={key}>
    //           <Link passHref href={page.path}>
    //             <Nav.Link
    //               active={asPath === page.path}
    //               className={styles.links}
    //             >
    //               {i18n.t(`navbar.${page.id}`)}
    //             </Nav.Link>
    //           </Link>
    //         </NavItem>
    //       ))}
    //     </Nav>
    //     <Nav>
    //
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
}

export default Header;

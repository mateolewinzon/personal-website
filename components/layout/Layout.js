import Link from 'next/link'
import Router from 'next/router'

function Layout({ children }) {
  return (
    <>
      header
      {children}
      footer
    </>
  );
}

export default Layout;

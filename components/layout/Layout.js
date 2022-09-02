import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";


function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      footers
    </>
  );
}

export default Layout;

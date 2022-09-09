import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
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

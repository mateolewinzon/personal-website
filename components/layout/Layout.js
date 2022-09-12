// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <main className="bg-white">
      <div className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}

export default Layout;

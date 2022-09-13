import "/node_modules/flag-icons/css/flag-icons.min.css";
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

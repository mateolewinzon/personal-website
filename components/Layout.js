import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Footer, Header } from "./";

export function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-black min-h-[100%]">
      <div className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

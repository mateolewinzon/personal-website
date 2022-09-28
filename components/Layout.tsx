import { Footer, Header } from ".";
import "/node_modules/flag-icons/css/flag-icons.min.css";

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) =>{
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

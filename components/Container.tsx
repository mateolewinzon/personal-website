import { AppHead, Footer, Header } from ".";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <AppHead />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

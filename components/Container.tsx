import { AppHead, Footer, Header } from ".";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <AppHead />
      <Header />
      <main className="max-w-2xl flex mx-auto min-h-screen flex-col mt-28 gap-12 px-4 md:px-0">{children}</main>
      <Footer />
    </>
  );
};

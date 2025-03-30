import { AppHead, Footer, Header } from ".";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <AppHead />
      {/* <Header /> */}
      <main className="max-w-2xl flex mx-auto min-h-screen flex-col mt-10 md:mt-20 gap-8 px-8 md:px-0">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

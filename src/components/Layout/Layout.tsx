import { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto min-h-screen h-full w-full max-w-5xl px-4 sm:px-10 md:px-24 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

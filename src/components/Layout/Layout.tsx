import  { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto min-h-screen h-full w-full max-w-7xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
      <Header />
      <main className="px-12">{children}</main>
    </div>
  );
};

export default Layout;

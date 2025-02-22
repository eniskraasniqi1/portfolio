import { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col mx-auto min-h-fit h-full w-full max-w-5xl px-4 sm:px-10 md:px-24 bg-white ring-1 ring-zinc-100">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="flex justify-center text-zinc-600">
        <p className="py-4">
          Coded with <span className="text-red-500">❤</span> {" by "}
          <strong>Enis Krasniqi</strong>.
        </p>
      </footer>
    </div>
  );
};

export default Layout;

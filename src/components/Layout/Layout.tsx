import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col mx-auto min-h-screen w-full max-w-5xl px-6 sm:px-10 md:px-24 lg:px-32 bg-white/90 backdrop-blur-md ring-1 ring-zinc-100 shadow-xl"
      >
        <Header />
        <main className="flex-1 pb-8">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
        <motion.footer
          className="flex justify-center text-zinc-500 border-t border-zinc-100 mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className="py-6 text-sm">
            Coded with <span className="text-red-500">♥</span> by{" "}
            <motion.strong
              className="text-zinc-700 cursor-pointer inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Enis Krasniqi
            </motion.strong>
          </p>
        </motion.footer>
      </motion.div>
    </>
  );
};

export default Layout;

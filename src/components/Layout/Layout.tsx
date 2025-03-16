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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col mx-auto min-h-fit h-full w-full max-w-5xl px-4 sm:px-10 md:px-24 bg-white/80 backdrop-blur-sm ring-1 ring-zinc-100"
      >
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
        <motion.footer 
          className="flex justify-center text-zinc-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="py-4">
            Coded with <span className="text-red-500">❤</span> {" by "}
            <motion.strong
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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

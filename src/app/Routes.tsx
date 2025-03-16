import { Routes, Route } from "react-router";
import PageTransition from "../components/PageTransition";

import Home from "./pages/Home";
import Stack from "./pages/Stack";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<PageTransition><Home /></PageTransition>} />
      <Route path="stack" element={<PageTransition><Stack /></PageTransition>} />
      <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
    </Routes>
  );
};

export default AppRoutes;

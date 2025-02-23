import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Stack from "./pages/Stack";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="stack" element={<Stack />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

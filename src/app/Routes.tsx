import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Stack from "./pages/Stack";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="stack" element={<Stack />} />
    </Routes>
  );
};

export default AppRoutes;

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import AppRoutes from "./app/Routes";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "./components/ThemeProvider";

import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

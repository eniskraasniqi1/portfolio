import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import AppRoutes from "./app/Routes";
import Layout from "./components/Layout/Layout";

import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Layout>
      <AppRoutes />
    </Layout>
  </BrowserRouter>
);

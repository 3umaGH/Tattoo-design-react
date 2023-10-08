import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/Chinoz-SemiBold.ttf";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <HomePage />
  </Layout>
);

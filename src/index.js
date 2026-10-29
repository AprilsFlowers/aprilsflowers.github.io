import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Footer from "./components/Footer.js";
import App from "./App"; // This targets your original website layout file
import BlogPage from "./pages/BlogPage.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/BlogPage" exact element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);

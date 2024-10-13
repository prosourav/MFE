import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className="container">
    <Header/>
    <div>Home page content.</div>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
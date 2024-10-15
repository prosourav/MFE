import React from "react";
import ReactDOM from "react-dom/client";
import Header from "host/Header";
import Footer from "host/Footer";
import SafeComponent from "./Safecomponent";

const App = () => {
  return (
    <div className="container">
      <SafeComponent>
        <Header app={{ name: "Fidget Spinner PDP" }} />
      </SafeComponent>
      <div>PDP page content.</div>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

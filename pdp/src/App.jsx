import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import Header from "host/Header";
import Footer from "host/Footer";

const Header = React.lazy(() => import("host/Header"));

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      {show && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />
        </Suspense>
      )}
      <button onClick={() => setShow(true)}>Show</button>
      <div>PDP page content.</div>
      <Footer />
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

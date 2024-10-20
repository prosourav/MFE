import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "host/Header";
import Footer from "host/Footer";
import Count from "host/Count";
import SafeComponent from "./Safecomponent";
import pubsub from "host/Pubsub";

const App = () => {


 const [count, setCount] = useState(0);

 const increaseCount = () => {
   const newCount = count + 1;
   setCount(newCount);
   // Publish the updated count
   pubsub.publish("countUpdated", newCount);
 };



  return (
    <div className="container">
        <Header app={{ name: "Fidget Spinner PDP" }} />
        <button onClick={increaseCount}>Increase++</button>
        <Count />
      <div>PDP page content.</div>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

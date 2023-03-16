
import React from "react"   ;
import { createRoot } from "react-dom/client";
import Pet from "./Pet";



  
  const App = () => {
    return (
    // return React.createElement("div", {}, [
    //   React.createElement("h1", {}, "Adopt Me!"),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "Dog",
    //     breed: "Havanese",
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pepper",
    //     animal: "Bird",
    //     breed: "Cockatiel",
    //   }),
    //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
    // ]);
    // <App />
    <Pet />
    )
  };
  
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
  // export default App

  // React.createElement(App)
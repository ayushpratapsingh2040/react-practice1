import React from "react";
import Cards from "./components/cards";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="cards">
      <Navbar />
      <Cards />
      
      <h2>Let's build something amazing!</h2>
    </div>
  );
};

export default App;

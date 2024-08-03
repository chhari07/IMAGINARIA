import React  from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Button from "./components/Button";
import GRID_ from "./components/GRID_"
import Footer from "./components/Footer";



function App() {
  return (
    <> 
    <div className="App"  >
        <Navbar />
        <Hero />
       
         <GRID_ />
        <Footer />
    </div>
    </>
  );
}

export default App;

import React  from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Home from "./components/Home";
import GRID_ from "./components/GRID_"
import Footer from "./components/Footer";



function App() {
  return (
    <> 
    <div className="App"  class=" bg-white " >
        <Navbar />
        <Hero />
        <Home />
        <Footer />
    </div>
    </>
  );
}

export default App;

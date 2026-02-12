import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const PortfolioLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
      </Routes>
    </>
  );
}

export default App;

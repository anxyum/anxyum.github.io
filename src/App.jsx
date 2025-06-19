import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <div className="bg-neutral-800 p-4 mt-20">
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

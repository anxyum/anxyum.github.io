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
      <div className="bg-neutral-900 pb-20">
        <div className="max-w-[1111px] ml-auto mr-auto">
          <Header />
          <Hero />
          <Skills />
          <Projects />
        </div>
      </div>
      <div className="bg-neutral-800 p-4">
        <div className="max-w-[1111px] ml-auto mr-auto">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

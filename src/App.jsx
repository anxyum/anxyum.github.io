import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b flex flex-col gap-12 ml-24 mr-24">
        <Header />
        <img src="./src/assets/the-guy.png" alt="the guy" />
      </div>
      <Hero />
    </>
  );
}

export default App;

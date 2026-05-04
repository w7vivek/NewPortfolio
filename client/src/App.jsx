import React from "react";
import ProfileSelect from "./components/ProfileSelect";
import Animation from "./components/Animation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import First_page from "./components/sections/First_page";
import Skills from "./components/sections/Skills";
import Third_page from "./components/sections/Third_page";
import Projects from "./components/sections/Projects";
import Training from "./components/sections/Training";
import Certificates from "./components/sections/Certificates";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Animation screen */}
        <Route path="/" element={<Animation />} />

        {/* Portfolio page */}
        <Route path="/home-page" element={<ProfileSelect />} />
        <Route path="/about-me" element={<First_page />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/explore" element={<Third_page/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
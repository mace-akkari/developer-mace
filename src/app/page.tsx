"use client";

import Navbar from "./NavBar/index.jsx";
import IntroSection from "./IntroSection/index.jsx";
import About from "./AboutSection/index.jsx";
import Skills from "./SkillsSection/index.jsx";
import Project from "./ProjectsSection/index.jsx";
import Footer from "./Footer/index.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

"use client";

import Navbar from "./NavBar";
import IntroSection from "./IntroSection";
import About from "./AboutSection";
//import Skills from "./SkillsSection";
import Project from "./ProjectsSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

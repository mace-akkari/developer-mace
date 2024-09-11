"use client";

import Navbar from "./NavBar/page";
import IntroSection from "./IntroSection/page";
import About from "./AboutSection/page";
import Skills from "./SkillsSection/page";
import Project from "./ProjectsSection/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

"use client";

import Navbar from "./NavBar/page.jsx";
import IntroSection from "./IntroSection/page.jsx";
import About from "./AboutSection/page";
import Skills from "./SkillsSection/page.jsx";
import Project from "./ProjectsSection/page.jsx";
import Footer from "./Footer/page.jsx";

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

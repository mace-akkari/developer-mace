"use client";

import Navbar from "./NavBar/page";
import IntroSection from "./IntroSection/page";
import About from "./AboutSection/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <About />
    </div>
  );
}

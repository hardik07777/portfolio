import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import BackgroundCanvas from "./components/BackgroundCanvas";
import SocialBar from "./components/SocialBar";
import Navbar from "./components/Navbar";
import LeetCode from "./components/LeetCode";

function App() {
const [dark, setDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
  useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");   // ✅ ADD THIS
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");  // ✅ ADD THIS
  }
}, [dark]);

  return (

    <>
      <BackgroundCanvas />
          <div className="relative z-10">

      <SocialBar />
      <Navbar />

      <div className="min-h-screen text-textMain dark:text-textMainDark">
        <div className="max-w-2xl mx-auto  my-16 px-12 py-16 space-y-15 border
        border-borderSoft dark:border-borderDark bg-white/80
        dark:bg-[#0b0f1a]/80 backdrop-blur-md rounded-2xl shadow-lg pt-10">

          {/* ✅ Sections with proper IDs */}
          <section id="home" className="scroll-mt-24">
            <Hero dark={dark} setDark={setDark} />
          </section>

          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="education" className="scroll-mt-24">
            <Education />
          </section>

          <section id="leetcode" className="scroll-mt-24">
            <LeetCode />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>

        </div>
      </div>
          </div>

    </>
  );
}

export default App;
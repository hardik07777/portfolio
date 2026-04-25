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
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
      <BackgroundCanvas />

      <div className="relative z-10">
        <SocialBar />
        <Navbar />

        <div className="min-h-screen text-textMain dark:text-textMainDark px-3 sm:px-4">
          
          <div
  className="
  max-w-2xl mx-auto
  my-8 sm:my-12 md:my-16
  px-4 sm:px-6 md:px-8
  py-8 sm:py-12 md:py-14
  space-y-10 sm:space-y-12 md:space-y-14
  border border-borderSoft dark:border-white/10
  bg-white/80 dark:bg-[#020617]/40
  backdrop-blur-md rounded-2xl shadow-lg
"
>

            {/* Sections */}
            <section id="home" className="scroll-mt-24">
              <div className="max-w-2xl mx-auto">
    <Hero dark={dark} setDark={setDark} />
  </div>
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
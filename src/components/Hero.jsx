import RevealAvatar from "./RevealAvatar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function Hero({ dark, setDark }) {
  const roles = [
  "Full Stack Developer",
  "DSA & Problem Solver",
  "React Developer",
  "Backend Engineer"
]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  // ✅ APPLY + SAVE theme whenever it changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const longestRole = roles.reduce(
  (a, b) => (a.length > b.length ? a : b),
  ""
);

  return (
   <div className="max-w-4xl">

  {/* 🔲 Card */}
  <div className="rounded-2xl border border-gray-200 dark:border-gray-600 p-6 
                  bg-white/60 dark:bg-[#111827]/80 backdrop-blur-md
                  shadow-sm hover:shadow-md transition-all duration-300">

    {/* Top Row */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-5">

        {/* Avatar */}
        <div className="w-14 h-14 shrink-0">
          <RevealAvatar />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center mt-4 ml-3">

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] text-black dark:text-white">
            Hardik Goel
          </h1>

          {/* Meta line */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">

            <span>21</span>

            <span className="opacity-50">•</span>

            {/* Roles animation */}
            <span className="relative h-5 overflow-hidden inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="inline-block whitespace-nowrap"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="opacity-50">•</span>

            <span>India</span>

          </p>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 
                   bg-white/60 dark:bg-gray-800 backdrop-blur-md 
                   hover:scale-110 hover:shadow-sm transition-all duration-300"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </div>

    {/* Buttons Row */}
    <div className="flex items-center gap-3 mt-6">

      <a
        href="/resume.pdf"
        download
        className="px-4 py-1.5 text-sm rounded-lg bg-black text-white 
                   dark:bg-white dark:text-black 
                   hover:scale-105 hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] 
                   transition-all duration-300"
      >
        Resume
      </a>

      {/* Social icons */}
      <div className="flex gap-3 ml-2">

  {/* CodeChef */}
  <a
    href="https://www.codechef.com/users/hardikgoel07"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 
               hover:bg-gray-100 dark:hover:bg-gray-700
               transition-all duration-200 hover:-translate-y-[2px]"
  >
    <SiCodechef size={18} />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/Hardik_goel07/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 
               hover:bg-gray-100 dark:hover:bg-gray-700
               transition-all duration-200 hover:-translate-y-[2px]"
  >
    <SiLeetcode size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/hardik-goel-8ba42b244/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 
               hover:bg-gray-100 dark:hover:bg-gray-700
               transition-all duration-200 hover:-translate-y-[2px]"
  >
    <FaLinkedin size={18} />
  </a>

  {/* Mail */}
  <a
    href="mailto:hardikgoel07@gmail.com"
    className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 
               hover:bg-gray-100 dark:hover:bg-gray-700
               transition-all duration-200 hover:-translate-y-[2px]"
  >
    <MdEmail size={18} />
  </a>

</div>
    </div>
  </div>

  {/* 🧠 Intro */}
 <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-[15px] md:text-[16px]">
  A 21-year-old developer from India building{" "}
  
  <span className="text-gray-800 dark:text-gray-200">
    scalable, high-performance web & real-time systems
  </span>{" "}
  
  with a focus on{" "}
  
  <span className="font-medium text-gray-900 dark:text-white">
    clean architecture
  </span>{" "}
  and{" "}
  <span className="font-medium text-gray-900 dark:text-white">
    user experience
  </span>.
</p>
</div>
  );
}

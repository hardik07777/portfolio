import RevealAvatar from "./RevealAvatar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { Sun, Moon } from "lucide-react";

export default function Hero({ dark, setDark }) {
  const roles = [
    "Full Stack Developer",
    "DSA & Problem Solver",
    "React Developer",
    "Backend Engineer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDark(savedTheme === "dark");
  }, []);

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

  return (
    <div className="w-full max-w-2xl mx-auto">
      
      <div className="
        rounded-2xl
        border border-gray-200 dark:border-white/10
        p-4 sm:p-6
        bg-white/60 dark:bg-[#020617]/40
        backdrop-blur-md
      ">

        {/* TOP */}
        <div className="flex flex-col gap-4">

          {/* Row 1 */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <RevealAvatar />
              </div>

              <div>
                <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-black dark:text-white">
                  Hardik Goel
                </h1>

                {/* META */}
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-1 sm:gap-2 mt-1">

                  <span>21</span>
                  <span className="opacity-50">•</span>

                  <span className="relative h-5 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roles[index]}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="whitespace-nowrap"
                      >
                        {roles[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>

                  <span className="opacity-50">•</span>
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* THEME BUTTON */}
            <button
  onClick={() => setDark(!dark)}
  className="
    w-10 h-10 flex items-center justify-center
    rounded-full
    border border-gray-300 dark:border-gray-600
    bg-white/60 dark:bg-white/10

    transition-all duration-300
    hover:scale-105 hover:border-indigo-400/40
  "
>
  {dark ? (
    <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
  ) : (
    <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
  )}
</button>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 mt-2">

            <a
              href="/resume.pdf"
              download
              className="
              px-4 py-1.5 text-sm rounded-lg
              bg-black text-white
              dark:bg-white dark:text-black
            "
            >
              Resume
            </a>

            <div className="flex flex-wrap gap-2 sm:gap-3">

              <a href="https://www.codechef.com/users/hardikgoel07" target="_blank"
                className="p-2 rounded-lg border border-gray-200 dark:border-white/10">
                <SiCodechef size={16} />
              </a>

              <a href="https://leetcode.com/u/Hardik_goel07/" target="_blank"
                className="p-2 rounded-lg border border-gray-200 dark:border-white/10">
                <SiLeetcode size={16} />
              </a>

              <a href="https://www.linkedin.com/in/hardik-goel-8ba42b244/" target="_blank"
                className="p-2 rounded-lg border border-gray-200 dark:border-white/10">
                <FaLinkedin size={16} />
              </a>

              <a href="mailto:hardikgoel07@gmail.com"
                className="p-2 rounded-lg border border-gray-200 dark:border-white/10">
                <MdEmail size={16} />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* TEXT */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
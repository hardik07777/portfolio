import {
  User,
  Briefcase,
  Code,
  Folder,
  GraduationCap,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const links = [
  { icon: User, url: "#home", label: "Home" },
  { icon: Briefcase, url: "#experience", label: "Experience" },
  { icon: Code, url: "#skills", label: "Skills" },
  { icon: Folder, url: "#projects", label: "Projects" },
  { icon: GraduationCap, url: "#education", label: "Education" },
  { icon: Trophy, url: "#leetcode", label: "LeetCode" },
  { icon: MessageCircle, url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const isScrollingRef = useRef(false);

  const handleNavClick = (e, url) => {
    e.preventDefault();

    isScrollingRef.current = true;
    setActive(url);

    const targetElement = document.querySelector(url);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      let currentSection = active;

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;

      if (isBottom) {
        currentSection = links[links.length - 1].url;
      } else {
        links.forEach((item) => {
          const section = document.querySelector(item.url);
          if (section) {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = item.url;
            }
          }
        });
      }

      if (currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <div
      className="
      fixed 
      bottom-4 left-1/2 -translate-x-1/2   /* 📱 mobile */
      sm:bottom-auto sm:left-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0  /* 💻 desktop */
      z-[100]
    "
    >
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        className="
        flex 
        flex-row sm:flex-col   /* 📱 horizontal → 💻 vertical */
        items-center 
        gap-2 sm:gap-4
        px-3 py-2 sm:py-4
        rounded-full sm:rounded-2xl
        bg-black/60 dark:bg-white/10 backdrop-blur-xl 
        border border-white/10 dark:border-white/20 
        shadow-2xl
      "
      >
        {links.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.url;

          return (
            <div key={index} className="relative flex items-center justify-center">
              <motion.a
                href={item.url}
                onClick={(e) => handleNavClick(e, item.url)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full
                transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "bg-white dark:bg-black shadow-[0_0_15px_rgba(255,255,255,0.4)] dark:shadow-[0_0_15px_rgba(0,0,0,0.6)]"
                    : "bg-white/5 dark:bg-white/10 hover:bg-white/10 dark:hover:bg-white/20"
                }`}
              >
                <Icon
                  size={16}
                  className={`transition-colors duration-300 z-10 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-white/60 dark:text-white/70 group-hover:text-white"
                  }`}
                />

                {/* Tooltip (desktop only) */}
                <span
                  className="
                  hidden sm:block
                  absolute right-14 px-2.5 py-1 text-[11px] font-semibold 
                  bg-white dark:bg-black text-black dark:text-white 
                  rounded-md pointer-events-none
                  opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 
                  transition-all duration-200 whitespace-nowrap shadow-lg
                "
                >
                  {item.label}
                </span>

                {/* Active highlight */}
                {isActive && (
                  <motion.div
                    layoutId="activeHighlight"
                    className="absolute inset-0 bg-white dark:bg-black rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
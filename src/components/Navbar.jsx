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
  const isScrollingRef = useRef(false); // 🔥 controls scroll spy pause

  const handleNavClick = (e, url) => {
    e.preventDefault();

    isScrollingRef.current = true; // 🚫 pause scroll updates
    setActive(url);

    const targetElement = document.querySelector(url);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // ⏱️ resume scroll tracking after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return; // 🚫 skip during smooth scroll

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex items-center">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center gap-4 px-3 py-4 rounded-2xl
                   bg-black/60 dark:bg-white/10 backdrop-blur-xl 
                   border border-white/10 dark:border-white/20 shadow-2xl"
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
                className={`group relative w-10 h-10 flex items-center justify-center rounded-full
                           transition-all duration-300 cursor-pointer
                           ${
                             isActive
                               ? "bg-white dark:bg-black shadow-[0_0_20px_rgba(255,255,255,0.4)] dark:shadow-[0_0_20px_rgba(0,0,0,0.6)]"
                               : "bg-white/5 dark:bg-white/10 hover:bg-white/10 dark:hover:bg-white/20"
                           }`}
              >
                <Icon
                  size={18}
                  className={`transition-colors duration-300 z-10 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-white/60 dark:text-white/70 group-hover:text-white"
                  }`}
                />

                {/* Tooltip */}
                <span
                  className="absolute right-14 px-2.5 py-1 text-[11px] font-semibold 
                             bg-white dark:bg-black text-black dark:text-white 
                             rounded-md pointer-events-none
                             opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 
                             transition-all duration-200 whitespace-nowrap shadow-lg"
                >
                  {item.label}
                </span>

                {/* Active Highlight */}
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
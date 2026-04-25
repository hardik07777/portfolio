import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function SocialBar() {
  return (
    <motion.div
  initial={{ x: 80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="
    hidden sm:block
    fixed 
    left-3 
    top-1/3 -translate-y-1/2
    z-[120]
  "
>
      {/* 📱 Mobile Pill */}
      <div
        className="
        flex sm:hidden
        items-center gap-4
        px-4 py-2
        rounded-full
        bg-white/10 backdrop-blur-lg
        border border-white/10
        shadow-lg
      "
      >
        <a href="https://x.com/heyhardik_" target="_blank" className="group">
          <FaXTwitter className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
        </a>

        <a href="https://github.com/hardik07777" target="_blank" className="group">
          <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
        </a>

        <a href="https://www.linkedin.com/in/hardik-goel-8ba42b244/" target="_blank" className="group">
          <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition" />
        </a>
      </div>

      {/* 💻 Desktop Vertical */}
      <div className="hidden sm:flex flex-col items-center gap-5">
        
        <a href="https://x.com/heyhardik_" target="_blank" className="group">
          <FaXTwitter className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:scale-125 transition duration-300" />
        </a>

        <a href="https://github.com/hardik07777" target="_blank" className="group">
          <FaGithub className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:scale-125 transition duration-300" />
        </a>

        <a href="https://www.linkedin.com/in/hardik-goel-8ba42b244/" target="_blank" className="group">
          <FaLinkedin className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:scale-125 transition duration-300" />
        </a>

        {/* Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 70 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-[1px] bg-gray-400 dark:bg-gray-600"
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-[12px] text-gray-400 dark:text-gray-500 tracking-[0.2em] rotate-90 mt-1"
        >
          FOLLOW ME
        </motion.p>
      </div>
    </motion.div>
  );
}
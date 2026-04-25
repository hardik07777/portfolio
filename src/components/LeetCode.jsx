import { motion } from "framer-motion";
import lightImg from "../pictures/image.png";
import darkImg from "../pictures/image2.png";

export default function LeetCode() {
  return (

    <section className="max-w-3xl mt-20">
      <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-10" />

      {/* Title */}
      <h2 className="text-2xl font-semibold tracking-tight mb-6">
        LeetCode
      </h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          group relative rounded-2xl overflow-hidden

          border border-gray-200 dark:border-gray-600/70
          bg-white/80 dark:bg-gray-900/70 backdrop-blur-md

          transition-all duration-300
          hover:border-indigo-400/40
        "
      >

        {/* Light Image */}
        <motion.img
          src={lightImg}
          alt="LeetCode Dashboard"
          className="w-full h-full object-cover transition-all duration-500 will-change-transform dark:hidden"
          whileHover={{ scale: 1.05 }}
        />

        {/* Dark Image */}
        <motion.img
          src={darkImg}
          alt="LeetCode Dashboard Dark"
          className="w-full h-full object-cover transition-all duration-500 will-change-transform hidden dark:block"
          whileHover={{ scale: 1.05 }}
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0 flex flex-col justify-end p-4
            bg-gradient-to-t from-black/75 via-black/30 to-transparent
            dark:from-black/80 dark:via-black/40
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-white text-sm"
          >
            <p className="font-medium tracking-tight">
              500+ Problems Solved
            </p>
            <p className="opacity-80 text-xs">
              Consistent daily practice
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
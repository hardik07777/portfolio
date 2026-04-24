import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="mt-16 max-w-3xl">
            <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-10" />


      {/* Header */}
      <h2 className="text-2xl font-semibold mb-10 tracking-tight text-black dark:text-white">
        Experience
      </h2>

      <div className="relative pl-6 space-y-12">

        {/* Animated timeline line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-indigo-400/70 dark:via-indigo-500/60 to-transparent" />

        {/* ITEM 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* Content */}
          <div className="transition-all duration-300 group-hover:translate-x-1">

            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg transition group-hover:text-indigo-500">
                Mercor
              </h3>
             
              <span className="text-xs px-2.5 py-0.5 rounded-full 
                 bg-gray-100 text-gray-600 
                 dark:bg-gray-800 dark:text-gray-300 
                 border border-gray-200 dark:border-gray-600">
                Mar 2026 – Present
</span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Agentic Code Writer
            </p>

            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {[
                "Improving LLM-generated code",
                "Designing prompts & evaluation systems",
                "Analyzing failure patterns",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex gap-2"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-fullbg-gray-400 dark:bg-gray-500 group-hover:bg-indigo-400 transition" />
                  {item}
                </motion.li>
              ))}
            </ul>

          </div>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* Content */}
          <div className="transition-all duration-300 group-hover:translate-x-1">

            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg transition group-hover:text-indigo-500">
                Cantilever
              </h3>
           <span className="text-xs px-2.5 py-0.5 rounded-full 
                 bg-gray-100 text-gray-600 
                 dark:bg-gray-800 dark:text-gray-300 
                 border border-gray-200 dark:border-gray-600">
  Jul 2025 – Sep 2025
</span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Full Stack Intern
            </p>

            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {[
                "Built News Aggregator (35% faster)",
                "Built TravelBuddy with chat",
                "Optimized backend by 40%",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex gap-2"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-indigo-400 transition" />
                  {item}
                </motion.li>
              ))}
            </ul>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
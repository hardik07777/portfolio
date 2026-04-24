export default function Education() {
  const items = [
    {
      name: "Maharaja Agrasen Institute of Technology",
      sub: "B.Tech in Elctronics and Communication",
      year: "2023 - 2027",
    },
    {
      name: "Vivekanand School",
      sub: "Class XII (CBSE) - 86.8%",
    },
  ];

  return (
    <section className="max-w-3xl mt-12">
      <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-10" />

      <h2 className="text-2xl font-semibold mb-6 tracking-tight text-black dark:text-white">
        Education
      </h2>

      <div className="space-y-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex items-center gap-4
              p-4 rounded-xl

              border border-gray-200 dark:border-gray-600/70
              bg-white/90 dark:bg-gray-800/70 backdrop-blur-md

              transition-all duration-300
              hover:border-indigo-400/40 dark:hover:border-indigo-400/40
            "
          >
            {/* Logo placeholder */}
            <div
              className="
                w-12 h-12 flex items-center justify-center
                rounded-lg
                border border-dashed border-gray-300 dark:border-gray-600
                bg-gray-100/70 dark:bg-gray-700/50
                text-sm text-gray-600 dark:text-gray-300
              "
            >
              {item.name[0]}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 tracking-tight">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {item.sub}
              </p>
            </div>

            {/* Year (only if exists) */}
            {item.year && (
              <span
                className="
                  text-xs whitespace-nowrap px-2.5 py-0.5 rounded-full
                  bg-gray-100/80 dark:bg-gray-700/60
                  text-gray-600 dark:text-gray-300
                  border border-gray-200 dark:border-gray-600/70
                "
              >
                {item.year}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
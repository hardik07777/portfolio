export default function Achievements() {
  const items = [
    {
      title: "Call2Code Hackathon",
      subtitle: "Finalist",
      icon: "🏆",
    },
    {
      title: "DSA Practice",
      subtitle: "1000+ Problems Solved",
      icon: "💯",
    },
    {
      title: "LeetCode",
      subtitle: "1800+ Rating",
      icon: "⭐",
    },
    {
      title: "CodeChef",
      subtitle: "2★ Rating",
      icon: "🔥",
    },
  ];

  return (
    <section className="mt-12 max-w-3xl">
      
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6 tracking-tight">
        Achievements
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              group p-4 rounded-xl

              bg-white/80 dark:bg-white/5
              backdrop-blur-md

              border border-gray-200 dark:border-gray-700

              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
            "
          >
            {/* Icon */}
            <div className="text-xl mb-2 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
import agrasenLogo from "../photos/maitlogo.png";
import vivekanandLogo from "../photos/vivekanad.jpg";

export default function Education() {
  const items = [
    {
      name: "Maharaja Agrasen Institute of Technology",
      sub: "B.Tech in Electronics and Communication",
      year: "2023 - 2027",
      logo: agrasenLogo,
    },
    {
      name: "Vivekanand School",
      sub: "Class XII (CBSE) - 86.8%",
    },
  ];

  return (
    <section className="max-w-3xl mt-14">
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-10" />

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-8 tracking-tight text-black dark:text-white">
        Education
      </h2>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              group flex items-center gap-4
              p-5 rounded-xl

              border border-gray-200 dark:border-gray-700
              bg-white/80  dark:bg-[#020617]/40 backdrop-blur-md

              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              hover:border-indigo-400/40
            "
          >
            {/* Logo */}
            <div
              className="
                w-14 h-14 flex items-center justify-center
                rounded-xl overflow-hidden
                bg-white dark:bg-gray-00
                border border-gray-200  dark:bg-[#020617]/40
                shadow-sm
              "
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <span className="text-sm text-gray-500">
                  {item.name[0]}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.sub}
              </p>
            </div>

            {/* Year */}
            {item.year && (
              <span
                className="
                  text-xs whitespace-nowrap px-3 py-1 rounded-full
                  bg-indigo-50 dark:bg-indigo-500/10
                  text-indigo-600 dark:text-indigo-300
                  border border-indigo-200 dark:border-indigo-500/20
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
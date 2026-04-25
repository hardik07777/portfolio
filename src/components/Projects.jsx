import { useEffect } from "react";
import p1 from "../photos/p1.png";
import p2 from "../photos/p2.png";
import p3 from "../photos/p3.png";

const projects = [
  {
    title: "CollabBoard",
    tech: "React • WebSockets • TypeScript",
    thumbnail: p1,
    link: "https://collab-board-murex.vercel.app/",
  },
  {
    title: "ChatApp",
    tech: " WebRTC • React • MongoDB",
    thumbnail: p2,
    link: "https://chat-app-66sw.vercel.app/login",
  },
  {
    title: "Finance Dashboard",
    tech: "Next.js • Charts",
    thumbnail: p3,
    link: "https://financial-dashboard-chi-seven.vercel.app/",
  },
];

export default function Projects() {
  const loopProjects = [...projects, ...projects];

  // preload images
  useEffect(() => {
    projects.forEach((p) => {
      const img = new Image();
      img.src = p.thumbnail;
    });
  }, []);

  return (
    <section className="mt-16 max-w-5xl">
      <div className="w-full h-px bg-gray-200 dark:bg-gray-400 mb-10" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
          Projects
        </h2>

        <a
          href="https://github.com/hardik07777"
          target="_blank"
          className="text-sm px-4 py-2 rounded-full
border border-gray-300/70 dark:border-gray-600/70
bg-white/70 dark:bg-gray-800/60 backdrop-blur-md
text-gray-700 dark:text-gray-300
hover:border-indigo-400 hover:text-indigo-500
hover:shadow-[0_6px_20px_rgba(99,102,241,0.25)]
dark:hover:shadow-[0_6px_20px_rgba(99,102,241,0.15)]
transition-all duration-300"
        >
          View All →
        </a>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={(e) => {
          e.currentTarget
            .querySelector(".scroll-track")
            .style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget
            .querySelector(".scroll-track")
            .style.animationPlayState = "running";
        }}
      >
        <div className="scroll-track flex gap-6 w-max">
          {loopProjects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="relative min-w-[280px] h-56 rounded-2xl overflow-hidden 
bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
border border-gray-200 dark:border-gray-700/70 
cursor-pointer group transition active:scale-[0.98]"
              >
                {/* Thumbnail */}
                <img
                  src={p.thumbnail}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
dark:from-black/80 dark:via-black/40 flex items-end p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-300">{p.tech}</p>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none 
shadow-[0_0_40px_rgba(99,102,241,0.35)]
dark:shadow-[0_0_40px_rgba(99,102,241,0.2)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
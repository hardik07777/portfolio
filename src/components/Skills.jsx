import {
  FaReact, FaNodeJs, FaDocker , FaMicrosoft 
} from "react-icons/fa";

import {
  SiNextdotjs, SiTypescript, SiMongodb, SiJavascript,
  SiTailwindcss, SiGraphql, SiPostgresql, SiRedis,
  SiFigma, SiExpress, SiSupabase
} from "react-icons/si";
import {
  SiCplusplus, SiPython, 
  SiGithub, SiGithubactions
} from "react-icons/si";

import { FaGitAlt , FaAws } from "react-icons/fa";

export default function Skills() {
  const skills = [
  // Languages
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "SQL" },

  // Frameworks
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },

  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Pinecone" },

  // Tools
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Azure", icon: <FaMicrosoft /> },
  { name: "CI/CD" },
];
const handleMouseMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();

  let x = e.clientX - (rect.left + rect.width / 2);
  let y = e.clientY - (rect.top + rect.height / 2);

  const max = 10;
  x = Math.max(Math.min(x, max), -max);
  y = Math.max(Math.min(y, max), -max);

  el.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = "translate(0px, 0px) scale(1)";
};

  return (
    <div className="mt-16 max-w-3xl"> 

            <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-10" />

    <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white">Skills</h2>
          
   
      
  <section className=" relative bg-[#f8f8f8] py-10 px-2 dark:bg-[#020617]/40
backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-600
shadow-xl max-w-3xl">
       <span className="
  absolute -top-3 right-2
  text-[10px] px-2.5 py-[3px]
  rounded-full

  bg-gray-200/80 dark:bg-gray-900/90
  backdrop-blur-md

  text-gray-800 dark:text-gray-300

  border border-gray-300/60 dark:border-gray-800/60

  shadow-sm dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]

  tracking-wide
">
  don’t just stare :)
</span>
      
  
      <div className="max-w-5xl mx-auto">

        {/* Title */}

        {/* Tags Grid */}
        <div className="flex flex-wrap gap-3 ">
{skills.map((skill, index) => (
  <div key={index} className="flex items-center gap-2 group">
   <div
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  className="
    relative overflow-hidden
    flex items-center gap-2
    px-4 py-2
    rounded-lg

    bg-white/90 dark:bg-gray-900/70
    backdrop-blur-md

    border border-gray-200 dark:border-gray-600/70

    text-sm font-medium text-gray-800 dark:text-gray-200

    transition-all duration-300 ease-out

    hover:-translate-y-[2px]
    hover:scale-[1.04]
    hover:border-indigo-400/50

    hover:shadow-[0_8px_30px_rgba(99,102,241,0.25)]
    dark:hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]

    cursor-pointer
  "
>
  {/* subtle glow layer
  <div className="
    absolute inset-0 opacity-0 group-hover:opacity-100
    transition duration-300
    bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-500/10
    pointer-events-none
  " /> */}

  <span className="
    text-base z-10
    transition-transform duration-300
    group-hover:scale-125 group-hover:rotate-6
  ">
    {skill.icon}
  </span>

  <span className="
    z-10
    transition-colors duration-300
    group-hover:text-indigo-500 dark:group-hover:text-indigo-400
  ">
    {skill.name}
  </span>
</div>

    

  </div>
))}
        </div>

      </div>
    </section>
    </div>

  );
}
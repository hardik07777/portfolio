export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group block rounded-xl
        border border-gray-200 dark:border-gray-700

        bg-white dark:bg-[#1a1a1a]

        transition-all duration-200
        hover:border-gray-300 dark:hover:border-gray-500
      "
    >
      {/* Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-40 object-cover rounded-t-xl
          "
        />
      )}

      <div className="p-4">
        {/* Title */}
        <h2 className="
          text-base font-medium
          text-gray-900 dark:text-gray-100
        ">
          {project.title}
        </h2>

        {/* Description */}
        <p className="
          text-sm text-gray-500 dark:text-gray-400
          mt-1
        ">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between">
          <span className="
            text-xs text-gray-400
            group-hover:text-gray-600 dark:group-hover:text-gray-300
            transition
          ">
            View project
          </span>

          <span className="
            text-gray-400
            group-hover:translate-x-1
            transition
          ">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
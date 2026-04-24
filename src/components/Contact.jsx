export default function Contact() {
  return (
    <section className="max-w-3xl mt-20">

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 dark:bg-gray-600 mb-10" />

      {/* Content */}
      <div className="flex flex-col gap-4">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-white">
          Get in touch
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 dark:text-gray-300 leading-relaxed max-w-xl">
          Want to chat? Send me an email or reach out on Twitter.
          I’m always open to interesting conversations.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="
              px-4 py-1.5 text-sm rounded-full

              bg-black text-white
              dark:bg-white dark:text-black

              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
              dark:hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]
            "
          >
            Email me →
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-1.5 text-sm rounded-full

              border border-gray-300/70 dark:border-gray-600/70
              bg-white/70 dark:bg-gray-800/60 backdrop-blur-md

              text-gray-700 dark:text-gray-300

              transition-all duration-300
              hover:border-indigo-400
              hover:text-indigo-500
              hover:shadow-[0_6px_20px_rgba(99,102,241,0.25)]
              dark:hover:shadow-[0_6px_20px_rgba(99,102,241,0.15)]
            "
          >
            Twitter
          </a>

        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 dark:text-gray-500 pt-2">
Email is my default endpoint.        </p>

      </div>
    </section>
  );
}
import { Link } from "react-router";

export default function Welcome() {
  return (
    <section
      id="home"
      className="relative z-20 flex min-h-dvh items-center px-5 pb-16 pt-24 md:px-12"
    >
      <div className="glass max-w-2xl rounded-2xl p-8 text-white animate-fadein md:p-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Dion Machado
        </h1>

        <h2 className="mt-4 text-2xl font-medium text-gray-300 md:text-3xl">
          Data Scientist at UofT
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
          Using Python, JavaScript, and machine learning to build interactive
          apps and tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/Projects"
            className="inline-flex min-h-11 cursor-pointer items-center rounded-full bg-cyan-400 px-6 py-3 font-medium text-[#070B14] transition duration-200 hover:bg-cyan-300"
          >
            View My Projects
          </Link>
          <Link
            to="/Contact"
            className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-white/20 px-6 py-3 font-medium text-white transition duration-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/SOmerandomdev-ui"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex min-h-11 items-center transition hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/a-random-person-8906713a5/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex min-h-11 items-center transition hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="/Resume.pdf"
            download
            aria-label="Download Resume PDF"
            className="inline-flex min-h-11 items-center transition hover:text-cyan-400"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

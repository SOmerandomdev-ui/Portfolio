import { ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Arcane Spell Casting",
    index: "01",
    status: "Shipped",
    description:
      "MediaPipe hand tracking drives live spell casts from camera gestures — each hand pose fires a different effect.",
    tags: ["HTML5", "CSS3", "TypeScript", "React", "MediaPipe", "Pixi.js"],
    github: "https://github.com/SOmerandomdev-ui/Arcane-Spell-Caster",
    live: "https://somerandomdev-ui.github.io/Arcane-Spell-Caster/",
    kind: "link",
  },
  {
    title: "Odin Project",
    index: "02",
    status: "In Progress",
    description:
      "Full-stack curriculum builds from plain HTML/CSS through JavaScript and React — nine shipped apps live on Vercel.",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "SQL", "Node.js"],
    github: "https://github.com/SOmerandomdev-ui/Odin-Projects",
    kind: "odin",
  },
  {
    title: "Project Three",
    index: "03",
    status: "In Progress",
    description:
      "A short description of what this project does and the problem it solves. Keep it to 2–3 sentences for a clean card.",
    tags: ["Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three-demo.com",
    kind: "link",
  },
];

const odinSubProjects = [
  { name: "Admin Dashboard", url: "https://odin-projects-sandy.vercel.app" },
  { name: "BattleShip", url: "https://odin-projects-five.vercel.app" },
  { name: "Calculator", url: "https://odin-calculator-beige.vercel.app" },
  { name: "Etch-A-Sketch", url: "https://odin-etch-a-sketch-iota.vercel.app" },
  { name: "Library", url: "https://odin-library-steel.vercel.app" },
  {
    name: "Rock-Paper-Scissors",
    url: "https://odin-rock-paper-scissors-tau.vercel.app",
  },
  { name: "Sign-up-Form", url: "https://odin-sign-up-form-nine.vercel.app" },
  { name: "Tic-Tac-Toe", url: "https://odin-tic-tac-toe-mu.vercel.app" },
  { name: "Weather-App", url: "https://odin-weather-app-zeta.vercel.app" },
];

export default function Projects() {
  const [showOdin, setShowOdin] = useState(false);

  useEffect(() => {
    if (!showOdin) return;

    const onKey = (e) => {
      if (e.key === "Escape") setShowOdin(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showOdin]);

  return (
    <section
      id="projects"
      className="relative z-20 flex min-h-screen flex-col items-center px-6 pb-24 pt-20"
    >
      {/* Header */}
      <header className="relative mb-14 flex max-w-3xl flex-col items-center text-center animate-fadein">
        <div className="pointer-events-none absolute -inset-x-24 -top-16 h-48 rounded-full"/>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
          Projects
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          What I have done
        </h1>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"/>
      </header>

      {/* Cards */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.07] animate-fadein"
          >
            {/* Top scan glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-60 transition group-hover:opacity-100"/>
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100"/>

            <div className="mb-5 flex w-full items-center justify-between">
              <span className="font-mono text-sm tracking-widest text-cyan-300/80">
                {project.index}
              </span>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${
                  project.status === "Shipped"
                    ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-300"
                    : "border-cyan-400/30 bg-cyan-400/5 text-cyan-300"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/65">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-cyan-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"/>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <img
                  src="github.svg"
                  alt=""
                  className="Github h-[18px] w-[18px]"
                />
              </a>

              {project.kind === "odin" ? (
                <button
                  type="button"
                  onClick={() => setShowOdin(true)}
                  aria-label="Open Odin Project deployments"
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 text-sm font-medium text-cyan-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white"
                >
                  View apps
                  <ExternalLink size={16} />
                </button>
              ) : (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo of ${project.title}`}
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 text-sm font-medium text-cyan-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white"
                >
                  Live
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Odin constellation modal */}
      {showOdin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070B14]/75 p-4 backdrop-blur-md"
          onClick={() => setShowOdin(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="odin-modal-title"
            className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-cyan-400/20 bg-[#0a1220]/95 p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
            />

            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-cyan-400/40 hover:text-white"
              onClick={() => setShowOdin(false)}
            >
              <X size={18} />
            </button>


            <h2
              id="odin-modal-title"
              className="text-2xl font-semibold tracking-tight"
            >
              Odin Project
            </h2>
            <p className="mb-7 mt-2 text-sm text-white/55">
              Nine curriculum builds — each live on Vercel
            </p>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {odinSubProjects.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-cyan-100/90 transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  <span>{sub.name}</span>
                  <ExternalLink
                    size={15}
                    className="shrink-0 text-cyan-300/40 transition group-hover:text-cyan-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

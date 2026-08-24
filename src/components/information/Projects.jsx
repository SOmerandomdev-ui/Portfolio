import { ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Arcane Spell Casting",
    index: "01",
    status: "Shipped",
    description:
      "MediaPipe hand tracking drives live spell casts from camera gestures — each hand pose fires a different effect.",
    expandeddescription: `6 different spells were used: a shield spell, fireball, lightning, red orb, black hole, and a reality warp spell.

      Mediapipe was imported and used to track hand motions and get the coordinates of each hand.

      In combination with linear algebra, the coordinates of each hand were used to detect certain characteristics such as the way the palm is facing and whether the hand is closed into a fist.

      Based on certain conditions, such as the palm facing up or facing sideways, a spell is triggered and cast with VFX made in Pixi.js.

      In addition, TensorFlow.js was used to train a neural network on over 900 samples to detect a specific pose. This model was imported so that making that pose would trigger a spell.`,
    tags: ["HTML5", "CSS3", "TypeScript", "React", "MediaPipe", "Pixi.js", "Tensorflow.js"],
    image: 'Arcane-Spell.png',
    github: "https://github.com/SOmerandomdev-ui/Arcane-Spell-Caster",
    live: "https://somerandomdev-ui.github.io/Arcane-Spell-Caster/",
    kind: "link",
  },
  {
    title: "Odin Project",
    index: "02",
    status: "In Progress",
    description: "Full-stack curriculum builds from plain HTML/CSS through JavaScript and React — nine shipped apps live on Vercel.",
    expandeddescription: `The odin project is a curriculum that teaches web development from the ground up. From introducing basic HTML, CSS and javascript, to data structures and algorithms, all the way to understanding Node.js, React, and databases.

    As well as introducing coding languages, libraries, and frameworks, it also introduces concepts and tools that are frequently by people and companies. These include but are not limited to: Git, Vitest, Webpack, Virtual machines, CLI navgiation 
    
    I have gone through the whole thing i made many projects and included all that ones that I have done, from basic one page restaurant pages, to browser games from battleship all from scratch.
    
    This project isn't meant to showcase high-level projects but rather to outline the learning path that I have taken in order to build all my skills from scracth `,
    tags: ["HTML5", "CSS3", "JavaScript", "React", "SQL", "Node.js"],
    image: 'Odin-Project.png',
    github: "https://github.com/SOmerandomdev-ui/Odin-Projects",
    kind: "odin",
  },
  {
    title: "Interactive 3D Portfolio",
    index: "03",
    status: "Shipped",
    description: "A 3-D portfolio website made using react, tailwind.css, three.js, and framer-motion",
    expandeddescription: `a React portfolio built with Vite, styled with Tailwind CSS, and routed with React Router across six pages: Home, About, Projects, Skills, Education, and Contact.

    The background is a live Three.js solar system rendered through React Three Fiber. Each nav section maps to a planet. A custom camera controller lerps the view to each planet when you change routes, with scroll-to-zoom and bloom post-processing on the starfield.

    The UI uses glass-style panels over the scene. Framer Motion handles project card animations. The Projects page also includes an Odin Project modal that links to nine live Vercel builds.

    Other sections include a horizontally scrollable skills grid on mobile, coursework links on Education, and a Contact page with email copy, GitHub, LinkedIn, and resume download.`,
    tags: ["HTML5", "CSS3", "Javascript", "React", "Three.js", "Framer-motion"],
    image: 'Portfolio.png',
    github: "https://github.com/SOmerandomdev-ui/Portfolio",
    live: "https://dionmachado-portfolio.vercel.app/",
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
  const [showCard, setshowCard] = useState('');

  useEffect(() => {
    if (!showOdin && !showCard) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        setShowOdin(false);
        setshowCard('');
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showOdin, showCard]);

  return (
    <section
      id="projects"
      className="relative z-20 flex h-dvh flex-col items-center px-5 pb-14 pt-14 md:px-6 overflow-hidden"
    >
      <header className="relative mb-12 flex max-w-3xl flex-col items-center text-center animate-fadein">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
          Projects
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          What I have done
        </h1>
        <div
          className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
          aria-hidden
        />
      </header>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            layoutId={project.title}
            onClick={() => !showCard && setshowCard(project.title)}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md cursor-pointer transition-[border-color,box-shadow,background-color] duration-200 ease-out hover:border-cyan-400/50 hover:bg-white/[0.06] hover:shadow-[0_0_28px_rgb(34_211_238/0.14),inset_0_1px_0_rgb(34_211_238/0.2)] motion-reduce:transition-none ${
              showCard && showCard !== project.title ? "opacity-0 pointer-events-none" : ""
            }`}
            style={{ visibility: showCard && showCard !== project.title ? "hidden" : "visible" }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-60 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden" />

            <div className="mb-5 flex w-full items-center justify-between">
              <span className="font-mono text-sm tracking-widest text-cyan-300/80 pointer-events-none">
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

            <h2 className="text-2xl font-semibold tracking-tight text-white pointer-events-none">
              {project.title}
            </h2>
            <div className="mt-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/65 pointer-events-none">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 pointer-events-none">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-cyan-200/80"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaGithub size={18} aria-hidden />
              </a>

              {project.kind === "odin" ? (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setShowOdin(true); }}
                  aria-label="Open Odin Project deployments"
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 text-sm font-medium text-cyan-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white"
                >
                  View apps
                  <ExternalLink size={16} aria-hidden />
                </button>
              ) : (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo of ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 text-sm font-medium text-cyan-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white"
                >
                  Live
                  <ExternalLink size={16} aria-hidden />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {showCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setshowCard('')}
            />
            <motion.div
              layoutId={showCard}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-cyan-400/30 bg-[#0a1220]/95 p-8 backdrop-blur-md"
            >
              {(() => {
                const project = projects.find(p => p.title === showCard);
                if (!project) return null;
                return (
                  <>
                    <button
                      type="button"
                      aria-label="Close"
                      onClick={() => setshowCard('')}
                      className="absolute right-4 top-4 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-cyan-400/40 hover:text-white z-10"
                    >
                      <X size={18} />
                    </button>

                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-sm tracking-widest text-cyan-300/80">
                        {project.index}
                      </span>
                      <span
                        className={`flex self-center rounded-full border mr-12  px-3 py-1 text-xs font-medium tracking-wide ${
                          project.status === "Shipped"
                            ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-300"
                            : "border-cyan-400/30 bg-cyan-400/5 text-cyan-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
                      {project.title}
                    </h2>

                    <div className="mb-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <p className="text-base leading-relaxed text-white/70 mb-6 whitespace-pre-line">
                      {project.expandeddescription}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-cyan-200/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        <FaGithub size={18} aria-hidden />
                      </a>

                      {project.kind === "odin" ? (
                        <button
                          type="button"
                          onClick={() => setShowOdin(true)}
                          className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 text-sm font-medium text-cyan-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white"
                        >
                          View apps
                          <ExternalLink size={16} aria-hidden />
                        </button>
                      ) : (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 text-sm font-medium text-cyan-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white"
                        >
                          Live
                          <ExternalLink size={16} aria-hidden />
                        </a>
                      )}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showOdin ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070B14]/75 p-4 backdrop-blur-md"
          onClick={() => setShowOdin(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="odin-modal-title"
            className="relative max-h-[85vh] w-full max-w-xl rounded-2xl border border-cyan-400/20 bg-[#0a1220]/95 p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
            />

            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-cyan-400/40 hover:text-white"
              onClick={() => setShowOdin(false)}
            >
              <X size={18} />
            </button>

            <h2
              id="odin-modal-title"
              className="pr-12 text-2xl font-semibold tracking-tight"
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
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

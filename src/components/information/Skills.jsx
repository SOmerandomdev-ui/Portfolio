import {
  SiCss,
  SiGit,
  SiHtml5,
  SiNumpy,
  SiPython,
  SiReact,
  SiSqlite,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
  SiTailwindcss,
  SiR,
} from "react-icons/si";
import { TbRoute, TbScan, TbSparkles, TbCpu, TbTestPipe } from "react-icons/tb";

const Groups = [
  {
    Section: "Languages",
    Number: "01",
    Amount: "6 Skills",
    Description: "Languages that I code in",
    Skills: [
      { name: "Python", Icon: SiPython },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "SQL", Icon: SiSqlite },
      { name: "R", Icon: SiR },
    ],
  },
  {
    Section: "Libraries and frameworks",
    Number: "02",
    Amount: "7 Skills",
    Description: "Libraries and frameworks that I use",
    Skills: [
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "NumPy", Icon: SiNumpy },
      { name: "Tensorflow.js", Icon: TbCpu },
      { name: "Vitest", Icon: TbTestPipe },
      { name: "Pixi.js", Icon: TbSparkles },
      { name: "Three.js", Icon: SiThreedotjs },
    ],
  },
  {
    Section: "Tools",
    Number: "03",
    Amount: "5 Skills",
    Description: "Tools I use to help deploy and build projects",
    Skills: [
      { name: "Vite", Icon: SiVite },
      { name: "React Router", Icon: TbRoute },
      { name: "Git", Icon: SiGit },
      { name: "MediaPipe", Icon: TbScan },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-20 flex min-h-dvh flex-col items-center px-5 pb-14 pt-14 md:px-6"
    >
      <header className="relative mb-14 flex max-w-3xl flex-col items-center text-center animate-fadein">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
          Skills
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          What I work with
        </h1>
        <div
          aria-hidden
          className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
        />
      </header>

      <div className="skills-x-scroll flex w-full max-w-6xl snap-x snap-mandatory gap-8 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {Groups.map((group) => (
          <article
            key={group.Section}
            className="relative flex w-[min(86vw,22rem)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-200 hover:border-cyan-400/35 hover:bg-white/[0.07] md:w-auto animate-fadein"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="font-mono text-sm tracking-widest text-cyan-300/80">
                {group.Number}
              </span>
              <span className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300">
                {group.Amount}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {group.Section}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {group.Description}
            </p>

            <div
              className="my-4 h-px w-1/2 self-center bg-gradient-to-r from-transparent via-white/70 to-transparent"
              aria-hidden
            />

            <ul className="flex flex-col gap-2">
              {group.Skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex min-h-11 items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 transition duration-200 hover:border-cyan-400/35 hover:bg-cyan-400/10"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                    {skill.Icon ? <skill.Icon size={18} aria-hidden /> : null}
                  </span>
                  <span className="text-sm font-medium text-cyan-100/90">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

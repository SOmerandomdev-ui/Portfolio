import { ExternalLink } from "lucide-react";

const education = {
  years: "2024 – Present",
  school: "University of Toronto",
  location: "Toronto, ON",
  badge: "BSc",
  degree: "BSc — Data Science & Computer Science",
  highlights: [
    "Building foundations in programming, data analysis, and machine learning",
    "Actively shipping web apps with React, Python, and related tooling",
  ],
};

const courses = [
  {
    code: "CSC108",
    label: "Intro to Computer Programming",
    status: "completed",
    detail: "Completed",
    calendar: "https://artsci.calendar.utoronto.ca/course/csc108h1",
  },
  {
    code: "CSC148",
    label: "Intro to Computer Science",
    status: "completed",
    detail: "Completed",
    calendar: "https://artsci.calendar.utoronto.ca/course/csc148h1",
  },
  {
    code: "STA130",
    label: "Intro to Statistical Reasoning",
    status: "completed",
    detail: "Completed",
    calendar: "https://artsci.calendar.utoronto.ca/course/sta130h1",
  },
  {
    code: "MAT137",
    label: "Calculus with Proofs",
    status: "completed",
    detail: "Completed",
    calendar: "https://artsci.calendar.utoronto.ca/course/mat137y1",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-20 flex min-h-dvh items-center px-5 pb-16 pt-14 md:px-12 overflow-hidden"
    >
      <div className="glass relative w-full max-w-4xl rounded-2xl p-8 text-white animate-fadein md:p-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
          Education
        </p>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm tracking-wide text-cyan-400">
              {education.years}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              {education.school}
            </h1>
            <p className="mt-2 text-base text-white/55">{education.location}</p>
          </div>

          <span className="mt-1 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80">
            {education.badge}
          </span>
        </div>

        <p className="mt-6 text-lg text-white/90 md:text-xl">{education.degree}</p>

        <ul className="mt-5 space-y-2">
          {education.highlights.map((line) => (
            <li
              key={line}
              className="flex gap-3 text-base leading-relaxed text-white/60"
            >
              <span className="shrink-0 text-cyan-400" aria-hidden>
                →
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div
          aria-hidden
          className="my-8 h-px w-full max-w-md bg-gradient-to-r from-cyan-400/50 via-white/10 to-transparent"
        />

        <p className="mb-5 font-mono text-sm tracking-wide text-cyan-400">
          ( Relevant coursework )
        </p>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <li key={course.code}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 py-2 text-sm font-medium tabular-nums text-white">
                  {course.code}
                  <span className="mx-2 opacity-40">·</span>
                  {course.detail}
                </span>

                <a
                  href={course.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  Information
                  <ExternalLink size={14} aria-hidden />
                </a>
              </div>
              <p className="mt-2 pl-1 text-sm text-white/45">{course.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

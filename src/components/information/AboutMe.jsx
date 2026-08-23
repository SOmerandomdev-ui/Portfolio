const TAGS = [
  "Python",
  "JavaScript",
  "React",
  "Machine Learning",
  "Data Science",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 flex min-h-dvh items-center justify-end px-5 pb-16 pt-24 md:px-12"
    >
      <div className="glass relative max-w-4xl rounded-2xl p-8 text-white animate-fadein md:p-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Building with code, data, and curiosity.
        </h1>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              I&apos;m Dion, a student at the University of Toronto interested
              in data science, software development, and machine learning. I enjoy learning about machine learning, neural networks, Ai, and software. I am always looking for 
              a chance to display my skills whether that be making projects, attending a hackathon, or looking for work.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              I&apos;m currently developing my skills across Python, JavaScript,
              React, and data analysis while building projects that display
              concepts I find fascinating.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              Outside of programming, I&apos;m constantly learning new concepts
              in mathematics, science, astronomy and technology. I view learning as something that should be done
              lifelong no matter your age.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              My goal is to keep refining my skills so I can develop applications and systems that help people and display the cool concepts found in software and machine learning 
            </p>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

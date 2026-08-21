export default function About() {
    return (
        <section
            id="about"
            className="relative z-20 flex mr-12 justify-end min-h-screen items-center"
        >
            {/* Glass background */}
            <div className="absolute h-[600px] w-[1000px] rounded-2xl bg-black/10 backdrop-blur-md animate-fadein" />

            <div className="relative max-w-4xl text-white animate-fadein">

                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                    About Me
                </p>

                <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                    Building with code, data, and curiosity.
                </h1>

                <div className="mt-8 grid gap-10 md:grid-cols-2">

                    <div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            I'm Dion, a student at the University of Toronto interested
                            in data science, software development, and machine learning.
                            I enjoy taking ideas and turning them into interactive,
                            useful applications.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-gray-300">
                            I'm currently developing my skills across Python, JavaScript,
                            React, and data analysis while building projects that combine
                            technology with problem solving.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Outside of programming, I'm constantly learning new concepts
                            in mathematics, science, and technology. I like challenging
                            myself with projects that force me to understand how things
                            work rather than simply getting them to work.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-gray-300">
                            My goal is to keep building, experimenting, and developing
                            the skills needed to create meaningful products with
                            technology and data.
                        </p>
                    </div>

                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                        Python
                    </span>

                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                        JavaScript
                    </span>

                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                        React
                    </span>

                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                        Machine Learning
                    </span>

                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                        Data Science
                    </span>
                </div>

            </div>
        </section>
    );
}

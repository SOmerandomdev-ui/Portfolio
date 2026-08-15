export default function Projects() {
    return (
        <section
            id="experience"
            className="relative z-20 flex ml-20 justify-start min-h-screen items-center"
        >
            {/* Glass background */}
            <div className="absolute h-[600px] w-[1000px] rounded-2xl bg-black/10 backdrop-blur-md" />

            <div className="relative max-w-4xl text-white">

                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                    Experience
                </p>

                <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                    Where I have applied 
                </h1>

                <div className="mt-10 space-y-10">

                    <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-cyan-300">
                                2024 — Present
                            </p>
                            <h2 className="mt-1 text-xl font-semibold">
                                Software Developer Intern
                            </h2>
                            <p className="text-sm text-gray-400">
                                Company Name
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-300">
                            Built and maintained internal tools using React and
                            Python, improving workflow efficiency for the data
                            team. Collaborated closely with engineers to design
                            scalable solutions for recurring problems.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-cyan-300">
                                2023 — 2024
                            </p>
                            <h2 className="mt-1 text-xl font-semibold">
                                Research Assistant
                            </h2>
                            <p className="text-sm text-gray-400">
                                University of Toronto
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-300">
                            Assisted in data collection and analysis for a
                            machine learning research project, applying
                            statistical methods to large datasets and
                            presenting findings to the research team.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-cyan-300">
                                2022 — 2023
                            </p>
                            <h2 className="mt-1 text-xl font-semibold">
                                Freelance Developer
                            </h2>
                            <p className="text-sm text-gray-400">
                                Self-employed
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-gray-300">
                            Developed small-scale web applications for local
                            clients, handling everything from front-end design
                            to deployment.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
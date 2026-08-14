export default function Welcome() {
    return (
        <section
            id="home"
            className="relative z-20 ml-12 flex min-h-screen items-center px-12"
        >
            {/* Glass background */}
            <div className="absolute left-0 z-[-1] h-[500px] w-[700px] rounded-2xl  bg-black/10 backdrop-blur-md" />

            <div className="max-w-2xl text-white">

                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                    Welcome to my portfolio
                </p>

                <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
                    Dion Machado
                </h1>

                <h2 className="mt-4 text-2xl font-medium text-gray-300 md:text-3xl">
                    Data Scientist at UofT
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
                    Using Python, JavaScript, and machine learning to build
                    apps and stuff idk what to put here lowkey
                </p>

                <div className="mt-8 flex gap-4">

                    <a className="cursor-pointer rounded-full bg-cyan-400 px-6 py-3 font-medium text-[#070B14] transition duration-300 hover:bg-cyan-300">
                        View My Projects
                    </a>

                    <a className="cursor-pointer rounded-full border border-white/20 px-6 py-3 font-medium text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400">
                        Contact Me
                    </a>

                </div>

                <div className="mt-8 flex gap-6 text-sm text-gray-400">

                    <a className="cursor-pointer transition hover:text-cyan-400">
                        GitHub
                    </a>

                    <a className="cursor-pointer transition hover:text-cyan-400">
                        LinkedIn
                    </a>

                    <a className="cursor-pointer transition hover:text-cyan-400">
                        Resume
                    </a>

                </div>

            </div>
        </section>
    );
}
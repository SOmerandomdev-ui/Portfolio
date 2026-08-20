import { Suspense, useState, useEffect } from "react";
import { Link } from "react-router"
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";


export default function NavBar({State}) {
    return (
        <nav className="absolute  z-50 top-0 left-0 flex h-[10vh] w-full items-center justify-between px-12  text-white ">
            
            <a className="text-xl font-semibold tracking-wide transition duration-300 hover:text-cyan-400 cursor-pointer opacity-150">
                Dion Machado
            </a>

            <div className="flex items-center gap-8">
                <Link to="/"
                className="text-sm text-gray-300 transition duration-300 hover:text-cyan-400 cursor-pointer"
                onClick={()=> State("Home")}>
                    Home
                </Link>

                <Link to="/About" className="text-sm text-gray-300 transition duration-300 hover:text-cyan-400 cursor-pointer"
                onClick={()=> State("About")}>
                    About Me
                </Link>

                <Link to="Projects" className="text-sm text-gray-300 transition duration-300 hover:text-cyan-400 cursor-pointer"
                onClick={()=> State("Projects")}>
                    Projects
                </Link>

                <Link to="Skills" className="text-sm text-gray-300 transition duration-300 hover:text-cyan-400 cursor-pointer"
                onClick={()=> State("Skills")}>
                    Skills
                </Link>

                <Link to="Education" className="text-sm text-gray-300 transition duration-300 hover:text-cyan-400 cursor-pointer"
                onClick={()=> State("Education")}>
                    Education
                </Link>

                <a className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-[#070B14] cursor-pointer">
                    Contact
                </a>
            </div>
        </nav>
    );
}
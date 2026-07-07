"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
        >
            {/* Background Blur */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-[120px]" />

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 pt-28 pb-20 lg:flex-row lg:px-8">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600"> 🚀 Trusted IT Solution Provider </span>
                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl"> Empowering Your <span className="block text-blue-600"> Business With Modern </span> Digital Solutions. </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Biswas IT Firm provides modern web development, software solutions,
                        UI/UX design, and digital transformation services that help
                        businesses grow faster.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                        > Get Started <FaArrowRight />
                        </a>
                        <a
                            href="#services"
                            className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                        > <FaPlay size={12} /> Our Services </a>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                            <p className="text-slate-600">Projects</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                            <p className="text-slate-600">Happy Clients</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">5★</h3>
                            <p className="text-slate-600">Client Rating</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-xl"
                >
                    <motion.img
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        src="/hero.png"
                        alt="Hero"
                        className="w-full"
                    />

                    {/* Floating Card */}
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="absolute left-0 top-10 rounded-2xl bg-white p-5 shadow-xl"
                    >
                        <h4 className="font-semibold">Web Development</h4>
                        <p className="text-sm text-slate-500">
                            Modern & Scalable
                        </p>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="absolute bottom-8 right-0 rounded-2xl bg-white p-5 shadow-xl"
                    >
                        <h4 className="font-semibold">24/7 Support</h4>
                        <p className="text-sm text-slate-500">
                            Always Available
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
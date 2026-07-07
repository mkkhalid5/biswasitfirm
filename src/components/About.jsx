"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const features = [
    "Professional Web Development",
    "Modern UI/UX Design",
    "Scalable Software Solutions",
    "Dedicated Technical Support",
];

const About = () => {
    return (
        <section
            id="about"
            className="bg-white py-24"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-8">
                {/* Left Image */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="relative flex-1"
                >
                    <img
                        src="/about.png"
                        alt="About"
                        className="w-full rounded-3xl shadow-xl"
                    />

                    <div className="absolute -bottom-6 -right-6 rounded-2xl bg-blue-600 px-8 py-6 text-white shadow-xl">
                        <h2 className="text-3xl font-bold">
                            3+
                        </h2>

                        <p className="text-sm">
                            Years Experience
                        </p>
                    </div>
                </motion.div>

                {/* Right Content */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        About Us
                    </span>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
                        Building Digital Solutions
                        <span className="block text-blue-600">
                            That Drive Business Growth
                        </span>
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Biswas IT Firm is a technology company dedicated to delivering
                        high-quality web applications, custom software, UI/UX design,
                        and business automation solutions. We combine creativity with
                        modern technology to help businesses achieve their goals.
                    </p>

                    {/* Mission */}

                    <div className="mt-8 rounded-2xl border border-gray-200 p-5">
                        <h3 className="text-lg font-semibold text-slate-900">
                            Our Mission
                        </h3>

                        <p className="mt-2 text-slate-600">
                            To provide reliable, innovative and scalable digital
                            solutions that create long-term value for our clients.
                        </p>
                    </div>

                    {/* Features */}

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {features.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-blue-600" />

                                <span className="text-slate-700">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Button */}

                    <a
                        href="#services"
                        className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Explore Services
                        <FaArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
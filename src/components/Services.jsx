"use client";

import { motion } from "framer-motion";
import {
    FaLaptopCode,
    FaMobileAlt,
    FaPaintBrush,
    FaShoppingCart,
    FaServer,
    FaHeadset,
} from "react-icons/fa";

const services = [
    {
        title: "Web Development",
        description:
            "Modern, fast and scalable websites using the latest technologies.",
        icon: FaLaptopCode,
    },
    {
        title: "App Development",
        description:
            "Cross-platform mobile applications with excellent performance.",
        icon: FaMobileAlt,
    },
    {
        title: "UI / UX Design",
        description:
            "Clean, user-friendly and modern interface design for every business.",
        icon: FaPaintBrush,
    },
    {
        title: "E-Commerce",
        description:
            "Complete online store solutions with secure payment integration.",
        icon: FaShoppingCart,
    },
    {
        title: "Custom Software",
        description:
            "Business automation and customized software development services.",
        icon: FaServer,
    },
    {
        title: "Support & Maintenance",
        description:
            "Reliable maintenance and technical support whenever you need.",
        icon: FaHeadset,
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900">
                        Solutions Designed
                        <span className="block text-blue-600">
                            For Your Business
                        </span>
                    </h2>

                    <p className="mt-5 text-slate-600 leading-8">
                        We provide high-quality digital solutions to help businesses grow
                        faster with modern technologies and innovative ideas.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                            >
                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                    <Icon />
                                </div>

                                {/* Content */}

                                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {service.description}
                                </p>

                                {/* Button */}

                                <button className="mt-8 text-blue-600 font-semibold transition group-hover:translate-x-2">
                                    Learn More →
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
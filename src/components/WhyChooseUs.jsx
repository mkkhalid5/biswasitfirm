"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaCheckCircle,
    FaClock,
    FaShieldAlt,
    FaUsers,
    FaCode,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        icon: FaCode,
        title: "Modern Technology",
        description: "We build scalable applications using modern development technologies.",
    },
    {
        icon: FaClock,
        title: "On-Time Delivery",
        description: "Every project is delivered within the agreed timeline.",
    },
    {
        icon: FaShieldAlt,
        title: "Secure Solutions",
        description: "Security and performance are our top priorities.",
    },
    {
        icon: FaHeadset,
        title: "Dedicated Support",
        description: "We're always available whenever you need technical assistance.",
    },
];

const stats = [
    {
        number: "100+",
        label: "Projects Completed",
    },
    {
        number: "50+",
        label: "Happy Clients",
    },
    {
        number: "3+",
        label: "Years Experience",
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/why-us.png"
                            alt="Why Choose Us"
                            width={100}
                            height={100}
                            className="rounded-3xl shadow-xl"
                        />

                        <div className="absolute -bottom-6 left-6 rounded-2xl bg-blue-600 px-6 py-5 text-white shadow-xl">
                            <div className="flex items-center gap-3">
                                <FaUsers className="text-2xl" />

                                <div>
                                    <h4 className="text-xl font-bold">
                                        Trusted Team
                                    </h4>

                                    <p className="text-sm text-blue-100">
                                        Professional Developers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            Why Choose Us
                        </span>

                        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
                            We Deliver Quality
                            <span className="block text-blue-600">
                                Beyond Expectations
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            Our experienced team focuses on delivering reliable,
                            high-performance and business-oriented digital solutions
                            that help companies grow with confidence.
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * .1,
                                        }}
                                        viewport={{ once: true }}
                                        className="flex gap-5 rounded-2xl border border-gray-200 p-5 transition hover:border-blue-500 hover:shadow-lg"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
                                            <Icon />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-2 text-slate-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Stats */}

                        <div className="mt-12 grid grid-cols-3 gap-4">
                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl bg-slate-50 p-5 text-center"
                                >
                                    <h3 className="text-3xl font-bold text-blue-600">
                                        {item.number}
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-600">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
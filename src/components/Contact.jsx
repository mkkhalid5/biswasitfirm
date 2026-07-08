"use client";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaLocationDot,
    FaPhone,
} from "react-icons/fa6";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS Integration Here

        alert("Message Sent Successfully!");
    };

    return (
        <section
            id="contact"
            className="bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        Contact Us
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900">
                        Let`s Build Something
                        <span className="block text-blue-600">
                            Amazing Together
                        </span>
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Have an idea or project? We`d love to hear from you.
                        Send us a message and we`ll get back to you soon.
                    </p>
                </motion.div>

                {/* Content */}

                <div className="mt-16 grid gap-10 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="rounded-3xl bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                    <FaPhone />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Phone
                                    </h3>

                                    <p className="text-slate-600">
                                        +880 1700-000000
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Email
                                    </h3>

                                    <p className="text-slate-600">
                                        info@biswasit.com
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                    <FaLocationDot />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Address
                                    </h3>

                                    <p className="text-slate-600">
                                        Rajshahi, Bangladesh
                                    </p>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-white p-8 shadow-sm"
                    >

                        <div className="grid gap-6 md:grid-cols-2 text-black">

                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
                            />

                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            required
                            className="mt-6 w-full text-black rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write Your Message..."
                            required
                            className="mt-6 w-full text-black resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
                        />

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
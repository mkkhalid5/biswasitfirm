"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
];

const services = [
    "Web Development",
    "UI/UX Design",
    "E-Commerce",
    "Custom Software",
    "Maintenance",
];

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company */}
                    <div>
                        <Link href="/" className="text-3xl font-bold">
                            <span className="text-blue-500">Biswas</span>
                            <span className="text-white"> IT</span>
                        </Link>

                        <p className="mt-5 leading-7 text-gray-400">
                            We build modern, scalable and high-quality digital solutions to
                            help businesses grow faster with innovative technology.
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="transition hover:text-blue-500"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Services
                        </h3>

                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="transition hover:text-blue-500"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-4 text-gray-400">
                            <p>📍 Rajshahi, Bangladesh</p>

                            <p>📞 +880 1700-000000</p>

                            <p>📧 info@biswasit.com</p>

                            <p>🕒 Sat - Thu : 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}

                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 md:flex-row">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Biswas IT Firm. All Rights Reserved.
                    </p>

                    <a
                        href="#home"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                    >
                        <FaArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
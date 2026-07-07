"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    { id: "about", name: "About", href: "#about" },
    { id: "services", name: "Services", href: "#services" },
    { id: "why-us", name: "Why Us", href: "#why-us" },
    { id: "contact", name: "Contact", href: "#contact" },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-80px 0px -40% 0px",
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleClick = (id) => {
        setActiveSection(id);
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-blue-600">Biswas</span>{" "}
                    <span className="text-slate-900">IT</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => handleClick(item.id)}
                            className={`relative py-2 font-medium transition-colors duration-300 ${activeSection === item.id
                                    ? "text-blue-600"
                                    : "text-slate-700 hover:text-blue-600"
                                }`}
                        >
                            {item.name}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0"
                                    }`}
                            />
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    onClick={() => handleClick("contact")}
                    className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 lg:flex"
                > Contact <FaArrowRight size={12} /> </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="text-2xl text-slate-800 lg:hidden"
                > {open ? <FaTimes /> : <FaBars />} </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-96 border-t border-gray-200" : "max-h-0"
                    }`}
            >
                <nav className="bg-white p-5">
                    {navLinks.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => handleClick(item.id)}
                            className={`block rounded-lg px-4 py-3 font-medium transition-all ${activeSection === item.id
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-700 hover:bg-gray-100 hover:text-blue-600"
                                }`}
                        > {item.name} </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => handleClick("contact")}
                        className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                    > Contact <FaArrowRight size={12} /> </a>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
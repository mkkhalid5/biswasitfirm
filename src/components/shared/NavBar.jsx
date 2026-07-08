"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "why-us", name: "Why Us" },
    { id: "contact", name: "Contact" },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");

            let current = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        handleScroll(); // Initial active section

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
        });
    }
};

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
                {/* Logo */}
                <button
                    onClick={() => handleClick("home")}
                    className="text-2xl font-bold"
                >
                    <span className="text-blue-600">Biswas</span>{" "}
                    <span className="text-slate-900">IT</span>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`relative py-2 font-medium transition-colors duration-300 ${activeSection === item.id
                                    ? "text-blue-600"
                                    : "text-slate-700 hover:text-blue-600"
                                }`}
                        >
                            {item.name}

                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${activeSection === item.id
                                        ? "w-full"
                                        : "w-0"
                                    }`}
                            />
                        </button>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <button
                    onClick={() => handleClick("contact")}
                    className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 lg:flex"
                >
                    Contact <FaArrowRight size={12} />
                </button>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl text-slate-800 lg:hidden"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${open
                        ? "max-h-96 border-t border-gray-200"
                        : "max-h-0"
                    }`}
            >
                <nav className="bg-white p-5">
                    {navLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`block w-full rounded-lg px-4 py-3 text-left font-medium transition-all ${activeSection === item.id
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-700 hover:bg-gray-100 hover:text-blue-600"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}

                    <button
                        onClick={() => handleClick("contact")}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Contact <FaArrowRight size={12} />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
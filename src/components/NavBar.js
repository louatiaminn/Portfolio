import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Intersection Observer to track section visibility
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white sticky top-0 z-50 shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#A37C5B] tracking-wide">
          Portfolio
        </h1>

        {/* Menu Toggle Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map(
            (item, index) => (
              <li key={index} className="border-b border-gray-800 md:border-none">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block text-white hover:text-[#A37C5B] transition-colors py-3 px-6 md:py-0 md:px-0 tracking-wide ${
                    activeSection === item.toLowerCase()
                      ? "text-[#A37C5B] underline decoration-2 decoration-[#A37C5B] font-medium"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#A37C5B] mb-4">About Me</h2>
            <p className="text-gray-400">
              I’m a passionate software engineer specializing in building
              modern, responsive, and impactful applications. Let’s connect to
              create something amazing together!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#A37C5B] mb-4">Explore</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#home" className="hover:text-[#A37C5B] transition">
                Home
              </a>
              <a href="#about" className="hover:text-[#A37C5B] transition">
                About
              </a>
              <a href="#skills" className="hover:text-[#A37C5B] transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-[#A37C5B] transition">
                Projects
              </a>
              <a
                href="#certifications"
                className="hover:text-[#A37C5B] transition"
              >
                Certifications
              </a>
              <a href="#contact" className="hover:text-[#A37C5B] transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#A37C5B] mb-4">
              Follow Me
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/louatiaminn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#A37C5B] transition"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-amine-loueti-5a548a15b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#A37C5B] transition"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#A37C5B] transition"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500">
            © 2024 Mohamed Amine Louati. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

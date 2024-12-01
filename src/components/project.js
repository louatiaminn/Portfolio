import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Palestinian Authentication UI",
      description:
        "A React-based user authentication interface tailored for Palestinian users. This project demonstrates modern front-end design techniques.",
      link: "https://github.com/louatiaminn/Palestinian-Authentication-UI",
    },
    {
      title: "Multi-Restaurants Symfony Dashboard",
      description:
        "A Symfony-based dashboard for managing multi-restaurant systems. This project showcases back-end development and Symfony expertise.",
      link: "https://github.com/louatiaminn/Multi-Restaurants-Symfony-Dashboard",
    },
    {
      title: "TypiFast",
      description:
        "A Flask-based web application for typing speed testing. This project highlights your skills in Python and web development.",
      link: "https://github.com/louatiaminn/TypiFast",
    },
    {
      title: "University Website",
      description:
        "A University website built with HTML, CSS, JavaScript and PHP. This project showcases basic web development skills.",
      link: "https://github.com/louatiaminn/University",
    },
    {
      title: "Recipes",
      description:
        "A Recipes simple project to learn React. This project showcases basic React development skills.",
      link: "https://github.com/louatiaminn/recipes",
    },
  ];

  // Animation Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 min-h-screen py-12 px-6"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#A37C5B] mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-gray-700 p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariant}
            >
              <h2 className="text-2xl font-semibold text-[#A37C5B] mb-3 text-center">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4 text-center">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A37C5B] hover:text-[#8C6D5F] font-bold transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

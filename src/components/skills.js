import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend Skills",
      skills: ["HTML", "CSS", "React", "Bootstrap", "Tailwind CSS", "Flutter"],
    },
    {
      title: "Backend Skills",
      skills: ["Laravel", "Symfony", "Flask"],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "PHP"],
    },
    {
      title: "Other Skills",
      skills: ["Git/GitHub", "MySQL", "UML", "Linux"],
    },
  ];

  // Animation variants for categories
  const categoryVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  // Animation variants for skills
  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-16 flex flex-col items-center bg-black text-gray-300"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#A37C5B] via-[#8C6D5F] to-[#A37C5B]"
        animate={{
          backgroundPosition: ["-200% 0", "200% 0"], // animate gradient from left to right
        }}
        transition={{
          duration: 10, // transition duration
          repeat: Infinity, // make it repeat indefinitely
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "400% 100%", // stretches the gradient for movement
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Central Node with Floating Animation */}
      <div className="relative text-center mb-16">
        <motion.div
          className="bg-[#1a1a1a] shadow-lg text-[#A37C5B] text-3xl md:text-4xl font-bold rounded-full py-6 px-12 border-2 border-[#A37C5B]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          My Skills
        </motion.div>
      </div>

      {/* Categories */}
      <motion.div
        className="flex flex-wrap justify-center gap-12 max-w-screen-lg mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Triggers every time the section is in view
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {skillsCategories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[#1a1a1a] shadow-lg rounded-xl p-6 border border-gray-700 transition-transform transform hover:scale-105"
            variants={categoryVariant}
          >
            {/* Category Title */}
            <h3 className="text-xl font-bold text-[#A37C5B] mb-4 text-center">{category.title}</h3>
            {/* Skills List */}
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg shadow-md transition-all transform hover:bg-gradient-to-r hover:from-[#A37C5B] hover:to-[#8C6D5F] hover:text-white hover:scale-110"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }} // Ensures animation triggers each time the skill scrolls into view
                  variants={skillVariant}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

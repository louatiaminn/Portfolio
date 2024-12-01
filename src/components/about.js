import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/amine.png';

const About = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5, ease: "easeInOut" } },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-900 via-black to-black text-gray-300 min-h-screen py-16 flex items-center relative overflow-hidden"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-[#A37C5B] rounded-full opacity-20 blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-[#8C6D5F] rounded-full opacity-20 blur-2xl bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 z-10">
        {/* Left: Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariant}
        >
          <div className="relative group">
            <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
              <img
                src={profileImage}
                alt="Mohamed Amine Louati"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-[#A37C5B] transition-all duration-300"></div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariant}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#A37C5B] to-[#8C6D5F] text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            As a curious and driven first-year engineering student at iTeam University, I have been diving into the fascinating world of full-stack development.
            With a strong foundation in web technologies, including React and Laravel, I enjoy creating seamless user experiences and solving problems through code.
            My ultimate goal is to build impactful applications that bring value to users and businesses.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Beyond programming, I enjoy exploring emerging technologies, participating in coding challenges, and collaborating with peers on exciting projects.
            My dedication to learning and adapting makes me confident in my ability to tackle any challenge and contribute meaningfully to innovative solutions.
          </p>
          <motion.a
            href="#projects"
            className="bg-[#A37C5B] text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#8C6D5F] hover:text-white transition-transform transform hover:scale-110 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={buttonVariant}
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

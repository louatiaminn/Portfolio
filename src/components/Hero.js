import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5, ease: "easeInOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3, ease: "easeInOut" } },
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-[#1E1E1E] to-black w-full h-full opacity-30"></div>
        <div className="absolute w-96 h-96 bg-[#A37C5B] rounded-full opacity-20 blur-3xl top-32 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-[#8C6D5F] rounded-full opacity-20 blur-2xl bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 max-w-screen-xl z-10">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#A37C5B] to-[#8C6D5F] text-transparent bg-clip-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Trigger on scroll
            variants={textVariant}
          >
            Hi, I'm Mohamed Amine Louati
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-400 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
          >
            I'm a first-year engineering student at iTeam University, exploring full-stack development. I’m passionate about learning new technologies like React and Laravel and enjoy solving complex problems through code.
          </motion.p>

          <motion.a
            href="#contact"
            className="bg-[#A37C5B] text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#8C6D5F] hover:text-white transition-transform transform hover:scale-110 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={buttonVariant}
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Right Section: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariant}
        >
          <div className="w-80 h-80 bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] rounded-full flex items-center justify-center overflow-hidden shadow-2xl transform hover:scale-105 transition-transform relative">
            <img
              src={profileImage}
              alt="Mohamed Amine Louati"
              className="w-full h-full object-cover z-10"
            />
            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-black opacity-30 shadow-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

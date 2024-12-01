import React from "react";
import { motion } from "framer-motion";
import Datac from '../assets/datacamp.JPG';
import FCC from "../assets/freecodecamp.JPG";
import SL from "../assets/sololearn.jpg";
import CC from "../assets/cogclass.JPG";
import EF from "../assets/efset.JPG";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to SQL",
      year: "2024",
      provider: "DataCamp",
      link:"https://www.datacamp.com/completed/statement-of-accomplishment/course/35105e65a35996f73c37f1f2d6bf30f3adf5b991",
      image: Datac
    },
    {
      title: "Responsive Web Design",
      year: "2024",
      provider: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fccd37df9ec-e8a5-4e3e-b993-503a0282f9eb/responsive-web-design",
      image: FCC,
    },
    {
      title: "Coding for Data",
      year: "2024",
      provider: "SoloLearn",
      link: "https://www.sololearn.com/en/certificates/CC-MPN2DVGA",
      image: SL, 
    },
    {
      title: "Data Analysis with Python",
      year: "2023",
      provider: "Cognitive Class",
      link: "https://courses.cognitiveclass.ai/certificates/ce42182d68854b72ad011052815db39a",
      image: CC,
    },
    {
      title: "EF SET English Certificate",
      year: "2023",
      provider: "EF Standard English Test",
      image: EF, 
    },
  ];

  // Animation Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  return (
    <section id="certifications" className="bg-black text-gray-300 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#A37C5B] mb-12 text-center">
          Certifications
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariant}
            >
              {/* Certification Image */}
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold text-[#A37C5B] mb-3">
                {cert.title}
              </h2>
              <p className="text-gray-400 mb-4">
                <span className="font-bold">{cert.year}</span> &bull;{" "}
                <span>{cert.provider}</span>
              </p>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto text-center text-[#A37C5B] hover:text-[#8C6D5F] font-bold transition"
                >
                  View Certification
                </a>
              ) : (
                <p className="text-gray-500 italic text-center">
                  No link available
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

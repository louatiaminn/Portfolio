import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "25939ddc-7398-41f9-9e55-e42ed4ec0eba");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const responseData = await res.json();

      if (responseData.success) {
        console.log("Success:", responseData);
        alert("Your message was sent successfully!");
      } else {
        console.error("API Error:", responseData);
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Failed to send your message. Please check your connection or try again later.");
    }
  };

  // Animation Variants
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const contactDetailsVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 } },
  };

  return (
    <section id="contact" className="bg-black text-gray-300 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#A37C5B] mb-8 text-center">
          Get in Touch
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            className="bg-gray-800 rounded-xl p-8 shadow-md w-full lg:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={formVariant}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-[#A37C5B] focus:ring-[#A37C5B] focus:outline-none text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-[#A37C5B] focus:ring-[#A37C5B] focus:outline-none text-gray-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-[#A37C5B] focus:ring-[#A37C5B] focus:outline-none text-gray-300"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-[#A37C5B] focus:ring-[#A37C5B] focus:outline-none text-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#A37C5B] hover:bg-[#8C6D5F] text-white font-semibold py-3 rounded-md transition"
            >
              Submit
            </button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            className="text-center lg:text-left space-y-6 w-full lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={contactDetailsVariant}
          >
            <h2 className="text-2xl font-bold text-[#A37C5B]">Contact Details</h2>
            <p className="text-gray-400">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:louati773@gmail.com"
                className="text-[#A37C5B] hover:text-[#8C6D5F] transition"
              >
                louati773@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+21621903988"
                className="text-[#A37C5B] hover:text-[#8C6D5F] transition"
              >
                +216 21903988
              </a>
            </p>
            <p className="text-gray-400">
              <strong>Address:</strong> Manouba, Route 7km, Cité Mechtel 36
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/mohamed-amine-loueti-5a548a15b/"
                className="bg-gray-700 p-3 rounded-full hover:bg-[#A37C5B] transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a
                href="https://github.com/louatiaminn"
                className="bg-gray-700 p-3 rounded-full hover:bg-[#A37C5B] transition"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-white"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100006662716862"
                className="bg-gray-700 p-3 rounded-full hover:bg-[#A37C5B] transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-white"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

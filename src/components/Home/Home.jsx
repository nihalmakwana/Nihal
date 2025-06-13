import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../assets/Nihal.jpg";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

function Home() {
  return (
    <section 
    id="home"
    className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 overflow-hidden">

      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 text-center md:text-left mt-5">
        <motion.p
          className="text-lg text-gray-400"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Hello, It's Me
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Nihal Makwana
        </motion.h1>

        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <ReactTyped
            strings={["MERN Stack Developer", "Full Stack Developer", "Backend Developer"]}
            typeSpeed={40}
            backSpeed={30}
            loop
            className="text-xl md:text-2xl text-blue-400 font-semibold"
          />
        </motion.div>

        <motion.div
          className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5 text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <p>
            As a MERN Stack Developer, I specialize in building robust, scalable, and high-performance web applications from scratch. With a strong grip on both frontend and backend technologies, I transform complex ideas into seamless digital experiences, clean code, smart logic, and real impact.
          </p>
        </motion.div>

        <Link to="about" smooth={true} duration={800} offset={-50}>
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300 shadow-md cursor-pointer">
              More About Me
            </button>
          </motion.div>
        </Link>
      </div>

      {/* Right Image with Loading Animation */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center items-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Pulsating Heartbeat Glow */}
        <div className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-20 animate-[pulse_2s_ease-in-out_infinite] z-0"></div>

        {/* Rotating Gradient Ring */}
        <div
          className="absolute w-80 h-80 rounded-full animate-[spin_10s_linear_infinite] z-0"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #00ffff, #8a2be2, #00ffff)",
            maskImage: "radial-gradient(circle, transparent 45%, black 46%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 45%, black 46%)",
          }}
        ></div>

        {/* 3D Layered Orbit Ring */}
        <div className="absolute w-[350px] h-[350px] border-t-[3px] border-purple-400 rounded-full animate-[spin_16s_linear_infinite] opacity-60 z-0"></div>

        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Profile"
          className="w-72 h-72 object-cover rounded-full border-4 border-gray-800 z-10 shadow-xl"
        />
      </motion.div>
    </section>
  );
}

export default Home;

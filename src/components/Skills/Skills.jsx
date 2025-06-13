import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Reactjs from "../../assets/reactjs.svg";
import Nodejs from "../../assets/nodejs.svg";
import MongoDB from "../../assets/mongodb.svg";
import Express from "../../assets/expressjs.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Github from "../../assets/github.svg";
import Firebase from "../../assets/firebase.svg";
import Postman from "../../assets/postman.svg";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JavaScript from "../../assets/javascript.svg";
import VSCode from "../../assets/vscode.svg";

const skills = [
  { name: "React.js", icon: Reactjs },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Node.js", icon: Nodejs },
  { name: "Express.js", icon: Express },
  { name: "MongoDB", icon: MongoDB },
  { name: "Firebase", icon: Firebase },
  { name: "GitHub", icon: Github },
  { name: "Postman", icon: Postman },
  { name: "JavaScript", icon: JavaScript },
  { name: "HTML", icon: HTML },
  { name: "CSS3", icon: CSS },
  { name: "VS Code", icon: VSCode },
];

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

const SkillBox = ({ icon, name, containerRef }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const container = containerRef.current;
    if (!box || !container) return;

    const move = () => {
      const maxX = container.offsetWidth - box.offsetWidth;
      const maxY = container.offsetHeight - box.offsetHeight;
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
      box.style.transform = `translate(${x}px, ${y}px)`;
    };

    move();
    const interval = setInterval(move, 4000);
    return () => clearInterval(interval);
  }, []);

  const dragConstraints = containerRef;

  return (
    <motion.div
      ref={boxRef}
      className="absolute w-24 h-24 p-2 rounded-lg border border-gray-700 bg-gray-800 bg-opacity-40 backdrop-blur-md text-center text-white flex flex-col justify-center items-center shadow-md hover:shadow-lg hover:scale-105 transition-all"
      drag
      dragConstraints={dragConstraints}
      whileTap={{ scale: 1.1 }}
    >
      <img src={icon} alt={name} className="w-8 h-8 mb-1" />
      <span className="text-xs font-medium">{name}</span>
    </motion.div>
  );
};

const MobileSkillGrid = () => (
  <div className="grid grid-cols-3 gap-4 w-full px-6 max-w-md mx-auto">
    {skills.map((skill, i) => (
      <motion.div
        key={i}
        className="flex flex-col justify-center items-center p-4 rounded-xl border border-gray-700 bg-transparent bg-opacity-40 backdrop-blur-md text-white shadow-md hover:shadow-xl hover:scale-105 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-1" />
        <span className="text-xs font-medium text-center">{skill.name}</span>
      </motion.div>
    ))}
  </div>
);

const Skills = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const containerRef = useRef(null);

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 px-4 md:px-12 flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent)] pointer-events-none animate-pulse-slow z-0" />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-center z-10 mb-12"
      >
        Skills 🚀
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-3xl text-center text-lg md:text-xl leading-relaxed z-10 mt-4 mb-8"
      >
        Here's a toolbox of everything I use to build powerful, modern web applications 🔧✨.  
        From crafting stunning frontends 🖼️ with <strong>React</strong> and <strong>Tailwind CSS</strong>,  
        to building robust backends ⚙️ with <strong>Node.js</strong> and <strong>Express</strong>,  
        and even managing data with <strong>MongoDB</strong> 📦 – I’ve got the full-stack covered 💪.  
        I’m always learning and experimenting 🔍, adding more tools to this growing arsenal 🚀.
      </motion.p>

      {isMobile ? (
        <MobileSkillGrid />
      ) : (
        <div
          ref={containerRef}
          className="relative w-[85vw] max-w-5xl h-[65vh] rounded-2xl bg-transparent bg-opacity-10 backdrop-blur-lg border border-gray-700 overflow-hidden"
        >
          {skills.map((skill, index) => (
            <SkillBox
              key={index}
              icon={skill.icon}
              name={skill.name}
              containerRef={containerRef}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
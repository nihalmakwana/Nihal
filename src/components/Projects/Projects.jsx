import React from "react";
import { motion } from "framer-motion";
import foodiezone from "../../assets/foodiezone.png";
import mediahub from "../../assets/mediahub.png";

const fadeIn = (direction = "up", delay = 0) => ({
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
});

const projects = [
  {
    title: "Foodie Zone",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    description:
      "A full-stack food ordering platform with secure authentication, dish browsing, cart features, and admin panel for order & user management.",
    image: foodiezone,
    github: "https://github.com/nihalmakwana/Foodie_Zone",
  },
  {
    title: "MediaHub",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Storage"],
    description:
      "A media sharing app for uploading/viewing music & videos. Features include playlists, comments, reactions & a content moderation dashboard.",
    image: mediahub,
    github: "https://github.com/nihalmakwana/MediaHub",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none z-0" />

      <motion.h2
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-5xl md:text-6xl font-bold text-center z-10 mb-10"
      >
        Projects 💼
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-3xl text-center text-lg md:text-xl leading-relaxed z-10 mx-auto mb-16"
      >
        Here's a sneak peek into some real-world apps I've built 🛠️. Each project sharpened my skills, challenged my problem-solving 💡, and reflects my full-stack potential 🚀.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-gray-700 bg-transparent shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-orange-400">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-sm text-white border border-blue-400 hover:bg-blue-500 px-4 py-1 rounded-lg transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

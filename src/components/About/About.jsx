import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
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
  return variants;
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-12 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden scroll-mt-16"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent)] pointer-events-none animate-pulse-slow z-0" />

      <motion.h2
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-5xl md:text-6xl font-bold text-center z-10 mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-3xl text-center text-lg md:text-xl leading-relaxed z-10"
      >
        Hey there! I'm <strong>Makwana Nihal Vinodbhai</strong> – a proud <strong>BCA graduate</strong> with a borderline unhealthy obsession for web development.
        Somewhere between learning what a <code>&lt;div&gt;</code> is and deploying full-stack apps, I fell in love with the <strong>MERN Stack</strong> 💻⚙️.
        <br /><br />
        Yes, I learned everything online (shoutout to YouTube and Google), and while I don’t have a job <em>*yet*</em>, I’ve spent the past year turning my curiosity into real skills – one bug and one breakthrough at a time ➡️🚀.
        <br /><br />
        I may not have professional experience <em>on paper</em> 📄, but I come with <strong>passion</strong>, <strong>perseverance</strong>, and enough late-night coding sessions to call myself a real dev ☕. All I need now is that <strong>one opportunity</strong> to convert my skills into expertise and grow with a team that values fresh energy and a learner's mindset.
        <br /><br />
        Let’s build something awesome together!
      </motion.p>
    </section>
  );
};

export default About;

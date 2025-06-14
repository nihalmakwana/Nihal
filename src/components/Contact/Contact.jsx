import React from "react";
import { motion } from "framer-motion";
import mailIcon from "../../assets/mail.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

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

const terminalLinks = [
  {
    label: "email",
    value: "makwananihal2373@gmail.com",
    link: "mailto:makwananihal2373@gmail.com",
  },
  {
    label: "github",
    value: "github.com/nihalmakwana",
    link: "https://github.com/nihalmakwana",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/makwana-nihal-v0307",
    link: "https://www.linkedin.com/in/makwana-nihal-v0307/",
  },
  {
    label: "phone",
    value: "+91 6354638702",
    link: "tel:+916354638702",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full md:min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <motion.h2
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center z-10 mb-6 font-mono text-white"
      >
        💻 Let's Connect Like Devs Do!
      </motion.h2>

      <motion.p
        className="text-center max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn("up", 0.2)}
      >
        Hey there! If you’ve scrolled this far, you must be seriously cool. Whether it’s a tech talk, project idea, or just sharing memes over tea ☕... I’m all ears (and code)!
Shoot me a message, ping my socials below, or just type connect --with=nihal in your favorite terminal.


      </motion.p>

      <motion.div
        className="max-w-2xl mx-auto bg-black border border-orange-500 p-6 md:p-10 rounded-md shadow-xl text-white font-mono text-sm md:text-base whitespace-pre-wrap relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn("up", 0.3)}
      >
        <div className="space-y-3">
          {terminalLinks.map((item, index) => (
            <div key={index} className="flex items-center group">
              <span className="text-orange-400">&gt;</span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-white hover:text-orange-400 transition duration-200"
              >
                {item.label}: {item.value}
              </a>
            </div>
          ))}
        </div>
        <span className="animate-ping">|</span>
      </motion.div>
    </section>
  );
};

export default Contact;

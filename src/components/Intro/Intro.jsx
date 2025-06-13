import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Intro.css";

const Intro = ({ onFinish }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 3000),  // show second line after 3s
      setTimeout(() => onFinish(), 6000),  // exit after another 3s
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className="w-full h-screen flex items-center justify-center intro-bg text-white text-center">
      <div>
        {step === 1 && (
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Hi! I'm Nihal V Makwana
          </motion.h1>
        )}
        {step === 2 && (
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            A Passionate MERN Stack Developer
          </motion.h1>
        )}
      </div>
    </div>
  );
};

export default Intro;

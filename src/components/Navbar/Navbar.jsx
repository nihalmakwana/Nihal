import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Logo.jpeg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Show links after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowLinks(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white shadow-xs">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo and Name */}
        {!isOpen && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-2"
          >
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="font-bold text-xl">Nihal Makwana</span>
          </motion.div>
        )}

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Links */}
        {showLinks && (
          <motion.ul
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex space-x-8"
          >
            {links.map((link, index) => {
              const isLast = index === links.length - 1;
              return (
                <li key={link}>
                  <ScrollLink
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={700}
                    offset={isLast ? -20 : -80}
                    spy={true}
                    activeClass="active-link"
                    className="relative group cursor-pointer text-white transition duration-300"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_#f97316]"></span>
                  </ScrollLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </div>

      {/* Sidebar Menu (Mobile) */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "30%" }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="fixed top-0 left-0 w-[80%] h-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col px-6 py-4 z-40"
        >
          {/* Logo & Name */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center mt-8 mb-6"
          >
            <img src={logo} alt="Logo" className="w-24 h-24 rounded-full mb-2 mx-auto" />
            <span className="font-bold text-xl text-center">Nihal Makwana</span>
          </motion.div>

          {/* Sidebar Links */}
          {links.map((link, index) => {
            const isLast = index === links.length - 1;
            return (
              <motion.div
                key={link}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-lg border-b border-gray-700 pb-2 mb-4"
              >
                <ScrollLink
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={isLast ? -10 : -80}
                  spy={true}
                  activeClass="active-link"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer relative group text-white transition duration-300"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_#f97316]"></span>
                </ScrollLink>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

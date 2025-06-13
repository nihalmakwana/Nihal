import React from "react";

function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-center text-gray-300 py-3 overflow-hidden">

      {/* Glowing Moving Belt with inline keyframes */}
      <div className="absolute top-1/2 left-[-200%] w-[400%] h-1 opacity-30 blur-sm bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[slideBelt_8s_linear_infinite]" />

      {/* Footer Text */}
      <p className="relative z-10 text-sm md:text-base font-medium">
        © {new Date().getFullYear()} Built with 💙 By Nihal V. Makwana
      </p>
    </footer>
  );
}

export default Footer;

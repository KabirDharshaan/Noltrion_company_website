


import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#05070D] via-[#0A0F1C] to-[#0B0D18] flex items-center justify-center px-4 overflow-hidden">

      {/* Glowing Background Circles */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[180px] top-[-200px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[180px] bottom-[-200px] right-[-150px]" />

      {/* Floating Square 1 */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute top-20 right-32 w-24 h-24 border border-cyan-400/40 rounded-sm rotate-12"
      ></motion.div>

      {/* Floating Square 2 */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute bottom-28 left-32 w-20 h-20 border border-purple-400/40 rounded-sm -rotate-12"
      ></motion.div>

      {/* Light Floating Particle Row */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 50, opacity: 0.5 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear", repeatType: "reverse" }}
        className="absolute top-1/3 left-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"
      />

      {/* Smaller Particles */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -15 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-[25%] w-3 h-3 bg-cyan-400/40 rounded-full blur-[2px]"
      />

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/3 right-[28%] w-3 h-3 bg-purple-400/40 rounded-full blur-[2px]"
      />

      {/* Content */}
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-cyan-300 text-sm tracking-wider font-semibold mb-4"
        >
          PREMIUM SOFTWARE INNOVATION STUDIO
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
        >
          Building Intelligent <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Digital Products
          </span>
          <br />
          That Transform Businesses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Noltrion is a global software innovation studio crafting next-generation AI 
          and cloud solutions for enterprises worldwide.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex justify-center items-center gap-4"
        >
          {/* Start Your Project Button */}
          <button className="px-6 py-3 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-cyan-400 to-purple-500 
            hover:opacity-90 transition-all shadow-lg">
            Start Your Project →
          </button>

          {/* View Work Button */}
          <button className="px-6 py-3 rounded-xl font-semibold text-white 
            bg-white/10 backdrop-blur-md border border-white/20 
            hover:bg-white/20 transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>
    </div>
  );
}















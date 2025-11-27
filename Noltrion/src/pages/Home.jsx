

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center px-4 overflow-hidden">

      {/* ---- Star Background ---- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,182,255,0.14),_transparent_60%)]"></div>

      {/* Random Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[3px] h-[3px] bg-purple-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* ---- Background Glows ---- */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-300/20 blur-[200px] top-[-250px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[200px] bottom-[-250px] right-[-150px]" />

      {/* ---- Glowing Motion Square 1 ---- */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute top-24 right-32 w-24 h-24 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,0,150,0.5), rgba(180,0,255,0.5))",
          boxShadow: "0 0 35px rgba(255,0,200,0.45)",
          border: "1px solid rgba(255,100,220,0.3)",
          backdropFilter: "blur(8px)",
        }}
      ></motion.div>

      {/* ---- Glowing Motion Square 2 ---- */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute bottom-32 left-32 w-20 h-20 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(180,0,255,0.5), rgba(255,0,200,0.5))",
          boxShadow: "0 0 35px rgba(200,0,255,0.45)",
          border: "1px solid rgba(210,100,255,0.3)",
          backdropFilter: "blur(8px)",
        }}
      ></motion.div>

      {/* ---- Soft Light Line ---- */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 50, opacity: 0.5 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear", repeatType: "reverse" }}
        className="absolute top-1/3 left-1/2 w-64 h-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,0,200,0.5), transparent)",
          filter: "blur(2px)",
        }}
      />

      {/* ---- Floating Particles ---- */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -15 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-[25%] w-3 h-3 bg-pink-400/60 rounded-full blur-[2px]"
      />

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/3 right-[28%] w-3 h-3 bg-purple-400/60 rounded-full blur-[2px]"
      />

      {/* ---- Content ---- */}
      <div className="text-center max-w-4xl mx-auto">

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-pink-600 text-sm tracking-wider font-semibold mb-4"
        >
          PREMIUM SOFTWARE INNOVATION STUDIO
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
        >
          Building Intelligent <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent">
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
          className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto"
        >
          Noltrion is a global software innovation studio crafting next-generation AI,
          cloud, and enterprise-grade digital solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex justify-center items-center gap-4"
        >
          <button className="px-6 py-3 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:opacity-90 transition-all shadow-lg">
            Start Your Project →
          </button>

          <button className="px-6 py-3 rounded-xl font-semibold text-gray-800 
            bg-gray-100 border border-gray-300
            hover:bg-gray-200 transition-all shadow-sm">
            View Our Work
          </button>
        </motion.div>
      </div>
    </div>
  );
}

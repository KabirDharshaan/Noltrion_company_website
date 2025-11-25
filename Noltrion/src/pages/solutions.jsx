import React from "react";
import { FiTarget, FiZap, FiAward } from "react-icons/fi";

export default function Our_Solutions() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-[#070A12] to-[#0B0E17] text-white px-6">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Engineering Excellence
        </h2>
        <p className="text-gray-400 text-lg">
          We combine technical mastery with creative vision to deliver solutions
          that push the boundaries of what's possible.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
            bg-transparent border border-cyan-300/40">
            <FiTarget className="text-cyan-300 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Who We Are</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            A team of world-class engineers, designers, and strategists
            dedicated to building software that matters.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
            bg-transparent border border-blue-400/40">
            <FiZap className="text-blue-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Our Mission</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            To empower businesses with intelligent technology solutions that
            drive growth and innovation at scale.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
            bg-transparent border border-purple-400/40">
            <FiAward className="text-purple-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Our Philosophy</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Innovation × Performance × Precision. We believe in crafting
            products that are both beautiful and powerful.
          </p>
        </div>

      </div>

    </div>
  );
}

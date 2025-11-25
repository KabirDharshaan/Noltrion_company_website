import React from "react";
import { FiCode, FiCpu, FiSmartphone, FiCloud, FiPenTool, FiLayers } from "react-icons/fi";

export default function Services() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-[#0B0E17] to-[#0D111C] text-white px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">Our Services</h2>
        <p className="text-gray-400 text-lg mt-3 max-w-2xl mx-auto">
          From concept to launch, we deliver end-to-end solutions that power the digital economy.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* 1. Custom Software Development */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md 
                        hover:border-cyan-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                          bg-transparent border border-cyan-300/40">
            <FiCode className="text-cyan-300 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Custom Software Development</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.
          </p>
        </div>

        {/* 2. AI & Automation Systems */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md 
                        hover:border-pink-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                          bg-transparent border border-pink-400/40">
            <FiCpu className="text-pink-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">AI & Automation Systems</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Intelligent systems powered by machine learning and AI to automate processes and unlock insights.
          </p>
        </div>

        {/* 3. Mobile App Development */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md 
                        hover:border-blue-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                          bg-transparent border border-blue-400/40">
            <FiSmartphone className="text-blue-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Mobile App Development</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Native and cross-platform mobile applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* 4. Cloud & DevOps */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md 
                        hover:border-cyan-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                          bg-transparent border border-cyan-300/40">
            <FiCloud className="text-cyan-300 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Cloud & DevOps</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Scalable cloud infrastructure and CI/CD pipelines for seamless deployment and operations.
          </p>
        </div>

        {/* 5. UI/UX Design & Product Strategy */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md 
                        hover:border-pink-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                          bg-transparent border border-pink-400/40">
            <FiPenTool className="text-pink-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">UI/UX Design & Product Strategy</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Beautiful interfaces and strategic product design that users love and businesses need.
          </p>
        </div>

        {/* 6. Enterprise Software Solutions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md 
                        hover:border-purple-400/40 transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                          bg-transparent border border-purple-400/40">
            <FiLayers className="text-purple-400 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mt-6">Enterprise Software Solutions</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Robust enterprise systems designed to scale with your organization's growth.
          </p>
        </div>

      </div>

    </div>
  );
}

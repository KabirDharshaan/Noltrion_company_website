
import React from "react";
import { FiCode, FiCpu, FiSmartphone, FiCloud, FiPenTool, FiLayers } from "react-icons/fi";

export default function Services() {
  return (
    <div className="w-full py-24 bg-white relative overflow-hidden px-6">

      {/* ---- Subtle Galaxy Stars Background ---- */}
      {[...Array(35)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[3px] h-[3px] bg-purple-300 rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* ---- Radial Glow ---- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,170,255,0.08),_transparent_70%)]"></div>

      {/* ---- Heading ---- */}
      <div className="text-center mb-16 relative z-[2]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          From concept to launch, we deliver end-to-end solutions that power the digital economy.
        </p>
      </div>

      {/* ---- Service Grid ---- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-[2]">

        {/* CARD TEMPLATE STYLES */}
        {[
          {
            title: "Custom Software Development",
            desc: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
            icon: <FiCode className="text-purple-500 text-2xl" />,
            border: "border-purple-300/40",
            hover: "hover:border-purple-500/70",
          },
          {
            title: "AI & Automation Systems",
            desc: "Intelligent systems powered by machine learning and AI to automate processes and unlock insights.",
            icon: <FiCpu className="text-pink-500 text-2xl" />,
            border: "border-pink-300/40",
            hover: "hover:border-pink-500/70",
          },
          {
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
            icon: <FiSmartphone className="text-blue-500 text-2xl" />,
            border: "border-blue-300/40",
            hover: "hover:border-blue-500/70",
          },
          {
            title: "Cloud & DevOps",
            desc: "Scalable cloud infrastructure and CI/CD pipelines for seamless deployment and operations.",
            icon: <FiCloud className="text-purple-500 text-2xl" />,
            border: "border-purple-300/40",
            hover: "hover:border-purple-500/70",
          },
          {
            title: "UI/UX Design & Product Strategy",
            desc: "Beautiful interfaces and strategic product design that users love and businesses need.",
            icon: <FiPenTool className="text-pink-500 text-2xl" />,
            border: "border-pink-300/40",
            hover: "hover:border-pink-500/70",
          },
          {
            title: "Enterprise Software Solutions",
            desc: "Robust enterprise systems designed to scale with your organization's growth.",
            icon: <FiLayers className="text-indigo-500 text-2xl" />,
            border: "border-indigo-300/40",
            hover: "hover:border-indigo-500/70",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_25px_rgba(200,0,255,0.08)] 
            border ${service.border} transition-all duration-300 ${service.hover}`}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl 
              border ${service.border} bg-white/40 backdrop-blur-md`}
            >
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mt-6 text-gray-900">
              {service.title}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

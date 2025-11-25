import React from "react";
import { FaUsers, FaRocket, FaShieldAlt, FaHandshake } from "react-icons/fa";

export default function Choose() {
  return (
    <section className="w-full py-24 bg-[#0b0f19] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-200">
          Why Choose Noltrion
        </h2>

        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Partner with a team that combines technical excellence with business acumen 
          to deliver solutions that drive real results.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          
          {/* Card 1 */}
          <div className="bg-[#121826] p-8 rounded-3xl border border-white/10 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 mb-6">
              <FaUsers className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Expert Engineering Team
            </h3>
            <p className="mt-3 text-gray-400">
              World-class developers, architects, and designers with years of experience 
              building complex systems for global enterprises.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121826] p-8 rounded-3xl border border-white/10 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 mb-6">
              <FaRocket className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Fast Delivery
            </h3>
            <p className="mt-3 text-gray-400">
              Agile development processes and efficient workflows ensure your product 
              reaches market quickly without compromising quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121826] p-8 rounded-3xl border border-white/10 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Premium Quality
            </h3>
            <p className="mt-3 text-gray-400">
              Every line of code is crafted with precision. We maintain the highest standards 
              of security, performance, and reliability.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#121826] p-8 rounded-3xl border border-white/10 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 mb-6">
              <FaHandshake className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Long-term Partnership
            </h3>
            <p className="mt-3 text-gray-400">
              We're not just vendors—we're partners invested in your success. Ongoing support, 
              maintenance, and continuous improvement.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

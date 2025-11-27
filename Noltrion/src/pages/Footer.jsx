// import { Github, Linkedin, Twitter, Mail } from "lucide-react";
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#0B0E13] pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
//           {/* Brand & Description */}
//           <div>
//             <h2 className="text-3xl font-bold text-cyan-400">Noltrion</h2>
//             <p className="text-gray-400 mt-4 leading-relaxed">
//               Building intelligent digital products that transform businesses. 
//               Your trusted partner in software innovation.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center gap-4 mt-6">
//               <a className="p-3 bg-[#11141A] rounded-xl text-gray-300 hover:text-cyan-400 transition">
//                 <Github size={22} />
//               </a>
//               <a className="p-3 bg-[#11141A] rounded-xl text-gray-300 hover:text-cyan-400 transition">
//                 <Linkedin size={22} />
//               </a>
//               <a className="p-3 bg-[#11141A] rounded-xl text-gray-300 hover:text-cyan-400 transition">
//                 <Twitter size={22} />
//               </a>
//               <a className="p-3 bg-[#11141A] rounded-xl text-gray-300 hover:text-cyan-400 transition">
//                 <Mail size={22} />
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
//             <ul className="space-y-3 text-gray-400">
//               <li className="hover:text-white cursor-pointer transition">Custom Software</li>
//               <li className="hover:text-white cursor-pointer transition">AI Solutions</li>
//               <li className="hover:text-white cursor-pointer transition">Mobile Apps</li>
//               <li className="hover:text-white cursor-pointer transition">Cloud & DevOps</li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
//             <ul className="space-y-3 text-gray-400">
//               <li className="hover:text-white cursor-pointer transition">About Us</li>
//               <li className="hover:text-white cursor-pointer transition">Careers</li>
//               <li className="hover:text-white cursor-pointer transition">Case Studies</li>
//               <li className="hover:text-white cursor-pointer transition">Blog</li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//             <ul className="space-y-3 text-gray-400">
//               <li className="hover:text-white cursor-pointer transition">Documentation</li>
//               <li className="hover:text-white cursor-pointer transition">Support</li>
//               <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
//               <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 mt-16 pt-6" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
//           <p>© 2025 Noltrion. All rights reserved.</p>
//           <p className="mt-3 md:mt-0">Crafted with precision and passion</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

















import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A1A2F]">Noltrion</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Building intelligent digital products that transform businesses.
              Your trusted partner in software innovation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  className="p-3 bg-gray-100 rounded-xl text-gray-700 
                             hover:text-[#0056D2] hover:bg-gray-200 transition"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A1A2F] mb-4">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer transition">Custom Software</li>
              <li className="hover:text-black cursor-pointer transition">AI Solutions</li>
              <li className="hover:text-black cursor-pointer transition">Mobile Apps</li>
              <li className="hover:text-black cursor-pointer transition">Cloud & DevOps</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A1A2F] mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer transition">About Us</li>
              <li className="hover:text-black cursor-pointer transition">Careers</li>
              <li className="hover:text-black cursor-pointer transition">Case Studies</li>
              <li className="hover:text-black cursor-pointer transition">Blog</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A1A2F] mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer transition">Documentation</li>
              <li className="hover:text-black cursor-pointer transition">Support</li>
              <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-black cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-16 pt-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Noltrion. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Crafted with precision and passion</p>
        </div>
      </div>
    </footer>
  );
}



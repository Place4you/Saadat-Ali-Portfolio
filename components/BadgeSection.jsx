import React from 'react';
import Image from 'next/image'; // Only if using Next.js

const BadgeLinks = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-black">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 tracking-wide">
        Connect with Me on Professional Networks!
      </h2>

      {/* Badge Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* LinkedIn Badge */}
        <div className="relative bg-gradient-to-r from-[#0072b1] to-[#005582] text-white p-8 rounded-xl shadow-lg backdrop-blur-md backdrop-opacity-30 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(0,114,177,0.4)]">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src="/images/linkedin-icon.svg" alt="LinkedIn Logo" className="w-12 mx-auto mb-4" />
            <div className="flex flex-col items-center">
              <img
                src="/images/linkedin-profile.png"
                alt="Saadat Ali"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold mb-2">
                <a
                  href="https://pk.linkedin.com/in/saadatali786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Saadat Ali
                </a>
              </h3>
              <p className="text-sm opacity-80">Full Stack Developer | Laravel Developer | SEO</p>
              <p className="text-xs mt-1 opacity-70">Rising Codes | MUST</p>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://pk.linkedin.com/in/saadatali786"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-[#0072b1] rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Badge */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg backdrop-blur-md backdrop-opacity-30 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(50,50,50,0.4)]">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src="/images/github-icon.svg" alt="GitHub Logo" className="w-12 mx-auto mb-4" />
            <div className="flex flex-col items-center">
              <img
                src="/images/github-avatar.jpeg"
                alt="GitHub Profile"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold mb-2">
                <a
                  href="https://github.com/Place4you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Saadat Ali
                </a>
              </h3>
              <p className="text-sm opacity-80">Full Stack Developer | Open Source Contributor</p>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://github.com/Place4you"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Upwork Badge */}
        <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg backdrop-blur-md backdrop-opacity-30 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.4)]">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src="/images/upwork.png" alt="Upwork Logo" className="w-12 mx-auto mb-4" />
            <div className="flex flex-col items-center">
              <img
                src="/images/upwork-profile.JPG"
                alt="Upwork Profile"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold mb-2">
                <a
                  href="https://www.upwork.com/freelancers/~01b81678ded0dd054a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Saadat Ali
                </a>
              </h3>
              <p className="text-sm opacity-80">Freelance Developer</p>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.upwork.com/freelancers/~01b81678ded0dd054a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-green-700 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all"
              >
                View Upwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeLinks;

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import Image from "next/image";

// 🎯 CUSTOMIZE YOUR SOCIAL LINKS HERE
const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile", // ⚠️ UPDATE THIS
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourprofile", // ⚠️ UPDATE THIS
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:chinnavinay663@gmail.com",
  },
];

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-lg font-medium"
            >
              Hello! I Am
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              Thota Govindu{" "}
              <span className="text-gradient">Vinay</span>
            </motion.h1>

            {/* Job Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-400"
            >
              Full Stack Developer – React, Next.js, Node.js
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg max-w-xl leading-relaxed"
            >
              Passionate about AI-driven development, building scalable
              applications with Machine Learning, LLMs, and Google Cloud
              Platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-primary/50 hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <a
                href="/resume.pdf" // ⚠️ ADD YOUR RESUME PDF TO PUBLIC FOLDER
                download
                className="px-8 py-3 glass hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-glow" />
              
              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse" />
                <div className="absolute inset-2 rounded-full border-2 border-primary/30" />
                
                {/* 🖼️ REPLACE WITH YOUR IMAGE PATH */}
                {/* Temporary placeholder - Add your image as /public/profile.jpg */}
                <div className="rounded-full w-full h-full relative z-10 bg-gradient-to-br from-primary/20 to-dark flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl mb-4">👨‍💻</p>
                    <p className="text-sm text-gray-400">Add profile.jpg</p>
                    <p className="text-xs text-gray-500">to public/ folder</p>
                  </div>
                </div>
                {/* Uncomment when you add your image:
                <Image
                  src="/profile.jpg"
                  alt="Thota Govindu Vinay"
                  width={384}
                  height={384}
                  className="rounded-full object-cover w-full h-full relative z-10"
                  priority
                />
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

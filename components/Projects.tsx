"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// 🎯 CUSTOMIZE YOUR PROJECTS HERE
const projects = [
  {
    id: 1,
    title: "Automated Testing Platform",
    description:
      "AI-powered test case generation with JWT authentication, chat interface for test creation, and full-stack TypeScript implementation.",
    image: "/projects/testing-platform.jpg", // ⚠️ ADD PROJECT IMAGES TO public/projects/
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveLink: "https://yourproject.vercel.app", // ⚠️ UPDATE THIS
    githubLink: "https://github.com/yourusername/project", // ⚠️ UPDATE THIS
  },
  {
    id: 2,
    title: "Multimedia Upload & Search App",
    description:
      "AI-powered multimedia upload, processing, and search functionality with advanced cloud integration.",
    image: "/projects/multimedia-app.jpg", // ⚠️ ADD PROJECT IMAGES
    tech: [
      "React.js",
      "Next.js 14",
      "Firebase",
      "Node.js",
      "GCP",
      "AI/ML",
    ],
    liveLink: "https://yourproject.vercel.app", // ⚠️ UPDATE THIS
    githubLink: "https://github.com/yourusername/project", // ⚠️ UPDATE THIS
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    image: "/projects/ecommerce.jpg", // ⚠️ ADD PROJECT IMAGES
    tech: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
    ],
    liveLink: "https://yourproject.vercel.app", // ⚠️ UPDATE THIS
    githubLink: "https://github.com/yourusername/project", // ⚠️ UPDATE THIS
  },
  // ADD MORE PROJECTS HERE
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, AI integration,
            and cloud solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-dark-lighter overflow-hidden flex items-center justify-center">
                {/* Placeholder - Add project images to public/projects/ */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-dark flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl mb-2">📱</p>
                    <p className="text-xs text-gray-500">Add screenshot</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

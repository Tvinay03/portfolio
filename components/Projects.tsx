"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Enterprise Community Management Platform",
    category: "Property Tech",
    description:
      "Scalable web and mobile modules for a property management ecosystem, built to support community workflows, secure access, and operational scale.",
    image: "/p1.png",
    outcome:
      "Delivered cross-platform product experiences with strong frontend architecture, secure backend services, and cloud-ready deployment patterns.",
    tech: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "GCP",
      "JWT",
      "REST APIs",
    ],
    githubLink: "https://github.com/Tvinay03/automatetesting.git",
  },
  {
    id: 2,
    title: "Customer Experience Communication Platform",
    category: "Communications",
    description:
      "Real-time communication workflows powered by Genesys Cloud APIs, event-driven integrations, and frontend experiences focused on speed and reliability.",
    image: "/p2.png",
    outcome:
      "Enabled richer communication flows, cleaner event processing, and resilient integrations across customer-facing systems.",
    tech: [
      "React.js",
      "Node.js",
      "Genesys Cloud",
      "Event Processing",
      "JavaScript",
      "Spring Boot",
    ],
    githubLink: "https://github.com/Tvinay03/multimedia-upload-search-app",
  },
  {
    id: 3,
    title: "AI Workflow Automation Systems",
    category: "AI and Automation",
    description:
      "Automation-first product features using OpenAI GPT, Google Cloud AI, Document AI, and scheduler-based workflows to reduce manual effort.",
    image: "/p3.png",
    outcome:
      "Reduced manual processes by 30 percent and helped improve platform engagement by 25 percent through intelligent automation.",
    tech: [
      "OpenAI GPT",
      "Google Cloud AI",
      "Document AI",
      "Node.js",
      "Triggers",
      "Task Schedulers",
    ],
  },
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
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="eyebrow mb-4">
            <Layers3 size={14} />
            Selected Work
          </span>
          <h2 className="section-title">
            Professional projects built for scale, adoption, and real product use.
          </h2>
          <p className="section-copy mt-5">
            These case-study style highlights reflect the kind of systems I build:
            polished interfaces, strong backend foundations, cloud-native
            delivery, and AI-enhanced workflows.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group panel flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-dark/70 px-3 py-2 text-xs uppercase tracking-[0.24em] text-primary-light backdrop-blur-xl">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="display-font text-2xl font-semibold text-white transition-colors group-hover:text-primary-light">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300/90">
                  {project.description}
                </p>
                <div className="my-5 soft-line" />
                <p className="text-sm leading-7 text-slate-400">
                  {project.outcome}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium text-primary-light">
                    Product Thinking
                    <ArrowUpRight size={16} />
                  </span>
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

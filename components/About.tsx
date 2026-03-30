"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Craft",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    title: "Backend Systems",
    icon: Database,
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Microservices",
    ],
  },
  {
    title: "Cloud Delivery",
    icon: Cloud,
    skills: [
      "Google Cloud Platform",
      "Vercel",
      "Render",
      "Railway",
      "Git",
      "Agile",
      "Production Deployments",
    ],
  },
  {
    title: "AI and Automation",
    icon: BrainCircuit,
    skills: [
      "OpenAI GPT",
      "Google Cloud AI",
      "Document AI",
      "Task Schedulers",
      "Workflow Triggers",
      "Python",
      "AI Feature Integration",
    ],
  },
];

const valuePoints = [
  "Architects secure APIs, Java Spring Boot services, microservices, and authentication flows for production applications.",
  "Builds consistent experiences across web and mobile using React.js, Next.js, and React Native.",
  "Integrates AI capabilities where they add measurable value, not just novelty.",
  "Ships with a strong quality mindset shaped by testing, coverage improvements, and Agile collaboration.",
];

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="eyebrow mb-4">
            <ShieldCheck size={14} />
            Expertise and Positioning
          </span>
          <h2 className="section-title">
            A professional full stack profile shaped by product execution and technical depth.
          </h2>
          <p className="section-copy mt-5">
            My work sits at the intersection of frontend polish, backend
            reliability, cloud deployment, and practical AI implementation.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="panel p-8">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <h3 className="display-font text-2xl font-semibold text-white sm:text-3xl">
                Professional Summary
              </h3>
              <div className="mt-5 space-y-4 leading-7 text-slate-300/[0.92]">
                <p>
                  Full Stack Developer with 3 years of experience building
                  scalable web and mobile applications using React.js, Next.js,
                  React Native, Java, Spring Boot, Node.js, and Google Cloud
                  Platform.
                </p>
                <p>
                  Experienced in designing REST APIs, Spring Boot and Node.js
                  backend services, microservices, and secure authentication
                  systems while integrating AI and automation capabilities that
                  improve product efficiency and user engagement.
                </p>
                <p>
                  I bring a practical engineering mindset: build strong
                  foundations, move fast with clarity, and deliver production-ready
                  software that feels polished to both users and teams.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {valuePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[22px] border border-white/10 bg-dark/[0.55] p-4 text-sm leading-6 text-slate-300"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <GraduationCap size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="display-font text-xl font-semibold text-white">
                    Education
                  </h4>
                  <p className="mt-2 text-slate-300">
                    B.Tech - Computer Science and Engineering (AI/IPA)
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    K L University, Vijayawada | 2019 - 2023
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary-light">
                    CGPA: 8.6 / 10
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="panel p-6 transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="display-font text-xl font-semibold text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-dark/60 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="panel overflow-hidden p-6"
            >
              <div className="shimmer-border absolute inset-x-0 top-0 h-px" />
              <p className="text-xs uppercase tracking-[0.26em] text-primary-light">
                Career Positioning
              </p>
              <h4 className="display-font mt-4 text-xl font-semibold text-white sm:text-2xl">
                Strong fit for product teams that need a developer who can own the full flow.
              </h4>
              <p className="mt-4 text-sm leading-7 text-slate-300/90">
                From interface execution to backend architecture in Java Spring
                Boot and Node.js, I align well with teams building modern SaaS
                platforms, operational products, and customer-facing tools that
                need both technical quality and business impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

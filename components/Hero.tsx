"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vinay-thota/",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Tvinay03",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:chinnuvinay663@gmail.com",
  },
];

const proofStats = [
  { value: "3", suffix: "+", label: "Years building production software" },
  { value: "30", suffix: "%", label: "Workflow reduction through automation" },
  { value: "25", suffix: "%", label: "Engagement uplift from AI features" },
];

const specialtyCards = [
  {
    title: "Product Engineering",
    icon: Layers3,
    copy: "React.js, Next.js, React Native, TypeScript, Tailwind CSS",
  },
  {
    title: "Backend and AI Systems",
    icon: BrainCircuit,
    copy: "Java, Spring Boot, Node.js, OpenAI GPT, Google Cloud AI",
  },
];

const Hero = () => {
  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark to-transparent" />

      <div className="pointer-events-none absolute left-[-5rem] top-1/3 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <span className="eyebrow">
                <Sparkles size={14} />
                Full Stack Developer | Hyderabad, India
              </span>

              <h1 className="section-title max-w-4xl text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                Designing and shipping
                <span className="text-gradient"> premium digital products</span>
                {" "}for web, mobile, and AI-powered platforms.
              </h1>

              <p className="section-copy max-w-2xl text-slate-300 sm:text-lg">
                I am Thota Govindu Vinay, a full stack developer with 3 years of
                experience building scalable applications with React.js, Next.js,
                React Native, Java, Spring Boot, Node.js, and Google Cloud
                Platform. I specialize in secure backend architecture, AI
                integrations, and workflow automation that turns ambitious ideas
                into production-ready systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="chip">React.js</span>
              <span className="chip">Next.js 14</span>
              <span className="chip">React Native</span>
              <span className="chip">Java</span>
              <span className="chip">Spring Boot</span>
              <span className="chip">Node.js</span>
              <span className="chip">Google Cloud Platform</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection("#projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.18)]"
              >
                Explore Projects
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/5 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Start a Conversation
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1zNRomew1zUgV7arHAf0926gn7mIftYUZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.12] px-7 py-4 font-semibold text-primary-light transition-all duration-300 hover:-translate-y-1 hover:bg-primary/[0.18]"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {proofStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.12, duration: 0.6 }}
                  className="panel p-5"
                >
                  <div className="display-font text-4xl font-semibold text-white">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300/[0.85]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-1 text-sm text-slate-300">
              <a
                href="mailto:chinnuvinay663@gmail.com"
                className="chip transition-colors hover:text-white"
              >
                <Mail size={16} className="text-primary" />
                chinnuvinay663@gmail.com
              </a>
              <span className="chip">
                <MapPin size={16} className="text-secondary" />
                Hyderabad, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[34rem]">
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-0 animate-orbit rounded-full border border-dashed border-white/10" />
              <div className="absolute -left-6 top-16 hidden h-28 w-28 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl lg:block" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="panel accent-ring relative overflow-hidden p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.12] via-transparent to-secondary/10" />
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-primary/[0.15] blur-2xl" />
                <div className="relative z-10 grid gap-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-primary-light">
                        Featured Profile
                      </p>
                      <h2 className="display-font mt-3 text-2xl font-semibold sm:text-3xl">
                        Full Stack Developer
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 p-3">
                      <Sparkles size={18} className="text-primary" />
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-dark">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                      <Image
                        src="/profileimage.png"
                        alt="Thota Govindu Vinay portrait"
                        width={900}
                        height={1100}
                        className="h-full w-full object-cover"
                        priority
                      />
                    </div>

                    <div className="grid gap-4">
                      {specialtyCards.map((card) => (
                        <div
                          key={card.title}
                          className="rounded-[24px] border border-white/10 bg-dark-elevated/70 p-5"
                        >
                          <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                            <card.icon size={20} className="text-primary" />
                          </div>
                          <h3 className="display-font text-xl font-semibold text-white">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300/90">
                            {card.copy}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="soft-line" />

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                          aria-label={social.name}
                        >
                          <social.icon size={16} className="text-primary" />
                          {social.name}
                        </a>
                      ))}
                    </div>
                    <p className="text-sm leading-6 text-slate-300/[0.85]">
                      Secure APIs, microservices, Spring Boot services, AI
                      workflows, and polished user interfaces built end to end.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-10 hidden max-w-[13rem] rounded-[24px] border border-white/10 bg-dark-lighter/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-secondary-light">
                  Focus Areas
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  AI-enhanced products, property tech platforms, communication
                  systems, and scalable developer workflows.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-14 hidden rounded-[24px] border border-primary/20 bg-primary/10 p-4 text-sm text-primary-light shadow-[0_18px_50px_rgba(211,177,122,0.14)] backdrop-blur-xl lg:block"
              >
                Production-ready delivery
                <div className="mt-2 display-font text-2xl font-semibold text-white">
                  Web + Mobile + AI
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Sparkles } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer - Full Stack Developer",
    company: "Unify Liv",
    location: "Hyderabad, India",
    period: "May 2023 - Present",
    highlights: ["Backend Engineering", "AI Integrations", "Cloud Delivery"],
    responsibilities: [
      "Built and deployed scalable web and mobile applications using React.js, Next.js, React Native, Node.js, Java backend services, and GCP.",
      "Automated workflows using triggers and task schedulers, reducing manual processes by 30 percent.",
      "Integrated OpenAI GPT and Google Cloud AI services to enhance platform features and increase engagement by 25 percent.",
      "Designed secure backend services with REST APIs, JWT authentication, Spring Boot patterns, and scalable microservices.",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Software Engineer Intern - Full Stack Developer",
    company: "Genesys Telecom Labs",
    location: "Chennai, India",
    period: "Aug 2022 - May 2023",
    highlights: ["Spring Boot", "Communication Systems", "Testing"],
    responsibilities: [
      "Enhanced call and screen recording applications using JavaScript, Knockout.js, Ember.js, and Spring Boot.",
      "Developed unit and integration tests using Jest and Karma, increasing coverage to 90 percent and reducing production issues.",
      "Collaborated in Agile teams to ship reliable features for communication-driven enterprise software.",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="eyebrow mb-4">
            <Sparkles size={14} />
            Career Journey
          </span>
          <h2 className="section-title">
            Experience focused on shipping software that performs in real environments.
          </h2>
          <p className="section-copy mt-5">
            My recent roles show a consistent pattern: build reliable products,
            improve workflows, integrate modern tooling, and deliver with
            professional engineering discipline.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-primary via-white/20 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-0 top-8 z-10 h-8 w-8 rounded-full border border-primary/30 bg-dark-lighter shadow-[0_0_0_8px_rgba(6,16,28,0.95)] md:left-1/2 md:-translate-x-1/2">
                  <div className="absolute inset-[7px] rounded-full bg-primary" />
                </div>

                <div className="md:w-1/2">
                  <div
                    className={`panel ml-12 p-7 transition-all duration-300 hover:border-primary/30 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="mb-5">
                      {exp.current && (
                        <span className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                          Current
                        </span>
                      )}
                      <h3 className="display-font text-2xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="mt-3 flex flex-col gap-2 text-slate-400">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary" />
                          <span className="font-semibold text-white">{exp.company}</span>
                          <span>- {exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

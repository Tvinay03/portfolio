"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// 🎯 CUSTOMIZE YOUR EXPERIENCE HERE
const experiences = [
  {
    id: 1,
    role: "Software Engineer — Full Stack Developer",
    company: "Arnest",
    location: "Bengaluru",
    period: "May 2023 – Present",
    responsibilities: [
      "Developed scalable web and mobile applications using React.js, Next.js, React Native, GCP and Node.js",
      "Automated workflows using triggers and schedulers to enhance efficiency",
      "Integrated AI models (OpenAI LLM GPT, Google Cloud AI) for automation and improved user interactions",
      "Fine-tuned LLMs and implemented Google Cloud Document AI for better data processing",
      "Applied Machine Learning techniques for actionable insights and system optimization",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Software Engineer Intern — Full Stack Developer",
    company: "Genesys Telecom Labs",
    location: "Chennai",
    period: "Aug 2022 – May 2023",
    responsibilities: [
      "Enhanced call and screen recording applications using JavaScript, Knockout.js, Ember.js, and Spring Boot",
      "Developed unit tests with Jest and Karma for improved software reliability",
      "Collaborated with cross-functional teams to deliver high-quality features on schedule",
    ],
    current: false,
  },
  // ADD MORE EXPERIENCES HERE
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div
                    className={`glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">
                          Current
                        </span>
                      )}
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                      <div className="flex flex-col gap-2 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary" />
                          <span className="font-semibold text-white">
                            {exp.company}
                          </span>
                          <span>• {exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
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

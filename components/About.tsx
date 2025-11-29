"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Cpu } from "lucide-react";

// 🎯 CUSTOMIZE YOUR SKILLS HERE
const skillCategories = [
  {
    title: "Frontend",
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
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Google Cloud Platform",
      "Cloud Functions",
      "Cloud Storage",
      "Docker",
      "Git",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    skills: [
      "OpenAI GPT",
      "Google Cloud AI",
      "Document AI",
      "LLM Fine-tuning",
      "Machine Learning",
      "Python",
      "TensorFlow",
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-lighter">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a focus on innovation and excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Full Stack Developer
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a Full Stack Developer proficient in{" "}
                  <span className="text-primary font-semibold">
                    JavaScript, React.js, Next.js, React Native
                  </span>
                  , and{" "}
                  <span className="text-primary font-semibold">Node.js</span>,
                  with deep expertise in{" "}
                  <span className="text-primary font-semibold">
                    Google Cloud Platform (GCP)
                  </span>
                  .
                </p>
                <p>
                  I&apos;m passionate about{" "}
                  <span className="text-primary font-semibold">
                    AI-driven development
                  </span>
                  , leveraging Machine Learning, Large Language Models (LLMs),
                  and Google Cloud AI to build scalable, high-performance
                  applications.
                </p>
                <p>
                  My focus is on creating innovative solutions that optimize
                  efficiency, enhance user experience, and push the boundaries
                  of what&apos;s possible with modern web technologies.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-dark rounded-lg">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-dark rounded-lg">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-400 text-sm">Projects Built</div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-primary">🎓</span>
                Education
              </h4>
              <div className="space-y-1">
                <p className="font-semibold">
                  B.Tech in Computer Science & Engineering (AI/IPA)
                </p>
                <p className="text-gray-400 text-sm">K L University, Vijayawada</p>
                <p className="text-primary text-sm font-medium">
                  CGPA: 8.6/10 | May 2019 – May 2023
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
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
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-dark text-gray-300 rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

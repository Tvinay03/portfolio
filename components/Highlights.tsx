"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const highlightCards = [
  {
    title: "Workflow Automation",
    value: "30%",
    copy: "Reduced manual operational work with triggers, schedulers, and streamlined product flows.",
    icon: Workflow,
  },
  {
    title: "AI Feature Impact",
    value: "25%",
    copy: "Improved engagement by integrating OpenAI GPT and Google Cloud AI into product experiences.",
    icon: BrainCircuit,
  },
  {
    title: "Testing Discipline",
    value: "90%",
    copy: "Raised code coverage with Jest and Karma to improve release confidence and software reliability.",
    icon: ShieldCheck,
  },
];

const operatingModel = [
  {
    title: "Frontend and mobile execution",
    copy: "Responsive interfaces with React.js, Next.js, React Native, and modern UI systems.",
    icon: Rocket,
  },
  {
    title: "Backend architecture",
    copy: "REST APIs, authentication, microservices, and production-grade service design.",
    icon: BadgeCheck,
  },
  {
    title: "Cloud and AI integration",
    copy: "Google Cloud delivery, automation pipelines, and AI capabilities used with product intent.",
    icon: Cloud,
  },
];

const Highlights = () => {
  return (
    <section id="impact" className="relative py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="panel p-8 md:p-10"
          >
            <span className="eyebrow">
              <BadgeCheck size={14} />
              Impact Snapshot
            </span>
            <h2 className="section-title mt-6">
              Professional proof that supports the visual polish.
            </h2>
            <p className="section-copy mt-5 max-w-2xl">
              Premium portfolios are not only about aesthetics. They also show
              evidence. This section highlights the measurable outcomes and
              technical positioning that reinforce your profile.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {highlightCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="metric-card"
                >
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 w-fit">
                    <card.icon size={20} className="text-primary" />
                  </div>
                  <div className="display-font mt-5 text-4xl font-semibold text-white">
                    {card.value}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300/[0.85]">
                    {card.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="panel overflow-hidden p-8 md:p-10"
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.26em] text-primary-light">
              Delivery Model
            </p>
            <h3 className="display-font mt-4 text-2xl font-semibold text-white sm:text-3xl">
              End-to-end execution aligned with modern product teams.
            </h3>
            <div className="mt-8 space-y-4">
              {operatingModel.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="rounded-[24px] border border-white/10 bg-dark/[0.55] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <item.icon size={18} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300/[0.85]">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

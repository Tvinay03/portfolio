"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "chinnuvinay663@gmail.com",
    href: "mailto:chinnuvinay663@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 9390059152",
    href: "tel:+919390059152",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Hyderabad, India",
    href: "https://www.google.com/maps/place/Hyderabad",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinay-thota/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Tvinay03",
    icon: Github,
  },
];

const Contact = () => {

  return (
    <section id="contact" className="relative py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="eyebrow mb-4">
            <Send size={14} />
            Contact
          </span>
          <h2 className="section-title">
            Open to professional opportunities, product collaborations, and impactful engineering work.
          </h2>
          <p className="section-copy mt-5">
            If you are building something ambitious and need a developer who can
            handle frontend, backend, cloud, and AI-enabled workflows, let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="panel p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-primary-light">
                Let&apos;s Build Something Strong
              </p>
              <h3 className="display-font mt-4 text-3xl font-semibold text-white">
                Available for full stack roles, contract work, and product-focused collaborations.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300/90">
                I work best on products that value clean user experience, strong
                engineering foundations, and measurable outcomes. Whether the need
                is a polished frontend, secure backend services, cloud deployment,
                or AI feature integration, I can contribute across the stack.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:chinnuvinay663@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-dark transition-all duration-300 hover:-translate-y-1"
                >
                  Send Email
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1zNRomew1zUgV7arHAf0926gn7mIftYUZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel flex items-center justify-between p-5 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <social.icon size={18} className="text-primary" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactMethods.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                className="panel flex items-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-1 font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="panel p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-secondary-light">
                Best Fit
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300/90">
                Product engineering, SaaS platforms, cloud-backed systems,
                internal tools, communication products, and AI-enabled features
                where clean execution matters.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

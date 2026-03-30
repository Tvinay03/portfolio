"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Impact", href: "#impact" },
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-dark/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="display-font text-lg font-semibold tracking-[0.2em] text-white sm:text-xl"
          >
            VINAY
            <span className="ml-2 text-primary">.DEV</span>
          </a>

          <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="hidden items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.12] px-5 py-3 text-sm font-semibold text-primary-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/[0.18] md:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="section-shell pb-4 md:hidden">
          <div className="panel overflow-hidden rounded-3xl p-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block rounded-2xl px-4 py-3 text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="mt-2 flex items-center justify-between rounded-2xl border border-primary/25 bg-primary/[0.12] px-4 py-3 text-sm font-semibold text-primary-light"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

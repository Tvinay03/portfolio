import { Github, Linkedin, Mail, Heart } from "lucide-react";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="display-font text-xl font-semibold text-white">
              VINAY<span className="text-primary">.DEV</span>
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Full stack developer building premium digital products with modern engineering.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-center text-sm text-slate-400 md:text-right">
            <p className="flex items-center justify-center gap-1 md:justify-end">
              Made with <Heart size={16} className="fill-primary text-primary" /> by
              Vinay
            </p>
            <p className="mt-1">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

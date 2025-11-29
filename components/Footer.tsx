import { Github, Linkedin, Mail, Heart } from "lucide-react";

// 🎯 CUSTOMIZE YOUR SOCIAL LINKS HERE
const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile", // ⚠️ UPDATE THIS
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourprofile", // ⚠️ UPDATE THIS
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:chinnavinay663@gmail.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter border-t border-dark-border py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Vinay.dev</h3>
            <p className="text-gray-400 text-sm">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart size={16} className="text-primary fill-primary" /> by
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

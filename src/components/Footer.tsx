import { motion } from "framer-motion";
import Logo from "./Logo";


const footerLinks = {
  services: [
    { label: "Website Development", href: "#" },
    { label: "Web Applications", href: "#" },
    { label: "System Migration", href: "#" },
    { label: "SaaS Development", href: "#" },
    { label: "AI Automation", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ],
};


const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              Transforming businesses through innovative digital solutions. 
              We build the future of automation, one project at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MMindverse Automation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

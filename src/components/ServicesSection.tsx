import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Workflow, 
  Sparkles,
  ArrowUpRight,
  Palette
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom-built, high-performance websites that captivate users and drive conversions. From corporate sites to complex web portals.",
    features: ["Responsive Design", "SEO Optimized", "Lightning Fast"],
  },
  {
    icon: Cpu,
    title: "Web Applications",
    description: "Scalable, secure web applications built with modern frameworks. Enterprise-grade solutions for complex business requirements.",
    features: ["React & Next.js", "Real-time Features", "API Integration"],
  },
  {
    icon: Database,
    title: "System Migration",
    description: "Seamless migration of legacy systems to modern architectures. Zero downtime transitions with complete data integrity.",
    features: ["Data Migration", "Cloud Transition", "Legacy Modernization"],
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description: "End-to-end SaaS product development from concept to launch. Multi-tenant architectures with subscription management.",
    features: ["Multi-tenancy", "Scalable Infrastructure", "Analytics Dashboard"],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Intelligent automation solutions powered by cutting-edge AI. Streamline operations and boost productivity exponentially.",
    features: ["Process Automation", "ML Integration", "Smart Workflows"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that delights and converts. We craft intuitive interfaces with stunning visuals that elevate your brand.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Bespoke digital solutions tailored to your unique business challenges. From concept to deployment, we bring your vision to life.",
    features: ["Consultation", "Custom Development", "Ongoing Support"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass-panel p-8 md:p-10 hover:bg-glass-strong transition-all duration-500"
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center border-2 border-primary mb-6 group-hover:bg-primary transition-colors duration-300">
        <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((feature, i) => (
          <span
            key={i}
            className="font-display text-xs uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Link */}
      <div className="flex items-center gap-2 text-primary font-display text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn More</span>
        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Comprehensive Digital
            <br />
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to deployment, we deliver end-to-end digital solutions 
            that transform your business and exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

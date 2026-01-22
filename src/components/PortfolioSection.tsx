import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time financial analytics platform with AI-powered insights for enterprise clients.",
    tags: ["React", "Node.js", "AI/ML"],
    color: "from-primary/20 to-transparent",
  },
  {
    title: "E-Commerce Migration",
    category: "System Migration",
    description: "Migrated legacy e-commerce platform to modern microservices architecture.",
    tags: ["AWS", "Docker", "PostgreSQL"],
    color: "from-primary/20 to-transparent",
  },
  {
    title: "AI Content Platform",
    category: "SaaS",
    description: "Multi-tenant SaaS platform for AI-powered content generation and management.",
    tags: ["Next.js", "OpenAI", "Stripe"],
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Healthcare Portal",
    category: "Web Application",
    description: "HIPAA-compliant patient management system with telemedicine integration.",
    tags: ["React", "Node.js", "WebRTC"],
    color: "from-primary/20 to-transparent",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative glass-panel overflow-hidden"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative p-8 md:p-10">
        {/* Category */}
        <span className="font-display text-xs uppercase tracking-widest text-primary mb-4 block">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="font-display text-xs uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="flex items-center gap-2 text-primary font-display text-sm uppercase tracking-wider">
          <span>View Case Study</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const PortfolioSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Featured
              <br />
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            A selection of projects that showcase our expertise in delivering 
            transformative digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

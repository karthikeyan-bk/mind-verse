import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges through comprehensive consultation sessions.",
    details: ["Stakeholder Interviews", "Requirements Analysis", "Market Research", "Technical Assessment"],
  },
  {
    icon: Lightbulb,
    step: "",
    title: "Strategy & Design",
    description: "Our team crafts a detailed roadmap with wireframes, prototypes, and architectural blueprints.",
    details: ["UX/UI Design", "System Architecture", "Tech Stack Selection", "Timeline Planning"],
  },
  {
    icon: Code2,
    step: "",
    title: "Development",
    description: "Agile development with iterative sprints, continuous integration, and rigorous code reviews.",
    details: ["Sprint Planning", "Code Development", "Quality Assurance", "Client Reviews"],
  },
  {
    icon: Rocket,
    step: "",
    title: "Launch",
    description: "Comprehensive testing, performance optimization, and seamless deployment to production.",
    details: ["Performance Testing", "Security Audit", "Deployment", "Go-Live Support"],
  },
  {
    icon: Headphones,
    step: "",
    title: "Support & Growth",
    description: "Ongoing maintenance, updates, and strategic improvements to keep you ahead.",
    details: ["24/7 Monitoring", "Regular Updates", "Feature Enhancements", "Scaling Support"],
  },
];

const ProcessSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-background relative">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            From Concept to
            <br />
            <span className="text-gradient">Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A proven methodology refined over years of delivering successful 
            projects for clients worldwide.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {steps.map((step, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                ref={ref}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className={`relative grid lg:grid-cols-2 gap-8 mb-16 last:mb-0 ${
                  isEven ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Content */}
                <div className={`${isEven ? "lg:pr-20 lg:text-right" : "lg:col-start-2 lg:pl-20"}`}>
                  <div className={`glass-panel p-8 md:p-10 group hover:border-primary transition-colors duration-300 ${isEven ? "" : "lg:direction-ltr"}`}>
                    {/* Icon & Step */}
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? "lg:justify-end" : ""}`}>
                      <div className="w-12 h-12 flex items-center justify-center border-2 border-primary group-hover:bg-primary transition-colors duration-300">
                        <step.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <span className="font-display text-5xl font-bold text-primary/20">
                        {step.step}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : ""}`}>
                      {step.details.map((detail, i) => (
                        <span
                          key={i}
                          className="font-display text-xs uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-6 h-6 bg-primary glow-effect-sm"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: "Innovation First", description: "We leverage cutting-edge technologies to build solutions that put you ahead of the competition." },
    { title: "Quality Obsessed", description: "Every line of code is crafted with precision. We don't ship until it's perfect." },
    { title: "Result Driven", description: "Our solutions are designed to deliver measurable business outcomes and ROI." },
    { title: "Partner Mindset", description: "We become an extension of your team, invested in your long-term success." },
  ];

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              We're Not Just
              <br />
              <span className="text-gradient">Developers</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're architects of digital transformation. At MMindverse Automation, 
              we combine deep technical expertise with strategic thinking to build 
              solutions that don't just work—they dominate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Founded by industry veterans with decades of combined experience, 
              we've helped startups scale to millions and enterprises modernize 
              their digital infrastructure. Our approach is simple: understand 
              deeply, plan meticulously, execute flawlessly.
            </p>

            {/* Stats Row */}
            <div className="flex gap-12">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "200+", label: "Happy Clients" },
                { value: "15", label: "Countries Served" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-6 group hover:border-primary transition-colors duration-300"
              >
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

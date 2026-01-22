import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import halftonePattern from "@/assets/halftone-pattern.webp";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Halftone Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: `url(${halftonePattern})`, backgroundSize: '400px' }}
      />


      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - CTA */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Ready to Transform
              <br />
              <span className="text-gradient">Your Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Let's discuss how we can help you achieve your digital goals. 
              Our team is ready to turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button variant="hero" size="xl" className="group">
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule a Call
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-primary">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground block">
                    Email Us
                  </span>
                  <span className="font-display text-lg text-foreground">
                    shafeer@mindverseautomation.agency
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-primary">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground block">
                    Call Us
                  </span>
                  <span className="font-display text-lg text-foreground">
                    +91 9629661106
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-primary">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-muted-foreground block">
                    Visit Us
                  </span>
                  <span className="font-display text-lg text-foreground">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-12"
          >
            <h3 className="font-display text-2xl font-bold mb-8 text-foreground">
              Get a Free Consultation
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button variant="hero" size="xl" className="w-full group">
                Send Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

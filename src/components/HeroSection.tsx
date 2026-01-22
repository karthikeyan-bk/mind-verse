import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import halftonePattern from "@/assets/halftone-pattern.webp";
import heroVideo from "@/assets/hero-video.mp4";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Halftone Pattern Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.15] mix-blend-overlay" style={{
      backgroundImage: `url(${halftonePattern})`,
      backgroundSize: '200px'
    }} />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-background/70 pointer-events-none" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/60 via-transparent to-background/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container-wide px-6 md:px-12 lg:px-20 pt-32">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8">
            <ArrowRight size={16} className="text-primary" />
            <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
              Next-Gen Digital Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
            <span className="text-foreground">WE BUILD</span>
            <br />
            <span className="text-gradient">THE FUTURE</span>
            <br />
            <span className="text-foreground">OF AUTOMATION</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed">
            Transforming businesses through cutting-edge web development, 
            AI-powered automation, and seamless digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button variant="hero" size="xl" className="group">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-border">
            {[{
            value: "10+",
            label: "Projects Delivered"
          }, {
            value: "98%",
            label: "Client Satisfaction"
          }, {
            value: "10+",
            label: "AI Automations"
          }, {
            value: "24/7",
            label: "Support Available"
          }].map((stat, index) => <div key={index} className="flex flex-col">
                <span className="font-display text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="font-display text-sm uppercase tracking-wider text-muted-foreground mt-2">
                  {stat.label}
                </span>
              </div>)}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>;
};
export default HeroSection;
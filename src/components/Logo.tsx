import { motion } from "framer-motion";
const Logo = ({
  className = ""
}: {
  className?: string;
}) => {
  return <motion.div className={`flex items-center gap-3 ${className}`} initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5
  }}>
      {/* Logo Icon */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer hexagon */}
          <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="hsl(50, 100%, 50%)" strokeWidth="2" fill="none" />
          {/* Inner M shape */}
          <path d="M12 28V14L20 22L28 14V28" stroke="hsl(50, 100%, 50%)" strokeWidth="2.5" strokeLinecap="square" fill="none" />
          {/* Center dot */}
          <circle cx="20" cy="20" r="2" fill="hsl(50, 100%, 50%)" />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 blur-lg opacity-40">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" fill="hsl(50, 100%, 50%)" />
          </svg>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-xl tracking-tight text-foreground">MIND<span className="text-primary">VERSE</span>
        </span>
        <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Automation
        </span>
      </div>
    </motion.div>;
};
export default Logo;
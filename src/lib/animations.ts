import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const scanLine: Variants = {
  initial: { scaleY: 0, transformOrigin: "top" },
  animate: { 
    scaleY: 1, 
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut"
    } 
  }
};

export const pulseGold: Variants = {
  animate: {
    boxShadow: ["0 0 0px rgba(215, 170, 45, 0)", "0 0 32px rgba(215, 170, 45, 0.4)", "0 0 0px rgba(215, 170, 45, 0)"],
    transition: { duration: 3, repeat: Infinity }
  }
};

export const viewportConfig = {
  once: true,
  margin: "0px"
};

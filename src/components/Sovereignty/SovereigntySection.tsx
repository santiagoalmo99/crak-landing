import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';

export const SovereigntySection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal py-24">
      {/* Dynamic background animation for 'Atmospheric Flow' */}
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation 
          gradientBackgroundStart="rgb(10, 10, 11)"
          gradientBackgroundEnd="rgb(17, 17, 19)"
          firstColor="215, 170, 45"
          secondColor="20, 20, 22"
          thirdColor="10, 10, 11"
          fourthColor="50, 40, 10"
          fifthColor="215, 170, 45"
          pointerColor="215, 170, 45"
          size="70%"
          blendingValue="soft-light"
          interactive={false}
          className="opacity-10"
        >
          <div className="absolute inset-0 bg-charcoal/20" />
        </BackgroundGradientAnimation>
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-8 bg-harvest/40" />
            <h2 className="text-harvest/60 text-xs md:text-sm font-mono tracking-[0.4em] uppercase">
              The Vision
            </h2>
            <div className="h-px w-8 bg-harvest/40" />
          </motion.div>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-white/90 leading-tight tracking-tight">
              Democratization isn’t about accessibility.
            </p>
            <p className="text-4xl md:text-6xl lg:text-8xl font-semibold text-white leading-tight tracking-tighter">
              It’s about <span className="neural-pulse-scan px-2">Sovereignty.</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            viewport={{ once: true }}
            className="mt-16 relative"
          >
             <p className="text-lg md:text-2xl text-offwhite/50 font-light max-w-3xl mx-auto leading-relaxed italic font-serif">
              "Bringing neural certification to the source means the producer is no longer a price-taker, but a value-prover."
            </p>
            
            <div className="absolute -top-6 -left-4 text-6xl text-harvest/10 pointer-events-none">“</div>
            <div className="absolute -bottom-10 -right-4 text-6xl text-harvest/10 pointer-events-none">”</div>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 2, ease: "circOut" }}
            viewport={{ once: true }}
            className="h-px w-32 bg-gradient-to-r from-transparent via-harvest/30 to-transparent mx-auto mt-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

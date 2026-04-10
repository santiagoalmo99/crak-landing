import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '../ui/BackgroundBeams';

export const SovereigntySection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal py-24">
      {/* Subtle background animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <BackgroundBeams />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-offwhite/50 text-lg md:text-xl font-medium tracking-widest uppercase mb-8">
            The Vision
          </h2>
          
          <div className="space-y-6">
            <p className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight">
              Democratization isn’t just about accessibility.
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-semibold text-harvest leading-tight tracking-tighter">
              It’s about <span className="shimmer-premium">Sovereignty.</span>
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            viewport={{ once: true }}
            className="mt-12 text-lg md:text-xl text-offwhite/60 font-light max-w-2xl mx-auto leading-relaxed italic"
          >
            "Bringing neural certification to the source means the producer is no longer a price-taker, but a value-prover."
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
            viewport={{ once: true }}
            className="h-px w-24 bg-harvest/30 mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
};

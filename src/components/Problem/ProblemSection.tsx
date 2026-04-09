"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp, staggerChildren, viewportConfig } from '../../lib/animations';

export const ProblemSection = () => {
  const { ref, inView } = useInView(viewportConfig);

  return (
    <section className="relative py-32 bg-charcoal overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Editorial Content */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="flex-1 space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-harvest">The Problem</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Specialty coffee sold as commodity. <br/>
              <span className="text-white/40">Every. Single. Day.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-lg text-offwhite/50 font-light leading-relaxed max-w-xl">
              <p>
                For decades, Latin American coffee farmers have navigated a profound information asymmetry. Buyers arrive with lab-grade equipment. Farmers arrive with tired eyes and manual processes that take hours per sack.
              </p>
              <p>
                The result: specialty lots worth <span className="text-white font-medium">$1.45/kg</span> are sold at <span className="text-red-400 font-medium">$0.85/kg</span> — simply because the farmer had no tool to prove otherwise.
              </p>
              <p className="text-offwhite/80 font-medium">
                CRAK.APP closes that gap forever.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Asset/Widget (Animated Loss Calculator) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="glass-dark rounded-[32px] p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-harvest to-transparent" />
              
              <div className="flex flex-col gap-2 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold">Average loss per harvest</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-mono font-bold text-offwhite">$1,240</span>
                  <span className="text-xl font-mono text-white/20">USD</span>
                </div>
                <span className="text-sm text-white/40">Lost annually to the commodity gap</span>
              </div>

              {/* Bar Comparison */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                    <span>Without CRAK</span>
                    <span className="text-red-400">$0.85/kg</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-red-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                    <span>With CRAK (Certified)</span>
                    <span className="text-harvest">$1.45/kg</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-harvest shadow-[0_0_20px_rgba(215,170,45,0.4)]"
                    />
                  </div>
                </div>
              </div>

              {/* Tooltip-like decorative element */}
              <div className="mt-12 flex items-center gap-4 p-4 rounded-xl bg-harvest/5 border border-harvest/10">
                <div className="w-8 h-8 rounded-full bg-harvest/20 flex items-center justify-center">
                  <span className="text-harvest text-xs">ℹ</span>
                </div>
                <p className="text-[11px] text-harvest/80 leading-tight">
                  Based on SCA price standards for C-Grade vs G1 Colombian Arabica.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

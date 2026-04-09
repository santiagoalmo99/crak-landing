"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Play, ArrowRight } from 'lucide-react';
import { BackgroundBeams } from '../ui/BackgroundBeams';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { ScannerHUD } from './ScannerHUD';
import { fadeUp, staggerChildren, viewportConfig } from '../../lib/animations';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-charcoal selection:bg-harvest selection:text-charcoal px-6 md:px-12 lg:px-24">
      {/* Background Layer - Cinematic Mountains */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.png" 
          alt="Colombian coffee mountains at dusk" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/80 to-charcoal" />
        <BackgroundBeams />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 pt-20 lg:pt-0">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
          className="flex flex-col items-start max-w-3xl"
        >
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-harvest animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-offwhite/80">
              The Digital Sovereignty Protocol for Coffee Origin
            </span>
          </motion.div>

          <TextGenerateEffect 
            words="The Global Standard for Origin. Intelligence at the table."
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8"
          />

          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-offwhite/50 max-w-xl mb-12 font-jakarta font-light leading-relaxed"
          >
            CRAK transforms specialty coffee certification into a digital sovereign right. Verifying quality, traceability, and market value directly at the source—offline and in real-time.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="px-6 py-4 bg-harvest hover:bg-harvest/90 text-charcoal rounded-xl font-black text-base transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(215,170,45,0.2)] border border-harvest/50 flex items-center justify-center gap-3 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
               Scan Your First Lot — Free
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-4 bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/20 text-offwhite rounded-xl font-bold text-base transition-all flex items-center justify-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-3 h-3 fill-white" />
              </div>
              Watch How It Works
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Widget */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-auto flex justify-center lg:justify-end pr-0 lg:pr-12"
        >
          <ScannerHUD />
        </motion.div>

      </div>

      {/* Hero Foot - Enhanced visibility regions */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 py-3 px-8 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 whitespace-nowrap z-20"
      >
        <span className="hover:text-harvest transition-colors cursor-default">Huila</span>
        <div className="w-1 h-1 rounded-full bg-harvest/40" />
        <span className="hover:text-harvest transition-colors cursor-default">Antioquia</span>
        <div className="w-1 h-1 rounded-full bg-harvest/40" />
        <span className="hover:text-harvest transition-colors cursor-default">Cauca</span>
        <div className="w-1 h-1 rounded-full bg-harvest/40" />
        <span className="hover:text-harvest transition-colors cursor-default">Nariño</span>
      </motion.div>
    </section>
  );
};

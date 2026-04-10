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
          alt="Colombian coffee mountains at midnight" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/60 to-charcoal" />
        <BackgroundBeams />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 lg:pt-0">
        
        {/* Left Content - Strategic Text */}
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="relative z-20 flex flex-col items-start text-left max-w-2xl lg:max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-harvest/10 border border-harvest/20 text-harvest font-bold text-[10px] uppercase tracking-[0.2em] animate-pulse-slow">
              v1.0 Protocol
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-white"
          >
            Digital <span className="font-serif italic font-light text-white/90">Sovereignty</span> <br/>
            Protocol.
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-offwhite/60 font-light max-w-xl leading-relaxed mb-10"
          >
            A Global Standard for Origin. <br/>
            <span className="font-bold text-harvest bg-gradient-to-r from-harvest via-white to-harvest bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent uppercase tracking-widest text-sm">Intelligence</span> verified at the source.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="px-8 py-4 bg-harvest hover:bg-harvest/90 text-charcoal rounded-xl font-black text-base transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(215,170,45,0.2)] border border-harvest/50 flex items-center justify-center gap-3 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
               Scan Your Lot
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/20 text-offwhite rounded-xl font-bold text-base transition-all flex items-center justify-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-3 h-3 fill-white" />
              </div>
              Watch Protocol
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Tactical Widget */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full lg:w-auto flex justify-center lg:justify-end"
        >
          <div className="relative transform scale-90 md:scale-100 lg:scale-110 xl:scale-125">
            <ScannerHUD />
            {/* Ambient Shadow for depth */}
            <div className="absolute -bottom-10 inset-x-0 h-10 bg-black/40 blur-3xl rounded-full" />
          </div>
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

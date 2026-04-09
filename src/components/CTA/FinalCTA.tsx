"use client";
import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D7AA2D', '#22FF88', '#ffffff'],
    });
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-10"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-offwhite">
              Your next harvest.<br/>
              <span className="text-white/40">Your highest price. Ever.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-offwhite/60 font-light max-w-2xl mx-auto leading-relaxed">
              CRAK is currently in early access. Join producers already scanning with confidence across Colombia, Brazil, and Guatemala.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button 
                onClick={handleConfetti}
                className="px-10 py-6 bg-harvest hover:bg-harvest/90 text-charcoal rounded-2xl font-black text-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(215,170,45,0.4)] flex items-center justify-center gap-3 group"
              >
                Start Scanning Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-10 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-offwhite rounded-2xl font-bold text-xl transition-all flex items-center justify-center">
                Request B2B Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-12">
              {[
                "Free forever basic scans",
                "No credit card required",
                "Works on any Android 8+",
                "SCA-grade certification"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-scan" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
};

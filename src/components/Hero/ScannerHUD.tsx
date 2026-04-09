"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, ShieldCheck, Zap, WifiOff } from 'lucide-react';
import { cn } from '../../lib/utils';

export const ScannerHUD = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev < 94 ? prev + 1 : 94));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] flex items-center justify-center">
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-harvest/5 blur-3xl animate-pulse-slow" />
      
      {/* Scanner Frame */}
      <div className="relative w-80 h-[480px] lg:w-[400px] lg:h-[560px] glass rounded-[48px] border-white/20 overflow-hidden shadow-2xl">
        {/* Mock Camera Preview */}
        <div className="absolute inset-0 bg-charcoal/50">
          <img 
            src="/coffee_mountains_dawn.png" 
            alt="Scan area" 
            className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
          />
        </div>

        {/* Scanning Line */}
        <motion.div 
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-scan shadow-[0_0_15px_#22FF88] z-20"
        />

        {/* UI Overlays */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-30 pointer-events-none">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-tighter text-white/40">Analysis Mode</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-scan animate-pulse" />
                <span className="text-xs font-mono font-bold text-scan">LIVE_FEED</span>
              </div>
            </div>
            <Scan className="w-5 h-5 text-white/60" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Detection Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="px-3 py-1.5 glass rounded-full self-start flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-scan" />
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">Healthy · {count}%</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="px-3 py-1.5 glass rounded-full self-start flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">Defect · 3%</span>
            </motion.div>

            <div className="mt-4 flex flex-col">
              <span className="text-[32px] font-mono font-bold text-offwhite leading-none">0.{count}s</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Inference Speed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stat Cards */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute -right-8 top-12 lg:-right-16 glass-dark p-4 rounded-2xl border-white/10 shadow-xl flex items-center gap-4 group hover:scale-105 transition-transform"
      >
        <div className="p-2 rounded-lg bg-harvest/20 group-hover:bg-harvest/30 transition-colors">
          <Zap className="w-4 h-4 text-harvest" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-none">200ms</span>
          <span className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Analysis</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute -left-8 top-1/2 lg:-left-20 glass-dark p-4 rounded-2xl border-white/10 shadow-xl flex items-center gap-4 group hover:scale-105 transition-transform"
      >
        <div className="p-2 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
          <WifiOff className="w-4 h-4 text-red-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-none">100%</span>
          <span className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Offline AI</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute -right-4 bottom-8 lg:-right-12 glass-dark p-4 rounded-2xl border-white/10 shadow-xl flex items-center gap-4 group hover:scale-105 transition-transform"
      >
        <div className="p-2 rounded-lg bg-scan/20 group-hover:bg-scan/30 transition-colors">
          <ShieldCheck className="w-4 h-4 text-scan" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-none">96%</span>
          <span className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Accuracy</span>
        </div>
      </motion.div>
    </div>
  );
};

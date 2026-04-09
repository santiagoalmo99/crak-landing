"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Cpu, Cloud, ArrowDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const levels = [
  {
    level: "LEVEL 1",
    name: "PRE-VALIDATION (0ms)",
    description: "Camera live feed. Real-time light detection. Distance and focus validation. 🔴 → 🟡 → 🟢 feedback loop.",
    icon: Eye,
    badge: "ALWAYS LOCAL",
    color: "text-white/80"
  },
  {
    level: "LEVEL 2",
    name: "EDGE INFERENCE (50–200ms)",
    description: "MobileViT-S neural network. 8MB model. INT8 quantized. Runs on $60 Android Go phones. AES-256 encrypted.",
    icon: Cpu,
    badge: "100% OFFLINE",
    color: "text-harvest"
  },
  {
    level: "LEVEL 3",
    name: "CLOUD REFINEMENT (ASYNC)",
    description: "Vision Transformer-B/32 (350MB). Background sync. 94–96% accuracy. EUDR-grade certification.",
    icon: Cloud,
    badge: "OPTIONAL",
    color: "text-scan"
  }
];

export const CascadeFlow = () => {
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-2xl mx-auto">
      {levels.map((item, idx) => (
        <React.Fragment key={item.level}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="w-full glass-dark p-8 rounded-3xl border-white/10 relative group hover:border-white/20 transition-colors"
          >
            <div className="flex items-start gap-6">
              <div className={cn("p-4 rounded-2xl bg-white/5", item.color)}>
                <item.icon className="w-8 h-8" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">{item.level}</span>
                  <span className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded text-white/40 uppercase tracking-widest">{item.badge}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
                <p className="text-sm text-offwhite/50 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
          
          {idx < levels.length - 1 && (
            <div className="py-8 flex justify-center">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 32 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[1px] bg-gradient-to-b from-harvest to-transparent"
              />
              <ArrowDown className="w-4 h-4 text-harvest -translate-x-1/2 translate-y-6" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TracingBeam } from '../ui/TracingBeam';
import { CascadeFlow } from './CascadeFlow';
import { Wifi, WifiOff, Globe, Zap } from 'lucide-react';

export const ArchitectureSection = () => {
  return (
    <section className="relative py-32 bg-charcoal">
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          
          <div className="flex flex-col gap-4 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 w-fit"
            >
              <Zap className="w-3 h-3 text-harvest" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Edge Intelligence</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Full AI precision. <br/>
              <span className="text-white/40">Zero bars. No problem.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-offwhite/50 font-light max-w-2xl leading-relaxed"
            >
              Most AI tools die when the signal drops. CRAK was engineered for the mountains — where clouds block satellites, not just the sky.
            </motion.p>
          </div>

          <CascadeFlow />

          {/* Additional details card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-12 glass rounded-[32px] border-white/10 flex flex-col md:flex-row gap-12 items-center"
          >
             <div className="flex-1 space-y-6">
               <h4 className="text-2xl font-bold tracking-tight">Works anywhere, syncs silently.</h4>
               <p className="text-offwhite/50 leading-relaxed font-light">
                 Zero connectivity? CRAK keeps working. It stores every scan encrypted locally — GPS coordinates, altitude, humidity context — and syncs the moment WiFi appears.
               </p>
               <div className="flex gap-8 pt-4">
                 <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-harvest">2.4m+</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Offline Scans</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-scan">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Data Sovereignty</span>
                 </div>
               </div>
             </div>
             
             <div className="flex-1 relative w-full aspect-square md:aspect-auto h-64 glass rounded-2xl overflow-hidden bg-white/5 border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-harvest/10 via-transparent to-scan/10" />
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="relative">
                    <WifiOff className="w-16 h-16 text-white/10" />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Zap className="w-8 h-8 text-harvest shadow-[0_0_20px_#D7AA2D]" />
                    </motion.div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Pure Edge AI</span>
                </div>
             </div>
          </motion.div>

        </div>
      </TracingBeam>
    </section>
  );
};

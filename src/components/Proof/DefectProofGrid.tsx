"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

const defects = [
  { name: "SANO", severity: "NONE", accuracy: "99.1%", color: "bg-scan", glow: "rgba(34,255,136,0.15)", img: "/assets/grains/healthy.png", desc: "Premium grade bean. Potential for specialty scores." },
  { name: "BROCA", severity: "HIGH", accuracy: "98.2%", color: "bg-red-500", glow: "rgba(239,68,68,0.15)", img: "/assets/grains/broca.png", desc: "Insect damage affecting bean integrity and price." },
  { name: "NEGRO", severity: "HIGH", accuracy: "97.5%", color: "bg-red-500", glow: "rgba(239,68,68,0.15)", img: "/assets/grains/black.png", desc: "Full black defect usually caused by fungal rot." },
  { name: "VINAGRE", severity: "MEDIUM", accuracy: "94.8%", color: "bg-orange-500", glow: "rgba(249,115,22,0.15)", img: "/assets/grains/vinegar.png", desc: "Sour beans from over-fermentation." },
  { name: "INMADURO", severity: "MEDIUM", accuracy: "95.2%", color: "bg-orange-500", glow: "rgba(249,115,22,0.15)", img: "/assets/grains/immature.png", desc: "Immature pickings that add astringency." },
  { name: "PARTIDO", severity: "LOW", accuracy: "96.4%", color: "bg-yellow-500", glow: "rgba(234,179,8,0.15)", img: "/assets/grains/broken.png", desc: "Broken beans affecting roasting consistency." },
  { name: "CARDENILLO", severity: "HIGH", accuracy: "93.9%", color: "bg-red-500", glow: "rgba(239,68,68,0.15)", img: "/assets/grains/cardenillo.png", desc: "Fungal growth that ruins entire batches." }
];

export const DefectProofGrid = () => {
  return (
    <section className="relative py-32 bg-charcoal border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-harvest"
          >
            Intelligence Proof
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
            Seven defects. <br/> 
            <span className="text-white/40">Milliseconds to classify.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {defects.map((defect, idx) => (
            <motion.div
              key={defect.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="h-full"
            >
              <SpotlightCard className="p-8 flex flex-col items-center text-center group cursor-default h-full relative overflow-hidden">
                {/* Glow Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${defect.glow}, transparent 70%)` }}
                />

                <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                  {/* Status Indicator */}
                  <div className={`absolute -top-2 -right-2 w-2 h-2 rounded-full ${defect.color} z-20 shadow-[0_0_10px_currentColor]`} />
                  
                  {/* Floating Grain Image */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [-2, 2, -2]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: idx * 0.2
                    }}
                    className="relative w-full h-full flex items-center justify-center z-10"
                  >
                    <img 
                      src={defect.img} 
                      alt={defect.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] mix-blend-screen"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://www.transparentpng.com/download/coffee-bean/K8YI1N-coffee-bean-png.png';
                      }}
                    />
                  </motion.div>

                  {/* Shadow below grain */}
                  <motion.div 
                    animate={{ scale: [1, 0.9, 1], opacity: [0.2, 0.1, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="absolute bottom-2 w-12 h-2 bg-black rounded-full blur-md"
                  />
                </div>
                
                <h4 className="text-sm font-black tracking-[0.2em] text-offwhite mb-3 relative z-10">{defect.name}</h4>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 relative z-10">
                  <span className="text-[10px] font-bold text-scan">{defect.accuracy} ACC.</span>
                </div>
                
                <p className="text-[11px] text-white/30 leading-relaxed font-light mt-auto relative z-10 group-hover:text-white/50 transition-colors">
                  {defect.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

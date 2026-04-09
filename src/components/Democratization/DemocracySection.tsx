"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { LampContainer } from '../ui/Lamp';
import { Globe } from 'lucide-react';

export const DemocracySection = () => {
  return (
    <section className="relative min-h-screen bg-charcoal overflow-hidden flex items-center justify-center">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeOut",
          }}
          className="flex flex-col items-center text-center -mt-20 md:-mt-40"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-harvest mb-8">Democratization</span>
          
          <TextGenerateEffect 
            words="500,000 farmers. One tool that levels the field."
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05]"
          />
          
          <div className="max-w-2xl px-4">
            <p className="text-xl md:text-2xl text-offwhite/50 font-light leading-relaxed mb-12">
              For decades, quality certification lived behind lab doors. 
              The small producer had nothing to defend the value of their work. <br/>
              <span className="text-offwhite font-medium">CRAK is the end of that era.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-6">
            {[
              { title: "DEVICE DEMOCRACY", text: "Runs on any $60 Android. No iPhone or special hardware required." },
              { title: "CONNECTIVITY INDEPENDENCE", text: "Designed for altitude 2,400m and zero-bar valleys." },
              { title: "KNOWLEDGE SOVEREIGNTY", text: "You own your data. End of information asymmetry." }
            ].map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-harvest/30 transition-colors group"
              >
                <h4 className="text-[10px] font-bold text-harvest uppercase tracking-widest mb-4">{pillar.title}</h4>
                <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 flex flex-col items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-white/10 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-harvest/20" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Trusted by 50K+ producers across the coffee belt
            </p>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};

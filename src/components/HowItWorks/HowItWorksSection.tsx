"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Brain, ShieldCheck, ArrowRight } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { fadeUp, staggerChildren } from '../../lib/animations';

const steps = [
  {
    id: "01",
    label: "CAPTURE",
    title: "Point & Capture",
    description: "Place your coffee beans on a white surface. CRAK's AI guide aligns automatically. The scanner detects light, distance, and focus in real time.",
    icon: Camera,
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    id: "02",
    label: "ANALYZE",
    title: "Edge AI Processes Locally",
    description: "Your phone runs MobileViT-S, a neural network trained on 15,000+ samples. No data leaves your device. Results in under 200 milliseconds.",
    icon: Brain,
    color: "bg-harvest/20 text-harvest"
  },
  {
    id: "03",
    label: "CERTIFY",
    title: "Export SCA-Grade Report",
    description: "Generate a certified report with defect percentages, lot score, GPS metadata, and timestamp. Walk into any negotiation with proof.",
    icon: ShieldCheck,
    color: "bg-scan/20 text-scan"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-32 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">The Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Three Steps to Certified Quality
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-offwhite/50 text-lg font-light"
          >
            Technicians used to take days. CRAK empowers you to do it in the field.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative z-10"
            >
              <SpotlightCard className="h-full flex flex-col items-start text-left p-10 group cursor-default">
                <span className="text-[64px] font-black text-white/5 absolute -top-4 -right-4 leading-none select-none tracking-tighter">
                  {step.id}
                </span>
                
                <div className={`p-4 rounded-2xl ${step.color} mb-8 transition-transform group-hover:scale-110 duration-500`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <div className="space-y-4 mt-auto">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-harvest uppercase">{step.label}</span>
                  <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="text-offwhite/50 text-base font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 w-full flex items-center justify-between group/btn">
                  <span className="text-xs font-bold text-white/20 group-hover/btn:text-white/60 transition-colors">Details</span>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover/btn:text-harvest transition-all group-hover/btn:translate-x-1" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

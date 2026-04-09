"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';
import { fadeUp, staggerChildren, viewportConfig } from '../../lib/animations';

const MetricCard = ({ end, suffix, label, subtext, delay = 0 }: { end: number, suffix: string, label: string, subtext: string, delay?: number }) => {
  const { ref, inView } = useInView(viewportConfig);
  const count = useCountUp(inView ? end : 0, 2000);

  return (
    <motion.div 
      ref={ref}
      variants={fadeUp}
      transition={{ delay }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-5xl md:text-6xl font-black tracking-tighter text-offwhite">
          {count}{suffix}
        </span>
      </div>
      <span className="text-sm font-bold uppercase tracking-widest text-harvest">{label}</span>
      <p className="text-xs text-white/30 font-light max-w-[180px] leading-relaxed italic">"{subtext}"</p>
    </motion.div>
  );
};

export const ROISection = () => {
  return (
    <section className="relative py-32 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-16">
            <MetricCard 
              end={15} 
              suffix=".5%" 
              label="Income Increase" 
              subtext="By identifying hidden specialty lots"
            />
            <MetricCard 
              end={85} 
              suffix="%" 
              label="Time Saved" 
              subtext="Hours of manual grading → Seconds"
              delay={0.1}
            />
            <MetricCard 
              end={98} 
              suffix="%" 
              label="AI Accuracy" 
              subtext="Consistent precision under any light"
              delay={0.2}
            />
            <MetricCard 
              end={1} 
              suffix=" cent" 
              label="Cost per scan" 
              subtext="1,500x cheaper than cloud labs"
              delay={0.3}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <div className="glass rounded-[40px] p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-harvest/10 blur-3xl group-hover:bg-harvest/20 transition-colors" />
              
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic text-offwhite/90">
                "Before CRAK, I couldn't prove my coffee was specialty. I just knew it. Now I walk in with a certificate. The price difference paid for the app in the first negotiation."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-harvest/20 flex items-center justify-center font-bold text-harvest">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-offwhite">Jorge V.</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Producer / Huila, Colombia</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

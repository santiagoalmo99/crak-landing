"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ScannerSkeleton = () => {
  return (
    <div className="relative w-full h-full min-h-[150px] flex items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,255,136,0.05),transparent_70%)]" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 rounded-full border border-scan/20 flex items-center justify-center"
      >
        <div className="w-24 h-24 rounded-full border border-scan/10 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-t border-scan/40 rounded-full"
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-scan shadow-[0_0_8px_#22FF88]"
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export const PrecisionSkeleton = () => {
  return (
    <div className="relative w-full h-full min-h-[150px] flex flex-col justify-center p-6 bg-white/5 rounded-xl border border-white/5 gap-3">
        {[
            { label: "Density", val: 98 },
            { label: "Humidity", val: 94 },
            { label: "Defects", val: 97 }
        ].map((item, i) => (
            <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/30">
                    <span>{item.label}</span>
                    <span className="text-harvest">{item.val}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-harvest"
                    />
                </div>
            </div>
        ))}
    </div>
  );
};

export const MapSkeleton = () => {
    return (
      <div className="relative w-full h-full min-h-[150px] flex items-center justify-center bg-white/5 rounded-xl border border-white/5 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-40 h-40 opacity-20">
           <path d="M30,20 Q50,10 70,20 T90,40 T70,80 T30,90 T10,60 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
        </svg>
        <div className="absolute inset-0">
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`
                    }}
                    className="absolute w-2 h-2 rounded-full bg-harvest shadow-[0_0_10px_#D7AA2D]"
                />
            ))}
        </div>
      </div>
    );
};

export const CertificateSkeleton = () => {
    return (
        <div className="relative w-full h-full min-h-[150px] flex items-center justify-center bg-white/5 rounded-xl border border-white/5 overflow-hidden">
            <div className="w-24 h-32 bg-white/10 rounded border border-white/20 p-2 space-y-2 flex flex-col items-center">
                <div className="w-16 h-1 bg-white/20 rounded-full" />
                <div className="w-12 h-1 bg-white/20 rounded-full" />
                <div className="w-14 h-1 bg-white/20 rounded-full" />
                <div className="mt-4 w-10 h-10 rounded-full border-2 border-harvest/50 flex items-center justify-center overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-6 h-6 bg-harvest rounded-full shadow-[0_0_10px_#D7AA2D]" 
                    />
                </div>
                <div className="w-6 h-1 bg-harvest/40 rounded-full mt-2" />
            </div>
        </div>
    );
};

"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ScanEye, 
  ShieldAlert, 
  History, 
  Fingerprint, 
  Mic, 
  FileText, 
  TrendingUp, 
  Lock, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { cn } from '../../lib/utils';
import { ScannerSkeleton, PrecisionSkeleton, MapSkeleton, CertificateSkeleton } from './BentoWidgets';

const FeatureCard = ({ feature, idx }: { feature: any, idx: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={cn("group relative", feature.className)}
        >
            <SpotlightCard className="h-full flex flex-col justify-between p-8 group overflow-hidden">
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-harvest/50 group-hover:bg-harvest/5 transition-all duration-500">
                            <feature.icon className="w-6 h-6 text-white/40 group-hover:text-harvest transition-colors" />
                        </div>
                        <span className={cn(
                            "text-[9px] font-bold px-2 py-1 rounded-md tracking-widest",
                            feature.category === 'UNIQUE' ? "bg-harvest/20 text-harvest" : 
                            feature.category === 'PRO' ? "bg-purple-500/20 text-purple-400" : 
                            "bg-white/5 text-white/40"
                        )}>
                            {feature.category}
                        </span>
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-offwhite transition-colors">
                        {feature.title}
                    </h3>
                    <p className="text-sm text-offwhite/40 font-light leading-relaxed group-hover:text-offwhite/60 transition-colors">
                        {feature.description}
                    </p>
                </div>

                {feature.widget && (
                    <div style={{ transform: "translateZ(30px)" }} className="mt-8 mb-4">
                        <feature.widget />
                    </div>
                )}
                
                {!feature.widget && (
                    <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-harvest" />
                        <span className="text-[10px] font-bold text-harvest/80 uppercase tracking-widest">Enabled</span>
                    </div>
                )}
            </SpotlightCard>
        </motion.div>
    );
};

const features = [
  {
    title: "Real-Time AR Scanner",
    description: "Point & Capture. CRAK's AI guide aligns automatically for perfect focus.",
    icon: ScanEye,
    category: "CORE",
    className: "md:col-span-2 md:row-span-2 min-h-[400px]",
    widget: ScannerSkeleton,
  },
  {
    title: "Defect Classification",
    description: "Identifies 7 critical defects in under 200ms.",
    icon: ShieldAlert,
    category: "UNIQUE",
    className: "md:col-span-1 md:row-span-2 min-h-[400px]",
    widget: PrecisionSkeleton,
  },
  {
    title: "Historical Analysis",
    description: "Track your farm's quality evolution across harvests.",
    icon: History,
    category: "PRO",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Haptic Feedback",
    description: "Tactile confirmation for each grain classified.",
    icon: Fingerprint,
    category: "CORE",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "SCA Certificate Gen.",
    description: "Export certified PDF reports with GPS & timestamp metadata.",
    icon: FileText,
    category: "PRO",
    className: "md:col-span-2 md:row-span-2 min-h-[400px]",
    widget: CertificateSkeleton,
  },
  {
    title: "GPS Metadata",
    description: "Verified geolocation for EUDR compliance.",
    icon: MapPin,
    category: "CORE",
    className: "md:col-span-2 md:row-span-2 min-h-[400px]",
    widget: MapSkeleton,
  },
  {
    title: "Price Negotiator AI",
    description: "Know your lot's market value before you speak to buyers.",
    icon: TrendingUp,
    category: "PRO",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Active Learning",
    description: "CRAK gets smarter with every scan you complete.",
    icon: Sparkles,
    category: "UNIQUE",
    className: "md:col-span-1 md:row-span-1",
  }
];

export const FeaturesBento = () => {
  return (
    <section className="relative py-32 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
             <div className="w-10 h-[1px] bg-harvest/50" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-harvest">Intelligence Feature Set</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Built Without Compromise</h2>
          <p className="text-offwhite/50 text-lg font-light leading-relaxed">
            Every feature was engineered to work in the mountains, under heavy rain, with zero signal. Mobile-first Edge AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative md:auto-rows-[200px]">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beamsRef = useRef<SVGSVGElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden",
        className
      )}
    >
      <svg
        ref={beamsRef}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <g opacity="0.4">
          <circle cx="200" cy="200" r="1" fill="#D7AA2D" />
          <circle cx="1200" cy="700" r="1" fill="#D7AA2D" />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_beams"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(720 450) rotate(90) scale(450 720)"
          >
            <stop stopColor="#D7AA2D" stopOpacity="0.05" />
            <stop offset="1" stopColor="#0D0D0D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#paint0_radial_beams)" />
        
        {/* Animated Beams Simulation */}
        <motion.path
          d="M-100 900L1540 -100"
          stroke="url(#beam-grad)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <linearGradient id="beam-grad" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0" stopColor="#D7AA2D" stopOpacity="0" />
           <stop offset="0.5" stopColor="#D7AA2D" stopOpacity="0.2" />
           <stop offset="1" stopColor="#D7AA2D" stopOpacity="0" />
        </linearGradient>
      </svg>
    </div>
  );
};

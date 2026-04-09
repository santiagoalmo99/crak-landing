import React from 'react';
import { HeroSection } from './components/Hero/HeroSection';
import { ProblemSection } from './components/Problem/ProblemSection';
import { HowItWorksSection } from './components/HowItWorks/HowItWorksSection';
import { FeaturesBento } from './components/Features/FeaturesBento';
import { ArchitectureSection } from './components/Architecture/ArchitectureSection';
import { ROISection } from './components/ROI/ROISection';
import { DemocracySection } from './components/Democratization/DemocracySection';
import { DefectProofGrid } from './components/Proof/DefectProofGrid';
import { FinalCTA } from './components/CTA/FinalCTA';

function App() {
  return (
    <main className="relative min-h-screen bg-charcoal overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesBento />
      <ArchitectureSection />
      <ROISection />
      <DemocracySection />
      <DefectProofGrid />
      <FinalCTA />
      
      {/* Footer minimal */}
      <footer className="py-12 bg-charcoal border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            CRAK.APP © 2026 · Built for the Mountains
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;

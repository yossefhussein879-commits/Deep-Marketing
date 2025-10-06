
import React from 'react';
import { type ProcessStep } from '../types';
import { DiscoverIcon, StrategizeIcon, ExecuteIcon, AnalyzeIcon } from './IconComponents';

const processData: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "We dive deep into your brand, audience, and market landscape to uncover key insights and opportunities."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Using the insights gathered, we craft a bespoke, data-driven marketing roadmap tailored to your goals."
  },
  {
    step: "03",
    title: "Execution & Launch",
    description: "Our team brings the strategy to life, launching campaigns across multiple channels with precision and creativity."
  },
  {
    step: "04",
    title: "Analysis & Optimization",
    description: "We continuously monitor performance, providing transparent reports and optimizing for maximum ROI."
  },
];

const Process: React.FC = () => {
  const icons = [<DiscoverIcon key={1}/>, <StrategizeIcon key={2}/>, <ExecuteIcon key={3}/>, <AnalyzeIcon key={4}/>];

  return (
    <section id="process" className="py-20 md:py-28 bg-dark-bg/95 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Proven Process</h2>
          <p className="text-lg text-dark-subtle">
            A transparent and collaborative approach to ensure your marketing success from start to finish.
          </p>
        </div>
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-700 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processData.map((item, index) => (
              <div key={item.step} className="relative p-6 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
                  <div className="text-5xl font-bold text-brand-primary/40">{item.step}</div>
                  <div className="h-12 w-12 flex-shrink-0 bg-dark-card border border-slate-700 rounded-full flex items-center justify-center text-brand-secondary">
                    {icons[index]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-dark-subtle">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
       {/* Animated Blobs Background */}
       <div className="absolute inset-0 z-0 opacity-40 mix-blend-lighten">
            <div className="absolute top-0 -left-12 w-72 h-72 md:w-96 md:h-96 bg-brand-primary rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-12 w-72 h-72 md:w-96 md:h-96 bg-brand-secondary rounded-full filter blur-3xl animate-blob [animation-delay:2s]"></div>
            <div className="absolute -bottom-12 left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob [animation-delay:4s]"></div>
       </div>

       <div className="absolute inset-0 bg-dark-bg opacity-80"></div>
       <div className="relative z-10 p-6 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Marketing That <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Propels</span> Your Growth
        </h1>
        <p className="text-lg md:text-xl text-dark-subtle max-w-2xl mx-auto mb-8">
          We combine data-driven strategies with creative execution to launch your brand into its next orbit of success.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#strategy-ai" className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            Plan My Strategy
          </a>
          <a href="#services" className="bg-dark-card/50 border border-slate-700 hover:bg-dark-card text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
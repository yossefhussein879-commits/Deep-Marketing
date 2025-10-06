
import React, { useState, useEffect, useCallback } from 'react';
import { type Testimonial } from '../types';
import { QuoteIcon } from './IconComponents';

const testimonialsData: Testimonial[] = [
  {
    quote: "QuantumLeap completely transformed our online presence. Their data-driven approach led to a 200% increase in organic traffic in just six months. We couldn't be happier!",
    name: "Sarah Johnson",
    title: "CEO, Innovatech",
    avatar: "https://picsum.photos/id/1011/100/100"
  },
  {
    quote: "The team's creativity and strategic insight are second to none. Our social media engagement has skyrocketed, and our brand voice has never been stronger.",
    name: "Michael Chen",
    title: "Marketing Director, Fusion Co.",
    avatar: "https://picsum.photos/id/1012/100/100"
  },
  {
    quote: "From day one, they felt like an extension of our own team. Their transparency and dedication to our success have been instrumental in our growth.",
    name: "Jessica Rodriguez",
    title: "Founder, Bloom & Stem",
    avatar: "https://picsum.photos/id/1027/100/100"
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-dark-subtle">
            We're proud to have partnered with incredible brands. Here's what they think of our work.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto bg-dark-card p-8 md:p-12 rounded-xl border border-slate-800/50 shadow-lg">
          <div className="absolute top-8 left-8 text-brand-primary/20">
            <QuoteIcon />
          </div>
          <div className="relative z-10 min-h-[150px] md:min-h-[120px]">
            <p className="text-xl md:text-2xl italic text-dark-text mb-8 text-center transition-opacity duration-500" key={currentIndex}>
              "{activeTestimonial.quote}"
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="w-16 h-16 rounded-full border-2 border-brand-primary mr-4" />
            <div>
              <p className="font-bold text-lg text-white">{activeTestimonial.name}</p>
              <p className="text-dark-subtle">{activeTestimonial.title}</p>
            </div>
          </div>
          {/* Navigation */}
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 p-2 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
           <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 p-2 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

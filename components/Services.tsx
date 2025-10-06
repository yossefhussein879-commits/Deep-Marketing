
import React from 'react';
import { type Service } from '../types';
import { SeoIcon, ContentMarketingIcon, SocialMediaIcon, PpcIcon, EmailMarketingIcon, AnalyticsIcon } from './IconComponents';

const servicesData: Service[] = [
  {
    icon: <SeoIcon />,
    title: "SEO & SEM",
    description: "Dominate search engine rankings and capture high-intent traffic with our expert SEO and SEM strategies."
  },
  {
    icon: <ContentMarketingIcon />,
    title: "Content Marketing",
    description: "Engage your audience with compelling content that builds authority, drives traffic, and converts leads."
  },
  {
    icon: <SocialMediaIcon />,
    title: "Social Media Management",
    description: "Build a vibrant community around your brand with strategic social media campaigns and engagement."
  },
  {
    icon: <PpcIcon />,
    title: "Paid Advertising (PPC)",
    description: "Get immediate, targeted traffic and maximize your ROI with our precision-tuned PPC campaigns."
  },
  {
    icon: <EmailMarketingIcon />,
    title: "Email Marketing",
    description: "Nurture leads and drive repeat business with personalized and automated email marketing funnels."
  },
  {
    icon: <AnalyticsIcon />,
    title: "Data & Analytics",
    description: "Make informed decisions with comprehensive analytics, tracking, and actionable reporting."
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-dark-card p-8 rounded-xl border border-slate-800/50 shadow-lg hover:shadow-brand-primary/20 hover:border-brand-primary/50 transform hover:-translate-y-2 transition-all duration-300 group">
    <div className="mb-6 h-12 w-12 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-dark-text mb-3">{title}</h3>
    <p className="text-dark-subtle leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Arsenal of Services</h2>
          <p className="text-lg text-dark-subtle">
            We provide a complete suite of marketing services designed to deliver results and elevate your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

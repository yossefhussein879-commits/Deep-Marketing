import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import AiStrategyAssistant from './components/AiStrategyAssistant';
import Footer from './components/Footer';
import { PhoneIcon, WhatsAppIcon } from './components/IconComponents';

const FloatingActionButtons: React.FC = () => {
  const phoneNumber = '01090360578';
  const whatsappNumber = '201090360578'; // with country code for wa.me link

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group"
      >
        <WhatsAppIcon />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-dark-card text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
        className="w-14 h-14 bg-brand-primary hover:bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group"
      >
        <PhoneIcon />
         <span className="absolute right-full mr-3 px-3 py-1.5 bg-dark-card text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <AiStrategyAssistant />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default App;
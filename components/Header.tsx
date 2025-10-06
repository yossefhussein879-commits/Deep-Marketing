import React, { useState, useEffect } from 'react';
import { LogoIcon, PhoneIcon, WhatsAppIcon } from './IconComponents';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const phoneNumber = '01090360578';
  const whatsappNumber = '201090360578';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'Process', 'Testimonials', 'Strategy AI'];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
            <LogoIcon />
            QuantumLeap
          </a>
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-dark-subtle hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
             <div className="h-6 w-px bg-slate-700"></div>
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-dark-subtle hover:text-white transition-colors duration-300">
                <PhoneIcon />
                <span className="text-sm">{phoneNumber}</span>
            </a>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
             <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-dark-subtle hover:text-green-500 transition-colors duration-300 p-2">
              <WhatsAppIcon />
            </a>
            <a href="#strategy-ai" className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </a>
          </div>
          <button className="lg:hidden text-white z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-lg lg:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="container mx-auto px-6 pt-24 pb-12 flex flex-col items-center justify-center h-full text-center space-y-8">
              {navLinks.map(link => (
                  <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl text-dark-subtle hover:text-white transition-colors duration-300">
                      {link}
                  </a>
              ))}
              <div className="w-24 h-px bg-slate-700 my-4"></div>
              <a href={`tel:${phoneNumber}`} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-2xl text-dark-subtle hover:text-white transition-colors duration-300">
                  <PhoneIcon />
                  <span>Call Us</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-2xl text-dark-subtle hover:text-green-500 transition-colors duration-300">
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
              </a>
              <a href="#strategy-ai" onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-md text-xl">
                  Get Started
              </a>
          </div>
      </div>
    </>
  );
};

export default Header;
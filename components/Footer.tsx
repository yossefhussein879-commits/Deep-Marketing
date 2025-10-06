import React from 'react';
import { LogoIcon, TwitterIcon, LinkedInIcon, GitHubIcon, PhoneIcon, WhatsAppIcon } from './IconComponents';

const Footer: React.FC = () => {
  const phoneNumber = '01090360578';
  const whatsappNumber = '201090360578';

  return (
    <footer className="bg-dark-card border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <LogoIcon />
              <span>QuantumLeap</span>
            </div>
            <p className="text-dark-subtle max-w-xs">&copy; {new Date().getFullYear()} QuantumLeap Marketing. All rights reserved.</p>
          </div>

          {/* Column 2: Contacts */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Contact Us</h4>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-dark-subtle hover:text-brand-primary transition-colors">
                <PhoneIcon />
                <span>{phoneNumber}</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-dark-subtle hover:text-green-500 transition-colors">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-dark-subtle hover:text-brand-primary transition-colors">
                <TwitterIcon />
              </a>
              <a href="#" className="text-dark-subtle hover:text-brand-primary transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-dark-subtle hover:text-brand-primary transition-colors">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
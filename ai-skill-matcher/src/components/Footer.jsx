/**
 * Footer Component
 * Minimal footer with essential links
 */

import { HiGlobeAlt, HiHeart } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Success Stories', href: '#stories' }
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#faq' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Accessibility', href: '#accessibility' }
    ]
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img 
                src="/Logo.png" 
                alt="KaiyoZ AI Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-display font-bold text-lg">KaiyoZ AI</span>
            </div>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              Connecting skilled workers with meaningful opportunities through the power of AI. 
              No resume needed — just your voice.
            </p>
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <HiGlobeAlt className="w-4 h-4 text-text-light" />
              <select className="bg-transparent text-sm text-text-light border-none focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-text-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-text-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-text-light hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-light text-sm">
              © {currentYear} KaiyoZ AI. All rights reserved.
            </p>
            <p className="text-text-light text-sm flex items-center gap-1">
              Made with 
              <HiHeart className="w-4 h-4 text-secondary" />
              for workers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

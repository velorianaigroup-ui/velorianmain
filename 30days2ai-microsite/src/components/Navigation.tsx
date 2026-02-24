'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#process', label: 'Process' },
    { href: '#results', label: 'Results' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-lime-400 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-black text-xl text-neutral-900">
              30days<span className="text-electric-500">2ai</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-neutral-600 hover:text-electric-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-electric-500 to-lime-500 text-white hover:shadow-lg hover:shadow-electric-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            Start in 30 Days
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-electric-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-2xl mt-2 mb-4 shadow-xl border border-neutral-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-neutral-600 hover:text-electric-500 hover:bg-neutral-50 transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-6 mt-2 px-6 py-3 bg-gradient-to-r from-electric-500 to-lime-500 text-white rounded-xl font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start in 30 Days
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

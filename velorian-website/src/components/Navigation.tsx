'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { href: '#brands', label: 'Our Brands' },
    { href: '#results', label: 'Results' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-white p-2 rounded-lg border border-primary-200 shadow-sm">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 5 L35 12.5 L35 27.5 L20 35 L5 27.5 L5 12.5 Z"
                    className="stroke-primary-500 fill-primary-500/10"
                    strokeWidth="2"
                  />
                  <circle cx="20" cy="20" r="5" className="fill-accent-400" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold text-gradient font-display">VELORIAN</span>
              <span className="block text-xs text-dark-500 uppercase tracking-wider">AI Solutions</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-600 hover:text-primary-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-600 hover:text-primary-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 glass-effect rounded-lg mt-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-dark-600 hover:text-primary-500 hover:bg-dark-100/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="block mx-6 mt-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

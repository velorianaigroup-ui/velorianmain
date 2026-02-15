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
    { href: '#solutions', label: 'Solutions' },
    { href: '#process', label: 'Process' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#faq', label: 'FAQ' },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-light-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div>
              <span className="text-2xl font-black text-gradient font-display">30 DAYS TO AI</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-600 hover:text-primary-500 transition-colors font-bold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-light-600 hover:text-primary-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-xl mt-2 mb-4 shadow-xl border border-light-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-light-600 hover:text-primary-500 hover:bg-light-100 transition-colors font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="block mx-6 mt-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold text-center"
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

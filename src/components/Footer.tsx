'use client';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-light-900 border-t border-light-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl font-black text-white font-display">30 DAYS TO AI</span>
            </div>
            <p className="text-light-400 mb-4 max-w-md">
              Lightning-fast AI deployment for businesses ready to transform.
              Production-ready solutions in 30 days.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-light-400 hover:text-primary-400 transition-colors font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-light-400 hover:text-primary-400 transition-colors font-medium">
                Twitter
              </a>
              <a href="#" className="text-light-400 hover:text-primary-400 transition-colors font-medium">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Our Brands</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://30days2ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  30 Days to AI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://60days2ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  60 Days to AI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#solutions" className="text-light-400 hover:text-primary-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-light-400 hover:text-primary-400 transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#cases" className="text-light-400 hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-light-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-light-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-500 text-sm">
            &copy; {currentYear} Velorian AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-light-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-light-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

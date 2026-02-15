import { ExternalLink } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-dark-900 p-2 rounded-lg border border-primary-500/30">
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20 5 L35 12.5 L35 27.5 L20 35 L5 27.5 L5 12.5 Z"
                      className="stroke-primary-400 fill-primary-500/20"
                      strokeWidth="2"
                    />
                    <circle cx="20" cy="20" r="5" className="fill-accent-400" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient font-display">VELORIAN</span>
              </div>
            </div>
            <p className="text-dark-400 mb-4 max-w-md">
              Lightning-fast AI deployment for businesses ready to transform.
              Production-ready solutions in 30-60 days.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Our Brands</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://30days2ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
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
                  className="text-dark-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  60 Days to AI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#brands" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Our Brands
                </a>
              </li>
              <li>
                <a href="#results" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            &copy; {currentYear} Velorian AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

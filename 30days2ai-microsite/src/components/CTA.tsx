'use client';
import { ArrowRight, Calendar } from 'lucide-react';
export default function CTA() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12 lg:px-24 bg-dark-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-400/10"></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
              READY TO START YOUR
              <br />
              <span className="text-gradient">30-DAY TRANSFORMATION?</span>
            </h2>
            <p className="text-2xl text-dark-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see if our 30-day sprint is the right fit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://velorian.ai#contact"
                className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-lg font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Schedule Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://velorian.ai"
                className="px-10 py-5 glass-effect text-white rounded-lg font-bold text-xl hover:bg-dark-800/50 transition-all"
              >
                Learn About Velorian
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-dark-700">
              <p className="text-dark-400 text-lg">
                Part of the <span className="text-primary-400 font-semibold">Velorian AI</span> family
                <br />
                <a href="https://velorian.ai" className="text-primary-400 hover:underline">velorian.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

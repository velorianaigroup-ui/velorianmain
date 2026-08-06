'use client';
import { Code2, Calendar, Users } from 'lucide-react';
export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-display">
            Built By a <span className="text-gradient">Track Record</span>, Not a Pitch Deck
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            The team behind every Velorian engagement.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-dark-200 shadow-sm">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-200">
              <span className="text-sm font-semibold text-primary-600">Lead Architect &amp; Engineer</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <Code2 className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-5xl font-bold text-gradient mb-2">24</div>
              <div className="text-dark-600 font-semibold">Production Apps</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-5xl font-bold text-gradient mb-2">6</div>
              <div className="text-dark-600 font-semibold">Months</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-5xl font-bold text-gradient mb-2">4</div>
              <div className="text-dark-600 font-semibold">Person Team</div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-200 text-center">
            <p className="text-dark-700 text-lg leading-relaxed">
              Full-stack applications, workflow automation, and AI copilot agents — shipped, not prototyped.
            </p>
            <p className="text-dark-900 font-semibold mt-3">
              That&apos;s the pace Velorian brings to your engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

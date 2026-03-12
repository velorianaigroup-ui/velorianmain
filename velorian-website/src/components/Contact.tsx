'use client';
import { useState } from 'react';
import { Send, Mail, MessageSquare, Clock } from 'lucide-react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: '30days',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', timeline: '30days', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-display">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            Let&apos;s discuss how we can deploy AI solutions that deliver real results in 30-60 days.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 border border-dark-200 shadow-sm">
            <h3 className="text-2xl font-bold text-dark-900 mb-6 font-display">Get Started Today</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-primary-700 font-semibold">
                  Thanks! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-600 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-lg text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-600 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-lg text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-600 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-lg text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-dark-600 mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-lg text-dark-900 focus:outline-none focus:border-primary-500 transition-colors"
                >
                  <option value="30days">30 Days - Rapid Implementation</option>
                  <option value="60days">60 Days - Complex Solutions</option>
                  <option value="consulting">Not sure - Need consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-600 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200 rounded-lg text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Describe your business challenge and what you're hoping to achieve with AI..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-dark-200 shadow-sm">
              <h3 className="text-2xl font-bold text-dark-900 mb-6 font-display">Why Choose Velorian?</h3>
              <ul className="space-y-4">
                {[
                  'Fast deployment in 30-60 days',
                  'Proven track record with $18M+ value created',
                  'Industry-specific AI expertise',
                  'Production-ready, scalable solutions',
                  'Ongoing support and optimization',
                  'Transparent pricing, no hidden costs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <span className="text-dark-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-dark-200 shadow-sm">
              <h3 className="text-xl font-bold text-dark-900 mb-4 font-display">Contact Methods</h3>
              <div className="space-y-4">
                <a
                  href="mailto:VelorianAIGroup@gmail.com"
                  className="flex items-center gap-3 text-dark-600 hover:text-primary-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  VelorianAIGroup@gmail.com
                </a>
                <div className="flex items-center gap-3 text-dark-600">
                  <MessageSquare className="w-5 h-5" />
                  <span>Live chat available 9am-5pm EST</span>
                </div>
                <div className="flex items-center gap-3 text-dark-600">
                  <Clock className="w-5 h-5" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-200">
              <p className="text-dark-600 text-sm leading-relaxed">
                <strong className="text-dark-900">Free Consultation:</strong> Not sure which timeline is right for you?
                Schedule a free 30-minute consultation to discuss your needs and get a custom recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

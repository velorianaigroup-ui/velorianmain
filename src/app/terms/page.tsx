import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - 30 Days to AI',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-light-50">
      <Navigation />
      <div className="px-6 lg:px-12 pt-40 pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-black text-4xl md:text-5xl text-light-900 mb-6 font-display">Terms of Service</h1>
          <div className="p-5 bg-yellow-50 border-4 border-yellow-500 rounded-xl mb-8">
            <p className="text-light-900 font-bold">
              Placeholder page. This is not final legal text — real terms of service
              content is pending review by Michael and counsel.
            </p>
          </div>
          <p className="text-light-600 font-medium leading-relaxed mb-4">
            This site and the services described on it are operated by Velorian AI.
            Submitting the contact form is an inquiry, not a binding agreement — actual
            engagement terms are set out in a separate signed agreement before any work
            begins.
          </p>
          <p className="text-light-600 font-medium leading-relaxed">
            Questions? Email{' '}
            <a href="mailto:velorianaigroup@gmail.com" className="text-primary-500 font-black">
              velorianaigroup@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

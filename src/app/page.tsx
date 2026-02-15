import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ConsultingBrands from '@/components/ConsultingBrands';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ConsultingBrands />
      <Process />
      <CaseStudies />
      <Metrics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ConsultingBrands from '@/components/ConsultingBrands';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ConsultingBrands />
      <Metrics />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ConsultingBrands from '@/components/ConsultingBrands';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ConsultingBrands />
      <CaseStudies />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Solutions />
      <Process />
      <CaseStudies />
      <FAQ />
      <CTA />
    </main>
  );
}

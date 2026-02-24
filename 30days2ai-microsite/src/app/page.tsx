import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import Results from '@/components/Results';
import CTA from '@/components/CTA';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Process />
      <Results />
      <CTA />
    </main>
  );
}

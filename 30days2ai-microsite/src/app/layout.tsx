import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '30 Days to AI - Ship AI Insanely Fast',
  description: 'Deploy production-ready AI solutions in 30 days flat. Chatbots, automation, analytics. Zero fluff. Guaranteed.',
  keywords: '30 days AI, rapid AI deployment, fast AI implementation, AI consulting, quick AI solutions',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

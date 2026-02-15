import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '30 Days to AI - Lightning-Fast AI Deployment',
  description: 'Deploy production-ready AI solutions in 30 days. Fast. Focused. Guaranteed. From chatbots to automation, we build AI that works.',
  keywords: '30 days AI, rapid AI deployment, fast AI implementation, AI consulting, quick AI solutions',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

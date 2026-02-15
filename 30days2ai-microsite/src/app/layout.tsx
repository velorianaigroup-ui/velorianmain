import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '30 Days to AI - Rapid AI Implementation',
  description: 'Deploy production-ready AI solutions in just 30 days. Fast, focused, and effective AI transformation for your business.',
  keywords: '30 days AI, rapid AI deployment, AI implementation, business automation',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

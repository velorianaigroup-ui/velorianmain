import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Velorian AI - Deploy AI Solutions in 30-60 Days',
  description: 'Transform your business with lightning-fast AI deployment. Production-ready solutions in 30-60 days.',
  keywords: 'AI deployment, AI solutions, business automation, AI consulting, 30 days to AI, 60 days to AI',
  authors: [{ name: 'Velorian AI' }],
  icons: {
    icon: [
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Velorian AI - Deploy AI Solutions in 30-60 Days',
    description: 'Transform your business with lightning-fast AI deployment.',
    type: 'website',
    url: 'https://velorian.ai',
  },
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

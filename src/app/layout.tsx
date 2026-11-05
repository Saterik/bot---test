import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Поддержка X1 — Ассистент по регламенту',
  description: 'Бот поддержки интернет-магазина наушников X1. Строгое следование регламенту: товар, доставка, возврат, брак. Никаких скидок.',
  keywords: ['поддержка', 'наушники X1', 'бот', 'регламент', 'доставка', 'возврат'],
  authors: [{ name: 'Green API Test' }],
  openGraph: {
    title: 'Поддержка X1 — Ассистент по регламенту',
    description: 'Бот поддержки интернет-магазина наушников X1. Строгое следование регламенту.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
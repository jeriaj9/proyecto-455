import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proyecto 455 - Shaft, Nexx, 455 Auto Servicios',
  description: 'Proyecto 455',
  icons: {
    icon: '/images/proyecto455Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}

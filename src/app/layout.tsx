import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Project 455 - Shaft, Auto Services, Offroad',
  description: 'Project 455 Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

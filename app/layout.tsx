import { Container } from '@/components/common/container';
import { Navbar } from '@/components/common/navbar';
import { ThemeProvider } from '@/components/common/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bach Tran',
  description: 'In search of software that brings joy to people',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Container>
          <Navbar />
          <div className='mb-4' />
          {children}
        </Container>
        <Analytics />
      </body>
    </html>
  );
}

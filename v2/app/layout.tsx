import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'Brian Nguyen',
  description: 'A Software Engineer from Vietnam',
};

const poppins = Poppins({ weight: '700', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}

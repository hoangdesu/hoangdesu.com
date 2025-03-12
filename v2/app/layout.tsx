import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Brian Nguyen',
  description: 'A Software Engineer from Vietnam 🇻🇳',
};

const poppins = Poppins({ weight: '700', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-TVLDPK85RM`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-TVLDPK85RM', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}

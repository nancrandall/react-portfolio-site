import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from './provider';

const roboto = Roboto({
  weight: ['100', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Art of NanCran',
  description: 'LGBTQ+ artist and horror comics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

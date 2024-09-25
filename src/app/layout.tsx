import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const noto = localFont({
  src: './fonts/NotoSansMono.woff',
  variable: '--font-space-mono',
  weight: '400 500 900',
});

export const metadata: Metadata = {
  title: 'queSTack',
  description: 'Clear your quests',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} antialiased`}>{children}</body>
    </html>
  );
}

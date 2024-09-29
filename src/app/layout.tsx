import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavComponent from '../components/nav';

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
      <body className={`${noto.variable}  antialiased`}>
        <div className="grid grid-cols-[250px_minmax(calc(100vw-250px),auto)]">
          <NavComponent />
          <main className="mx-auto w-full p-12">{children}</main>
        </div>
      </body>
    </html>
  );
}

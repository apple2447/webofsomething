import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'งานกลุ่ม',
  description: 'กลุ่มของกลุ่มของกลุ่ม',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout">
        <Navbar />
        <main style={{ paddingTop: '70px' }} className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
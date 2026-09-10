import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      {/* 1. ลบ p-3 ออกจาก body เพื่อให้ Navbar ชิดขอบบนสุดและขยายเต็มความกว้างอย่างถูกต้อง */}
      <body>
        <Navbar />
        
        {/* 2. กำหนด paddingTop ให้กับ main เพื่อดันเนื้อหาลงมาจากใต้ Navbar (ประมาณ 70px) */}
        <main style={{ paddingTop: '70px' }}>
          {children}
        </main>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
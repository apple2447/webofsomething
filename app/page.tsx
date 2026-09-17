import Link from "next/link";

export default function Home() {
  return (
    <main className="container py-5">
      <h1>My Blog</h1>
      <p>ยินดีต้อนรับเข้าสู่เว็บไซต์ Blog งานกลุ่มของพวกเรา</p>

      <Link href="/blog" className="btn btn-primary">
        ดูบทความทั้งหมด
      </Link>
    </main>
  );
}
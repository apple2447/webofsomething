type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="container py-5">
      <h1>Blog Detail</h1>

      <p>
        กำลังอ่านบทความ:
        <strong> {slug}</strong>
      </p>

      <hr />

      <h2>เนื้อหาบทความ</h2>

      <p>
        นี่คือหน้ารายละเอียดของบทความ
        สามารถนำข้อมูลจาก MongoDB มาแสดงที่หน้านี้ได้
      </p>
    </main>
  );
}
import BlogCard from "./BlogCard";

const blogs = [
  {
    title: "Next.js + MongoDB",
    description: "เรียนรู้การสร้างระบบ Blog ด้วย Next.js และ MongoDB",
    author: "Admin",
    date: "9 Sep 2026",
  },
  {
    title: "เริ่มต้นใช้งาน Next.js",
    description: "ทำความรู้จักกับ Next.js และการสร้างเว็บไซต์",
    author: "Admin",
    date: "10 Sep 2026",
  },
  {
    title: "รู้จัก MongoDB",
    description: "พื้นฐานการจัดเก็บข้อมูลด้วย MongoDB",
    author: "Admin",
    date: "11 Sep 2026",
  },
];

export default function BlogList() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              author={blog.author}
              date={blog.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}